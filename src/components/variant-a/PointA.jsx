import React from 'react';
import LayoutA from './LayoutA';
import HeaderActionsA from './HeaderActionsA';
import { Sparkles, TrendingUp, Zap, ArrowUpRight, Wallet, Clock } from 'lucide-react';
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
            <div className="px-5 pt-2 pb-4 space-y-5">
                <div className="flex items-center justify-between sticky top-0 z-40 bg-[#F9FAFB]/80 backdrop-blur-xl py-2 -mx-5 px-5 border-b border-gray-100/50">
                    <img src={Logo} alt="PolyWallet" className="h-5 w-auto" />
                    <HeaderActionsA walletAddress={walletAddress} />
                </div>

                {/* Hero — premium dark */}
                <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 ring-1 ring-white/5 shadow-[0_30px_70px_-20px_rgba(15,23,42,0.6)]">
                    <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    <div className="absolute -top-24 -right-16 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-breathe" />
                    <div className="absolute -bottom-24 -left-16 w-72 h-72 bg-indigo-600/25 rounded-full blur-3xl animate-breathe" />

                    <div className="relative z-10 p-5 space-y-5">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-white/80">Live</span>
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                                <Wallet size={10} className="text-white/70" />
                                <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-white/80 font-mono">{walletAddress}</span>
                            </span>
                        </div>

                        <div>
                            <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/40 mb-2">{t('totalPointsLabel', 'Total Points')}</p>
                            <div className="flex items-baseline gap-2 flex-wrap">
                                <h2 className="text-5xl font-extrabold text-white tracking-tight leading-none break-all">{formatNumber(125840)}</h2>
                                <span className="text-lg font-light text-white/40">PTS</span>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 text-[11px] font-bold">
                                    <ArrowUpRight size={11} strokeWidth={2.5} />
                                    +{formatNumber(1234)}
                                </span>
                                <span className="text-[11px] text-white/50 font-medium">{t('sinceLastCycle', 'since last cycle')}</span>
                            </div>
                        </div>

                        <div className="rounded-[20px] p-4 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 relative overflow-hidden shadow-[0_15px_40px_-10px_rgba(37,99,235,0.5)]">
                            <div className="absolute top-0 right-0 w-28 h-28 bg-white/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 flex items-end justify-between gap-3">
                                <div>
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/15 backdrop-blur-md mb-2">
                                        <Zap size={9} fill="currentColor" className="text-white" />
                                        <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-white">Yield</span>
                                    </span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-extrabold text-white tracking-tight leading-none">50</span>
                                        <span className="text-xl font-bold text-white/80">%</span>
                                    </div>
                                    <p className="text-[10px] text-white/80 font-medium mt-1">{t('onHeldPoints', 'on held points')}</p>
                                </div>
                                <div className="text-right">
                                    <Clock size={14} className="text-white/70 ml-auto mb-1" />
                                    <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-white/70 block">Next</span>
                                    <span className="text-[11px] font-mono font-bold text-white">14h 22m</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stat strip */}
                <div className="grid grid-cols-3 gap-2.5">
                    {[
                        { label: '24h', value: `+${formatNumber(1234)}`, sub: 'PTS', accent: 'text-emerald-600', icon: TrendingUp },
                        { label: 'Total', value: '284K', sub: 'PTS', accent: 'text-gray-900', icon: Sparkles },
                        { label: 'Streak', value: '47', sub: 'D', accent: 'text-blue-600', icon: Zap },
                    ].map((s, i) => (
                        <div key={i} className="bg-white p-3 rounded-[18px] border border-gray-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.04)]">
                            <div className="flex items-center justify-between mb-1.5">
                                <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-gray-400">{s.label}</span>
                                <s.icon size={12} className="text-gray-400" />
                            </div>
                            <div className="flex items-baseline gap-1 flex-wrap">
                                <span className={`text-lg font-extrabold tracking-tight ${s.accent}`}>{s.value}</span>
                                <span className="text-[10px] font-bold text-gray-400">{s.sub}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Projects */}
                <div className="space-y-3">
                    <div className="flex items-baseline justify-between px-1">
                        <div className="flex items-baseline gap-2">
                            <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-gray-400">Earning</span>
                            <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">{t('supportedProjects', 'Projects')}</h3>
                        </div>
                        <span className="text-[10px] font-bold text-gray-400">{projects.filter(p => !p.disabled).length} active</span>
                    </div>

                    <div className="grid gap-3">
                        {projects.map((p, i) => (
                            <div key={i} className={`relative px-4 py-3.5 rounded-[22px] flex items-center gap-3 ${p.disabled ? 'bg-gray-50/60 border border-dashed border-gray-200' : 'bg-white shadow-[0_2px_10px_rgba(15,23,42,0.04)] border border-gray-200/80'}`}>
                                <span className="text-[9px] font-mono font-bold text-gray-300 tabular-nums w-5">{String(i + 1).padStart(2, '0')}</span>
                                <ProjectIconTile name={p.name} size={44} radius={14} disabled={p.disabled} />
                                <div className="flex-1 min-w-0">
                                    <h4 className={`font-bold text-[14px] truncate ${p.disabled ? 'text-gray-400' : 'text-gray-900'}`}>{p.name}</h4>
                                    {!p.disabled && (
                                        <span className="inline-flex items-center gap-0.5 text-emerald-600 text-[11px] font-bold mt-0.5">
                                            <ArrowUpRight size={10} strokeWidth={2.5} />
                                            +{formatNumber(p.change)}
                                        </span>
                                    )}
                                </div>
                                <div className="text-right shrink-0">
                                    {p.disabled ? (
                                        <span className="text-[9px] font-black uppercase tracking-[0.15em] px-2 py-1 bg-gray-200/70 text-gray-500 rounded-md">{t('comingSoon', 'Soon')}</span>
                                    ) : (
                                        <div>
                                            <div className="text-lg font-extrabold text-gray-900 tracking-tight tabular-nums leading-none">{formatNumber(p.points)}</div>
                                            <div className="text-[9px] font-bold tracking-[0.15em] uppercase text-gray-400 mt-0.5">PTS</div>
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
