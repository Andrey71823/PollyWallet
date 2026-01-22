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
        { name: 'OPINION', points: t('comingSoon', 'Coming Soon'), change: '', icon: MessageCircle, color: 'bg-gray-50 text-gray-400', iconBg: 'bg-gray-100', disabled: true },
    ];

    return (
        <LayoutADesktop>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-400 font-semibold">{t('pointsAirdrops', 'Points & Airdrops')}</p>
                        <h1 className="text-3xl font-black text-gray-900">{t('pointsTitle', 'Points')}</h1>
                    </div>
                    <HeaderActionsA walletAddress={walletAddress} avatarSrc={avatarSrc} />
                </div>

                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-7 bg-gray-900 text-white p-8 rounded-[36px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.35)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-56 h-56 bg-purple-500/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-2 border border-white/10">
                                    <Sparkles size={14} className="text-yellow-400" fill="currentColor" />
                                    <span className="text-xs font-bold tracking-wide">{t('totalPointsLabel', 'TOTAL POINTS')}</span>
                                </div>
                            </div>
                            <h2 className="text-6xl font-black tracking-tight mb-8">125 840</h2>
                            <div className="flex gap-4">
                                <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                                    <div className="flex items-center gap-2 text-green-300 mb-2">
                                        <TrendingUp size={16} />
                                        <span className="text-sm font-bold">+1 234 {t('pointsTitle', 'Points')}</span>
                                    </div>
                                    <p className="text-xs text-white/60 font-medium">{t('yesterday', 'yesterday')}</p>
                                </div>
                                <div className="flex-1 bg-gradient-to-br from-blue-600/90 to-blue-500/90 rounded-2xl p-4 border border-white/10 shadow-lg">
                                    <div className="flex items-center gap-2 text-white mb-2">
                                        <Zap size={16} fill="currentColor" />
                                        <span className="text-sm font-bold">50% {t('boost', 'Boost')}</span>
                                    </div>
                                    <p className="text-xs text-white/80 font-medium">{t('boost', 'Boost')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-5 bg-white rounded-[32px] p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] border border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-black text-gray-900">{t('supportedProjects', 'Supported Projects')}</h3>
                        </div>
                        <div className="space-y-4">
                            {projects.map((p, i) => (
                                <div key={i} className={`group p-4 rounded-[22px] flex items-center gap-4 transition-all ${p.disabled ? 'bg-gray-50 border border-dashed border-gray-200' : 'bg-white border border-gray-100 shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]'}`}>
                                    <div className={`w-14 h-14 rounded-[20px] flex items-center justify-center shrink-0 ${p.disabled ? 'bg-gray-200 text-gray-400' : `bg-gradient-to-br ${p.iconBg} to-white shadow-inner`}`}>
                                        <p.icon size={26} className={p.disabled ? '' : p.color.split(' ')[1]} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className={`font-bold text-base mb-0.5 ${p.disabled ? 'text-gray-400' : 'text-gray-900'}`}>{p.name}</h4>
                                        {!p.disabled && (
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-bold text-gray-500">{t('pointsTitle', 'Points')}</span>
                                                <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                                                <span className="text-xs font-bold text-green-500">{p.change}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-right shrink-0">
                                        {p.disabled ? (
                                            <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1.5 bg-gray-200 text-gray-500 rounded-lg">{t('comingSoon', 'Coming Soon')}</span>
                                        ) : (
                                            <div className="flex flex-col items-end">
                                                <div className="text-lg font-black text-gray-900 tracking-tight">{p.points}</div>
                                                <div className="bg-gray-50 rounded-full p-1 -mr-1 mt-1">
                                                    <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
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
