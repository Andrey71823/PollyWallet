import React, { useState } from 'react';
import LayoutADesktop from './LayoutADesktop';
import HeaderActionsA from '../variant-a/HeaderActionsA';
import { useLocale } from '../../i18n';
import { Send, ArrowDown, ArrowUp, ArrowUpRight, ArrowDownLeft, TrendingUp, X, Clock, Rocket } from 'lucide-react';

export default function WalletADesktop() {
    const { t } = useLocale();
    const [activeModal, setActiveModal] = useState(null);
    const [amount, setAmount] = useState('');
    const [recipient, setRecipient] = useState('');
    const [showAllTransactions, setShowAllTransactions] = useState(false);

    const totalBalance = 5420.5;
    const depositBalance = 8234.56;
    const walletAddress = '0x742d...5f3A';
    const avatarSrc = 'https://i.pravatar.cc/150?img=11';
    const formatAmount = (value) =>
        value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    const openModal = (modal) => {
        setActiveModal(modal);
        setAmount('');
        setRecipient('');
    };

    const closeModal = () => {
        setActiveModal(null);
        setAmount('');
        setRecipient('');
    };

    const transactions = [
        { type: t('dailyInterest', 'Daily Interest'), date: '2026-01-16 14:30:45', amount: '+$11.23', color: 'text-green-500' },
        { type: t('directBonus', 'Direct Bonus'), date: '2026-01-16 10:15:22', amount: '+$150.00', color: 'text-green-500' },
        { type: t('teamBonus', 'Team Bonus'), date: '2026-01-15 18:42:11', amount: '+$85.50', color: 'text-green-500' },
        { type: t('nftMint', 'NFT Mint'), date: '2026-01-15 09:20:33', amount: '-$1,000.00', color: 'text-red-500' },
        { type: t('transferAlice', 'Transfer - alice123'), date: '2026-01-14 16:55:18', amount: '-$250.00', color: 'text-red-500' },
        { type: t('deposit', 'Deposit'), date: '2026-01-14 12:30:00', amount: '+$2,000.00', color: 'text-green-500' },
        { type: t('withdrawTx', 'Withdraw'), date: '2026-01-13 20:15:42', amount: '-$500.00', color: 'text-red-500' },
        { type: t('dailyInterest', 'Daily Interest'), date: '2026-01-15 14:30:45', amount: '+$10.87', color: 'text-green-500' },
    ];

    const visibleTransactions = showAllTransactions ? transactions : transactions.slice(0, 4);

    return (
        <LayoutADesktop>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-slate-400 font-medium">{t('greeting', 'Good Afternoon,')}</p>
                        <h1 className="text-3xl font-semibold text-slate-900">Tobechukwu!</h1>
                    </div>
                    <HeaderActionsA walletAddress={walletAddress} avatarSrc={avatarSrc} />
                </div>

                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12">
                        {/* Banner - Darker + Noise + "Bento/Tech" Illustration - Reduced Height (h-36) */}
                        <div className="relative w-full h-36 bg-[#0D1117] rounded-[24px] overflow-hidden flex items-center justify-between px-10 shadow-[0_8px_20px_rgba(0,0,0,0.3)] border border-white/5 group">
                            {/* Noise Overlay - Class handles visibility via index.css */}
                            <div className="banner-noise absolute inset-0 z-0"></div>

                            {/* Subtle Glow */}
                            <div className="absolute right-0 top-0 bottom-0 w-[500px] bg-gradient-to-l from-[#1e293b] via-[#1e293b]/50 to-transparent opacity-80 pointer-events-none z-0"></div>

                            {/* Left Content - STRICTLY LEFT */}
                            <div className="relative z-10 space-y-3 max-w-[400px] flex-shrink-0 mr-auto self-center">
                                <div className="flex items-center gap-2">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 font-bold text-2xl tracking-wide">{t('upgradePro', 'UPGRADE PRO')}</span>
                                    <Rocket size={22} className="text-blue-400" />
                                </div>
                                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                                    {t('upgradeDesc', 'Elevate your productivity and achieve more with our Pro plan!')}
                                </p>
                            </div>

                            {/* Right Content - "Bento" Style Tech Illustration - SLOW FLOAT ANIMATION */}
                            <div className="relative z-10 w-64 h-full flex items-center justify-end mr-6">
                                <div className="relative w-full h-32">
                                    {/* Decor Lines */}
                                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                                        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                                        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
                                    </div>

                                    {/* Node 1 (Center) */}
                                    <div className="absolute top-[35%] right-12 -translate-y-1/2 w-16 h-16 rounded-2xl bg-[#1F2937] border border-blue-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.2)] animate-breathe z-20">
                                        <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-sm"></div>
                                        <TrendingUp className="text-blue-400 relative z-10" size={28} />
                                    </div>

                                    {/* Node 2 (Satellite Top) - Smooth Float */}
                                    <div className="absolute top-2 right-0 w-10 h-10 rounded-xl bg-[#1F2937] border border-white/10 flex items-center justify-center shadow-lg animate-float">
                                        <Rocket size={16} className="text-purple-400" />
                                    </div>

                                    {/* Node 3 (Satellite Bottom) - Smooth Float Delayed - LIFTED UP (bottom-6) */}
                                    <div className="absolute bottom-6 right-32 w-10 h-10 rounded-xl bg-[#1F2937] border border-white/10 flex items-center justify-center shadow-lg animate-float-delayed">
                                        <Clock size={16} className="text-green-400" />
                                    </div>

                                    {/* Connecting Lines (SVG) */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" style={{ overflow: 'visible' }}>
                                        <path d="M 180 45 L 230 30" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 4" />
                                        <path d="M 180 45 L 140 100" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 4" />
                                        <defs>
                                            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="transparent" />
                                                <stop offset="50%" stopColor="#60A5FA" />
                                                <stop offset="100%" stopColor="transparent" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Total Balance Card (First/Left) - Fill 8 cols */}
                    <div className="col-span-8 bg-white border border-[#E6E9F0] rounded-[12px] shadow-[0_4px_12px_rgba(17,24,39,0.03)] p-8 flex flex-col">
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{t('totalBalance', 'Total Balance')}</p>
                            <h2 className="text-5xl font-bold text-slate-900 tracking-tight">${formatAmount(totalBalance)}</h2>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mt-8">
                            <button
                                onClick={() => openModal('deposit')}
                                className="h-14 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-[16px] shadow-[0_4px_12px_rgba(37,99,235,0.2)] flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                            >
                                <ArrowDown size={20} />
                                {t('deposit', 'Deposit')}
                            </button>

                            <button
                                onClick={() => openModal('withdraw')}
                                className="h-14 bg-white border border-slate-200 text-slate-700 font-semibold rounded-[16px] hover:bg-slate-50 hover:border-slate-300 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                            >
                                <ArrowUp size={20} />
                                {t('withdraw', 'Withdraw')}
                            </button>

                            <button
                                onClick={() => openModal('send')}
                                className="h-14 bg-white border border-slate-200 text-slate-700 font-semibold rounded-[16px] hover:bg-slate-50 hover:border-slate-300 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                            >
                                <Send size={20} />
                                {t('send', 'Send')}
                            </button>
                        </div>
                    </div>

                    {/* Colored Stats Cards (Second/Right) - Fill 4 cols */}
                    <div className="col-span-4 grid gap-4">
                        <div className="bg-[#F0FDF4] border border-green-100 rounded-[12px] shadow-[0_4px_12px_rgba(22,163,74,0.04)] p-5 flex flex-col justify-between">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-green-800">{t('totalInvest', 'Total Invest')}</span>
                                <span className="text-[10px] font-bold bg-white text-green-700 px-2 py-0.5 rounded border border-green-200">{t('apy', 'APY')} 10%</span>
                            </div>
                            {/* Inner White Card */}
                            <div className="bg-white rounded-[10px] p-4 shadow-sm border border-green-100/50">
                                <p className="text-2xl font-semibold text-slate-900">$1,248.50</p>
                                <p className="text-sm text-green-600 font-bold mt-1">+ $11.23</p>
                            </div>
                        </div>
                        <div className="bg-[#F0F9FF] border border-sky-100 rounded-[12px] shadow-[0_4px_12px_rgba(14,165,233,0.04)] p-5 flex flex-col justify-between">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800">{t('totalBonus', 'Total Bonus')}</span>
                            </div>
                            {/* Inner White Card */}
                            <div className="bg-white rounded-[10px] p-4 shadow-sm border border-sky-100/50">
                                <p className="text-2xl font-semibold text-slate-900">$398.20</p>
                                <p className="text-sm text-sky-600 font-bold mt-1">+ $85.50</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 bg-white border border-[#E6E9F0] rounded-[12px] shadow-[0_4px_12px_rgba(17,24,39,0.03)] p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-slate-900">{t('transactions', 'Transactions')}</h3>
                            <button
                                type="button"
                                onClick={() => setShowAllTransactions((prev) => !prev)}
                                className="text-xs text-slate-400 font-semibold hover:text-slate-600 transition-colors uppercase tracking-wider"
                            >
                                {showAllTransactions ? t('showLess', 'Show less') : t('seeAll', 'See all')}
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {visibleTransactions.map((tx, i) => (
                                <div key={i} className="bg-[#F8FAFC] border border-[#E6E9F0] rounded-[12px] p-4 flex items-center gap-4 hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all">
                                    <div className={`w-10 h-10 rounded-[14px] flex items-center justify-center ${tx.amount.startsWith('+') ? 'bg-emerald-100/70 text-emerald-600' : 'bg-rose-100/70 text-rose-500'}`}>
                                        {tx.amount.startsWith('+') ? <ArrowDownLeft size={18} /> : <ArrowUpRight size={18} />}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-slate-900 text-sm">{tx.type}</h4>
                                        <p className="text-xs text-slate-400 font-medium mt-0.5">{tx.date}</p>
                                    </div>
                                    <span className={`font-semibold text-sm ${tx.color}`}>{tx.amount}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {activeModal && (
                <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center px-0 sm:px-4 pb-0 sm:pb-0">
                    <div className="absolute inset-0 bg-gray-900/20 backdrop-blur-sm transition-opacity" onClick={closeModal}></div>
                    <div className="bg-white w-full sm:w-[420px] rounded-t-[32px] sm:rounded-[40px] p-6 pb-12 sm:pb-6 shadow-[0_20px_60px_rgba(15,23,42,0.15)] relative z-10 animate-slide-up sm:animate-pop-in">
                        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6 sm:hidden"></div>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-semibold text-gray-900">
                                {activeModal === 'deposit'
                                    ? t('depositUsdc', 'Deposit USDC')
                                    : activeModal === 'withdraw'
                                        ? t('withdraw', 'Withdraw')
                                        : t('send', 'Send')}
                            </h2>
                            <button onClick={closeModal} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
                                <X size={18} />
                            </button>
                        </div>

                        <div className="space-y-6">
                            {activeModal === 'deposit' && (
                                <>
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('amount', 'Amount')}</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder={t('enterAmount', 'Enter amount')}
                                                value={amount}
                                                onChange={(event) => setAmount(event.target.value)}
                                                className="w-full bg-gray-50 rounded-[20px] px-5 py-4 font-semibold text-xl text-gray-900 outline-none focus:ring-2 focus:ring-blue-500/20"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setAmount(formatAmount(depositBalance))}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600 text-xs font-semibold bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100 lg:active:scale-95"
                                            >
                                                MAX
                                            </button>
                                        </div>
                                        <p className="text-xs text-gray-400 font-medium flex justify-between px-2">
                                            <span>{t('balance', 'Balance')}: {formatAmount(depositBalance)} USDC (Polygon)</span>
                                        </p>
                                    </div>
                                    <button onClick={closeModal} className="w-full py-4 bg-blue-600 text-white rounded-[20px] font-semibold text-lg shadow-[0_8px_20px_rgba(37,99,235,0.15)] hover:bg-blue-700 active:scale-[0.98] transition-all">
                                        {t('confirmDeposit', 'Confirm Deposit')}
                                    </button>
                                </>
                            )}

                            {activeModal === 'withdraw' && (
                                <>
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('amount', 'Amount')}</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder={t('enterAmount', 'Enter amount')}
                                                value={amount}
                                                onChange={(event) => setAmount(event.target.value)}
                                                className="w-full bg-gray-50 rounded-[20px] px-5 py-4 font-semibold text-xl text-gray-900 outline-none focus:ring-2 focus:ring-blue-500/20"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setAmount(formatAmount(totalBalance))}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600 text-xs font-semibold bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100"
                                            >
                                                MAX
                                            </button>
                                        </div>
                                    </div>
                                    <div className="bg-yellow-50 p-4 rounded-[20px] flex items-center gap-3 border border-yellow-100">
                                        <Clock size={18} className="text-yellow-600" />
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <p className="text-sm font-semibold text-amber-800">{t('processing', 'Processing')}</p>
                                            <p className="text-xs text-yellow-700">{t('withinBusinessDays', 'Within 3 business days')}</p>
                                        </div>
                                    </div>
                                    <button onClick={closeModal} className="w-full py-4 bg-gray-900 text-white rounded-[20px] font-semibold text-lg shadow-[0_8px_20px_rgba(15,23,42,0.1)] hover:bg-black active:scale-[0.98] transition-all">
                                        {t('requestWithdrawal', 'Request Withdrawal')}
                                    </button>
                                </>
                            )}

                            {activeModal === 'send' && (
                                <>
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('recipientId', 'Recipient ID')}</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder={t('enterUserId', 'Enter user ID')}
                                                value={recipient}
                                                onChange={(event) => setRecipient(event.target.value)}
                                                className="w-full bg-gray-50 rounded-[20px] px-5 py-4 font-semibold text-gray-900 outline-none focus:ring-2 focus:ring-blue-500/20"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('amount', 'Amount')}</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder={t('enterAmount', 'Enter amount')}
                                                value={amount}
                                                onChange={(event) => setAmount(event.target.value)}
                                                className="w-full bg-gray-50 rounded-[20px] px-5 py-4 font-semibold text-xl text-gray-900 outline-none focus:ring-2 focus:ring-blue-500/20"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setAmount(formatAmount(totalBalance))}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600 text-xs font-semibold bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100"
                                            >
                                                MAX
                                            </button>
                                        </div>
                                    </div>
                                    <button onClick={closeModal} className="w-full py-4 bg-blue-600 text-white rounded-[20px] font-semibold text-lg shadow-[0_8px_20px_rgba(37,99,235,0.15)] hover:bg-blue-700 active:scale-[0.98] transition-all">
                                        {t('sendNow', 'Send Now')}
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </LayoutADesktop>
    );
}
