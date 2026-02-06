import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import { translations } from '../translations';

const SetPasswordPage = () => {
    const navigate = useNavigate();
    const { language } = useWallet();
    const t = translations[language];

    return (
        <div className="h-screen flex bg-white overflow-hidden">
            <div className="w-full lg:w-1/2 bg-white flex flex-col p-8 md:p-12 lg:p-16 relative overflow-y-auto">
                <header className="flex items-center justify-between mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center text-slate-400 hover:text-black transition-colors group"
                    >
                        <span className="material-symbols-outlined text-[24px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        <span className="ml-2 text-[15px] font-medium">{t.back}</span>
                    </button>
                    <div className="w-16"></div>
                </header>

                <main className="max-w-md w-full mx-auto flex-1 flex flex-col justify-center">
                    <div className="mb-8">
                        <h1 className="text-[28px] font-bold text-black mb-2 tracking-tight leading-tight">{t.setAPassword}</h1>
                        <p className="text-slate-500 text-[14px] leading-relaxed font-normal">
                            {t.passwordSetupInstruction}
                        </p>
                    </div>

                    <div className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-gray-400 tracking-wider ml-1 font-sans">{t.newPassword}</label>
                            <div className="relative">
                                <input className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 outline-none focus:ring-1 focus:ring-black text-[15px] pr-12" placeholder={language === 'Chinese' ? '输入密码' : 'Enter password'} type="password" />
                                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-black transition-colors">
                                    <span className="material-symbols-outlined text-xl">visibility</span>
                                </button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-gray-400 tracking-wider ml-1 font-sans">{t.confirmPassword}</label>
                            <div className="relative">
                                <input className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 outline-none focus:ring-1 focus:ring-black text-[15px] pr-12" placeholder={language === 'Chinese' ? '重复密码' : 'Repeat password'} type="password" />
                                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-black transition-colors">
                                    <span className="material-symbols-outlined text-xl">visibility</span>
                                </button>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                onClick={() => navigate('/welcome')}
                                className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-zinc-800 transition-all text-[15px] shadow-lg shadow-black/10 active:scale-[0.98]"
                            >
                                {t.continue}
                            </button>
                        </div>
                    </div>
                </main>
                <footer className="mt-auto"></footer>
            </div>

            <div className="hidden lg:flex w-1/2 light-geometric-bg items-center justify-center relative overflow-hidden border-l border-gray-100">
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Background Ripples */}
                    <div className="absolute w-[500px] h-[500px] rounded-full border border-black/[0.03]"></div>
                    <div className="absolute w-[400px] h-[400px] rounded-full border border-black/[0.04]"></div>
                    <div className="absolute w-[300px] h-[300px] rounded-full border border-black/[0.1]"></div>

                    {/* Central Glass Element */}
                    <div className="relative z-10 w-72 h-80 glass-element rounded-3xl flex flex-col items-center justify-center p-8 shadow-2xl shadow-black/[0.02]">
                        <div className="w-full h-full border border-black/5 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden">
                            <div
                                className="absolute inset-0 opacity-[0.03]"
                                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }}
                            ></div>
                            <div className="w-24 h-24 bg-black/5 rounded-2xl flex items-center justify-center mb-10">
                                <span className="material-symbols-outlined text-black/20 text-6xl font-extralight">lock</span>
                            </div>
                            <div className="w-full space-y-4 px-12">
                                <div className="h-1.5 w-full bg-black/[0.03] rounded-full"></div>
                                <div className="h-1.5 w-2/3 bg-black/[0.02] rounded-full mx-auto"></div>
                            </div>
                        </div>

                        {/* Floating Accents */}
                        <div className="absolute -top-6 -right-6 w-20 h-20 glass-element rounded-xl shadow-lg border border-black/5 flex items-center justify-center rotate-6">
                            <span className="material-symbols-outlined text-black/20 text-3xl">verified_user</span>
                        </div>
                        <div className="absolute -bottom-8 -left-8 w-24 h-24 glass-element rounded-xl shadow-lg border border-black/5 flex items-center justify-center -rotate-12">
                            <span className="material-symbols-outlined text-black/20 text-4xl">fingerprint</span>
                        </div>
                    </div>

                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <line stroke="black" strokeWidth="0.1" x1="0" x2="100" y1="0" y2="100"></line>
                        <circle cx="20" cy="20" fill="none" r="10" stroke="black" strokeWidth="0.1"></circle>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default SetPasswordPage;
