import React, { useState } from 'react';
import LayoutA from './LayoutA';
import HeaderActionsA from './HeaderActionsA';
import { useLocale } from '../../i18n';
import { Send, ArrowDown, ArrowUp, ArrowUpRight, ArrowDownLeft, TrendingUp, X, Clock, Rocket } from 'lucide-react';
import Logo from '../../assets/LOGO-black.svg';

export default function WalletA() {
    const { t } = useLocale();
    const [activeModal, setActiveModal] = useState(null); // 'deposit', 'withdraw', 'send'
    const [amount, setAmount] = useState('');
    const [recipient, setRecipient] = useState('');
    const [showAllTransactions, setShowAllTransactions] = useState(false);

    const totalBalance = 5420.5;
    const depositBalance = 8234.56;
    const walletAddress = '0x742d...5f3A';
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
        <LayoutA>
            <div className="relative">
                <div className="px-6 pt-1 pb-4 space-y-3">
                    {/* Header with Logo and Wallet Address (with dropdowns) */}
                    <div className="sticky top-0 z-40 bg-[#F9FAFB]/80 backdrop-blur-xl py-2 -mx-6 px-6 border-b border-gray-100/50 flex justify-between items-center transition-all duration-300">
                        <img src={Logo} alt="PolyWallet" className="h-5 w-auto" />
                        <HeaderActionsA walletAddress={walletAddress} />
                    </div>

                    {/* Balance Section */}
                    <div className="space-y-4">
                        <div>
                            <p className="text-gray-400 font-bold text-[10px] tracking-widest uppercase ml-1">{t('totalBalance', 'TOTAL BALANCE')}</p>
                            <h2 className="text-5xl font-black text-gray-900 tracking-tight">$5,420.50</h2>
                        </div>

                        <div className="flex gap-4">
                            <div className="bg-green-50 px-4 py-3 rounded-2xl flex-1 border border-green-200">
                                <p className="text-[10px] uppercase font-bold text-green-600 tracking-wider">{t('totalInvest', 'TOTAL INTEREST')}</p>
                                <p className="text-lg font-black text-green-700">$1,248.50</p>
                                <div className="mt-1 flex items-center justify-between">
                                    <p className="text-[10px] text-green-600 font-bold">+ $11.23</p>
                                    <span className="text-[9px] font-black text-green-700 bg-green-100 px-1.5 py-0.5 rounded border border-green-300">{t('apy', 'APY')} 10%</span>
                                </div>
                            </div>
                            <div className="bg-blue-50 px-4 py-3 rounded-2xl flex-1 border border-blue-100">
                                <p className="text-[10px] uppercase font-bold text-blue-600 mb-0.5 tracking-wider">{t('totalBonus', 'Total Bonus')}</p>
                                <p className="text-lg font-black text-blue-700">$398.20</p>
                                <p className="text-[10px] text-blue-600 font-bold mt-0.5">+ $85.50</p>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex items-center gap-3">
                        <button onClick={() => openModal('deposit')} className="flex-1 h-12 bg-blue-600 text-white rounded-[18px] shadow-lg hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 font-bold text-[14px] ring-4 ring-blue-500/10">
                            <ArrowDown size={16} strokeWidth={2.5} />
                            {t('deposit', 'Deposit')}
                        </button>
                        <button onClick={() => openModal('withdraw')} className="flex-1 h-12 bg-white rounded-[18px] shadow-soft hover:shadow-soft-hover active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 font-bold text-gray-900 text-[14px] border border-gray-100">
                            <ArrowUp size={16} strokeWidth={2.5} />
                            {t('withdraw', 'Withdraw')}
                        </button>
                        <button onClick={() => openModal('send')} className="flex-1 h-12 bg-white rounded-[18px] shadow-soft hover:shadow-soft-hover active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 font-bold text-gray-900 text-[14px] border border-gray-100">
                            <Send size={16} className="text-gray-900" strokeWidth={2.5} />
                            {t('send', 'Send')}
                        </button>
                    </div>

                    {/* Banner */}
                    <div className="hidden relative w-full h-36 bg-gray-900 rounded-[24px] overflow-hidden flex items-center justify-between px-6 shadow-xl border border-black/5 group">
                        <div className="relative z-10 space-y-1 max-w-[220px]">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-white font-black text-lg tracking-wide">{t('upgradePro', 'UPGRADE PRO')}</span>
                                <Rocket size={20} className="text-white" />
                            </div>
                            <p className="text-gray-400 text-xs font-medium max-w-[200px] leading-relaxed">
                                {t('upgradeDesc', 'Elevate your productivity and achieve more with our Pro plan!')}
                            </p>
                        </div>

                        <div className="relative z-10 w-20 h-20 flex items-center justify-center self-center">
                            <div className="absolute inset-0 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.05)] animate-breathe"></div>
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center shadow-inner animate-breathe-strong">
                                <TrendingUp className="text-white" size={24} />
                            </div>
                        </div>

                        <div className="absolute right-0 top-0 bottom-0 w-[180px] bg-gradient-to-l from-gray-800 to-transparent"></div>
                    </div>

                    {/* Activity List */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-end px-1">
                            <h3 className="text-lg font-black text-gray-900 tracking-tight">{t('transactions', 'Transactions')}</h3>
                            <button
                                type="button"
                                onClick={() => setShowAllTransactions((prev) => !prev)}
                                className="text-xs text-gray-400 font-bold hover:text-gray-600 transition-colors uppercase tracking-wider"
                            >
                                {showAllTransactions ? t('showLess', 'Show less') : t('seeAll', 'See all')}
                            </button>
                        </div>

                        <div className="space-y-2.5">
                            {visibleTransactions.map((tx, i) => (
                                <div key={i} className="group bg-white p-4 rounded-[20px] shadow-sm border border-gray-100 hover:shadow-md transition-all flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-[14px] flex items-center justify-center transition-colors ${tx.amount.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'}`}>
                                        {tx.amount.startsWith('+') ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-900 text-sm">{tx.type}</h4>
                                        <p className="text-xs text-gray-400 font-medium mt-0.5">{tx.date}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className={`block font-bold ${tx.color} tracking-tight`}>
                                            {tx.amount}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* MODALS */}
                {activeModal && (
                    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center px-0 sm:px-4 pb-0 sm:pb-0">
                        {/* Backdrop */}
                        <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-md transition-opacity" onClick={closeModal}></div>

                        {/* Modal Content */}
                        <div className="bg-white w-full sm:w-[400px] rounded-t-[32px] sm:rounded-[40px] p-6 pb-12 sm:pb-6 shadow-2xl relative z-10 animate-slide-up sm:animate-pop-in">
                            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6 sm:hidden"></div>

                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-black text-gray-900">
                                    {activeModal === 'deposit'
                                        ? t('depositUsdc', 'Deposit')
                                        : activeModal === 'withdraw'
                                            ? t('withdraw', 'Withdraw')
                                            : t('send', 'Send')}
                                </h2>
                                <button onClick={closeModal} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Dynamic Content based on Modal Type */}
                            <div className="space-y-6">
                                {activeModal === 'deposit' && (
                                    <>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t('amount', 'Amount')}</label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    placeholder={t('enterAmount', 'Enter amount')}
                                                    value={amount}
                                                    onChange={(event) => setAmount(event.target.value)}
                                                    className="w-full bg-gray-50 rounded-[20px] px-5 py-4 font-bold text-xl text-gray-900 outline-none focus:ring-2 focus:ring-blue-500/20"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setAmount(formatAmount(depositBalance))}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600 text-xs font-black bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100 lg:active:scale-95"
                                                >
                                                    MAX
                                                </button>
                                            </div>
                                            <p className="text-xs text-gray-400 font-medium flex justify-between px-2">
                                                <span>{t('balance', 'Balance')}: {formatAmount(depositBalance)} USDC (Polygon)</span>
                                            </p>
                                        </div>
                                        <button onClick={closeModal} className="w-full py-4 bg-blue-600 text-white rounded-[20px] font-bold text-lg shadow-lg hover:bg-blue-700 active:scale-[0.98] transition-all">
                                            {t('confirmDeposit', 'Confirm Deposit')}
                                        </button>
                                    </>
                                )}

                                {activeModal === 'withdraw' && (
                                    <>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t('amount', 'Amount')}</label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    placeholder={t('enterAmount', 'Enter amount')}
                                                    value={amount}
                                                    onChange={(event) => setAmount(event.target.value)}
                                                    className="w-full bg-gray-50 rounded-[20px] px-5 py-4 font-bold text-xl text-gray-900 outline-none focus:ring-2 focus:ring-blue-500/20"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setAmount(formatAmount(totalBalance))}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600 text-xs font-black bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100"
                                                >
                                                    MAX
                                                </button>
                                            </div>
                                        </div>
                                        <div className="bg-yellow-50 p-4 rounded-[20px] flex items-center gap-3 border border-yellow-100">
                                            <Clock size={18} className="text-yellow-600" />
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <p className="text-sm font-bold text-amber-800">{t('processing', 'Processing')}</p>
                                            <p className="text-xs text-yellow-600/80">{t('withinBusinessDays', 'Within 3 business days')}</p>
                                        </div>
                                    </div>
                                        <button onClick={closeModal} className="w-full py-4 bg-gray-900 text-white rounded-[20px] font-bold text-lg shadow-lg hover:bg-black active:scale-[0.98] transition-all">
                                            {t('requestWithdrawal', 'Request Withdrawal')}
                                        </button>
                                    </>
                                )}

                                {activeModal === 'send' && (
                                    <>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t('recipientId', 'Recipient ID')}</label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    placeholder={t('enterUserId', 'Enter user ID')}
                                                    value={recipient}
                                                    onChange={(event) => setRecipient(event.target.value)}
                                                    className="w-full bg-gray-50 rounded-[20px] px-5 py-4 font-bold text-gray-900 outline-none focus:ring-2 focus:ring-blue-500/20"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t('amount', 'Amount')}</label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    placeholder={t('enterAmount', 'Enter amount')}
                                                    value={amount}
                                                    onChange={(event) => setAmount(event.target.value)}
                                                    className="w-full bg-gray-50 rounded-[20px] px-5 py-4 font-bold text-xl text-gray-900 outline-none focus:ring-2 focus:ring-blue-500/20"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setAmount(formatAmount(totalBalance))}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600 text-xs font-black bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100"
                                                >
                                                    MAX
                                                </button>
                                            </div>
                                        </div>
                                        <button onClick={closeModal} className="w-full py-4 bg-blue-600 text-white rounded-[20px] font-bold text-lg shadow-lg hover:bg-blue-700 active:scale-[0.98] transition-all">
                                            {t('sendNow', 'Send Now')}
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </LayoutA>
    );
}
