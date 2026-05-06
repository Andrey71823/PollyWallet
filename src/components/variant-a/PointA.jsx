import React from 'react';
import LayoutA from './LayoutA';
import HeaderActionsA from './HeaderActionsA';
import { Sparkles, TrendingUp, Zap } from 'lucide-react';
import { useLocale } from '../../i18n';
import Logo from '../../assets/LOGO-black.svg';
import { ProjectIconTile } from '../../assets/projectIcons';

export default function PointA() {
    const { t } = useLocale();
    const walletAddress = '0x742d...5f3A';
    const formatNumber = (value) => value.toLocaleString('en-US');

    const projects = [
        { name: 'Polymarket', points: 15420, change: 564 },
        { name: 'Probable', points: 8934, change: 413 },
        { name: 'Predict Fun', points: 12567, change: 778 },
        { name: 'OPINION', points: 'Coming Soon', change: '', disabled: true },
    ];

    return (
        <LayoutA>
            <div className="px-6 pt-2 pb-4 space-y-4">
                {/* Header with Logo */}
                <div className="flex items-center justify-between sticky top-0 z-40 bg-[#F9FAFB]/80 backdrop-blur-xl py-2 -mx-6 px-6 border-b border-gray-100/50">
                    <img src={Logo} alt="PolyWallet" className="h-5 w-auto" />
                    <HeaderActionsA walletAddress={walletAddress} />
                </div>



                {/* Hero Card - Premium Dark/Light Mix */}
                <div className="bg-gray-900 text-white p-6 rounded-[32px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/5">
                                <Sparkles size={14} className="text-yellow-400" fill="currentColor" />
                                <span className="text-xs font-bold tracking-wide">{t('totalPointsLabel', 'TOTAL POINTS')}</span>
                            </div>
                        </div>

                        <h2 className="text-5xl font-black tracking-tight mb-6">{formatNumber(125840)}</h2>

                        <div className="flex gap-3">
                            <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/5 hover:bg-white/15 transition-colors">
                                <div className="flex items-center gap-2 text-green-400 mb-1">
                                    <TrendingUp size={16} />
                                    <span className="text-xs font-bold">+{formatNumber(1234)} {t('pointsTitle', 'Points')}</span>
                                </div>
                                <p className="text-[10px] text-white/60 font-medium">{t('sinceLastCycle', 'since last cycle')}</p>
                            </div>

                            <div className="flex-1 bg-gradient-to-br from-blue-600/80 to-blue-500/80 backdrop-blur-md rounded-2xl p-3 border border-white/10 shadow-lg shadow-blue-900/20">
                                <div className="flex items-center gap-2 text-white mb-1">
                                    <Zap size={16} fill="currentColor" />
                                    <span className="text-xs font-bold uppercase">50% APY</span>
                                </div>
                                <p className="text-[10px] text-white/80 font-medium">{t('onHeldPoints', 'on held points')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Projects List - Premium Cards */}
                <div className="space-y-4">
                    <div className="flex justify-between items-end px-1">
                        <h3 className="text-lg font-black text-gray-900 tracking-tight">{t('supportedProjects', 'Supported Projects')}</h3>
                    </div>

                    <div className="grid gap-3">
                        {projects.map((p, i) => (
                            <div key={i} className={`group relative p-4 rounded-[26px] flex items-center gap-4 transition-all duration-300 ${p.disabled ? 'bg-gray-50 border border-dashed border-gray-200' : 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:scale-[1.01]'}`}>
                                <ProjectIconTile name={p.name} size={56} radius={20} disabled={p.disabled} />

                                <div className="flex-1 min-w-0">
                                    <h4 className={`font-bold text-base mb-0.5 ${p.disabled ? 'text-gray-400' : 'text-gray-900'}`}>{p.name}</h4>
                                </div>

                                <div className="text-right shrink-0">
                                    {p.disabled ? (
                                        <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1.5 bg-gray-200 text-gray-500 rounded-lg">{t('comingSoon', 'Coming Soon')}</span>
                                    ) : (
                                        <div className="flex flex-col items-end">
                                            <div className="text-lg font-black text-gray-900 tracking-tight">{formatNumber(p.points)}</div>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-xs font-bold text-green-500">+{formatNumber(p.change)}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </LayoutA>
    );
}
