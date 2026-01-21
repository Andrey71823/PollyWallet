import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wallet, Diamond, Disc, Award, ChevronLeft } from 'lucide-react';
import clsx from 'clsx';

export default function LayoutB({ children }) {
    const location = useLocation();
    const path = location.pathname;

    const NavItem = ({ to, icon: Icon, active }) => (
        <Link to={to} className="flex flex-col items-center justify-center gap-1 group relative w-12 h-12">
            <div className={clsx(
                "absolute inset-0 rounded-[18px] transition-all duration-300",
                active
                    ? "bg-gray-900 shadow-lg scale-100"
                    : "hover:bg-gray-50 scale-90"
            )} />
            <Icon size={24} className={clsx("z-10 transition-colors duration-300", active ? "text-white" : "text-gray-400")} strokeWidth={active ? 2.5 : 2} />
        </Link>
    );

    return (
        <div className="h-[100dvh] w-full bg-[#f0f2f5] text-gray-800 font-sans flex justify-center items-start sm:items-center selection:bg-orange-100 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-b from-[#F3EFE0] via-[#FAFAFA] to-[#FFFFFF] relative flex flex-col sm:h-[844px] sm:max-w-[400px] sm:rounded-[40px] sm:shadow-2xl sm:border-[8px] sm:border-gray-900 sm:ring-2 sm:ring-white/10 sm:overflow-hidden transition-all duration-300">
                <main className="flex-1 overflow-y-auto pb-24 no-scrollbar relative z-10">
                    {children}
                </main>

                {/* Bottom Nav - Docked White Footer */}
                <div className="absolute bottom-0 left-0 right-0 z-50">
                    <div className="bg-white px-8 py-5 flex justify-between items-center rounded-t-[36px] shadow-[0_-10px_40px_rgba(0,0,0,0.04)] border-t border-gray-50 pb-8 sm:pb-5">
                        <NavItem to="/neumorph/wallet" icon={Wallet} label="" active={path.includes('wallet')} />
                        <NavItem to="/neumorph/nft" icon={Disc} label="" active={path.includes('nft')} />
                        <NavItem to="/neumorph/point" icon={Diamond} label="" active={path.includes('point')} />
                        <NavItem to="/neumorph/rank" icon={Award} label="" active={path.includes('rank')} />
                    </div>
                </div>
            </div>
        </div>
    );
}
