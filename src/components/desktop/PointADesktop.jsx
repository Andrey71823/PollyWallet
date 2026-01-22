import React from 'react';
import LayoutADesktop from './LayoutADesktop';
import HeaderActionsA from '../variant-a/HeaderActionsA';
import { Sparkles, TrendingUp, Target, BarChart3, Gamepad2, MessageCircle, ChevronRight, Zap } from 'lucide-react';
import { useLocale } from '../../i18n';

export default function PointADesktop() {
    const { t } = useLocale();
    const walletAddress = '0x742d...5f3A';
    const avatarSrc = 'https://i.pravatar.cc/150?img=11';

    const projects = [
        { name: 'Polymarket', points: '15 420', change: '+564', icon: Target, color: 'bg-blue-50 text-blue-600', iconBg: 'bg-blue-100' },
        { name: 'Probable', points: '8 934', change: '+413', icon: BarChart3, color: 'bg-green-50 text-green-600', iconBg: 'bg-green-100' },
        { name: 'Predict Fun', points: '12 567', change: '+778', icon: Gamepad2, color: 'bg-purple-50 text-purple-600', iconBg: 'bg-purple-100' },
        { name: 'OPINION', points: t('comingSoon', 'Coming Soon'), change: '', icon: MessageCircle, color: 'bg-slate-50 text-slate-400', iconBg: 'bg-slate-100', disabled: true },
    ];

    return (
        <LayoutADesktop>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-slate-400 font-medium">{t('pointsAirdrops', 'Points & Airdrops')}</p>
                        <h1 className="text-3xl font-semibold text-slate-900">{t('pointsTitle', 'Points')}</h1>
                    </div>
                    <HeaderActionsA walletAddress={walletAddress} avatarSrc={avatarSrc} />
                </div>

                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-7 bg-gradient-to-br from-[#1F2532] via-[#20283A] to-[#262F42] text-white p-8 rounded-[14px] shadow-material-medium relative overflow-hidden border border-white/10">
                        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-56 h-56 bg-purple-400/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="bg-white/8 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-2 border border-white/10">
                                    <Sparkles size={14} className="text-yellow-400" fill="currentColor" />
                                    <span className="text-xs font-semibold tracking-wide">{t('totalPointsLabel', 'TOTAL POINTS')}</span>
                                </div>
                            </div>
                            <h2 className="text-6xl font-semibold tracking-tight mb-8">125 840</h2>
                            <div className="flex gap-4">
                                <div className="flex-1 bg-white/8 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                                    <div className="flex items-center gap-2 text-green-300 mb-2">
                                        <TrendingUp size={16} />
                                        <span className="text-sm font-semibold">+1 234 {t('pointsTitle', 'Points')}</span>
                                    </div>
                                    <p className="text-xs text-white/60 font-medium">{t('yesterday', 'yesterday')}</p>
                                </div>
                                <div className="flex-1 bg-gradient-to-br from-blue-500/80 to-blue-400/80 rounded-2xl p-4 border border-white/10 shadow-[0_8px_18px_rgba(37,99,235,0.25)]">
                                    <div className="flex items-center gap-2 text-white mb-2">
                                        <Zap size={16} fill="currentColor" />
                                        <span className="text-sm font-semibold">50% {t('boost', 'Boost')}</span>
                                    </div>
                                    <p className="text-xs text-white/80 font-medium">{t('boost', 'Boost')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-5 card-shell p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-slate-900">{t('supportedProjects', 'Supported Projects')}</h3>
                        </div>
                        <div className="space-y-4">
                            {projects.map((p, i) => (
                                <div key={i} className={`group p-4 rounded-[12px] flex items-center gap-4 transition-all ${p.disabled ? 'card-soft border-dashed' : 'card-soft-elevated'}`}>
                                    <div className={`w-14 h-14 rounded-[20px] flex items-center justify-center shrink-0 ${p.disabled ? 'bg-slate-200 text-slate-400' : `bg-gradient-to-br ${p.iconBg} to-white/80 shadow-inner`}`}>
                                        <p.icon size={26} className={p.disabled ? '' : p.color.split(' ')[1]} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className={`font-semibold text-base mb-0.5 ${p.disabled ? 'text-slate-400' : 'text-slate-900'}`}>{p.name}</h4>
                                        {!p.disabled && (
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-semibold text-slate-500">{t('pointsTitle', 'Points')}</span>
                                                <div className="h-1 w-1 rounded-full bg-slate-300"></div>
                                                <span className="text-xs font-semibold text-emerald-600">{p.change}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-right shrink-0">
                                        {p.disabled ? (
                                            <span className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 bg-slate-200 text-slate-500 rounded-lg">{t('comingSoon', 'Coming Soon')}</span>
                                        ) : (
                                            <div className="flex flex-col items-end">
                                                <div className="text-lg font-semibold text-slate-900 tracking-tight">{p.points}</div>
                                                <div className="bg-slate-100 rounded-full p-1 -mr-1 mt-1">
                                                    <ChevronRight size={14} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </LayoutADesktop>
    );
}
