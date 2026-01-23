import React from 'react';
import LayoutADesktop from './LayoutADesktop';
import HeaderActionsA from '../variant-a/HeaderActionsA';
import { Sparkles, TrendingUp, Target, BarChart3, Gamepad2, MessageCircle, ChevronRight, Zap } from 'lucide-react';
import { useLocale } from '../../i18n';

export default function PointADesktop() {
    const { t } = useLocale();
    const walletAddress = '0x742d...5f3A';
    const avatarSrc = 'https://i.pravatar.cc/150?img=11';
    const formatNumber = (value) => value.toLocaleString('en-US');

    const projects = [
        { name: 'Polymarket', points: 15420, change: 564, icon: Target, color: 'bg-blue-50 text-blue-600', iconBg: 'bg-blue-100' },
        { name: 'Probable', points: 8934, change: 413, icon: BarChart3, color: 'bg-green-50 text-green-600', iconBg: 'bg-green-100' },
        { name: 'Predict Fun', points: 12567, change: 778, icon: Gamepad2, color: 'bg-purple-50 text-purple-600', iconBg: 'bg-purple-100' },
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
                    <div className="col-span-7 bg-[#0D1117] text-white p-8 rounded-[14px] shadow-material-medium relative overflow-hidden border border-white/10 group">
                        {/* Noise Overlay */}
                        <div className="banner-noise absolute inset-0 z-0"></div>

                        {/* Background Gradients */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-2 border border-white/10">
                                        <Sparkles size={14} className="text-yellow-400" fill="currentColor" />
                                        <span className="text-xs font-semibold tracking-wide text-gray-200">{t('totalPointsLabel', 'TOTAL POINTS')}</span>
                                    </div>
                                </div>
                                <h2 className="text-6xl font-bold tracking-tight mb-8">{formatNumber(125840)}</h2>

                                <div className="flex gap-4 max-w-md">
                                    <div className="flex-1 bg-[#1F2937]/80 backdrop-blur-md rounded-2xl p-4 border border-white/10 hover:bg-[#2D3748] transition-colors">
                                        <div className="flex items-center gap-2 text-green-400 mb-2">
                                            <TrendingUp size={16} />
                                            <span className="text-sm font-semibold">+{formatNumber(1234)} {t('pointsTitle', 'Points')}</span>
                                        </div>
                                        <p className="text-xs text-gray-400 font-medium">{t('sinceLastCycle', 'Since last cycle')}</p>
                                    </div>
                                    <div className="flex-1 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl p-4 border border-blue-400/20 shadow-lg shadow-blue-900/20">
                                        <div className="flex items-center gap-2 text-white mb-2">
                                            <Zap size={16} fill="currentColor" />
                                            <span className="text-sm font-semibold">{t('pointsApyBoost', 'Get 50% APY on held points')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Animation - SERIOUS DASHBOARD UI VISUALIZATION */}
                        <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none overflow-hidden sm:w-[500px]">
                            {/* Ambient Glows */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[60px] animate-pulse-slow"></div>

                            {/* Main Floating Dashboard Interface */}
                            <div className="absolute top-[60%] right-[-10%] -translate-y-1/2 w-[340px] h-[220px] bg-[#161b22]/90 backdrop-blur-xl rounded-[20px] border border-white/10 shadow-2xl shadow-black/50 overflow-hidden transform rotate-[-8deg] hover:rotate-0 transition-transform duration-700 ease-out origin-bottom-right group-hover:rotate-0">
                                {/* Header Bar */}
                                <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                                    <div className="ml-4 h-2 w-32 bg-white/5 rounded-full"></div>
                                </div>

                                {/* Dashboard Content Grid */}
                                <div className="p-5 grid grid-cols-12 gap-4 h-[calc(100%-40px)]">
                                    {/* Sidebar */}
                                    <div className="col-span-3 h-full flex flex-col gap-2">
                                        <div className="h-2 w-full bg-white/10 rounded-full mb-2"></div>
                                        <div className="h-1.5 w-3/4 bg-white/5 rounded-full"></div>
                                        <div className="h-1.5 w-3/4 bg-white/5 rounded-full"></div>
                                        <div className="h-1.5 w-3/4 bg-white/5 rounded-full"></div>
                                    </div>

                                    {/* Main Content Area */}
                                    <div className="col-span-9 h-full flex flex-col gap-3">
                                        {/* Chart Placeholder */}
                                        <div className="flex-1 bg-white/5 rounded-lg border border-white/5 relative overflow-hidden flex items-end justify-between px-3 pb-2 pt-4 gap-1">
                                            <div className="w-full bg-gradient-to-t from-blue-500/40 to-transparent rounded-t-sm h-[40%]"></div>
                                            <div className="w-full bg-gradient-to-t from-purple-500/40 to-transparent rounded-t-sm h-[70%]"></div>
                                            <div className="w-full bg-gradient-to-t from-emerald-500/40 to-transparent rounded-t-sm h-[50%]"></div>
                                            <div className="w-full bg-gradient-to-t from-blue-500/40 to-transparent rounded-t-sm h-[80%]"></div>
                                        </div>

                                        {/* Data Rows */}
                                        <div className="h-8 bg-white/5 rounded-lg border border-white/5 flex items-center px-3 gap-3">
                                            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                            </div>
                                            <div className="h-1.5 w-20 bg-white/10 rounded-full"></div>
                                            <div className="ml-auto h-1.5 w-8 bg-emerald-400/50 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge 1: Analytics */}
                            <div className="absolute top-[35%] right-[35%] w-14 h-14 bg-[#1F2937] rounded-2xl border border-white/10 flex items-center justify-center shadow-lg shadow-black/20 animate-float border-t-blue-500/30 backdrop-blur-md">
                                <BarChart3 size={20} className="text-blue-400" />
                            </div>

                            {/* Floating Badge 2: Security/Target */}
                            <div className="absolute bottom-[20%] right-[10%] w-12 h-12 bg-[#1F2937] rounded-2xl border border-white/10 flex items-center justify-center shadow-lg shadow-black/20 animate-float-delayed border-t-purple-500/30 backdrop-blur-md">
                                <Target size={18} className="text-purple-400" />
                            </div>

                            {/* Floating Badge 3: Link/Connect */}
                            <div className="absolute top-[60%] right-[45%] w-10 h-10 bg-[#1F2937] rounded-xl border border-white/10 flex items-center justify-center shadow-lg shadow-black/20 animate-float-slow border-t-emerald-500/30 backdrop-blur-md">
                                <TrendingUp size={16} className="text-emerald-400" />
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
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-right shrink-0">
                                        {p.disabled ? (
                                            <span className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 bg-slate-200 text-slate-500 rounded-lg">{t('comingSoon', 'Coming Soon')}</span>
                                        ) : (
                                            <div className="flex flex-col items-end">
                                                <div className="text-lg font-semibold text-slate-900 tracking-tight">{formatNumber(p.points)}</div>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-xs font-semibold text-emerald-600">+{formatNumber(p.change)}</span>
                                                    <div className="bg-slate-100 rounded-full p-1">
                                                        <ChevronRight size={14} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                                                    </div>
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
