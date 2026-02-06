import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import { translations } from '../translations';

const LandingPage = () => {
    const navigate = useNavigate();
    const { language } = useWallet();
    const t = translations[language];

    return (
        <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden">
            <main className="w-full md:w-[48%] lg:w-[45%] flex flex-col justify-between p-8 md:p-12 lg:px-16 lg:py-16 bg-white overflow-y-auto">
                <header className="flex items-center gap-3">
                    <img src="/setu-logo.png" alt="Setu Logo" className="w-10 h-10 object-contain" />
                    <div className="flex flex-col">
                        <span className="text-black font-extrabold tracking-tight text-xl leading-none">Setu</span>
                    </div>
                </header>

                <div className="max-w-md w-full my-auto">
                    <h1 className="text-[42px] font-bold text-black leading-[1.1] tracking-tight mb-4">
                        {t.heroTitle}
                    </h1>
                    <p className="text-[16px] font-normal text-black/50 leading-relaxed mb-8">
                        {t.heroSub}
                    </p>
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => navigate('/recovery')}
                            className="w-full sm:w-64 py-4 bg-black hover:bg-zinc-800 text-white font-bold text-[15px] transition-all rounded-xl text-center shadow-lg shadow-black/10 active:scale-[0.98]"
                        >
                            {t.createWallet}
                        </button>
                        <button
                            onClick={() => navigate('/import')}
                            className="w-full sm:w-64 py-4 bg-white hover:bg-zinc-50 text-black font-bold text-[15px] border border-gray-200 transition-all rounded-xl text-center active:scale-[0.98]"
                        >
                            {t.importWallet}
                        </button>
                    </div>
                </div>

                <footer>
                    <p className="text-[11px] text-black/30 leading-relaxed max-w-xs font-bold tracking-tight">
                        {t.termsNotice}
                    </p>
                </footer>
            </main>

            <aside className="hidden md:flex flex-1 illustration-bg relative items-center justify-center overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute w-[500px] h-[500px] rounded-full border border-black/[0.03]"></div>
                    <div className="absolute w-[400px] h-[400px] rounded-full border border-black/[0.04]"></div>
                    <div className="absolute w-[300px] h-[300px] rounded-full border border-black/[0.05]"></div>

                    <div className="relative z-10 w-72 h-72 glass-element rounded-3xl rotate-6 flex items-center justify-center shadow-2xl shadow-black/[0.03]">
                        <div className="w-full h-full border border-black/5 rounded-3xl flex items-center justify-center overflow-hidden relative">
                            <div
                                className="absolute inset-0 opacity-5"
                                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                            ></div>
                            <img src="/setu-logo.png" alt="" className="w-48 h-48 object-contain opacity-[0.05] select-none pointer-events-none" />
                        </div>

                        <div className="absolute -top-10 -right-10 w-20 h-20 glass-element rounded-2xl -rotate-12 flex items-center justify-center shadow-lg">
                            <span className="material-symbols-outlined text-black/20 text-4xl">deployed_code</span>
                        </div>

                        <div className="absolute bottom-10 -left-12 w-24 h-24 glass-element rounded-full flex items-center justify-center shadow-lg">
                            <span className="material-symbols-outlined text-black/20 text-5xl">shield</span>
                        </div>
                    </div>

                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <line stroke="black" strokeWidth="0.1" x1="0" x2="100" y1="100" y2="0"></line>
                        <line stroke="black" strokeWidth="0.1" x1="0" x2="100" y1="0" y2="100"></line>
                        <circle cx="50" cy="50" fill="none" r="40" stroke="black" strokeWidth="0.1"></circle>
                    </svg>
                </div>
            </aside>
        </div>
    );
};

export default LandingPage;
