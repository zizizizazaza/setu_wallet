import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import { translations } from '../translations';

const WelcomePage = () => {
    const navigate = useNavigate();
    const { language } = useWallet();
    const t = translations[language];

    return (
        <div className="flex min-h-screen w-full overflow-hidden bg-white">
            <div className="w-full lg:w-[45%] bg-white flex flex-col p-8 lg:p-16 xl:p-24 relative z-10">
                <div className="flex items-center gap-4 mb-auto">
                    <img src="/setu-logo.png" alt="Setu Logo" className="w-12 h-12 object-contain" />
                    <div className="flex flex-col">
                        <span className="text-black font-extrabold tracking-tight text-xl leading-none">Setu</span>
                        <span className="text-slate-400 text-[10px] font-bold tracking-wider">Wallet</span>
                    </div>
                </div>

                <div className="max-w-md">
                    <div className="inline-flex items-center gap-2 mb-8">
                        <span className="material-symbols-outlined text-black font-bold text-xl">check_circle</span>
                        <span className="text-black text-[14px] font-bold tracking-wider">{t.accountCreated}</span>
                    </div>
                    <h1 className="text-[48px] font-bold text-black leading-[1.1] mb-6 tracking-tight">
                        {t.welcomeTitle}
                    </h1>
                    <p className="text-[18px] font-normal text-brand-muted leading-relaxed mb-10 max-w-sm">
                        {t.welcomeText}
                    </p>
                    <div className="space-y-8">
                        <button
                            onClick={() => navigate('/locked')}
                            className="w-full sm:w-auto px-10 py-4 bg-black text-white text-[16px] font-semibold rounded-lg hover:bg-zinc-800 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                        >
                            {t.goToSetu}
                            <span className="material-symbols-outlined text-xl">arrow_forward</span>
                        </button>
                        <div className="flex items-center">
                            <a className="text-zinc-400 hover:text-black transition-colors duration-200 text-[12px] font-medium tracking-wide flex items-center gap-2 font-sans" href="#">
                                <span className="material-symbols-outlined text-[18px]">push_pin</span>
                                {t.pinExtensionNotice}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-auto pt-12"></div>
            </div>

            <div className="hidden lg:flex flex-1 light-geometric-bg relative overflow-hidden items-center justify-center border-l border-gray-100">
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Background Ripples */}
                    <div className="absolute w-[600px] h-[600px] rounded-full border border-black/[0.02]"></div>
                    <div className="absolute w-[450px] h-[450px] rounded-full border border-black/[0.03]"></div>

                    {/* Central Glass Element */}
                    <div className="relative z-10 w-56 h-72 glass-element rounded-[3rem] flex flex-col items-center justify-center shadow-2xl shadow-black/[0.02]">
                        <div className="w-full h-full border border-black/5 rounded-[3rem] flex flex-col items-center justify-center relative overflow-hidden">
                            <div
                                className="absolute inset-0 opacity-[0.03]"
                                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }}
                            ></div>
                            <div className="w-24 h-24 bg-black/5 rounded-full flex items-center justify-center mb-8">
                                <span className="material-symbols-outlined text-black/20 text-6xl font-extralight">celebration</span>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-black/20"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-black/10"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-black/5"></div>
                            </div>
                        </div>

                        {/* Floating Accents */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 glass-element rounded-2xl shadow-lg border border-black/5 flex items-center justify-center">
                            <span className="material-symbols-outlined text-black/20 text-3xl">auto_awesome</span>
                        </div>
                    </div>

                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.02]" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <circle cx="20" cy="80" fill="none" r="5" stroke="black" strokeWidth="0.1"></circle>
                        <circle cx="85" cy="15" fill="none" r="3" stroke="black" strokeWidth="0.1"></circle>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;
