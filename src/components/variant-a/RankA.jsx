import React, { useState } from 'react';
import LayoutA from './LayoutA';
import HeaderActionsA from './HeaderActionsA';
import { Users, TrendingUp, Copy, QrCode, ChevronLeft } from 'lucide-react';
import { useLocale } from '../../i18n';
import Logo from '../../assets/LOGO-black.svg';
import { RANKS, RANK_ORDER, getRank, RankBadge } from '../../assets/rankAssets';

export default function RankA() {
    const { t } = useLocale();
    const [showQr, setShowQr] = useState(false);
    const [activeMemberId, setActiveMemberId] = useState(null);

    const referralLink = 'https://polywallet.app/ref/usr000';
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(referralLink)}`;
    const walletAddress = '0x742d...5f3A';

    const currentRank = 'Diamond';
    const currentRankMeta = getRank(currentRank);

    const levelOneMembers = [
        {
            id: 'user1000',
            rank: 'Gold',
            own: '1',
            team: '21',
            detail: {
                own: '3',
                team: '21',
                downline: [
                    { id: 'user2000', rank: 'Bronze', own: '1', team: '3' },
                ],
            },
        },
        {
            id: 'user1001',
            rank: 'Diamond',
            own: '2',
            team: '33',
            detail: {
                own: '4',
                team: '0',
                downline: [
                    { id: 'user2100', rank: 'Diamond', own: '4', team: '36' },
                    { id: 'user2101', rank: 'Diamond', own: '1', team: '3' },
                ],
            },
        },
    ];

    const selectedMember = levelOneMembers.find((member) => member.id === activeMemberId) || null;
    const levelOneDetail = selectedMember
        ? { ...selectedMember, own: selectedMember.detail.own, team: selectedMember.detail.team }
        : null;
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
                <RankBadge rank={member.rank} size={48} radius="16px" />
                <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-sm">{member.id}</h4>
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md mt-1 inline-block ${meta.badge}`}>
                        {member.rank}
                    </span>
                </div>
                <div className="flex gap-4 text-right">
                    <div>
                        <span className="block text-[10px] text-gray-400 font-bold uppercase">{t('own', 'Own')}</span>
                        <span className="block font-black text-blue-600 text-lg leading-tight">{member.own}</span>
                    </div>
                    <div>
                        <span className="block text-[10px] text-gray-400 font-bold uppercase">{t('teamLabel', 'Team')}</span>
                        <span className="block font-black text-green-600 text-lg leading-tight">{member.team}</span>
                    </div>
                </div>
            </>
        );

        if (onClick) {
            return (
                <button
                    type="button"
                    onClick={onClick}
                    className="w-full text-left bg-white p-4 rounded-[24px] shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow"
                >
                    {content}
                </button>
            );
        }

        return (
            <div className="bg-white p-4 rounded-[24px] shadow-sm border border-gray-100 flex items-center gap-4">
                {content}
            </div>
        );
    };

    return (
        <LayoutA>
            <div className="px-6 pt-2 pb-4 space-y-4">
                {/* Header with Logo */}
                <div className="flex items-center justify-between sticky top-0 z-40 bg-[#F9FAFB]/80 backdrop-blur-xl py-2 -mx-6 px-6 border-b border-gray-100/50">
                    <img src={Logo} alt="PolyWallet" className="h-5 w-auto" />
                    <HeaderActionsA walletAddress={walletAddress} />
                </div>

                {/* Current Rank Card - Premium */}
                <div className="bg-white rounded-[32px] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 relative overflow-hidden text-center group">
                    {/* Decor */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl group-hover:bg-blue-200/50 transition-colors duration-500"></div>

                    <div className="relative z-10">
                        <div className="mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-500 rotate-3">
                            <RankBadge rank={currentRank} size={80} radius="24px" />
                        </div>

                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{t('currentRank', 'Current Rank')}</p>
                        <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-6">{currentRank}</h2>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-gray-50 rounded-2xl p-3 border border-gray-100">
                                <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">{t('commission', 'Commission')}</p>
                                <p className="text-xl font-black text-green-600">15%</p>
                            </div>
                            <div className="bg-gray-50 rounded-2xl p-3 border border-gray-100">
                                <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">{t('pointBoost', 'Point Boost')}</p>
                                <p className="text-xl font-black text-blue-600">60%</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Rank Ladder - All 8 ranks */}
                <div>
                    <h3 className="text-lg font-black text-gray-900 tracking-tight mb-3 px-1">{t('rankLadder', 'Rank Ladder')}</h3>
                    <div className="bg-white rounded-[26px] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
                        <div className="grid grid-cols-4 gap-3">
                            {RANK_ORDER.map((name) => {
                                const isCurrent = name === currentRank;
                                return (
                                    <div key={name} className={`flex flex-col items-center gap-1.5 p-2 rounded-2xl transition-all ${isCurrent ? 'bg-blue-50/60 ring-1 ring-blue-200' : ''}`}>
                                        <RankBadge rank={name} size={44} radius="14px" />
                                        <span className={`text-[10px] font-black uppercase tracking-wider text-center leading-tight ${isCurrent ? 'text-blue-600' : 'text-gray-500'}`}>{name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Team Stats - Clean Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-[26px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between h-32 hover:translate-y-[-2px] transition-transform">
                        <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 mb-2">
                            <Users size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-500">{t('direct', 'Direct')}</p>
                            <p className="text-3xl font-black text-gray-900">3</p>
                        </div>
                    </div>
                    <div className="bg-white p-5 rounded-[26px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between h-32 hover:translate-y-[-2px] transition-transform">
                        <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 mb-2">
                            <TrendingUp size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-500">{t('team', 'Team')}</p>
                            <p className="text-3xl font-black text-gray-900">156</p>
                        </div>
                    </div>
                </div>

                {/* Referral Link - Dark Contrast */}
                <div className="bg-gray-900 text-white p-6 rounded-[28px] shadow-xl relative overflow-hidden">
                    <div className="flex justify-between items-center mb-4 relative z-10">
                        <span className="font-bold text-lg">{t('yourReferralLink', 'Your Referral Link')}</span>
                        <button
                            type="button"
                            onClick={() => setShowQr((prev) => !prev)}
                            aria-pressed={showQr}
                            aria-label="Toggle QR code"
                            className="bg-white/10 p-2 rounded-xl backdrop-blur-md"
                        >
                            <QrCode size={20} className="text-white" />
                        </button>
                    </div>

                    {showQr ? (
                        <div className="bg-white p-3 rounded-xl flex items-center justify-center border border-white/10 relative z-10">
                            <img src={qrCodeUrl} alt="Referral QR code" className="w-40 h-40 rounded-lg bg-white" />
                        </div>
                    ) : (
                        <button
                            type="button"
                            onClick={handleCopy}
                            className="bg-black/50 p-4 rounded-xl flex items-center justify-between border border-white/10 relative z-10 group cursor-pointer hover:bg-black/70 transition-colors w-full text-left"
                        >
                            <span className="text-sm text-gray-300 truncate font-mono mr-2">{referralLink}</span>
                            <Copy size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                        </button>
                    )}

                    {/* Bg Decor */}
                    <div className="absolute right-0 bottom-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                </div>

                {/* Your Team (Map) */}
                <div>
                    <div className="flex items-center justify-between mb-4 px-1">
                        <h3 className="text-lg font-black text-gray-900 tracking-tight">{t('map', 'Your Team')}</h3>
                        {selectedMember && (
                            <button
                                type="button"
                                onClick={() => setActiveMemberId(null)}
                                className="flex items-center gap-1 text-sm font-bold text-blue-600 transition-colors hover:text-blue-700"
                            >
                                <ChevronLeft size={16} strokeWidth={2.5} />
                                {t('back', 'Back')}
                            </button>
                        )}
                    </div>

                    <div className="space-y-3">
                        {/* Level 1 Section */}
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

                        {/* Level 2 Section (Zoomed) */}
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
        </LayoutA>
    );
}
