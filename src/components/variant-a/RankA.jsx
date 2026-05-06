import React, { useState } from 'react';
import LayoutA from './LayoutA';
import HeaderActionsA from './HeaderActionsA';
import { Users, TrendingUp, Copy, QrCode, ChevronLeft } from 'lucide-react';
import { useLocale } from '../../i18n';
import Logo from '../../assets/LOGO-black.svg';
import { getRank, RankBadge } from '../../assets/rankAssets';

export default function RankA() {
    const { t } = useLocale();
    const [showQr, setShowQr] = useState(false);
    const [activeMemberId, setActiveMemberId] = useState(null);

    const referralLink = 'https://polywallet.app/ref/usr000';
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(referralLink)}`;
    const walletAddress = '0x742d...5f3A';
    const currentRank = 'Diamond';

    const levelOneMembers = [
        { id: 'user1000', rank: 'Gold', own: '1', team: '21', detail: { own: '3', team: '21', downline: [{ id: 'user2000', rank: 'Bronze', own: '1', team: '3' }] } },
        { id: 'user1001', rank: 'Diamond', own: '2', team: '33', detail: { own: '4', team: '0', downline: [{ id: 'user2100', rank: 'Diamond', own: '4', team: '36' }, { id: 'user2101', rank: 'Diamond', own: '1', team: '3' }] } },
    ];

    const selectedMember = levelOneMembers.find((m) => m.id === activeMemberId) || null;
    const levelOneDetail = selectedMember ? { ...selectedMember, ...selectedMember.detail } : null;
    const levelTwoMembers = selectedMember?.detail?.downline ?? [];

    const handleCopy = () => {
        if (navigator?.clipboard?.writeText) navigator.clipboard.writeText(referralLink);
    };

    const MapRow = ({ member, onClick }) => {
        const meta = getRank(member.rank);
        const content = (
            <>
                <span className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-500 via-violet-500 to-cyan-400" />
                <div className="relative shrink-0">
                    <RankBadge rank={member.rank} size={44} radius="14px" />
                    <span className="absolute inset-0 rounded-[14px] ring-1 ring-white/40 pointer-events-none" />
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className="font-black text-gray-900 text-sm tracking-tight truncate">{member.id}</h4>
                    <span className={`text-[9px] font-black uppercase tracking-[0.15em] px-2 py-0.5 rounded-md mt-1 inline-block ${meta.badge}`}>
                        {member.rank}
                    </span>
                </div>
                <div className="flex gap-2 text-right shrink-0">
                    <div className="px-2 py-1 rounded-lg bg-blue-50/60 border border-blue-100">
                        <span className="block text-[8px] text-blue-500/80 font-black uppercase tracking-[0.15em]">{t('own', 'Own')}</span>
                        <span className="block font-black bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text text-transparent text-base leading-tight tabular-nums">{member.own}</span>
                    </div>
                    <div className="px-2 py-1 rounded-lg bg-emerald-50/60 border border-emerald-100">
                        <span className="block text-[8px] text-emerald-600/80 font-black uppercase tracking-[0.15em]">{t('teamLabel', 'Team')}</span>
                        <span className="block font-black bg-gradient-to-br from-emerald-600 to-teal-700 bg-clip-text text-transparent text-base leading-tight tabular-nums">{member.team}</span>
                    </div>
                </div>
            </>
        );
        return onClick ? (
            <button onClick={onClick} className="relative w-full text-left bg-white p-3 rounded-[20px] shadow-[0_2px_10px_rgba(15,23,42,0.04)] border border-gray-200/80 flex items-center gap-3 overflow-hidden">{content}</button>
        ) : (
            <div className="relative bg-white p-3 rounded-[20px] shadow-[0_2px_10px_rgba(15,23,42,0.04)] border border-gray-200/80 flex items-center gap-3 overflow-hidden">{content}</div>
        );
    };

    return (
        <LayoutA>
            <div className="px-5 pt-2 pb-4 space-y-5">
                <div className="flex items-center justify-between sticky top-0 z-40 bg-[#F9FAFB]/80 backdrop-blur-xl py-2 -mx-5 px-5 border-b border-gray-100/50">
                    <img src={Logo} alt="PolyWallet" className="h-5 w-auto" />
                    <HeaderActionsA walletAddress={walletAddress} />
                </div>

                {/* Current Rank Card */}
                <div className="bg-white rounded-[28px] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-200/80 relative overflow-hidden text-center group">
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-44 h-44 bg-blue-100/50 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                        <div className="w-fit mx-auto mb-3 transform group-hover:scale-110 transition-transform duration-500 rotate-3">
                            <RankBadge rank={currentRank} size={72} radius="22px" />
                        </div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{t('currentRank', 'Current Rank')}</p>
                        <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-5">{currentRank}</h2>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-gray-50 rounded-[18px] p-3 border border-gray-100">
                                <p className="text-[9px] text-gray-400 font-bold uppercase mb-1 tracking-[0.15em]">{t('commission', 'Commission')}</p>
                                <p className="text-2xl font-black text-emerald-600">15%</p>
                            </div>
                            <div className="bg-gray-50 rounded-[18px] p-3 border border-gray-100">
                                <p className="text-[9px] text-gray-400 font-bold uppercase mb-1 tracking-[0.15em]">{t('pointBoost', 'Point Boost')}</p>
                                <p className="text-2xl font-black text-blue-600">60%</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats — premium */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="relative bg-white p-4 rounded-[24px] border border-gray-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.04)] overflow-hidden">
                        <div className="pointer-events-none absolute -top-8 -right-8 w-28 h-28 rounded-full bg-blue-500/10 blur-3xl" />
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-[0_8px_20px_-6px_rgba(59,130,246,0.6)] mb-3">
                            <Users size={18} strokeWidth={2.5} />
                        </div>
                        <p className="text-[9px] font-black uppercase tracking-[0.18em] text-gray-400">{t('direct', 'Direct')}</p>
                        <p className="text-3xl font-black bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text text-transparent tracking-tight">3</p>
                    </div>
                    <div className="relative bg-white p-4 rounded-[24px] border border-gray-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.04)] overflow-hidden">
                        <div className="pointer-events-none absolute -top-8 -right-8 w-28 h-28 rounded-full bg-emerald-500/10 blur-3xl" />
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-[0_8px_20px_-6px_rgba(16,185,129,0.6)] mb-3">
                            <TrendingUp size={18} strokeWidth={2.5} />
                        </div>
                        <p className="text-[9px] font-black uppercase tracking-[0.18em] text-gray-400">{t('team', 'Team')}</p>
                        <p className="text-3xl font-black bg-gradient-to-br from-emerald-600 to-teal-700 bg-clip-text text-transparent tracking-tight">156</p>
                    </div>
                </div>

                {/* Referral - luxury dark */}
                <div className="relative overflow-hidden text-white p-5 rounded-[28px] shadow-[0_30px_60px_-20px_rgba(15,23,42,0.6)] bg-gradient-to-br from-[#0B1020] via-[#1a1f3d] to-[#0B1020] ring-1 ring-white/10">
                    <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full bg-blue-500/30 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-20 -left-10 w-48 h-48 rounded-full bg-violet-500/20 blur-3xl" />
                    <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '18px 18px' }} />
                    <div className="flex justify-between items-center mb-4 relative z-10 gap-3">
                        <div className="min-w-0">
                            <p className="text-[9px] uppercase font-black tracking-[0.2em] text-white/40">Invite & earn</p>
                            <h3 className="font-black text-base mt-1 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">{t('yourReferralLink', 'Your Referral Link')}</h3>
                        </div>
                        <button onClick={() => setShowQr((p) => !p)} className="shrink-0 bg-white/10 p-2 rounded-xl backdrop-blur-md ring-1 ring-white/20">
                            <QrCode size={16} className="text-white" />
                        </button>
                    </div>
                    {showQr ? (
                        <div className="bg-white p-3 rounded-2xl flex items-center justify-center ring-1 ring-white/10 relative z-10 w-fit mx-auto shadow-[0_15px_40px_-10px_rgba(59,130,246,0.5)]">
                            <img src={qrCodeUrl} alt="Referral QR code" className="w-32 h-32 rounded-lg bg-white" />
                        </div>
                    ) : (
                        <button onClick={handleCopy} className="bg-black/40 p-3 rounded-[18px] flex items-center justify-between ring-1 ring-white/10 relative z-10 group cursor-pointer w-full text-left backdrop-blur-md">
                            <span className="text-xs text-white/80 truncate font-mono mr-2">{referralLink}</span>
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-[0_6px_15px_-4px_rgba(59,130,246,0.6)] shrink-0">
                                <Copy size={14} strokeWidth={2.5} />
                            </span>
                        </button>
                    )}
                </div>

                {/* Team map */}
                <div>
                    <div className="flex items-center justify-between mb-3 px-1">
                        <div className="flex items-baseline gap-2">
                            <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-gray-400">Network</span>
                            <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">{t('map', 'Your Team')}</h3>
                        </div>
                        {selectedMember && (
                            <button onClick={() => setActiveMemberId(null)} className="flex items-center gap-1 text-xs font-bold text-blue-600">
                                <ChevronLeft size={14} strokeWidth={2.5} />
                                {t('back', 'Back')}
                            </button>
                        )}
                    </div>

                    <div className="space-y-3">
                        <div className="space-y-2">
                            <p className="text-[9px] font-bold uppercase text-gray-400 px-1 tracking-[0.18em]">{t('level1', 'Level 1')}</p>
                            {selectedMember ? (
                                <MapRow member={levelOneDetail} />
                            ) : (
                                levelOneMembers.map((member) => (
                                    <MapRow key={member.id} member={member} onClick={() => setActiveMemberId(member.id)} />
                                ))
                            )}
                        </div>

                        {selectedMember && (
                            <div className="space-y-2 pt-3 animate-slide-up">
                                <p className="text-[9px] font-bold uppercase text-gray-400 px-1 tracking-[0.18em]">{t('level2', 'Level 2')}</p>
                                {levelTwoMembers.map((member) => (
                                    <MapRow key={member.id} member={member} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </LayoutA>
    );
}
