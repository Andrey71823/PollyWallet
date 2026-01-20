import React from 'react';
import LayoutA from './LayoutA';
import { Send, QrCode, ArrowLeftRight, ArrowUpRight, ArrowDownLeft, ChevronDown } from 'lucide-react';

export default function WalletA() {
    return (
        <LayoutA>
            <div className="p-6 space-y-8 pt-8 text-center sm:text-left">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-gray-400 text-sm font-medium">Good Afternoon,</p>
                        <h1 className="text-2xl font-bold text-gray-900 mt-0.5">Tobechukwu!</h1>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden shadow-soft">
                        <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Balance Section */}
                <div className="space-y-2">
                    <p className="text-gray-400 font-medium">Total balance</p>
                    <div className="flex items-baseline gap-2">
                        <h2 className="text-5xl font-black text-gray-900 tracking-tight">$23,980.90</h2>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-600 text-sm font-semibold">
                        <ArrowUpRight size={14} />
                        <span>+$4,900 (49.9%)</span>
                    </div>
                </div>

                {/* Actions - White Pills */}
                <div className="flex items-center gap-4">
                    <button className="flex-1 h-14 bg-white rounded-[20px] shadow-soft hover:shadow-soft-hover hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 font-semibold text-gray-900">
                        <Send size={20} className="text-gray-900" />
                        Send
                    </button>
                    <button className="flex-1 h-14 bg-white rounded-[20px] shadow-soft hover:shadow-soft-hover hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 font-semibold text-gray-900">
                        <QrCode size={20} className="text-gray-900" />
                        Receive
                    </button>
                    <button className="w-14 h-14 bg-white rounded-[20px] shadow-soft hover:shadow-soft-hover hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center text-gray-900">
                        <ArrowLeftRight size={20} />
                    </button>
                </div>

                {/* Banner */}
                <div className="relative w-full h-32 bg-black rounded-[24px] overflow-hidden flex items-center px-6 shadow-xl">
                    <div className="relative z-10">
                        <h3 className="text-white font-bold text-lg">Invite a friend <br /> and get $10 in BTC</h3>
                        <button className="mt-3 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-medium border border-white/10">share invite &gt;</button>
                    </div>
                    {/* Abstract Circles/Coins */}
                    <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-80">
                        <div className="absolute right-4 top-4 w-12 h-12 rounded-full border-4 border-gray-700/50 transform rotate-12"></div>
                        <div className="absolute right-16 bottom-2 w-16 h-16 rounded-full border-4 border-gray-600/50"></div>
                        <div className="absolute right-[-10px] bottom-8 w-20 h-20 rounded-full bg-gradient-to-br from-gray-800 to-black opacity-50 blur-sm"></div>
                    </div>
                </div>

                {/* Activity List */}
                <div className="space-y-4">
                    <div className="flex justify-between items-end px-1">
                        <h3 className="text-xl font-bold text-gray-900">Activity</h3>
                        <button className="text-sm text-gray-400 font-medium hover:text-gray-600">See all &gt;</button>
                    </div>

                    <div className="space-y-3">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="group bg-white p-4 rounded-[20px] shadow-soft hover:shadow-soft-hover transition-all flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-gray-100 group-hover:text-gray-600 transition-colors">
                                    {i === 1 ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-900 text-sm">Sent to 0x345...232</h4>
                                    <p className="text-xs text-gray-400 font-medium mt-0.5">23 min ago</p>
                                </div>
                                <div className="text-right">
                                    <span className={`block font-bold ${i === 1 ? 'text-green-500' : 'text-gray-900'}`}>
                                        {i === 1 ? '+' : '-'}${i === 1 ? '563.17' : '763.17'}
                                    </span>
                                    <p className="text-xs text-gray-400">≈299 usdt</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </LayoutA>
    );
}
