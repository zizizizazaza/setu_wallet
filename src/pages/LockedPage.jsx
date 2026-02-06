import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import { translations } from '../translations';

const LockedPage = () => {
    const navigate = useNavigate();
    const { language } = useWallet();
    const t = translations[language];
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4 font-sans text-black">
            <div className="w-[375px] h-[600px] bg-white shadow-2xl rounded-[32px] flex flex-col items-center border border-gray-100 relative p-8">
                {/* Illustration Area */}
                <div className="mt-12 mb-8 flex items-center justify-center w-full">
                    <img
                        src="/setu-logo.png"
                        alt="Setu Logo"
                        className="w-28 h-28 object-contain"
                    />
                </div>

                <div className="text-center w-full">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">{t.walletLocked}</h1>
                </div>

                <div className="w-full mt-10 space-y-4">
                    <div className="relative group">
                        <input
                            className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl text-sm transition-all focus:border-black focus:outline-none placeholder:text-gray-400 font-semibold"
                            placeholder={language === 'Chinese' ? '输入密码' : 'Enter password'}
                            type={showPassword ? 'text' : 'password'}
                        />
                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <span className="material-symbols-outlined text-[20px]">
                                {showPassword ? 'visibility_off' : 'visibility'}
                            </span>
                        </button>
                    </div>
                    <button
                        onClick={() => navigate('/tokens')}
                        className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-zinc-800 transition-all active:scale-[0.98] shadow-lg shadow-black/5"
                    >
                        {t.unlock}
                    </button>
                </div>

                <div className="mt-auto mb-4">
                    <button
                        onClick={() => navigate('/forgot-password')}
                        className="text-sm text-gray-400 hover:text-black transition-colors font-bold tracking-wide"
                    >
                        {t.forgotPassword}?
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LockedPage;
