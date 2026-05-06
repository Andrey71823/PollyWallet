import React, { useState } from 'react';
import LayoutADesktop from './LayoutADesktop';
import HeaderActionsA from '../variant-a/HeaderActionsA';
import { Users, TrendingUp, Copy, QrCode, ChevronLeft } from 'lucide-react';
import { useLocale } from '../../i18n';
import { RANK_ORDER, getRank, RankBadge } from '../../assets/rankAssets';

export default function RankADesktop() {
    const { t } = useLocale();
    const [showQr, setShowQr] = useState(false);
    const [activeMemberId, setActiveMemberId] = useState(null);

    const referralLink = 'https://polywallet.app/ref/usr000';
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(referralLink)}`;
    const walletAddress = '0x742d...5f3A';

    const currentRank = 'Diamond';

    const levelOneMembers = [
        {
            id: 'user1000',
            rank: 'Gold',
            own: '1',
            team: '21',
            detail: { own: '3', team: '21', downline: [{ id: 'user2000', rank: 'Bronze', own: '1', team: '3' }] },
        },
        {
            id: 'user1001',
            rank: 'Diamond',
            own: '2',
            team: '33',
            detail: { own: '4', team: '0', downline: [{ id: 'user2100', rank: 'Diamond', own: '4', team: '36' }, { id: 'user2101', rank: 'Diamond', own: '1', team: '3' }] },
        },
    ];

    const selectedMember = levelOneMembers.find((member) => member.id === activeMemberId) || null;
    const levelOneDetail = selectedMember ? { ...selectedMember, ...selectedMember.detail } : null;
    const levelTwoMembers = selectedMember?.detail?.downline ?? [];

    const handleCopy = () => {
        if (navigator?.clipboard?.writeText) {
            navigator.clipboard.writeText(referralLink);
        }
    };

    const MapRow = ({ member, onClick }) => {
        const meta = getRank(member.rank);
        const content = (
            <>
                <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[-3deg]">
                    <RankBadge rank={member.rank} size={52} radius="18px" />
                    <span className="absolute inset-0 rounded-[18px] ring-1 ring-white/40 pointer-events-none" />
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className="font-black text-gray-900 text-[15px] tracking-tight truncate">{member.id}</h4>
                    <span className={`text-[10px] font-black uppercase tracking-[0.15em] px-2 py-0.5 rounded-md mt-1.5 inline-block ${meta.badge}`}>
                        {member.rank}
                    </span>
                </div>
                <div className="hidden sm:flex gap-5 text-right shrink-0">
                    <div className="px-3 py-1.5 rounded-xl bg-blue-50/60 border border-blue-100">
                        <span className="block text-[9px] text-blue-500/80 font-black uppercase tracking-[0.15em]">{t('own', 'Own')}</span>
                        <span className="block font-black bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text text-transparent text-xl leading-tight tabular-nums">{member.own}</span>
                    </div>
                    <div className="px-3 py-1.5 rounded-xl bg-emerald-50/60 border border-emerald-100">
                        <span className="block text-[9px] text-emerald-600/80 font-black uppercase tracking-[0.15em]">{t('teamLabel', 'Team')}</span>
                        <span className="block font-black bg-gradient-to-br from-emerald-600 to-teal-700 bg-clip-text text-transparent text-xl leading-tight tabular-nums">{member.team}</span>
                    </div>
                </div>
                <div className="flex sm:hidden gap-2 text-right shrink-0">
                    <span className="font-black text-blue-600 text-base tabular-nums">{member.own}</span>
                    <span className="text-gray-300">/</span>
                    <span className="font-black text-emerald-600 text-base tabular-nums">{member.team}</span>
                </div>
            </>
        );

        return onClick ? (
            <button onClick={onClick} className="group relative w-full text-left bg-white p-4 sm:p-5 rounded-[24px] shadow-[0_2px_10px_rgba(15,23,42,0.04)] border border-gray-200/80 flex items-center gap-4 hover:shadow-[0_18px_40px_-15px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 hover:border-blue-200 transition-all duration-300 overflow-hidden">
                <span className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-500 via-violet-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                {content}
            </button>
        ) : (
            <div className="group relative bg-white p-4 sm:p-5 rounded-[24px] shadow-[0_2px_10px_rgba(15,23,42,0.04)] border border-gray-200/80 flex items-center gap-4 overflow-hidden">
                <span className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-500 via-violet-500 to-cyan-400" />
                {content}
            </div>
        );
    };

    return (
        <LayoutADesktop>
            <div className="space-y-6">
                {/* Header with Page Title */}
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-black text-gray-900 tracking-tight">{t('rankTeam', 'Rank & Team')}</h1>
                    <HeaderActionsA walletAddress={walletAddress} />
                </div>

                {/* 2-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
                    {/* Left Column (Current Rank) */}
                    <div className="lg:col-span-7">
                        <div className="bg-white rounded-[32px] p-6 lg:p-8 shadow-sm border border-gray-200 relative overflow-hidden text-center group h-full flex flex-col justify-center">
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-56 h-56 bg-blue-100/50 rounded-full blur-3xl group-hover:bg-blue-200/50 transition-colors duration-500"></div>

                            <div className="relative z-10">
                                <div className="mx-auto mb-6 w-fit transform group-hover:scale-110 transition-transform duration-500 rotate-3">
                                    <RankBadge rank={currentRank} size={96} radius="28px" iconSize={52} />
                                </div>

                                <p className="text-xs lg:text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{t('currentRank', 'Current Rank')}</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-6 lg:mb-8 break-words">{currentRank}</h2>

                                <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-lg mx-auto">
                                    <div className="bg-gray-50 rounded-[24px] p-4 sm:p-5 border border-gray-100 min-w-0">
                                        <p className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase mb-2 truncate">{t('commission', 'Commission')}</p>
                                        <p className="text-2xl sm:text-3xl font-black text-green-600">15%</p>
                                    </div>
                                    <div className="bg-gray-50 rounded-[24px] p-4 sm:p-5 border border-gray-100 min-w-0">
                                        <p className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase mb-2 truncate">{t('pointBoost', 'Point Boost')}</p>
                                        <p className="text-2xl sm:text-3xl font-black text-blue-600">60%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Stats & Referral) */}
                    <div className="lg:col-span-5 flex flex-col gap-4 lg:gap-5">
                        {/* Direct stat */}
                        <div className="group relative bg-white p-4 sm:p-6 rounded-[32px] border border-gray-200/80 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.25)] flex items-center justify-between gap-3 overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(59,130,246,0.45)] transition-all duration-300">
                            <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl group-hover:bg-blue-500/25 transition-colors duration-500" />
                            <div className="flex items-center gap-3 sm:gap-4 relative min-w-0">
                                <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-[0_8px_20px_-6px_rgba(59,130,246,0.6)] group-hover:scale-110 transition-transform duration-300">
                                    <Users size={22} strokeWidth={2.5} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t('direct', 'Direct')}</p>
                                    <p className="text-xs font-bold text-gray-500 mt-0.5 truncate">Personal invites</p>
                                </div>
                            </div>
                            <p className="text-3xl sm:text-4xl font-black bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text text-transparent tracking-tight relative shrink-0">3</p>
                        </div>
                        {/* Team stat */}
                        <div className="group relative bg-white p-4 sm:p-6 rounded-[32px] border border-gray-200/80 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.25)] flex items-center justify-between gap-3 overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(16,185,129,0.45)] transition-all duration-300">
                            <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full bg-emerald-500/10 blur-3xl group-hover:bg-emerald-500/25 transition-colors duration-500" />
                            <div className="flex items-center gap-3 sm:gap-4 relative min-w-0">
                                <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-[0_8px_20px_-6px_rgba(16,185,129,0.6)] group-hover:scale-110 transition-transform duration-300">
                                    <TrendingUp size={22} strokeWidth={2.5} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t('team', 'Team')}</p>
                                    <p className="text-xs font-bold text-gray-500 mt-0.5 truncate">Total network</p>
                                </div>
                            </div>
                            <p className="text-3xl sm:text-4xl font-black bg-gradient-to-br from-emerald-600 to-teal-700 bg-clip-text text-transparent tracking-tight relative shrink-0">156</p>
                        </div>

                        {/* Referral Link - luxury */}
                        <div className="flex-1 min-w-0 relative overflow-hidden text-white p-5 sm:p-6 rounded-[32px] shadow-[0_30px_60px_-20px_rgba(15,23,42,0.6)] flex flex-col justify-center bg-gradient-to-br from-[#0B1020] via-[#1a1f3d] to-[#0B1020] ring-1 ring-white/10">
                            <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-blue-500/30 blur-3xl" />
                            <div className="pointer-events-none absolute -bottom-20 -left-10 w-56 h-56 rounded-full bg-violet-500/20 blur-3xl" />
                            <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{backgroundImage:'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize:'18px 18px'}} />
                            <div className="flex justify-between items-center mb-4 relative z-10 gap-3">
                                <div className="min-w-0">
                                    <p className="text-[10px] uppercase font-black tracking-[0.2em] text-white/40">Invite & earn</p>
                                    <h3 className="font-black text-base sm:text-lg lg:text-xl mt-1 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">{t('yourReferralLink', 'Your Referral Link')}</h3>
                                </div>
                                <button onClick={() => setShowQr((prev) => !prev)} className="shrink-0 bg-white/10 p-2.5 rounded-xl backdrop-blur-md ring-1 ring-white/20 hover:bg-white/20 hover:scale-105 transition-all">
                                    <QrCode size={18} className="text-white" />
                                </button>
                            </div>

                            {showQr ? (
                                <div className="bg-white p-3 rounded-2xl flex items-center justify-center ring-1 ring-white/10 relative z-10 w-fit mx-auto shadow-[0_15px_40px_-10px_rgba(59,130,246,0.5)]">
                                    <img src={qrCodeUrl} alt="Referral QR code" className="w-32 h-32 rounded-lg bg-white" />
                                </div>
                            ) : (
                                <button onClick={handleCopy} className="bg-black/40 p-4 rounded-[20px] flex items-center justify-between ring-1 ring-white/10 relative z-10 group cursor-pointer hover:bg-black/60 hover:ring-blue-400/40 transition-all w-full text-left backdrop-blur-md">
                                    <span className="text-sm text-white/80 truncate font-mono mr-2">{referralLink}</span>
                                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-[0_6px_15px_-4px_rgba(59,130,246,0.6)] group-hover:scale-110 transition-transform">
                                        <Copy size={15} strokeWidth={2.5} />
                                    </span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Map (Your Team) */}
                <div className="pt-2">
                    <div className="flex items-center justify-between mb-4 px-1">
                        <h3 className="text-xl font-black text-gray-900 tracking-tight">{t('map', 'Your Team')}</h3>
                        {selectedMember && (
                            <button
                                onClick={() => setActiveMemberId(null)}
                                className="flex items-center gap-1 text-sm font-bold text-blue-600 transition-colors hover:text-blue-700"
                            >
                                <ChevronLeft size={18} strokeWidth={2.5} />
                                {t('back', 'Back')}
                            </button>
                        )}
                    </div>

                    <div className="space-y-3">
                        {/* Level 1 */}
                        <div className="space-y-3">
                            <p className="text-[10px] font-bold uppercase text-gray-400 px-1 tracking-wider">{t('level1', 'Level 1')}</p>
                            {selectedMember ? (
                                <MapRow member={levelOneDetail} />
                            ) : (
                                levelOneMembers.map((member) => (
                                    <MapRow key={member.id} member={member} onClick={() => setActiveMemberId(member.id)} />
                                ))
                            )}
                        </div>

                        {/* Level 2 */}
                        {selectedMember && (
                            <div className="space-y-3 pt-4 animate-slide-up">
                                <p className="text-[10px] font-bold uppercase text-gray-400 px-1 tracking-wider">{t('level2', 'Level 2')}</p>
                                {levelTwoMembers.map((member) => (
                                    <MapRow key={member.id} member={member} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </LayoutADesktop>
    );
}
