import React, { useState } from 'react';
import LayoutADesktop from './LayoutADesktop';
import HeaderActionsA from '../variant-a/HeaderActionsA';
import { Gift, TrendingUp, Sparkles, ShieldCheck, Zap, X, Plus, Minus } from 'lucide-react';
import { useLocale } from '../../i18n';
import GiftBoxNFT from '../../assets/GiftBoxNFT';

export default function NFTADesktop() {
    const { t } = useLocale();
    const [showMintModal, setShowMintModal] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const price = 1000;
    const walletAddress = '0x742d...5f3A';

    return (
        <LayoutADesktop>
            <div className="space-y-6">
                {/* Header with Page Title */}
                <div className="flex items-center justify-between gap-4">
                    <div className="flex min-w-0 items-baseline gap-3">
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">Collection</span>
                        <h1 className="font-desktop text-2xl font-extrabold text-gray-900 tracking-tight">
                            PolyWallet <span className="font-light text-gray-400">/ Genesis</span>
                        </h1>
                    </div>
                    <HeaderActionsA walletAddress={walletAddress} />
                </div>

                {/* 2-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.08fr)_minmax(390px,0.92fr)] gap-5">
                    {/* Left Column (Image) - 7 cols */}
                    <div className="min-w-0">
                        <div className="rounded-[34px] p-2 h-full min-h-[500px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-[0_34px_80px_-24px_rgba(15,23,42,0.62)] ring-1 ring-white/5">
                            <div className="rounded-[26px] h-full w-full relative overflow-hidden flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_rgba(61,185,245,0.16)_0%,_rgba(15,23,42,0)_58%)]">
                                {/* Subtle grid */}
                                <div
                                    className="absolute inset-0 opacity-[0.07]"
                                    style={{
                                        backgroundImage:
                                            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
                                        backgroundSize: '40px 40px',
                                    }}
                                />
                                {/* Logo */}
                                <div className="relative z-10 flex h-[min(46vh,300px)] w-[min(46vh,300px)] max-h-[62%] max-w-[62%] items-center justify-center overflow-hidden">
                                    <GiftBoxNFT size="100%" />
                                </div>

                                {/* Floor reflection bar */}
                                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-72 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"></div>

                                {/* Edition tag */}
                                <div className="absolute top-5 left-5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse"></span>
                                    <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/80">Genesis Edition</span>
                                </div>
                                <div className="absolute top-5 right-5 z-20 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
                                    <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/80">#001 / 10K</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Info) - 5 cols */}
                    <div className="min-w-0 flex flex-col justify-between">
                        <div className="flex flex-col gap-4">
                            {/* Title block */}
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-900 text-white text-[10px] font-bold tracking-[0.18em] uppercase">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-300"></span>
                                        Live Mint
                                    </span>
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold tracking-[0.18em] uppercase border border-amber-100">
                                        Verified
                                    </span>
                                </div>
                                <h2 className="font-desktop text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-gray-900 leading-[1.05] tracking-tight">
                                    Genesis Cube
                                </h2>
                                <p className="text-gray-500 text-sm mt-2 max-w-[34rem] leading-relaxed">A limited edition collectible granting holders lifetime privileges across the PolyWallet ecosystem.</p>
                            </div>

                            {/* Stats grid */}
                            <div className="grid grid-cols-3 gap-3">
                                <div className="min-w-0 bg-white p-4 rounded-[18px] border border-gray-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.04)]">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">{t('owned', 'Owned')}</p>
                                    <p className="truncate text-[26px] font-black text-gray-900 leading-none">3</p>
                                </div>
                                <div className="min-w-0 bg-white p-4 rounded-[18px] border border-gray-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.04)]">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Rank</p>
                                    <p className="truncate text-[22px] font-black text-blue-600 leading-none">Diamond</p>
                                </div>
                                <div className="min-w-0 bg-white p-4 rounded-[18px] border border-gray-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.04)]">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Supply</p>
                                    <p className="truncate text-[26px] font-black text-gray-900 leading-none">10K</p>
                                </div>
                            </div>

                            {/* Price & Progress */}
                            <div className="bg-white p-5 rounded-[22px] border border-gray-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.04)]">
                                <div className="flex min-w-0 justify-between gap-4 items-end mb-4">
                                    <div className="min-w-0">
                                        <p className="text-gray-400 text-[10px] font-bold mb-1 uppercase tracking-[0.18em]">{t('mintPrice', 'Mint Price')}</p>
                                        <p className="text-gray-900 text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight leading-none break-all">${price.toLocaleString('en-US')}</p>
                                    </div>
                                    <div className="shrink-0 text-right">
                                        <p className="text-emerald-600 text-[10px] font-bold flex items-center gap-1 justify-end mb-1 uppercase tracking-[0.18em]"><Sparkles size={11} /> {t('limited', 'Limited')}</p>
                                        <p className="text-gray-700 text-sm font-mono font-bold">3,247 <span className="text-gray-400">/ 10,000</span></p>
                                    </div>
                                </div>

                                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-[32%] rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]"></div>
                                </div>
                            </div>
                        </div>

                        {/* Mint Button */}
                        <div className="mt-5">
                            <button onClick={() => setShowMintModal(true)} className="group relative w-full h-14 bg-gray-900 text-white rounded-[20px] font-bold text-base shadow-[0_12px_40px_-8px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_50px_-8px_rgba(0,0,0,0.5)] active:scale-[0.98] transition-all flex items-center justify-center gap-3 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                                <Gift size={22} strokeWidth={2} />
                                {t('mintNft', 'Mint NFT')}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Benefits List (Bottom) */}
                <div>
                    <div className="flex items-baseline justify-between mb-4 px-1">
                        <div className="flex items-baseline gap-3">
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">Holder Benefits</span>
                            <h3 className="font-desktop text-2xl font-extrabold text-gray-900 tracking-tight">{t('privileges', 'Privileges')}</h3>
                        </div>
                        <span className="text-xs font-bold text-gray-400">04 Perks</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                        {[
                            { icon: Sparkles, label: t('exclusiveAirdropRewards', 'Exclusive Airdrop Rewards'), color: 'text-amber-600 bg-amber-50', num: '01' },
                            { icon: Zap, label: t('upToPointBoost', 'Up to 60% Point Boost'), color: 'text-purple-600 bg-purple-50', num: '02' },
                            { icon: TrendingUp, label: t('apyDailyInterestLabel', '10% APY Daily Interest'), color: 'text-emerald-600 bg-emerald-50', num: '03' },
                            { icon: ShieldCheck, label: t('ambassadorProgramAccess', 'Ambassador Program Access'), color: 'text-blue-600 bg-blue-50', num: '04' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-5 rounded-[24px] border border-gray-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_30px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 transition-all duration-300 group">
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`w-12 h-12 rounded-[16px] flex items-center justify-center transition-transform group-hover:scale-110 ${item.color}`}>
                                        <item.icon size={22} strokeWidth={2.2} />
                                    </div>
                                    <span className="text-[10px] font-mono font-bold text-gray-300 tracking-wider">{item.num}</span>
                                </div>
                                <p className="font-bold text-gray-900 text-sm leading-snug">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mint Modal - Kept Same */}
            {showMintModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-md transition-opacity" onClick={() => setShowMintModal(false)}></div>

                    <div className="bg-white w-full max-w-[420px] rounded-[32px] p-6 shadow-2xl relative z-10 animate-pop-in">
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
                        </div>
                    </div>
                </div>
            )}
        </LayoutADesktop>
    );
}
