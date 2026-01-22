import React, { useState } from 'react';
import LayoutADesktop from './LayoutADesktop';
import HeaderActionsA from '../variant-a/HeaderActionsA';
import { Box, TrendingUp, Sparkles, ShieldCheck, Zap, Layers, X, Plus, Minus } from 'lucide-react';
import { useLocale } from '../../i18n';

export default function NFTADesktop() {
    const { t } = useLocale();
    const [showMintModal, setShowMintModal] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const price = 1000;
    const walletAddress = '0x742d...5f3A';
    const avatarSrc = 'https://i.pravatar.cc/150?img=11';

    return (
        <LayoutADesktop>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-slate-400 font-medium">{t('nftMintTitle', 'NFT Mint')}</p>
                        <h1 className="text-3xl font-semibold text-slate-900">{t('nftMintTitle', 'NFT Mint')}</h1>
                    </div>
                    <HeaderActionsA walletAddress={walletAddress} avatarSrc={avatarSrc} />
                </div>

                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-7 card-shell p-6">
                        <div className="card-soft p-6 h-[420px] relative overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 right-0 w-56 h-56 bg-blue-200/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-200/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

                            <div className="flex justify-between items-start z-10">
                                <div className="bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-[0_4px_10px_rgba(15,23,42,0.08)] border border-white/60 flex items-center gap-1.5">
                                    <Sparkles size={12} className="text-blue-600" />
                                    <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider">{t('diamondRank', 'Diamond Rank')}</span>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">{t('price', 'Price')}</p>
                                    <p className="text-lg font-semibold text-slate-900">$1,000</p>
                                </div>
                            </div>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                <div className="w-28 h-28 bg-white rounded-[16px] shadow-[0_8px_18px_rgba(15,23,42,0.12)] flex items-center justify-center border border-white/70 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-[16px]"></div>
                                    <Box size={46} className="text-slate-900 relative z-10" strokeWidth={1.5} />
                                </div>
                            </div>

                            <div className="z-10 text-center mt-auto">
                                <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">POLY BOX</h2>
                                <p className="text-xs font-medium text-slate-400">{t('edition', 'Edition')} 1</p>
                            </div>
                        </div>

                        <div className="mt-6 space-y-4">
                            <h2 className="text-slate-900 text-xl font-semibold">{t('polywalletNft', 'PolyWallet NFT')}</h2>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                {t('nftDescription', 'Mint your NFT to unlock rewards, daily interest, and affiliate benefits.')}
                            </p>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <div>
                                <p className="text-slate-400 text-xs font-semibold mb-1 uppercase tracking-wide">{t('mintPrice', 'Mint Price')}</p>
                                <p className="text-slate-900 text-2xl font-semibold tracking-tight">$1,000</p>
                            </div>
                            <div className="text-right">
                                <p className="text-emerald-600 text-xs font-semibold flex items-center gap-1 justify-end mb-1"><Sparkles size={10} /> {t('limited', 'Limited')}</p>
                                <p className="text-slate-400 text-xs font-mono font-semibold">3,247 / 10,000</p>
                            </div>
                        </div>

                        <div className="mt-4 h-2.5 w-full bg-[#E9EDF4] rounded-full overflow-hidden">
                            <div className="h-full bg-blue-600 w-[32%] rounded-full shadow-[0_0_10px_rgba(37,99,235,0.2)]"></div>
                        </div>

                        <button onClick={() => setShowMintModal(true)} className="mt-6 w-full h-14 bg-[#1F2532] text-white rounded-[12px] font-semibold text-lg shadow-material-medium hover:bg-[#1A202C] hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                            <Box size={20} strokeWidth={2} />
                            {t('mintNft', 'Mint NFT')}
                        </button>
                    </div>

                    <div className="col-span-5 space-y-6">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="card-soft-elevated p-5 text-center">
                                <Box className="mx-auto mb-2 text-slate-500" size={22} />
                                <p className="text-2xl font-semibold text-slate-900">3</p>
                                <p className="text-[9px] uppercase font-semibold text-slate-400 tracking-wider">{t('owned', 'Owned')}</p>
                            </div>
                            <div className="card-soft-elevated p-5 text-center">
                                <Layers className="mx-auto mb-2 text-blue-600" size={22} />
                                <p className="text-lg font-semibold text-slate-900">Diamond</p>
                                <p className="text-[9px] uppercase font-semibold text-slate-400 tracking-wider">{t('rankTitle', 'Rank')}</p>
                            </div>
                            <div className="card-soft-elevated p-5 text-center">
                                <TrendingUp className="mx-auto mb-2 text-green-600" size={22} />
                                <p className="text-2xl font-semibold text-emerald-600">50%</p>
                                <p className="text-[9px] uppercase font-semibold text-slate-400 tracking-wider">{t('boost', 'Boost')}</p>
                            </div>
                        </div>

                        <div className="card-shell p-6 space-y-5">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-slate-900 text-lg">{t('privileges', 'Privileges')}</h3>
                                <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded-lg">{t('pro', 'PRO')}</span>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { icon: Sparkles, label: t('exclusiveAirdropRewards', 'Exclusive Airdrop Rewards'), desc: t('exclusiveAirdropRewardsDesc', 'Exclusive airdrop rewards.'), color: 'text-yellow-600 bg-yellow-50' },
                                    { icon: Zap, label: t('upToPointBoost', 'Up to 60% Point Boost'), desc: t('upToPointBoostDesc', 'Up to 60% point boost.'), color: 'text-purple-600 bg-purple-50' },
                                    { icon: TrendingUp, label: t('apyDailyInterestLabel', '10% APY Daily Interest'), desc: t('apyDailyInterestDesc', '10% APY daily interest.'), color: 'text-green-600 bg-green-50' },
                                    { icon: ShieldCheck, label: t('ambassadorProgramAccess', 'Ambassador Program Access'), desc: t('ambassadorProgramAccessDesc', 'Ambassador program access.'), color: 'text-blue-600 bg-blue-50' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${item.color}`}>
                                            <item.icon size={20} />
                                        </div>
                                        <div className="pt-0.5">
                                            <p className="font-semibold text-slate-900 text-sm">{item.label}</p>
                                            <p className="text-xs text-slate-400 leading-relaxed mt-0.5 font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {showMintModal && (
                    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center px-0 sm:px-4 pb-0 sm:pb-0">
                        <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-md transition-opacity" onClick={() => setShowMintModal(false)}></div>

                        <div className="bg-white w-full sm:w-[420px] rounded-t-[32px] sm:rounded-[40px] p-6 pb-12 sm:pb-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)] relative z-10 animate-slide-up sm:animate-pop-in">
                            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6 sm:hidden"></div>

                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-semibold text-slate-900">{t('mintNft', 'Mint NFT')}</h2>
                                <button onClick={() => setShowMintModal(false)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
                                    <X size={18} />
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-gray-50 p-4 rounded-[20px] border border-gray-100">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="font-semibold text-gray-500 uppercase text-xs tracking-wider">{t('quantity', 'Quantity')}</span>
                                        <span className="font-semibold text-slate-900">{quantity} {t('nftLabel', 'NFT')}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-gray-50"><Minus size={20} /></button>
                                        <span className="text-3xl font-semibold text-slate-900">{quantity}</span>
                                        <button onClick={() => setQuantity(Math.min(10, quantity + 1))} className="w-12 h-12 bg-[#1F2532] rounded-xl shadow-[0_10px_18px_rgba(15,23,42,0.2)] flex items-center justify-center text-white hover:bg-[#1A202C]"><Plus size={20} /></button>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-[20px] border border-gray-100 space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-gray-500">{t('pricePerNft', 'Price per NFT')}</span>
                                        <span className="font-semibold text-slate-900">${price.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-gray-500">{t('quantity', 'Quantity')}</span>
                                        <span className="font-semibold text-slate-900">{quantity}</span>
                                    </div>
                                    <div className="h-px bg-gray-200"></div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-base font-semibold text-slate-700">{t('totalCost', 'Total Cost')}</span>
                                        <span className="text-2xl font-semibold text-slate-900">${(price * quantity).toLocaleString()}</span>
                                    </div>
                                </div>

                                <button onClick={() => setShowMintModal(false)} className="w-full py-4 bg-blue-600 text-white rounded-[20px] font-semibold text-lg shadow-[0_12px_24px_rgba(37,99,235,0.25)] hover:bg-blue-700 active:scale-[0.98] transition-all">
                                    {t('confirmMint', 'Confirm Mint')}
                                </button>

                                <button onClick={() => setShowMintModal(false)} className="w-full py-3 bg-transparent text-slate-400 font-semibold text-sm hover:text-slate-600">
                                    {t('cancel', 'Cancel')}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </LayoutADesktop>
    );
}
