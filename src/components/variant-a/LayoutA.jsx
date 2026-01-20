import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wallet, Diamond, Disc, Award } from 'lucide-react';
import clsx from 'clsx';

export default function LayoutA({ children }) {
    const location = useLocation();
    const path = location.pathname;

    const NavItem = ({ to, icon: Icon, label, active }) => (
        <Link to={to} className="flex flex-col items-center gap-1 group relative p-2">
            <div className={clsx(
                "p-1.5 rounded-xl transition-all duration-300",
                active ? "text-gray-900 bg-gray-100" : "text-gray-400 hover:text-gray-600"
            )}>
                <Icon size={24} strokeWidth={active ? 2.5 : 2} />
            </div>
            <span className={clsx(
                "text-[10px] font-medium transition-colors",
                active ? "text-gray-900" : "text-gray-400"
            )}>
                {label}
            </span>
            {active && (
                <div className="absolute -top-2 w-1 h-1 bg-black rounded-full" />
            )}
        </Link>
    );

    return (
        <div className="min-h-screen bg-[#F9FAFB] text-gray-900 font-sans flex justify-center selection:bg-gray-200">
            <div className="w-full max-w-[420px] bg-[#F9FAFB] relative flex flex-col shadow-2xl min-h-screen">
                <main className="flex-1 overflow-y-auto pb-24 no-scrollbar">
                    {children}
                </main>

                {/* Bottom Nav - Floating Pill Style */}
                <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-[380px] z-50">
                    <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] px-6 py-4 flex justify-between items-center backdrop-blur-xl bg-white/90 border border-white/20">
                        <NavItem to="/soft-white/wallet" icon={Wallet} label="Wallet" active={path.includes('wallet')} />
                        <NavItem to="/soft-white/nft" icon={Disc} label="NFT" active={path.includes('nft')} />
                        <NavItem to="/soft-white/point" icon={Diamond} label="Point" active={false} />
                        <NavItem to="/soft-white/rank" icon={Award} label="Rank" active={false} />
                    </div>
                </div>
            </div>
        </div>
    );
}
