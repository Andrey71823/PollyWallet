
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';

export default function Landing() {
    return (
        <div className="min-h-screen bg-grid-dark flex flex-col items-center justify-center p-6">
            <div className="max-w-md w-full space-y-8 bg-white/5 backdrop-blur-xl p-8 rounded-[32px] border border-white/10 shadow-2xl">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white tracking-tight">PolyWallet</h1>
                    <p className="mt-2 text-lg text-gray-400">Design Prototype Review</p>
                </div>

                <div className="grid gap-6">
                    <Link to="/soft-white/wallet" className="group relative block p-6 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <Sparkles size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-900">Variant A</h3>
                                <p className="text-gray-500 text-sm">Ultra-Soft White / High Key</p>
                            </div>
                            <ArrowRight className="text-gray-300 group-hover:text-blue-600 transition-colors" />
                        </div>
                    </Link>

                    <Link to="/neumorph/wallet" className="group relative block p-6 bg-[#e0e5ec] rounded-3xl shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] hover:bg-[#e6ebf2] transition-all">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-2xl text-gray-600 shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]">
                                <Layers size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-800">Variant B</h3>
                                <p className="text-gray-500 text-sm">Soft Neumorphism / Clay</p>
                            </div>
                            <ArrowRight className="text-gray-500" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
