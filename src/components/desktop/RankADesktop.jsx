import React, { useState } from 'react';
import LayoutADesktop from './LayoutADesktop';
import HeaderActionsA from '../variant-a/HeaderActionsA';
import { Crown, Users, TrendingUp, Copy, QrCode, Star, Shield, ChevronLeft } from 'lucide-react';
import { useLocale } from '../../i18n';

export default function RankADesktop() {
    const { t } = useLocale();
    const [showQr, setShowQr] = useState(false);
    const [activeMemberId, setActiveMemberId] = useState(null);

    const referralLink = 'https://polywallet.app/ref/usr000';
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(referralLink)}`;
    const walletAddress = '0x742d...5f3A';
    const avatarSrc = 'https://i.pravatar.cc/150?img=11';

    function DiamondIcon(props) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M6 3h12l4 6-10 13L2 9Z" />
            </svg>
        );
    }

    const rankMeta = {
        Gold: { color: 'bg-yellow-100 text-yellow-700', badge: 'text-yellow-700', icon: Star },
        Diamond: { color: 'bg-blue-100 text-blue-700', badge: 'text-blue-600', icon: DiamondIcon },
        Bronze: { color: 'bg-orange-100 text-orange-700', badge: 'text-orange-700', icon: Shield },
    };

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
        const meta = rankMeta[member.rank] || rankMeta.Bronze;
        const content = (
            <>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${meta.color}`}>
                    <meta.icon size={20} fill="currentColor" className="opacity-80" />
                </div>
                <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 text-sm">{member.id}</h4>
                    <span className={`text-[10px] font-semibold uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-md mt-1 inline-block ${meta.badge}`}>
                        {member.rank}
                    </span>
                </div>
                <div className="flex gap-6 text-right">
                    <div>
                        <span className="block text-[10px] text-slate-400 font-semibold uppercase">{t('own', 'Own')}</span>
                        <span className="block font-semibold text-blue-600 text-lg leading-tight">{member.own}</span>
                    </div>
                    <div>
                        <span className="block text-[10px] text-slate-400 font-semibold uppercase">{t('teamLabel', 'Team')}</span>
                        <span className="block font-semibold text-green-600 text-lg leading-tight">{member.team}</span>
                    </div>
                </div>
            </>
        );

        if (onClick) {
            return (
                <button
                    type="button"
                    onClick={onClick}
                    className="w-full text-left card-soft-elevated p-4 flex items-center gap-4 transition-shadow hover:shadow-[0_8px_18px_rgba(17,24,39,0.12)]"
                >
                    {content}
                </button>
            );
        }

        return (
            <div className="card-soft p-4 flex items-center gap-4">
                {content}
            </div>
        );
    };

    return (
        <LayoutADesktop>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-slate-400 font-medium">{t('rankTeam', 'Rank & Team')}</p>
                        <h1 className="text-3xl font-semibold text-slate-900">{t('rankTeam', 'Rank & Team')}</h1>
                    </div>
                    <HeaderActionsA walletAddress={walletAddress} avatarSrc={avatarSrc} />
                </div>

                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-7 space-y-6">
                        <div className="card-shell p-6 relative overflow-hidden">
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-200/40 rounded-full blur-3xl"></div>

                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-[14px] mb-6 flex items-center justify-center shadow-material-medium">
                                    <Crown size={40} className="text-white fill-white/20" />
                                </div>

                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">{t('currentRank', 'Current Rank')}</p>
                                <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Diamond</h2>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="card-soft p-4">
                                        <p className="text-[10px] text-slate-400 font-semibold uppercase mb-1">{t('commission', 'Commission')}</p>
                                        <p className="text-2xl font-semibold text-green-600">15%</p>
                                    </div>
                                    <div className="card-soft p-4">
                                        <p className="text-[10px] text-slate-400 font-semibold uppercase mb-1">{t('pointBoost', 'Point Boost')}</p>
                                        <p className="text-2xl font-semibold text-blue-600">60%</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="card-soft-elevated p-5 flex flex-col justify-between h-40">
                                <div className="w-12 h-12 rounded-[10px] bg-slate-100 flex items-center justify-center text-slate-400 mb-2">
                                    <Users size={22} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-500">{t('direct', 'Direct')}</p>
                                    <p className="text-3xl font-semibold text-slate-900">3</p>
                                </div>
                            </div>
                            <div className="card-soft-elevated p-5 flex flex-col justify-between h-40">
                                <div className="w-12 h-12 rounded-[10px] bg-slate-100 flex items-center justify-center text-slate-400 mb-2">
                                    <TrendingUp size={22} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-500">{t('team', 'Team')}</p>
                                    <p className="text-3xl font-semibold text-slate-900">156</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-5 space-y-6">
                        <div className="banner-noise bg-gradient-to-br from-[#1F2532] via-[#20283A] to-[#252D3E] text-white p-6 rounded-[14px] shadow-material-medium relative overflow-hidden border border-white/10">
                            <div className="flex justify-between items-center mb-4 relative z-10">
                                <span className="font-semibold text-lg">{t('yourReferralLink', 'Your Referral Link')}</span>
                                <button
                                    type="button"
                                    onClick={() => setShowQr((prev) => !prev)}
                                    aria-pressed={showQr}
                                    aria-label="Toggle QR code"
                                    className="bg-white/8 p-2 rounded-xl backdrop-blur-md"
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
                                    className="bg-white/10 p-4 rounded-xl flex items-center justify-between border border-white/10 relative z-10 group cursor-pointer hover:bg-white/15 transition-colors w-full text-left"
                                >
                                    <span className="text-sm text-white/70 truncate font-mono mr-2">{referralLink}</span>
                                    <Copy size={18} className="text-white/50 group-hover:text-white transition-colors" />
                                </button>
                            )}

                            <div className="absolute right-0 bottom-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                        </div>

                        <div className="card-shell p-6">
                            <h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-1">{t('map', 'Map')}</h3>
                            <p className="text-xs text-slate-400 font-medium">{t('mapHint', 'Tap members to view their downline')}</p>

                            <div className="mt-4 space-y-3">
                                {selectedMember ? (
                                    <>
                                        <button
                                            type="button"
                                            onClick={() => setActiveMemberId(null)}
                                            className="flex items-center gap-1.5 text-sm font-semibold text-blue-600"
                                        >
                                            <ChevronLeft size={16} />
                                            {t('back', 'Back')}
                                        </button>

                                        <div className="space-y-3">
                                            <p className="text-[10px] font-semibold uppercase text-slate-400">{t('level1', 'Level 1')}</p>
                                            {levelOneDetail && <MapRow member={levelOneDetail} />}
                                        </div>

                                        <div className="space-y-3 pt-2">
                                            <p className="text-[10px] font-semibold uppercase text-slate-400">{t('level2', 'Level 2')}</p>
                                            {levelTwoMembers.map((member) => (
                                                <MapRow key={member.id} member={member} />
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <p className="text-[10px] font-semibold uppercase text-slate-400">{t('level1', 'Level 1')}</p>
                                        <div className="space-y-3">
                                            {levelOneMembers.map((member) => (
                                                <MapRow key={member.id} member={member} onClick={() => setActiveMemberId(member.id)} />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutADesktop>
    );
}
