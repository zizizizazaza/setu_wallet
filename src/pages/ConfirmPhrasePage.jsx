import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import { translations } from '../translations';

const ConfirmPhrasePage = () => {
    const navigate = useNavigate();
    const { language } = useWallet();
    const t = translations[language];

    return (
        <div className="h-screen flex overflow-hidden bg-white">
            <div className="w-full lg:w-1/2 flex flex-col bg-white p-8 lg:p-12 xl:p-16 overflow-y-auto z-10">
                <header className="flex items-center justify-between mb-8">
                    <button
                        onClick={() => navigate('/recovery')}
                        className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors group"
                    >
                        <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                        <span className="text-[15px] font-normal">{t.back}</span>
                    </button>
                    <div className="w-20"></div>
                </header>

                <div className="max-w-2xl mx-auto w-full flex-1 flex flex-col">
                    <div className="mb-6">
                        <h1 className="text-[28px] font-bold text-black leading-tight tracking-[-0.01em] mb-2">{t.confirmRecoveryPhrase}</h1>
                        <p className="text-gray-500 text-[14px] font-normal leading-[1.6] mb-6">
                            {t.verifyPhraseInstruction}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="flex items-center gap-3 bg-gray-50 border border-gray-100 px-4 py-3 rounded-xl transition-all relative">
                                <span className="text-[14px] font-normal text-gray-300 w-5 pointer-events-none">
                                    {(i + 1).toString().padStart(2, '0')}
                                </span>
                                <input
                                    className="w-full bg-transparent outline-none text-[14px] font-semibold text-black placeholder:text-gray-200"
                                    placeholder={language === 'Chinese' ? '单词' : 'Word'}
                                    type="text"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="mt-auto pt-6">
                        <button
                            onClick={() => navigate('/set-password')}
                            className="w-full bg-black text-white font-bold py-4 rounded-xl text-[15px] leading-none hover:bg-gray-900 transition-all active:scale-[0.99] mb-4"
                        >
                            {t.continue}
                        </button>
                    </div>
                </div>
            </div>

            <div className="hidden lg:flex lg:w-1/2 light-geometric-bg relative items-center justify-center border-l border-gray-100 overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Background Ripples */}
                    <div className="absolute w-[500px] h-[500px] rounded-full border border-black/[0.03]"></div>
                    <div className="absolute w-[400px] h-[400px] rounded-full border border-black/[0.04]"></div>
                    <div className="absolute w-[300px] h-[300px] rounded-full border border-black/[0.05]"></div>

                    {/* Central Glass Element */}
                    <div className="relative z-10 w-64 h-64 glass-element rounded-full flex items-center justify-center shadow-2xl shadow-black/[0.02]">
                        <div className="w-full h-full border border-black/5 rounded-full flex items-center justify-center overflow-hidden relative">
                            <div
                                className="absolute inset-0 opacity-[0.03]"
                                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }}
                            ></div>
                            <span className="material-symbols-outlined text-black/10 text-[100px] font-extralight">verified_user</span>
                        </div>

                        {/* Floating Accents */}
                        <div className="absolute top-2 -left-12 w-16 h-16 glass-element rounded-xl rotate-[15deg] flex items-center justify-center shadow-lg border border-black/5">
                            <span className="material-symbols-outlined text-black/20 text-3xl font-light">fingerprint</span>
                        </div>
                        <div className="absolute -bottom-6 right-0 w-24 h-24 glass-element rounded-[2.5rem] -rotate-[10deg] flex items-center justify-center shadow-lg border border-black/5">
                            <span className="material-symbols-outlined text-black/20 text-5xl font-light">done_all</span>
                        </div>
                    </div>

                    {/* Geometric Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.02]" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" fill="none" r="45" stroke="black" strokeWidth="0.1"></circle>
                        <line stroke="black" strokeWidth="0.1" x1="0" x2="100" y1="50" y2="50"></line>
                        <line stroke="black" strokeWidth="0.1" x1="50" x2="50" y1="0" y2="100"></line>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ConfirmPhrasePage;
