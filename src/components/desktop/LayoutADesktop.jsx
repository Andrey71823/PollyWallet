import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Wallet, Diamond, Disc, Award, ChevronLeft } from 'lucide-react';
import clsx from 'clsx';
import { useLocale } from '../../i18n';
import lumaBg from '../../assets/Luma2016.jpeg';

export default function LayoutADesktop({ children }) {
    const { t } = useLocale();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

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
        <div className="min-h-screen w-full relative overflow-hidden font-desktop flex justify-center items-center p-6 bg-[#F2F4F7]">
            {/* Background: LightGlow - 08 style Gradient (50% opacity) */}
            {/* Background: Luma Effect Image */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                    src={lumaBg}
                    alt="Background"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>

            {/* Mouse Spotlight Effect */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-overlay"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.8), transparent 40%)`
                }}
            ></div>

            {/* 8px Glass Border Wrapper */}
            <div className="relative z-10 w-full max-w-[1440px] h-[calc(100vh-48px)] bg-white/40 backdrop-blur-xl rounded-[32px] p-[8px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/60">

                {/* Main Glass/White Container */}
                <div className="w-full h-full bg-white/80 rounded-[24px] overflow-hidden flex shadow-inner relative z-10">
                    <aside
                        className={clsx(
                            'bg-white/50 backdrop-blur-md border-r border-[#E4E9F0] flex flex-col transition-all duration-300',
                            collapsed ? 'w-20' : 'w-64'
                        )}
                    >
                        <div className="flex items-center justify-between px-4 py-6">
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-[18px] bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center font-semibold shadow-[0_4px_12px_rgba(37,99,235,0.15)]">
                                    PW
                                </div>
                                {!collapsed && (
                                    <div>
                                        <p className="text-sm font-semibold tracking-tight text-gray-900">PolyWallet</p>
                                        <p className="text-[11px] text-slate-400 font-medium">Desktop</p>
                                    </div>
                                )}
                            </div>
                            <button
                                type="button"
                                onClick={() => setCollapsed((prev) => !prev)}
                                className="w-9 h-9 rounded-full bg-white text-slate-400 hover:text-slate-900 flex items-center justify-center transition-colors border border-gray-100 shadow-sm"
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
                                        'group flex items-center gap-3 rounded-[20px] px-3 py-2.5 font-semibold transition-all',
                                        collapsed ? 'justify-center' : 'justify-start',
                                        isActive
                                            ? 'bg-[#1F2432] text-white shadow-[0_4px_12px_rgba(15,23,42,0.1)]'
                                            : 'text-slate-500 hover:text-slate-900 hover:bg-white/60'
                                    )}
                                >
                                    {({ isActive }) => (
                                        <>
                                            <div className={clsx(
                                                'w-10 h-10 rounded-[14px] flex items-center justify-center transition-all',
                                                isActive ? 'bg-white/10 text-white' : 'bg-white/80 text-slate-500 group-hover:text-slate-900 border border-[#E6EAF0]'
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
                                    'w-full rounded-[14px] border border-[#E6EAF0] bg-white/60 text-slate-500 hover:text-slate-900 flex items-center gap-3 px-3 py-2 transition-colors',
                                    collapsed && 'justify-center'
                                )}
                            >
                                <ChevronLeft size={18} className={clsx('transition-transform', collapsed && 'rotate-180')} />
                                {!collapsed && <span className="text-xs font-semibold">Collapse menu</span>}
                            </button>
                        </div>
                    </aside>

                    <main className="flex-1 overflow-y-auto no-scrollbar bg-[#F9FAFB]/60 relative">
                        <div className="w-full px-10 py-8">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
