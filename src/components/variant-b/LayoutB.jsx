import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wallet, Diamond, Disc, Award, ChevronLeft } from 'lucide-react';
import clsx from 'clsx';

export default function LayoutB({ children }) {
    const location = useLocation();
    const path = location.pathname;

    const NavItem = ({ to, icon: Icon, label, active }) => (
        <Link to={to} className="flex flex-col items-center justify-center gap-1 group relative w-12 h-12">
            <div className={clsx(
                "absolute inset-0 rounded-xl transition-all duration-300",
                active
                    ? "shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] bg-[#e0e5ec]"
                    : "hover:bg-[#e6ebf2]"
            )} />
            <Icon size={20} className={active ? "text-blue-500 z-10" : "text-gray-500 z-10"} strokeWidth={active ? 2.5 : 2} />
        </Link>
    );

    return (
        <div className="min-h-screen bg-[#e0e5ec] text-gray-800 font-sans flex justify-center selection:bg-blue-100/50">
            <div className="w-full max-w-[420px] bg-[#e0e5ec] relative flex flex-col shadow-2xl min-h-screen">
                <main className="flex-1 overflow-y-auto pb-24 no-scrollbar">
                    {children}
                </main>

                {/* Bottom Nav - Neumorphic Bar */}
                <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[420px] z-50">
                    <div className="bg-[#e0e5ec] px-8 py-5 flex justify-between items-center rounded-t-[30px] shadow-[0_-10px_20px_rgba(255,255,255,0.7)]">
                        <NavItem to="/neumorph/wallet" icon={Wallet} label="Wallet" active={path.includes('wallet')} />
                        <NavItem to="/neumorph/nft" icon={Disc} label="NFT" active={path.includes('nft')} />
                        <NavItem to="/neumorph/point" icon={Diamond} label="Point" active={false} />
                        <NavItem to="/neumorph/rank" icon={Award} label="Rank" active={false} />
                    </div>
                </div>
            </div>
        </div>
    );
}
