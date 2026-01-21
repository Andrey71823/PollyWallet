import React, { useState } from 'react';
import LayoutA from './LayoutA';
import { Send, ArrowDown, ArrowUp, ArrowUpRight, ArrowDownLeft, TrendingUp, X, Clock, Rocket } from 'lucide-react';

export default function WalletA() {
    const [activeModal, setActiveModal] = useState(null); // 'deposit', 'withdraw', 'send'
    const [amount, setAmount] = useState('');
    const [recipient, setRecipient] = useState('');
    const [showAllTransactions, setShowAllTransactions] = useState(false);

    const totalBalance = 5420.5;
    const depositBalance = 8234.56;
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
        { type: 'Daily Interest', date: '2026-01-16 14:30:45', amount: '+$11.23', color: 'text-green-500' },
        { type: 'Direct Bonus', date: '2026-01-16 10:15:22', amount: '+$150.00', color: 'text-green-500' },
        { type: 'Team Bonus', date: '2026-01-15 18:42:11', amount: '+$85.50', color: 'text-green-500' },
        { type: 'NFT Mint', date: '2026-01-15 09:20:33', amount: '-$1,000.00', color: 'text-red-500' },
        { type: 'Transfer - alice123', date: '2026-01-14 16:55:18', amount: '-$250.00', color: 'text-red-500' },
        { type: 'Deposit', date: '2026-01-14 12:30:00', amount: '+$2,000.00', color: 'text-green-500' },
        { type: 'Withdraw', date: '2026-01-13 20:15:42', amount: '-$500.00', color: 'text-red-500' },
        { type: 'Daily Interest', date: '2026-01-15 14:30:45', amount: '+$10.87', color: 'text-green-500' },
    ];
    const visibleTransactions = showAllTransactions ? transactions : transactions.slice(0, 4);

    return (
        <LayoutA>
            <div className="relative">
                <div className="px-6 pt-2 pb-20 space-y-4">
                    {/* Sticky Header */}
                    <div className="sticky top-0 z-40 bg-[#F9FAFB]/80 backdrop-blur-xl py-2 -mx-6 px-6 border-b border-gray-100/50 flex justify-between items-center transition-all duration-300">
                        <div>
                            <p className="text-gray-400 text-sm font-bold tracking-wide">Good Afternoon,</p>
                            <h1 className="text-xl font-black text-gray-900 leading-none">Tobechukwu!</h1>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white shadow-soft p-0.5">
                            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full rounded-full object-cover" />
                        </div>
                    </div>

                    {/* Balance Section */}
                    <div className="space-y-4">
                        <div>
                            <p className="text-gray-400 font-bold text-sm tracking-wide ml-1">Total balance</p>
                            <h2 className="text-5xl font-black text-gray-900 tracking-tight">$5,420.50</h2>
                        </div>

                        <div className="flex gap-4">
                            <div className="bg-green-50 px-4 py-3 rounded-2xl flex-1 border border-green-100">
                                <p className="text-[10px] uppercase font-bold text-green-600 tracking-wider">Total Invest</p>
                                <p className="text-lg font-black text-green-700">$1,248.50</p>
                                <div className="mt-1 flex items-center justify-between">
                                    <p className="text-[10px] text-green-600 font-bold">+ $11.23</p>
                                    <span className="text-[9px] font-black text-green-700 bg-green-100 px-1.5 py-0.5 rounded border border-green-200">APY 10%</span>
                                </div>
                            </div>
                            <div className="bg-blue-50 px-4 py-3 rounded-2xl flex-1 border border-blue-100">
                                <p className="text-[10px] uppercase font-bold text-blue-600 mb-0.5 tracking-wider">Total Bonus</p>
                                <p className="text-lg font-black text-blue-700">$398.20</p>
                                <p className="text-[10px] text-blue-600 font-bold mt-0.5">+ $85.50</p>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <button onClick={() => openModal('deposit')} className="flex-1 h-12 bg-blue-600 text-white rounded-[18px] shadow-lg hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 font-bold text-[13px] ring-4 ring-blue-500/10">
                            <ArrowDown size={16} strokeWidth={2.5} />
                            Deposit
                        </button>
                        <button onClick={() => openModal('withdraw')} className="flex-1 h-12 bg-white rounded-[18px] shadow-soft hover:shadow-soft-hover active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 font-bold text-gray-900 text-[13px] border border-gray-100">
                            <ArrowUp size={16} strokeWidth={2.5} />
                            Withdraw
                        </button>
                        <button onClick={() => openModal('send')} className="flex-1 h-12 bg-white rounded-[18px] shadow-soft hover:shadow-soft-hover active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 font-bold text-gray-900 text-[13px] border border-gray-100">
                            <Send size={16} className="text-gray-900" strokeWidth={2.5} />
                            Send
                        </button>
                    </div>

                    {/* Banner */}
                    <div className="relative w-full h-36 bg-gray-900 rounded-[24px] overflow-hidden flex items-center px-6 shadow-xl border border-black/5 group">
                        <div className="relative z-10 space-y-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-white font-black text-lg tracking-wide">UPGRADE PRO</span>
                                <Rocket size={20} className="text-white" />
                            </div>
                            <p className="text-gray-400 text-xs font-medium max-w-[200px] leading-relaxed">
                                Elevate your productivity and achieve more with our Pro plan!
                            </p>
                        </div>

                        <div className="absolute right-0 top-0 bottom-0 w-[140px] bg-gradient-to-l from-gray-800 to-transparent">
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.05)] animate-breathe">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center shadow-inner animate-breathe-strong">
                                    <TrendingUp className="text-white" size={24} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Activity List */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-end px-1">
                            <h3 className="text-lg font-black text-gray-900 tracking-tight">Transactions</h3>
                            <button
                                type="button"
                                onClick={() => setShowAllTransactions((prev) => !prev)}
                                className="text-xs text-gray-400 font-bold hover:text-gray-600 transition-colors uppercase tracking-wider"
                            >
                                {showAllTransactions ? 'Show less' : 'See all'}
                            </button>
                        </div>

                        <div className="space-y-3">
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
                                    {activeModal === 'deposit' ? 'Deposit USDC' : activeModal === 'withdraw' ? 'Withdraw' : 'Send'}
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
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Amount</label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    placeholder="Enter amount"
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
                                                <span>Balance: {formatAmount(depositBalance)} USDC (Polygon)</span>
                                            </p>
                                        </div>
                                        <button onClick={closeModal} className="w-full py-4 bg-blue-600 text-white rounded-[20px] font-bold text-lg shadow-lg hover:bg-blue-700 active:scale-[0.98] transition-all">
                                            Confirm Deposit
                                        </button>
                                    </>
                                )}

                                {activeModal === 'withdraw' && (
                                    <>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Amount</label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    placeholder="Enter amount"
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
                                            <div>
                                                <p className="text-sm font-bold text-gray-900">Processing</p>
                                                <p className="text-xs text-yellow-700">Within 3 business days</p>
                                            </div>
                                        </div>
                                        <button onClick={closeModal} className="w-full py-4 bg-gray-900 text-white rounded-[20px] font-bold text-lg shadow-lg hover:bg-black active:scale-[0.98] transition-all">
                                            Request Withdrawal
                                        </button>
                                    </>
                                )}

                                {activeModal === 'send' && (
                                    <>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Recipient ID</label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    placeholder="Enter user ID"
                                                    value={recipient}
                                                    onChange={(event) => setRecipient(event.target.value)}
                                                    className="w-full bg-gray-50 rounded-[20px] px-5 py-4 font-bold text-gray-900 outline-none focus:ring-2 focus:ring-blue-500/20"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Amount</label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    placeholder="Enter amount"
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
                                            Send Now
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
