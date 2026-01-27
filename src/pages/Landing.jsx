import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet, ShieldCheck } from 'lucide-react';
import { useAuth } from '../AuthContext';
import Logo from '../assets/LOGO-black.svg';

export default function Landing() {
    const navigate = useNavigate();
    const { connectWallet } = useAuth();

    const handleConnect = () => {
        connectWallet();
        navigate('/register');
    };

    return (
        <div className="min-h-screen bg-[#F3F5F7] flex flex-col relative font-sans md:justify-center md:items-center">

            {/* 1. Logo (Centered vertically in the main area) */}
            <div className="flex-1 flex items-center justify-center p-6 md:flex-none md:p-0 md:mb-12">
                <img src={Logo} alt="PolyWallet" className="h-8 w-auto" />
            </div>

            {/* 2. Footer Section (Button + Encrypted Badge) */}
            <div className="w-full max-w-md mx-auto p-6 pb-10 md:max-w-none md:w-auto md:p-0 md:pb-0">
                <div className="bg-white rounded-[32px] p-2 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] md:w-[400px] md:p-8">
                    <button
                        onClick={handleConnect}
                        className="w-full h-16 bg-[#0F1115] text-white rounded-[24px] font-bold text-lg flex items-center justify-center gap-2.5 hover:bg-black hover:scale-[1.01] active:scale-[0.98] transition-all shadow-lg"
                    >
                        <Wallet size={24} className="text-white" strokeWidth={2.5} />
                        <span>Connect Wallet</span>
                    </button>
                </div>

                <div className="mt-6 flex items-center justify-center gap-2 text-gray-400/80 font-bold text-[10px] tracking-[0.2em] uppercase md:mt-12">
                    <ShieldCheck size={14} />
                    <span>Secure & Encrypted</span>
                </div>
            </div>
        </div>
    );
}
