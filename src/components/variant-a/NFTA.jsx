import React from 'react';
import LayoutA from './LayoutA';
import { Search, SlidersHorizontal, ArrowLeft } from 'lucide-react';

export default function NFTA() {
    const tabs = ['All', 'Art', 'Gaming', 'Music', 'Virtual'];

    return (
        <LayoutA>
            <div className="sticky top-0 bg-[#F9FAFB]/90 backdrop-blur-md z-40 px-6 pt-12 pb-4 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <button className="w-10 h-10 bg-white rounded-full shadow-soft flex items-center justify-center text-gray-600">
                        <ArrowLeft size={20} />
                    </button>
                    <h1 className="text-lg font-bold text-gray-900">My Collection</h1>
                    <button className="w-10 h-10 bg-transparent flex items-center justify-center text-gray-900">
                        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    </button>
                </div>

                {/* Filter Pills */}
                <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                    {tabs.map((tab, i) => (
                        <button key={tab} className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${i === 0
                                ? 'bg-black text-white shadow-lg'
                                : 'bg-white text-gray-500 shadow-soft hover:text-gray-900'
                            }`}>
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="px-6 pb-20">
                <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="bg-white p-3 rounded-[24px] shadow-soft hover:shadow-soft-hover transition-all group">
                            <div className="aspect-square rounded-[18px] bg-gray-100 overflow-hidden mb-3 relative">
                                <img
                                    src={`https://picsum.photos/400/400?random=${item}`}
                                    alt="NFT"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="px-1">
                                <h3 className="font-bold text-gray-900 text-sm">Cosmic #{1020 + item}</h3>
                                <div className="flex justify-between items-center mt-1">
                                    <span className="text-xs font-bold text-black">1.5 ETH</span>
                                    <span className="text-[10px] text-gray-400">Floor: 1.45</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </LayoutA>
    );
}
