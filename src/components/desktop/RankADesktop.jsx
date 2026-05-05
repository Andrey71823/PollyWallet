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

        return onClick ? (
            <button onClick={onClick} className="w-full text-left bg-white p-4 rounded-[24px] shadow-sm border border-gray-200 flex items-center gap-4 hover:shadow-md transition-shadow">
                {content}
            </button>
        ) : (
            <div className="bg-white p-4 rounded-[24px] shadow-sm border border-gray-200 flex items-center gap-4">
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
                <div className="grid grid-cols-12 gap-5">
                    {/* Left Column (Current Rank) - 7 cols */}
                    <div className="col-span-7">
                        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-200 relative overflow-hidden text-center group h-full flex flex-col justify-center">
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-56 h-56 bg-blue-100/50 rounded-full blur-3xl group-hover:bg-blue-200/50 transition-colors duration-500"></div>

                            <div className="relative z-10">
                                <div className="mx-auto mb-6 w-fit transform group-hover:scale-110 transition-transform duration-500 rotate-3">
                                    <RankBadge rank={currentRank} size={96} radius="28px" iconSize={52} />
                                </div>

                                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{t('currentRank', 'Current Rank')}</p>
                                <h2 className="text-5xl font-black text-gray-900 tracking-tight mb-8">{currentRank}</h2>

                                <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto">
                                    <div className="bg-gray-50 rounded-[24px] p-5 border border-gray-100">
                                        <p className="text-xs text-gray-400 font-bold uppercase mb-2">{t('commission', 'Commission')}</p>
                                        <p className="text-3xl font-black text-green-600">15%</p>
                                    </div>
                                    <div className="bg-gray-50 rounded-[24px] p-5 border border-gray-100">
                                        <p className="text-xs text-gray-400 font-bold uppercase mb-2">{t('pointBoost', 'Point Boost')}</p>
                                        <p className="text-3xl font-black text-blue-600">60%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Stats & Referral) - 5 cols */}
                    <div className="col-span-5 flex flex-col gap-5">
                        {/* Stats - Horizontal alignment */}
                        <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-200 flex items-center justify-between hover:translate-y-[-2px] transition-transform">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
                                    <Users size={24} />
                                </div>
                                <p className="text-sm font-bold text-gray-500">{t('direct', 'Direct')}</p>
                            </div>
                            <p className="text-4xl font-black text-gray-900">3</p>
                        </div>
                        <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-200 flex items-center justify-between hover:translate-y-[-2px] transition-transform">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
                                    <TrendingUp size={24} />
                                </div>
                                <p className="text-sm font-bold text-gray-500">{t('team', 'Team')}</p>
                            </div>
                            <p className="text-4xl font-black text-gray-900">156</p>
                        </div>

                        {/* Referral Link - Moved here */}
                        <div className="flex-1 bg-gray-900 text-white p-6 rounded-[32px] shadow-xl relative overflow-hidden flex flex-col justify-center">
                            <div className="flex justify-between items-center mb-4 relative z-10">
                                <h3 className="font-bold text-lg">{t('yourReferralLink', 'Your Referral Link')}</h3>
                                <button onClick={() => setShowQr((prev) => !prev)} className="bg-white/10 p-2 rounded-xl backdrop-blur-md hover:bg-white/20 transition-colors">
                                    <QrCode size={20} className="text-white" />
                                </button>
                            </div>

                            {showQr ? (
                                <div className="bg-white p-3 rounded-xl flex items-center justify-center border border-white/10 relative z-10 w-fit mx-auto">
                                    <img src={qrCodeUrl} alt="Referral QR code" className="w-32 h-32 rounded-lg bg-white" />
                                </div>
                            ) : (
                                <button onClick={handleCopy} className="bg-black/50 p-4 rounded-[20px] flex items-center justify-between border border-white/10 relative z-10 group cursor-pointer hover:bg-black/70 transition-colors w-full text-left">
                                    <span className="text-sm text-gray-300 truncate font-mono mr-2">{referralLink}</span>
                                    <Copy size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                                </button>
                            )}
                            <div className="absolute right-0 bottom-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                        </div>
                    </div>
                </div>

                {/* Rank Ladder - all 8 ranks */}
                <div>
                    <h3 className="text-xl font-black text-gray-900 tracking-tight mb-4 px-1">{t('rankLadder', 'Rank Ladder')}</h3>
                    <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-200 grid grid-cols-8 gap-4">
                        {RANK_ORDER.map((name) => {
                            const isCurrent = name === currentRank;
                            return (
                                <div key={name} className={`flex flex-col items-center gap-2 p-3 rounded-2xl ${isCurrent ? 'bg-blue-50/60 ring-1 ring-blue-200' : ''}`}>
                                    <RankBadge rank={name} size={56} radius="18px" />
                                    <span className={`text-[11px] font-black uppercase tracking-wider text-center ${isCurrent ? 'text-blue-600' : 'text-gray-500'}`}>{name}</span>
                                </div>
                            );
                        })}
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
