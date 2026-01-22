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
                        <div className="banner-noise relative w-full h-40 bg-gradient-to-br from-[#1F2532] via-[#20283A] to-[#252D3E] rounded-[14px] overflow-hidden flex items-center justify-between px-10 shadow-material-medium border border-white/10">
                            <div className="relative z-10 space-y-2 max-w-[360px]">
                                <div className="flex items-center gap-2">
                                    <span className="text-white/90 font-semibold text-xl tracking-wide">{t('upgradePro', 'UPGRADE PRO')}</span>
                                    <Rocket size={20} className="text-white" />
                                </div>
                                <p className="text-white/60 text-sm font-medium leading-relaxed">
                                    {t('upgradeDesc', 'Elevate your productivity and achieve more with our Pro plan!')}
                                </p>
                            </div>

                            <div className="relative z-10 w-24 h-24 flex items-center justify-center">
                                <div className="absolute inset-0 rounded-full border border-white/10 bg-white/6 backdrop-blur-sm shadow-[0_0_26px_rgba(255,255,255,0.04)] animate-breathe"></div>
                                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-slate-600 to-slate-500 flex items-center justify-center shadow-inner animate-breathe-strong">
                                    <TrendingUp className="text-white" size={26} />
                                </div>
                            </div>

                            <div className="absolute right-0 top-0 bottom-0 w-[280px] bg-gradient-to-l from-[#2A3446] to-transparent"></div>
                        </div>
                    </div>

                    <div className="col-span-8 card-shell p-6">
                        <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest">{t('totalBalance', 'Total balance')}</p>
                        <h2 className="text-5xl font-semibold text-slate-900 mt-3">$5,420.50</h2>

                        <div className="mt-6 flex items-center gap-4">
                            <button onClick={() => openModal('deposit')} className="flex-1 h-12 bg-blue-600 text-white rounded-[18px] shadow-[0_8px_18px_rgba(37,99,235,0.25)] hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 font-semibold text-[14px] ring-4 ring-blue-500/15">
                                <ArrowDown size={16} strokeWidth={2.5} />
                                {t('deposit', 'Deposit')}
                            </button>
                            <button onClick={() => openModal('withdraw')} className="flex-1 h-12 bg-white/90 rounded-[18px] shadow-[0_6px_16px_rgba(15,23,42,0.05)] hover:shadow-[0_10px_20px_rgba(15,23,42,0.07)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 font-semibold text-slate-900 text-[14px] border border-[#E6EAF0]">
                                <ArrowUp size={16} strokeWidth={2.5} />
                                {t('withdraw', 'Withdraw')}
                            </button>
                            <button onClick={() => openModal('send')} className="flex-1 h-12 bg-white/90 rounded-[18px] shadow-[0_6px_16px_rgba(15,23,42,0.05)] hover:shadow-[0_10px_20px_rgba(15,23,42,0.07)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 font-semibold text-slate-900 text-[14px] border border-[#E6EAF0]">
                                <Send size={16} className="text-slate-900" strokeWidth={2.5} />
                                {t('send', 'Send')}
                            </button>
                        </div>
                    </div>

                    <div className="col-span-4 grid gap-4">
                        <div className="card-shell p-5">
                            <div className="flex items-center justify-between">
                                <span className="stat-tag stat-tag-emerald">{t('totalInvest', 'Total Invest')}</span>
                                <span className="stat-chip stat-chip-emerald">{t('apy', 'APY')} 10%</span>
                            </div>
                            <p className="text-2xl font-semibold text-slate-900 mt-4">$1,248.50</p>
                            <p className="text-sm text-emerald-600 font-medium mt-2">+ $11.23</p>
                        </div>
                        <div className="card-shell p-5">
                            <div className="flex items-center justify-between">
                                <span className="stat-tag stat-tag-sky">{t('totalBonus', 'Total Bonus')}</span>
                            </div>
                            <p className="text-2xl font-semibold text-slate-900 mt-4">$398.20</p>
                            <p className="text-sm text-sky-600 font-medium mt-2">+ $85.50</p>
                        </div>
                    </div>

                    <div className="col-span-12 card-shell p-6">
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
                                <div key={i} className="card-soft-elevated p-4 flex items-center gap-4">
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
                    <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-md transition-opacity" onClick={closeModal}></div>
                    <div className="bg-white w-full sm:w-[420px] rounded-t-[32px] sm:rounded-[40px] p-6 pb-12 sm:pb-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)] relative z-10 animate-slide-up sm:animate-pop-in">
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
                                    <button onClick={closeModal} className="w-full py-4 bg-blue-600 text-white rounded-[20px] font-semibold text-lg shadow-[0_12px_24px_rgba(37,99,235,0.25)] hover:bg-blue-700 active:scale-[0.98] transition-all">
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
                                        <div>
                                            <p className="text-sm font-semibold text-gray-900">{t('processing', 'Processing')}</p>
                                            <p className="text-xs text-yellow-700">{t('withinBusinessDays', 'Within 3 business days')}</p>
                                        </div>
                                    </div>
                                    <button onClick={closeModal} className="w-full py-4 bg-gray-900 text-white rounded-[20px] font-semibold text-lg shadow-[0_16px_30px_rgba(15,23,42,0.2)] hover:bg-black active:scale-[0.98] transition-all">
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
                                    <button onClick={closeModal} className="w-full py-4 bg-blue-600 text-white rounded-[20px] font-semibold text-lg shadow-[0_12px_24px_rgba(37,99,235,0.25)] hover:bg-blue-700 active:scale-[0.98] transition-all">
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
