import React from 'react';
import LayoutB from './LayoutB';
import { ArrowLeft } from 'lucide-react';

export default function NFTB() {
    const tabs = ['All', 'Art', 'Gaming', 'Music', 'Virtual'];

    return (
        <LayoutB>
            <div className="sticky top-0 bg-[#e0e5ec]/90 backdrop-blur-md z-40 px-6 pt-12 pb-4 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <button className="w-10 h-10 bg-[#e0e5ec] rounded-full shadow-neu active:shadow-neu-pressed flex items-center justify-center text-gray-600">
                        <ArrowLeft size={20} />
                    </button>
                    <h1 className="text-lg font-bold text-gray-800">My Collection</h1>
                    <div className="w-10 h-10 rounded-full shadow-neu p-0.5 bg-[#e0e5ec]">
                        <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full rounded-full object-cover" />
                    </div>
                </div>

                {/* Filter Pills */}
                <div className="flex gap-4 overflow-x-auto no-scrollbar py-2 px-1">
                    {tabs.map((tab, i) => (
                        <button key={tab} className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${i === 0
                                ? 'shadow-neu-pressed text-blue-600'
                                : 'shadow-neu text-gray-500 active:shadow-neu-pressed'
                            }`}>
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="px-6 pb-20">
                <div className="grid grid-cols-2 gap-5">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="bg-[#e0e5ec] p-3 rounded-[24px] shadow-neu group">
                            <div className="aspect-square rounded-[18px] shadow-neu-pressed p-1 mb-3 bg-[#e0e5ec]">
                                <img
                                    src={`https://picsum.photos/400/400?random=${item + 10}`}
                                    alt="NFT"
                                    className="w-full h-full object-cover rounded-[14px] opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <div className="px-1">
                                <h3 className="font-bold text-gray-800 text-sm">Punk #{400 + item}</h3>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-xs font-bold text-blue-600">4.2 ETH</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </LayoutB>
    );
}
