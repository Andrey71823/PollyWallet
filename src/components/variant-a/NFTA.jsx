import React, { useState } from 'react';
import LayoutA from './LayoutA';
import HeaderActionsA from './HeaderActionsA';
import { Gift, TrendingUp, Sparkles, ShieldCheck, Zap, X, Plus, Minus } from 'lucide-react';
import { useLocale } from '../../i18n';
import Logo from '../../assets/LOGO-black.svg';
import GiftBoxNFT from '../../assets/GiftBoxNFT';

export default function NFTA() {
    const { t } = useLocale();
    const [showMintModal, setShowMintModal] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const price = 1000;
    const walletAddress = '0x742d...5f3A';

    return (
        <LayoutA>
            <div className="px-5 pt-2 pb-4 space-y-5">
                {/* Header with Logo */}
                <div className="flex items-center justify-between sticky top-0 z-40 bg-[#F9FAFB]/80 backdrop-blur-xl py-2 -mx-5 px-5 border-b border-gray-100/50">
                    <img src={Logo} alt="PolyWallet" className="h-5 w-auto" />
                    <HeaderActionsA walletAddress={walletAddress} />
                </div>

                {/* NFT Showcase — premium dark */}
                <div className="rounded-[28px] p-1.5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-[0_30px_70px_-24px_rgba(15,23,42,0.6)] ring-1 ring-white/5">
                    <div className="rounded-[22px] h-64 relative overflow-hidden flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_rgba(61,185,245,0.18)_0%,_rgba(15,23,42,0)_60%)]">
                        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                        <div className="relative z-10 w-44 h-44 flex items-center justify-center">
                            <GiftBoxNFT size="100%" />
                        </div>
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
                        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
                            <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-white/80">Genesis</span>
                        </div>
                        <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
                            <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-white/80">#001 / 10K</span>
                        </div>
                    </div>
                </div>

                {/* Title block */}
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-900 text-white text-[10px] font-bold tracking-[0.18em] uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
                            Live Mint
                        </span>
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold tracking-[0.18em] uppercase border border-amber-100">
                            Verified
                        </span>
                    </div>
                    <h2 className="text-3xl font-extrabold text-gray-900 leading-[1.05] tracking-tight">Genesis Cube</h2>
                    <p className="text-gray-500 text-sm mt-2 leading-relaxed">A limited edition collectible granting holders lifetime privileges across the PolyWallet ecosystem.</p>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-3 gap-2.5">
                    <div className="min-w-0 bg-white p-3 rounded-[18px] border border-gray-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.04)]">
                        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">{t('owned', 'Owned')}</p>
                        <p className="truncate text-xl font-black text-gray-900 leading-none">3</p>
                    </div>
                    <div className="min-w-0 bg-white p-3 rounded-[18px] border border-gray-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.04)]">
                        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">Rank</p>
                        <p className="truncate text-base font-black text-blue-600 leading-none">Diamond</p>
                    </div>
                    <div className="min-w-0 bg-white p-3 rounded-[18px] border border-gray-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.04)]">
                        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">Supply</p>
                        <p className="truncate text-xl font-black text-gray-900 leading-none">10K</p>
                    </div>
                </div>

                {/* Price & Progress */}
                <div className="bg-white p-5 rounded-[22px] border border-gray-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.04)]">
                    <div className="flex justify-between gap-3 items-end mb-3">
                        <div className="min-w-0">
                            <p className="text-gray-400 text-[10px] font-bold mb-1 uppercase tracking-[0.18em]">{t('mintPrice', 'Mint Price')}</p>
                            <p className="text-gray-900 text-3xl font-black tracking-tight leading-none">${price.toLocaleString('en-US')}</p>
                        </div>
                        <div className="shrink-0 text-right">
                            <p className="text-emerald-600 text-[10px] font-bold flex items-center gap-1 justify-end mb-1 uppercase tracking-[0.18em]"><Sparkles size={11} /> {t('limited', 'Limited')}</p>
                            <p className="text-gray-700 text-xs font-mono font-bold">3,247 <span className="text-gray-400">/ 10,000</span></p>
                        </div>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-[32%] rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]" />
                    </div>
                </div>

                {/* Mint Button */}
                <button onClick={() => setShowMintModal(true)} className="group relative w-full h-14 bg-gray-900 text-white rounded-[20px] font-bold text-base shadow-[0_12px_40px_-8px_rgba(0,0,0,0.4)] active:scale-[0.98] transition-all flex items-center justify-center gap-3 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    <Gift size={20} strokeWidth={2} />
                    {t('mintNft', 'Mint NFT')}
                </button>

                {/* Privileges */}
                <div>
                    <div className="flex items-baseline justify-between mb-3 px-1">
                        <div className="flex items-baseline gap-2">
                            <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-gray-400">Holder</span>
                            <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">{t('privileges', 'Privileges')}</h3>
                        </div>
                        <span className="text-[10px] font-bold text-gray-400">04</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        {[
                            { icon: Sparkles, label: t('exclusiveAirdropRewards', 'Exclusive Airdrop Rewards'), color: 'text-amber-600 bg-amber-50', num: '01' },
                            { icon: Zap, label: t('upToPointBoost', 'Up to 60% Point Boost'), color: 'text-purple-600 bg-purple-50', num: '02' },
                            { icon: TrendingUp, label: t('apyDailyInterestLabel', '10% APY Daily Interest'), color: 'text-emerald-600 bg-emerald-50', num: '03' },
                            { icon: ShieldCheck, label: t('ambassadorProgramAccess', 'Ambassador Program Access'), color: 'text-blue-600 bg-blue-50', num: '04' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-4 rounded-[20px] border border-gray-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.04)]">
                                <div className="flex items-start justify-between mb-3">
                                    <div className={`w-10 h-10 rounded-[14px] flex items-center justify-center ${item.color}`}>
                                        <item.icon size={18} strokeWidth={2.2} />
                                    </div>
                                    <span className="text-[9px] font-mono font-bold text-gray-300 tracking-wider">{item.num}</span>
                                </div>
                                <p className="font-bold text-gray-900 text-[13px] leading-snug">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mint Modal */}
                {showMintModal && (
                    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center px-0 sm:px-4 pb-0 sm:pb-0">
                        <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-md transition-opacity" onClick={() => setShowMintModal(false)}></div>

                        <div className="bg-white w-full sm:w-[400px] rounded-t-[32px] sm:rounded-[40px] p-6 pb-12 sm:pb-6 shadow-2xl relative z-10 animate-slide-up sm:animate-pop-in">
                            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6 sm:hidden"></div>

                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-black text-gray-900">{t('mintNft', 'Mint NFT')}</h2>
                                <button onClick={() => setShowMintModal(false)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
                                    <X size={18} />
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-gray-50 p-4 rounded-[20px] border border-gray-100">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="font-bold text-gray-500 uppercase text-xs tracking-wider">{t('quantity', 'Quantity')}</span>
                                        <span className="font-black text-gray-900">{quantity} {t('nftLabel', 'NFT')}</span>
                                    </div>
                                    <div className="flex justify-between items-center gap-4">
                                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-gray-50"><Minus size={20} /></button>
                                        <input
                                            type="number"
                                            inputMode="numeric"
                                            min={1}
                                            max={100}
                                            value={quantity}
                                            onChange={(event) => {
                                                const next = Math.max(1, Math.min(100, Number.parseInt(event.target.value || '1', 10)));
                                                setQuantity(Number.isFinite(next) ? next : 1);
                                            }}
                                            className="w-24 bg-transparent text-center text-3xl font-black text-gray-900 outline-none"
                                        />
                                        <button onClick={() => setQuantity(Math.min(100, quantity + 1))} className="w-12 h-12 bg-gray-900 rounded-xl shadow-lg flex items-center justify-center text-white hover:bg-black"><Plus size={20} /></button>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-[20px] border border-gray-100 space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-gray-500">{t('pricePerNft', 'Price per NFT')}</span>
                                        <span className="font-bold text-gray-900">${price.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-gray-500">{t('quantity', 'Quantity')}</span>
                                        <span className="font-bold text-gray-900">{quantity}</span>
                                    </div>
                                    <div className="h-px bg-gray-200"></div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-base font-bold text-gray-700">{t('totalCost', 'Total Cost')}</span>
                                        <span className="text-2xl font-black text-gray-900">${(price * quantity).toLocaleString()}</span>
                                    </div>
                                </div>

                                <button onClick={() => setShowMintModal(false)} className="w-full py-4 bg-blue-600 text-white rounded-[20px] font-bold text-lg shadow-lg hover:bg-blue-700 active:scale-[0.98] transition-all">
                                    {t('confirmMint', 'Confirm Mint')}
                                </button>

                                <button onClick={() => setShowMintModal(false)} className="w-full py-3 bg-transparent text-gray-400 font-bold text-sm hover:text-gray-600">
                                    {t('cancel', 'Cancel')}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </LayoutA>
    );
}
