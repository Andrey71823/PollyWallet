import React, { useState } from 'react';
import LayoutA from './LayoutA';
import { Crown, Users, TrendingUp, Copy, QrCode, Star, Shield, ChevronLeft } from 'lucide-react';

export default function RankA() {
    const [showQr, setShowQr] = useState(false);
    const [activeMemberId, setActiveMemberId] = useState(null);

    const referralLink = 'https://polywallet.app/ref/usr000';
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(referralLink)}`;

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
                    <h4 className="font-bold text-gray-900 text-sm">{member.id}</h4>
                    <span className={`text-[10px] font-black uppercase tracking-wider bg-gray-50 px-2 py-0.5 rounded-md mt-1 inline-block ${meta.badge}`}>
                        {member.rank}
                    </span>
                </div>
                <div className="flex gap-4 text-right">
                    <div>
                        <span className="block text-[10px] text-gray-400 font-bold uppercase">Own</span>
                        <span className="block font-black text-blue-600 text-lg leading-tight">{member.own}</span>
                    </div>
                    <div>
                        <span className="block text-[10px] text-gray-400 font-bold uppercase">Team</span>
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
            <div className="px-6 pt-3 pb-4 space-y-5">
                {/* Premium Header */}
                <div className="flex items-center justify-between sticky top-0 z-40 bg-[#F9FAFB]/80 backdrop-blur-xl py-2 -mx-6 px-6 border-b border-gray-100/50">
                    <h1 className="text-xl font-bold text-gray-900 tracking-tight">Rank & Team</h1>
                    <div className="w-10 h-10 rounded-full bg-white shadow-soft p-0.5 border border-gray-100">
                        <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full rounded-full object-cover" />
                    </div>
                </div>

                {/* Current Rank Card - Premium */}
                <div className="bg-white rounded-[32px] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 relative overflow-hidden text-center group">
                    {/* Decor */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl group-hover:bg-blue-200/50 transition-colors duration-500"></div>

                    <div className="relative z-10">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-[24px] mx-auto mb-4 flex items-center justify-center shadow-lg shadow-blue-500/30 transform group-hover:scale-110 transition-transform duration-500 rotate-3">
                            <Crown size={40} className="text-white fill-white/20" />
                        </div>

                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Current Rank</p>
                        <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-6">Diamond</h2>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-gray-50 rounded-2xl p-3 border border-gray-100">
                                <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Commission</p>
                                <p className="text-xl font-black text-green-600">15%</p>
                            </div>
                            <div className="bg-gray-50 rounded-2xl p-3 border border-gray-100">
                                <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Point Boost</p>
                                <p className="text-xl font-black text-blue-600">60%</p>
                            </div>
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
                            <p className="text-sm font-bold text-gray-500">Direct</p>
                            <p className="text-3xl font-black text-gray-900">3</p>
                        </div>
                    </div>
                    <div className="bg-white p-5 rounded-[26px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between h-32 hover:translate-y-[-2px] transition-transform">
                        <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 mb-2">
                            <TrendingUp size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-500">Team</p>
                            <p className="text-3xl font-black text-gray-900">156</p>
                        </div>
                    </div>
                </div>

                {/* Referral Link - Dark Contrast */}
                <div className="bg-gray-900 text-white p-6 rounded-[28px] shadow-xl relative overflow-hidden">
                    <div className="flex justify-between items-center mb-4 relative z-10">
                        <span className="font-bold text-lg">Your Referral Link</span>
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

                {/* Map */}
                <div>
                    <h3 className="text-lg font-black text-gray-900 tracking-tight mb-1 px-1">Map</h3>
                    <p className="text-xs text-gray-400 font-medium px-1">Tap members to view their downline</p>

                    <div className="mt-4 space-y-3">
                        {selectedMember ? (
                            <>
                                <button
                                    type="button"
                                    onClick={() => setActiveMemberId(null)}
                                    className="flex items-center gap-1.5 text-sm font-bold text-blue-600 px-1"
                                >
                                    <ChevronLeft size={16} />
                                    Back
                                </button>

                                <div className="space-y-3">
                                    <p className="text-[10px] font-bold uppercase text-gray-400 px-1">Level 1</p>
                                    {levelOneDetail && <MapRow member={levelOneDetail} />}
                                </div>

                                <div className="space-y-3 pt-1">
                                    <p className="text-[10px] font-bold uppercase text-gray-400 px-1">Level 2</p>
                                    {levelTwoMembers.map((member) => (
                                        <MapRow key={member.id} member={member} />
                                    ))}
                                </div>
                            </>
                        ) : (
                            <>
                                <p className="text-[10px] font-bold uppercase text-gray-400 px-1">Level 1</p>
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
        </LayoutA>
    );
}
