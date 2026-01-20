import React from 'react';
import LayoutB from './LayoutB';
import { Send, QrCode, ArrowLeftRight, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export default function WalletB() {
    return (
        <LayoutB>
            <div className="p-6 space-y-8 pt-8">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-gray-500 text-sm font-medium">Good Afternoon,</p>
                        <h1 className="text-2xl font-bold text-gray-800 mt-0.5">Tobechukwu!</h1>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[#e0e5ec] shadow-neu flex items-center justify-center p-1">
                        <div className="w-full h-full rounded-full overflow-hidden">
                            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Balance */}
                <div className="space-y-4">
                    <div className="bg-[#e0e5ec] rounded-[30px] shadow-neu p-6 text-center relative overflow-hidden">
                        <p className="text-gray-500 font-medium z-10 relative">Total balance</p>
                        <h2 className="text-4xl font-black text-gray-800 tracking-tight my-2 z-10 relative">$23,980.90</h2>
                        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] text-green-600 text-sm font-bold z-10 relative">
                            <ArrowUpRight size={14} />
                            <span>+$4,900 (49.9%)</span>
                        </div>
                    </div>
                </div>

                {/* Actions - Neumorphic Buttons */}
                <div className="flex items-center gap-4">
                    <button className="flex-1 h-14 bg-[#e0e5ec] rounded-[20px] shadow-neu active:shadow-neu-pressed transition-all flex items-center justify-center gap-2 font-bold text-gray-700">
                        <Send size={20} className="text-gray-700" />
                        Send
                    </button>
                    <button className="flex-1 h-14 bg-[#e0e5ec] rounded-[20px] shadow-neu active:shadow-neu-pressed transition-all flex items-center justify-center gap-2 font-bold text-gray-700">
                        <QrCode size={20} className="text-gray-700" />
                        Receive
                    </button>
                    <button className="w-14 h-14 bg-[#e0e5ec] rounded-[20px] shadow-neu active:shadow-neu-pressed transition-all flex items-center justify-center text-gray-700">
                        <ArrowLeftRight size={20} />
                    </button>
                </div>

                {/* List */}
                <div className="space-y-4">
                    <div className="flex justify-between items-end px-2">
                        <h3 className="text-xl font-bold text-gray-800">Activity</h3>
                        <button className="text-sm text-blue-500 font-medium">See all &gt;</button>
                    </div>

                    <div className="space-y-4">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="bg-[#e0e5ec] p-4 rounded-[20px] shadow-neu flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full shadow-neu flex items-center justify-center text-gray-500">
                                    {i === 1 ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-800 text-sm">Transfer - 0x34...</h4>
                                    <p className="text-xs text-gray-500 font-medium mt-0.5">23 min ago</p>
                                </div>
                                <div className="text-right">
                                    <span className={`block font-bold ${i === 1 ? 'text-green-600' : 'text-gray-800'}`}>
                                        {i === 1 ? '+' : '-'}${i === 1 ? '563.17' : '763.17'}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </LayoutB>
    );
}
