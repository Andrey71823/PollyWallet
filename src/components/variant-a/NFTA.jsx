import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LayoutA from './LayoutA';
import { Box, TrendingUp, Sparkles, ChevronLeft, ShieldCheck, Zap, Layers, X, Plus, Minus } from 'lucide-react';

export default function NFTA() {
    const [showMintModal, setShowMintModal] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const price = 1000;

    return (
        <LayoutA>
            <div className="p-6 space-y-6 pb-24">
                {/* Header - Sticky Clean */}
                <div className="flex items-center gap-4 sticky top-0 z-40 bg-[#F9FAFB]/80 backdrop-blur-xl py-3 -mx-6 px-6 border-b border-gray-100/50">
                    <Link to="/soft-white/wallet" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all hover:scale-105">
                        <ChevronLeft size={22} className="relative right-0.5" />
                    </Link>
                    <h1 className="text-xl font-bold text-gray-900 tracking-tight">NFT Mint</h1>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Poly NFT Box */}
                    <div className="col-span-2 bg-white rounded-[32px] p-1 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden group relative">
                        <div className="bg-gray-50 rounded-[28px] p-6 h-72 relative overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-100/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

                            <div className="flex justify-between items-start z-10">
                                <div className="bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-gray-100 flex items-center gap-1.5">
                                    <Sparkles size={12} className="text-blue-600" />
                                    <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">Diamond Rank</span>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400">Price</p>
                                    <p className="text-lg font-black text-gray-900">$1,000</p>
                                </div>
                            </div>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 group-hover:scale-105 transition-transform duration-500">
                                <div className="w-24 h-24 bg-white rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex items-center justify-center border border-white/50 relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-[24px]"></div>
                                    <Box size={40} className="text-gray-900 relative z-10" strokeWidth={1.5} />
                                </div>
                            </div>

                            <div className="z-10 text-center mt-auto">
                                <h2 className="text-2xl font-black text-gray-900 tracking-tight">POLY BOX</h2>
                                <p className="text-xs font-medium text-gray-400">Edition 1</p>
                            </div>
                        </div>
                    </div>

                    {/* Description Text - RESTORED */}
                    <div className="col-span-2 px-2">
                        <h2 className="text-gray-900 text-xl font-bold mb-2">PolyWallet NFT</h2>
                        <p className="text-gray-500 text-sm leading-relaxed font-medium">
                            Mint your NFT to unlock rewards, daily interest, and affiliate benefits.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="bg-white p-5 rounded-[28px] shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between">
                        <div className="w-10 h-10 rounded-2xl bg-green-50 flex items-center justify-center mb-2 text-green-600">
                            <TrendingUp size={20} />
                        </div>
                        <div>
                            <p className="text-2xl font-black text-gray-900 tracking-tight">10%</p>
                            <p className="text-xs font-bold text-gray-400">APY Daily Interest</p>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-[28px] shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between">
                        <div className="w-10 h-10 rounded-2xl bg-purple-50 flex items-center justify-center mb-2 text-purple-600">
                            <Zap size={20} />
                        </div>
                        <div>
                            <p className="text-2xl font-black text-gray-900 tracking-tight">50%</p>
                            <p className="text-xs font-bold text-gray-400">Point Boost</p>
                        </div>
                    </div>

                    {/* Owned Status */}
                    <div className="col-span-2 bg-white p-5 rounded-[28px] shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-gray-900 text-white flex items-center justify-center shadow-lg shadow-gray-200">
                                <Layers size={22} />
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 text-base">Owned</p>
                                <p className="text-xs text-gray-500 font-medium">NFTs</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="text-3xl font-black text-gray-900">3</span>
                            <span className="text-sm font-bold text-gray-400 ml-1">NFTs</span>
                        </div>
                    </div>

                    {/* Benefits List */}
                    <div className="col-span-2 bg-white rounded-[32px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 space-y-5">
                        <div className="flex items-center justify-between">
                            <h3 className="font-bold text-gray-900 text-lg">Privileges</h3>
                            <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded-lg">PRO</span>
                        </div>

                        <div className="space-y-4">
                            {[
                                { icon: Sparkles, label: 'Exclusive Airdrop Rewards', desc: 'Exclusive airdrop rewards.', color: 'text-yellow-600 bg-yellow-50' },
                                { icon: Zap, label: 'Up to 60% Point Boost', desc: 'Up to 60% point boost.', color: 'text-purple-600 bg-purple-50' },
                                { icon: TrendingUp, label: '10% APY Daily Interest', desc: '10% APY daily interest.', color: 'text-green-600 bg-green-50' },
                                { icon: ShieldCheck, label: 'Ambassador Program Access', desc: 'Ambassador program access.', color: 'text-blue-600 bg-blue-50' }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start group">
                                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${item.color}`}>
                                        <item.icon size={20} />
                                    </div>
                                    <div className="pt-0.5">
                                        <p className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">{item.label}</p>
                                        <p className="text-xs text-gray-400 leading-relaxed mt-0.5 font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Progress Bar & Price Section - RESTORED */}
                    <div className="col-span-2 pt-2">
                        <div className="flex justify-between items-end mb-2 px-1">
                            <div>
                                <p className="text-gray-400 text-xs font-bold mb-0.5 uppercase tracking-wide">Mint Price</p>
                                <p className="text-gray-900 text-2xl font-black tracking-tight">$1,000</p>
                            </div>
                            <div className="text-right">
                                <p className="text-green-600 text-xs font-bold flex items-center gap-1 justify-end mb-1"><Sparkles size={10} /> Limited</p>
                                <p className="text-gray-400 text-xs font-mono font-bold">3,247 / 10,000</p>
                            </div>
                        </div>

                        <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden mb-6">
                            <div className="h-full bg-blue-600 w-[32%] rounded-full shadow-[0_0_10px_rgba(37,99,235,0.3)]"></div>
                        </div>

                        {/* Mint Button - NOW STATIC IN FLOW */}
                        <button onClick={() => setShowMintModal(true)} className="w-full h-14 bg-gray-900 text-white rounded-[20px] font-bold text-lg shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:bg-black hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                            <Box size={20} strokeWidth={2} />
                            Mint NFT
                        </button>
                    </div>
                </div>

                {/* Mint Modal */}
                {showMintModal && (
                    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center px-0 sm:px-4 pb-0 sm:pb-0">
                        <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-md transition-opacity" onClick={() => setShowMintModal(false)}></div>

                        <div className="bg-white w-full sm:w-[400px] rounded-t-[32px] sm:rounded-[40px] p-6 pb-12 sm:pb-6 shadow-2xl relative z-10 animate-slide-up sm:animate-pop-in">
                            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6 sm:hidden"></div>

                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-black text-gray-900">Mint NFT</h2>
                                <button onClick={() => setShowMintModal(false)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
                                    <X size={18} />
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-gray-50 p-4 rounded-[20px] border border-gray-100">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="font-bold text-gray-500 uppercase text-xs tracking-wider">Quantity</span>
                                        <span className="font-black text-gray-900">{quantity} NFT</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-gray-50"><Minus size={20} /></button>
                                        <span className="text-3xl font-black text-gray-900">{quantity}</span>
                                        <button onClick={() => setQuantity(Math.min(10, quantity + 1))} className="w-12 h-12 bg-gray-900 rounded-xl shadow-lg flex items-center justify-center text-white hover:bg-black"><Plus size={20} /></button>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-[20px] border border-gray-100 space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-gray-500">Price per NFT</span>
                                        <span className="font-bold text-gray-900">${price.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-gray-500">Quantity</span>
                                        <span className="font-bold text-gray-900">{quantity}</span>
                                    </div>
                                    <div className="h-px bg-gray-200"></div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-base font-bold text-gray-700">Total Cost</span>
                                        <span className="text-2xl font-black text-gray-900">${(price * quantity).toLocaleString()}</span>
                                    </div>
                                </div>

                                <button onClick={() => setShowMintModal(false)} className="w-full py-4 bg-blue-600 text-white rounded-[20px] font-bold text-lg shadow-lg hover:bg-blue-700 active:scale-[0.98] transition-all">
                                    Confirm Mint
                                </button>

                                <button onClick={() => setShowMintModal(false)} className="w-full py-3 bg-transparent text-gray-400 font-bold text-sm hover:text-gray-600">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </LayoutA>
    );
}
