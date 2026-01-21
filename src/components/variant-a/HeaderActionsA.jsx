import React, { useEffect, useRef, useState } from 'react';
import { Globe, Wallet, Power, Check } from 'lucide-react';
import { useLocale, languageOptions } from '../../i18n';

export default function HeaderActionsA({ walletAddress = '0x742d...5f3A', avatarSrc }) {
    const { locale, setLocale, t } = useLocale();
    const [showWalletMenu, setShowWalletMenu] = useState(false);
    const [showLangMenu, setShowLangMenu] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClick = (event) => {
            if (!containerRef.current?.contains(event.target)) {
                setShowWalletMenu(false);
                setShowLangMenu(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    const toggleWallet = () => {
        setShowWalletMenu((prev) => !prev);
        setShowLangMenu(false);
    };

    const toggleLanguage = () => {
        setShowLangMenu((prev) => !prev);
        setShowWalletMenu(false);
    };

    const handleDisconnect = () => {
        setShowWalletMenu(false);
    };

    return (
        <div ref={containerRef} className="relative flex items-center gap-2">
            <button
                type="button"
                onClick={toggleLanguage}
                aria-label={t('language', 'Language')}
                className="w-9 h-9 rounded-full bg-white shadow-soft border border-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors"
            >
                <Globe size={18} />
            </button>

            <button
                type="button"
                onClick={toggleWallet}
                aria-haspopup="true"
                aria-expanded={showWalletMenu}
                className="w-10 h-10 rounded-full bg-white shadow-soft p-0.5 border border-gray-100"
            >
                <img
                    src={avatarSrc}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                />
            </button>

            {showWalletMenu && (
                <div className="absolute right-0 top-12 z-50 w-64 rounded-[18px] bg-[#111827] text-white shadow-2xl border border-white/10 overflow-hidden">
                    <div className="px-4 py-3 border-b border-white/10">
                        <p className="text-xs text-white/60 font-bold uppercase tracking-wider">{t('connectedWallet', 'Connected Wallet')}</p>
                        <div className="mt-2 flex items-center gap-2 text-sm font-semibold">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                <Wallet size={16} />
                            </div>
                            <span>{walletAddress}</span>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={handleDisconnect}
                        className="w-full px-4 py-3 flex items-center gap-2 text-sm font-semibold text-red-400 hover:bg-white/5 transition-colors"
                    >
                        <Power size={16} />
                        {t('disconnect', 'Disconnect')}
                    </button>
                </div>
            )}

            {showLangMenu && (
                <div className="absolute right-0 top-12 z-50 w-60 rounded-[18px] bg-[#111827] text-white shadow-2xl border border-white/10 overflow-hidden">
                    <div className="px-4 py-3 border-b border-white/10">
                        <p className="text-xs text-white/60 font-bold uppercase tracking-wider">{t('language', 'Language')}</p>
                    </div>
                    <div className="py-2">
                        {languageOptions.map((language) => (
                            <button
                                key={language.code}
                                type="button"
                                onClick={() => setLocale(language.code)}
                                className="w-full px-4 py-2.5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                            >
                                <div>
                                    <p className="text-sm font-semibold">{language.label}</p>
                                    <p className="text-xs text-white/50">{language.native}</p>
                                </div>
                                {locale === language.code && <Check size={16} className="text-green-400" />}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
