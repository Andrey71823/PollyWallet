import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Wallet, Diamond, Disc, Award, ChevronLeft } from 'lucide-react';
import clsx from 'clsx';
import { useLocale } from '../../i18n';

export default function LayoutADesktop({ children }) {
    const { t } = useLocale();
    const [collapsed, setCollapsed] = useState(() => {
        if (typeof window === 'undefined') {
            return false;
        }
        try {
            return window.localStorage.getItem('pw-desktop-sidebar') === 'collapsed';
        } catch (error) {
            return false;
        }
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            try {
                window.localStorage.setItem('pw-desktop-sidebar', collapsed ? 'collapsed' : 'expanded');
            } catch (error) {
                // ignore storage errors
            }
        }
    }, [collapsed]);

    const navItems = [
        { to: '/desktop/wallet', icon: Wallet, label: t('navWallet', 'Wallet') },
        { to: '/desktop/nft', icon: Disc, label: t('navNft', 'NFT') },
        { to: '/desktop/point', icon: Diamond, label: t('navPoint', 'Point') },
        { to: '/desktop/rank', icon: Award, label: t('navRank', 'Rank') },
    ];

    return (
        <div className="min-h-screen dashboard-bg text-slate-900 font-desktop">
            <div className="flex min-h-screen">
                <aside
                    className={clsx(
                        'sticky top-0 h-screen bg-white/75 backdrop-blur-xl border-r border-[#E4E9F0] shadow-[0_8px_20px_rgba(15,23,42,0.05)] flex flex-col transition-all duration-300',
                        collapsed ? 'w-20' : 'w-64'
                    )}
                >
                    <div className="flex items-center justify-between px-4 py-6">
                        <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-[18px] bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center font-semibold shadow-[0_10px_24px_rgba(37,99,235,0.25)]">
                                PW
                            </div>
                            {!collapsed && (
                                <div>
                                    <p className="text-sm font-semibold tracking-tight">PolyWallet</p>
                                    <p className="text-[11px] text-slate-400 font-medium">Desktop</p>
                                </div>
                            )}
                        </div>
                        <button
                            type="button"
                            onClick={() => setCollapsed((prev) => !prev)}
                            className="w-9 h-9 rounded-full bg-white/90 text-slate-400 hover:text-slate-900 flex items-center justify-center transition-colors border border-[#E6EAF0]"
                            aria-label="Toggle sidebar"
                        >
                            <ChevronLeft size={16} className={clsx('transition-transform', collapsed && 'rotate-180')} />
                        </button>
                    </div>

                    <nav className="px-3 flex-1 space-y-2">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) => clsx(
                                    'group flex items-center gap-3 rounded-xl px-3 py-2.5 font-semibold transition-all',
                                    collapsed ? 'justify-center' : 'justify-start',
                                    isActive
                                        ? 'bg-[#1F2432] text-white shadow-[0_10px_24px_rgba(15,23,42,0.18)]'
                                        : 'text-slate-500 hover:text-slate-900 hover:bg-white/80'
                                )}
                            >
                                {({ isActive }) => (
                                    <>
                                        <div className={clsx(
                                            'w-10 h-10 rounded-[14px] flex items-center justify-center transition-all',
                                            isActive ? 'bg-white/10 text-white' : 'bg-white/90 text-slate-500 group-hover:text-slate-900 border border-[#E6EAF0]'
                                        )}>
                                            <item.icon size={20} />
                                        </div>
                                        {!collapsed && <span className="text-sm">{item.label}</span>}
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="px-4 pb-6">
                        <button
                            type="button"
                            onClick={() => setCollapsed((prev) => !prev)}
                            className={clsx(
                                'w-full rounded-[14px] border border-[#E6EAF0] bg-white/80 text-slate-500 hover:text-slate-900 flex items-center gap-3 px-3 py-2 transition-colors',
                                collapsed && 'justify-center'
                            )}
                        >
                            <ChevronLeft size={18} className={clsx('transition-transform', collapsed && 'rotate-180')} />
                            {!collapsed && <span className="text-xs font-semibold">Collapse menu</span>}
                        </button>
                    </div>
                </aside>

                <main className="flex-1">
                    <div className="mx-auto w-full max-w-[1440px] px-10 py-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
