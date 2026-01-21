import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Globe, ChevronDown } from 'lucide-react';

export default function HeaderB({ title = "PolyWallet" }) {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between items-center px-1 mb-6">
            <button
                onClick={() => navigate(-1)}
                className="w-11 h-11 bg-white rounded-[16px] flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.04)] border border-gray-50 text-gray-700 hover:scale-105 active:scale-95 transition-all"
            >
                <ChevronLeft size={22} strokeWidth={2.5} />
            </button>

            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-[10px] shadow-md shadow-blue-200">PW</div>
                <span className="font-black text-xl text-gray-900 tracking-tight">{title}</span>
            </div>

            <div className="flex items-center gap-2">
                <button className="w-11 h-11 bg-white rounded-[16px] flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.04)] border border-gray-50 text-gray-400 hover:text-blue-500 transition-colors">
                    <Globe size={20} strokeWidth={2} />
                </button>
                <div className="bg-[#1A1D1F] text-white pl-3.5 pr-2.5 py-3 rounded-[16px] flex items-center gap-2 shadow-[0_10px_20px_rgba(0,0,0,0.15)] text-[11px] font-bold tracking-wide">
                    <span>0x742d...5f3A</span>
                    <ChevronDown size={14} className="opacity-50" />
                </div>
            </div>
        </div>
    );
}
