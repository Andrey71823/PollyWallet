import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Wallet, Diamond, Disc, Award } from 'lucide-react';
import clsx from 'clsx';
import { useLocale } from '../../i18n';
import LogoBlack from '../../assets/LOGO-black.svg';
import LogoWhite from '../../assets/LOGO.svg';

export default function LayoutADesktop({ children }) {
    const { t } = useLocale();

    // Responsive Guard: Redirect to Mobile if screen is too small (< 768px)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                // Redirect to mobile wallet if screen shrinks
                // Using window.location to ensure clean state or useNavigate
                // But since we are inside Router, use navigate.
                // We need to import navigate first.
            }
        };

        // Check on mount
        if (window.innerWidth < 768) {
            // We can't use navigate here easily without the hook.
            // Let's add the hook.
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Better implementation with Hook:
    const navigate = useNavigate();

    useEffect(() => {
        const checkSize = () => {
            if (window.innerWidth < 768) {
                navigate('/soft-white/wallet', { replace: true });
            }
        };

        checkSize(); // Check on mount
        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize);
    }, [navigate]);

    const navItems = [
        { to: '/desktop/wallet', icon: Wallet, label: t('navWallet', 'Wallet') },
        { to: '/desktop/nft', icon: Disc, label: t('navNft', 'NFT') },
        { to: '/desktop/point', icon: Diamond, label: t('navPoint', 'Point') },
        { to: '/desktop/rank', icon: Award, label: t('navRank', 'Rank') },
    ];

    return (
        <div className="min-h-screen w-full relative font-sans flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 xl:px-24 py-6 lg:py-11">
            {/* SVG gradient defs for nav icons */}
            <svg width="0" height="0" className="absolute" aria-hidden>
                <defs>
                    <linearGradient id="nav-icon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#60A5FA" />
                        <stop offset="50%" stopColor="#A78BFA" />
                        <stop offset="100%" stopColor="#22D3EE" />
                    </linearGradient>
                </defs>
            </svg>
            {/* Floating logo above the device frame */}
            <div className="relative z-20 mb-6 flex items-center justify-center">
                <div className="px-6 py-2.5 rounded-full bg-black/60 backdrop-blur-md ring-1 ring-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]">
                    <img src={LogoWhite} alt="PolyWallet" className="h-7 w-auto" />
                </div>
            </div>

            {/* Outer device frame with luxury gradient border */}
            <div className="relative z-10 w-full max-w-[1500px] min-h-[calc(100vh-140px)] lg:h-[calc(100vh-160px)] rounded-[38px] p-[1.5px] bg-gradient-to-br from-white/25 via-white/5 to-blue-400/20 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
              <div className="relative w-full h-full bg-[#0A0A0B] rounded-[36px] p-2 sm:p-3 flex">

                {/* Sidebar (icon rail outside white card) */}
                <aside className="relative w-[64px] lg:w-[88px] flex flex-col items-center py-4 lg:py-6 shrink-0">
                    {/* Nav icons */}
                    <nav className="flex-1 flex flex-col items-center justify-center gap-2 w-full">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    clsx(
                                    'relative flex items-center justify-center w-full h-[54px] transition-all duration-300 group',
                                        isActive
                                            ? 'text-gray-900 [&_svg]:!stroke-current'
                                            : 'text-gray-900 [&_svg]:[stroke:url(#nav-icon-grad)]'
                                    )
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {isActive && (
                                            <>
                                                {/* Active tab shape from the reference */}
                                                <span className="absolute inset-y-0 left-3 lg:left-7 right-0 bg-white rounded-l-[22px]" />
                                                {/* Top black square wrapper with the white concave cut */}
                                                <span aria-hidden className="absolute right-0 -top-5 w-5 h-5 bg-white">
                                                    <span className="block w-full h-full bg-[#0A0A0B] rounded-br-[20px]" />
                                                </span>
                                                {/* Bottom black square wrapper with the white concave cut */}
                                                <span aria-hidden className="absolute right-0 -bottom-5 w-5 h-5 bg-white">
                                                    <span className="block w-full h-full bg-[#0A0A0B] rounded-tr-[20px]" />
                                                </span>
                                            </>
                                        )}
                                        <item.icon
                                            size={20}
                                            strokeWidth={2}
                                            className="relative z-10 transition-all duration-300 group-hover:scale-110 group-active:scale-95 group-hover:drop-shadow-[0_0_6px_rgba(167,139,250,0.1)]"
                                        />
                                        {/* Tooltip */}
                                        <span className="pointer-events-none absolute left-full ml-3 px-2.5 py-1 rounded-md bg-white text-gray-900 text-xs font-semibold shadow-lg opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition whitespace-nowrap z-20">
                                            {item.label}
                                        </span>
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </nav>
                </aside>

                {/* Main white card */}
                <main className="flex-1 bg-white rounded-[24px] overflow-hidden relative">
                    <div className="h-full overflow-y-auto no-scrollbar">
                        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 pb-16 lg:pb-24">
                            {children}
                        </div>
                    </div>
                </main>
              </div>
            </div>
        </div>
    );
}
