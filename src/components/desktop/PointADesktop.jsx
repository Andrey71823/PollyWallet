import React from 'react';
import LayoutADesktop from './LayoutADesktop';
import HeaderActionsA from '../variant-a/HeaderActionsA';
import { Sparkles, TrendingUp, Zap, ArrowUpRight, Wallet, Clock } from 'lucide-react';
import { useLocale } from '../../i18n';
import { ProjectIconTile } from '../../assets/projectIcons';

export default function PointADesktop() {
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
        <LayoutADesktop>
            <div className="space-y-8">
                {/* Header with Page Title */}
                <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-3">
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">Rewards</span>
                        <h1 className="font-desktop text-3xl font-extrabold text-gray-900 tracking-tight">{t('pointsAirdrops', 'Points & Airdrops')}</h1>
                    </div>
                    <HeaderActionsA walletAddress={walletAddress} />
                </div>

                {/* Hero Card — premium dark wallet style */}
                <div className="relative rounded-[36px] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 ring-1 ring-white/5 shadow-[0_40px_100px_-20px_rgba(15,23,42,0.6)]">
                    {/* Background grid */}
                    <div
                        className="absolute inset-0 opacity-[0.06]"
                        style={{
                            backgroundImage:
                                'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
                            backgroundSize: '48px 48px',
                        }}
                    />
                    {/* Glows */}
                    <div className="absolute -top-32 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-breathe"></div>
                    <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-indigo-600/25 rounded-full blur-3xl animate-breathe"></div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 p-5 sm:p-6 lg:p-8">
                        {/* Left: Balance */}
                        <div className="lg:col-span-7 flex flex-col justify-between gap-6">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                    <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/80">Live Balance</span>
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                                    <Wallet size={11} className="text-white/70" />
                                    <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/80 font-mono">{walletAddress}</span>
                                </span>
                            </div>

                            <div>
                                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-3">{t('totalPointsLabel', 'Total Points')}</p>
                                <div className="flex items-baseline gap-3 flex-wrap">
                                    <h2 className="font-desktop text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none break-all">{formatNumber(125840)}</h2>
                                    <span className="text-xl lg:text-2xl font-light text-white/40">PTS</span>
                                </div>
                                <div className="flex items-center gap-2 mt-3">
                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-500/15 text-emerald-300 text-xs font-bold">
                                        <ArrowUpRight size={12} strokeWidth={2.5} />
                                        +{formatNumber(1234)}
                                    </span>
                                    <span className="text-xs text-white/50 font-medium">{t('sinceLastCycle', 'since last cycle')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: APY card */}
                        <div className="lg:col-span-5">
                            <div className="h-full rounded-[28px] p-6 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 relative overflow-hidden shadow-[0_20px_60px_-10px_rgba(37,99,235,0.5)]">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-300/30 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    <div className="flex items-center justify-between">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md">
                                            <Zap size={10} fill="currentColor" className="text-white" />
                                            <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-white">Yield</span>
                                        </span>
                                        <Clock size={14} className="text-white/70" />
                                    </div>

                                    <div className="mt-6">
                                        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/70 mb-1">Current APY</p>
                                        <div className="flex items-baseline gap-1">
                                            <span className="font-desktop text-5xl font-extrabold text-white tracking-tight leading-none">50</span>
                                            <span className="text-2xl font-bold text-white/80">%</span>
                                        </div>
                                        <p className="text-xs text-white/80 font-medium mt-2">{t('onHeldPoints', 'Compounds daily on held points')}</p>
                                    </div>

                                    <div className="mt-5 pt-4 border-t border-white/15 flex items-center justify-between">
                                        <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/70">Next payout</span>
                                        <span className="text-xs font-mono font-bold text-white">14h 22m</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stat strip */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    {[
                        { label: '24h Earnings', value: `+${formatNumber(1234)}`, sub: 'PTS', accent: 'text-emerald-600', icon: TrendingUp },
                        { label: 'Total Earned', value: formatNumber(284932), sub: 'PTS', accent: 'text-gray-900', icon: Sparkles },
                        { label: 'Streak', value: '47', sub: 'DAYS', accent: 'text-blue-600', icon: Zap },
                    ].map((s, i) => (
                        <div key={i} className="bg-white p-5 rounded-[24px] border border-gray-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.04)]">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-gray-400">{s.label}</span>
                                <s.icon size={14} className="text-gray-400" />
                            </div>
                            <div className="flex items-baseline gap-1.5 flex-wrap">
                                <span className={`font-desktop text-2xl sm:text-3xl font-extrabold tracking-tight ${s.accent}`}>{s.value}</span>
                                <span className="text-xs font-bold text-gray-400">{s.sub}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Projects List */}
                <div>
                    <div className="flex items-baseline justify-between mb-4 px-1">
                        <div className="flex items-baseline gap-3">
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">Earning From</span>
                            <h3 className="font-desktop text-2xl font-extrabold text-gray-900 tracking-tight">{t('supportedProjects', 'Supported Projects')}</h3>
                        </div>
                        <span className="text-xs font-bold text-gray-400">{projects.filter(p => !p.disabled).length} active</span>
                    </div>

                    <div className="grid gap-3">
                        {projects.map((p, i) => (
                            <div key={i} className={`group relative px-5 py-4 rounded-[24px] flex items-center gap-5 transition-all duration-300 ${p.disabled ? 'bg-gray-50/60 border border-dashed border-gray-200' : 'bg-white shadow-[0_2px_10px_rgba(15,23,42,0.04)] border border-gray-200/80 hover:shadow-[0_8px_30px_rgba(15,23,42,0.08)] hover:-translate-y-0.5'}`}>
                                <span className="text-[10px] font-mono font-bold text-gray-300 tabular-nums w-6">{String(i + 1).padStart(2, '0')}</span>
                                <ProjectIconTile name={p.name} size={52} radius={16} disabled={p.disabled} />

                                <div className="flex-1 min-w-0">
                                    <h4 className={`font-bold text-base ${p.disabled ? 'text-gray-400' : 'text-gray-900'}`}>{p.name}</h4>
                                    {!p.disabled && (
                                        <p className="text-xs text-gray-400 font-medium mt-0.5">Earning daily rewards</p>
                                    )}
                                </div>

                                {!p.disabled && (
                                    <div className="hidden lg:flex flex-col items-end mr-2">
                                        <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-gray-400">24h</span>
                                        <span className="inline-flex items-center gap-0.5 text-emerald-600 text-sm font-bold">
                                            <ArrowUpRight size={12} strokeWidth={2.5} />
                                            +{formatNumber(p.change)}
                                        </span>
                                    </div>
                                )}

                                <div className="text-right shrink-0">
                                    {p.disabled ? (
                                        <span className="text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 bg-gray-200/70 text-gray-500 rounded-lg">{t('comingSoon', 'Coming Soon')}</span>
                                    ) : (
                                        <div>
                                            <div className="font-desktop text-2xl font-extrabold text-gray-900 tracking-tight tabular-nums">{formatNumber(p.points)}</div>
                                            <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-gray-400">PTS</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </LayoutADesktop>
    );
}
