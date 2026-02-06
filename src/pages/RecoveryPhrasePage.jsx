import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import { translations } from '../translations';

const RecoveryPhrasePage = () => {
    const navigate = useNavigate();
    const { language } = useWallet();
    const t = translations[language];
    const [showPhrase, setShowPhrase] = useState(false);
    const [showCopySuccess, setShowCopySuccess] = useState(false);

    const words = [
        'input', 'arctic', 'long', 'either',
        'gym', 'enhance', 'decorate', 'session',
        'tennis', 'sting', 'baby', 'scissors'
    ];

    const handleCopy = () => {
        navigator.clipboard.writeText(words.join(' '));
        setShowCopySuccess(true);
        setTimeout(() => setShowCopySuccess(false), 2000);
    };

    return (
        <div className="flex h-screen bg-white overflow-hidden relative font-sans text-black">
            <div className="w-1/2 flex flex-col p-8 lg:p-12 xl:p-16 overflow-y-auto bg-white">
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors group"
                    >
                        <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                        <span className="text-[15px] font-normal">{t.back}</span>
                    </button>
                    <div className="w-10"></div>
                </div>

                <div className="max-w-xl mx-auto w-full flex-1 flex flex-col">
                    <h1 className="text-[28px] font-bold text-black leading-tight tracking-[-0.01em] mb-2">
                        {t.keysToKingdom}
                    </h1>
                    <p className="text-gray-500 text-[14px] font-normal leading-[1.6] mb-6">
                        {t.recoveryPhraseInstruction}
                    </p>

                    <div className="bg-gray-50/50 rounded-[24px] p-6 border border-gray-100 mb-4">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-[12px] font-bold text-gray-400 tracking-wider font-sans">{t.recoverMnemonic}</span>
                            <button
                                onClick={() => setShowPhrase(!showPhrase)}
                                className="flex items-center gap-2 text-[13px] font-semibold text-black hover:opacity-70 transition-opacity"
                            >
                                <span className="material-symbols-outlined text-[18px]">
                                    {showPhrase ? 'visibility_off' : 'visibility'}
                                </span>
                                {showPhrase ? t.hidePhrase : t.showPhrase}
                            </button>
                        </div>
                        <div className="relative">
                            <div className={`grid grid-cols-2 gap-3 transition-all duration-300 ${!showPhrase ? 'blur-md select-none grayscale' : ''}`}>
                                {words.map((word, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-gray-50 border border-gray-100 px-4 py-3 rounded-xl transition-all">
                                        <span className="text-[14px] font-normal text-gray-300 w-5">
                                            {(index + 1).toString().padStart(2, '0')}
                                        </span>
                                        <span className="text-[14px] font-semibold text-black">{word}</span>
                                    </div>
                                ))}
                            </div>
                            {!showPhrase && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button
                                        onClick={() => setShowPhrase(true)}
                                        className="bg-black text-white px-6 py-2 rounded-full text-[13px] font-bold shadow-xl active:scale-[0.98] transition-all"
                                    >
                                        {t.clickToReveal}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex gap-3 mb-6">
                        <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 py-3 rounded-xl text-[14px] font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                            <span className="material-symbols-outlined text-[18px]">download</span>
                            {t.download}
                        </button>
                        <button
                            onClick={handleCopy}
                            className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 py-3 rounded-xl text-[14px] font-bold text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            <span className="material-symbols-outlined text-[18px]">content_copy</span>
                            {t.copy}
                        </button>
                    </div>

                    <div className="mt-auto">
                        <button
                            onClick={() => navigate('/confirm')}
                            className="w-full bg-black text-white font-bold py-4 rounded-xl text-[15px] leading-none hover:bg-gray-900 transition-all active:scale-[0.99] mb-4 shadow-lg shadow-black/10"
                        >
                            {t.iSavedPhrase}
                        </button>
                        <div className="flex justify-center">
                            <button
                                onClick={() => navigate('/import')}
                                className="text-[13px] text-gray-400 hover:text-black transition-colors font-bold tracking-widest"
                            >
                                {t.iHaveAWallet}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-1/2 light-geometric-bg relative flex items-center justify-center border-l border-gray-100 overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Background Ripples */}
                    <div className="absolute w-[500px] h-[500px] rounded-full border border-black/[0.03]"></div>
                    <div className="absolute w-[400px] h-[400px] rounded-full border border-black/[0.04]"></div>
                    <div className="absolute w-[300px] h-[300px] rounded-full border border-black/[0.05]"></div>

                    {/* Central Glass Element */}
                    <div className="relative z-10 w-64 h-64 glass-element rounded-[40px] rotate-3 flex items-center justify-center shadow-2xl shadow-black/[0.02]">
                        <div className="w-full h-full border border-black/5 rounded-[40px] flex items-center justify-center overflow-hidden relative">
                            <div
                                className="absolute inset-0 opacity-[0.03]"
                                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }}
                            ></div>
                            <span className="material-symbols-outlined text-black/10 text-[100px] font-extralight">shield_with_heart</span>
                        </div>

                        {/* Floating Accents */}
                        <div className="absolute -top-6 -right-6 w-16 h-16 glass-element rounded-2xl rotate-12 flex items-center justify-center shadow-lg border border-black/5">
                            <span className="material-symbols-outlined text-black/20 text-3xl font-light">key</span>
                        </div>
                        <div className="absolute -bottom-4 -left-8 w-20 h-20 glass-element rounded-full flex items-center justify-center shadow-lg border border-black/5">
                            <span className="material-symbols-outlined text-black/20 text-4xl font-light">lock_open</span>
                        </div>
                    </div>

                    {/* Geometric Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <line stroke="black" strokeWidth="0.1" x1="0" x2="100" y1="100" y2="0"></line>
                        <line stroke="black" strokeWidth="0.1" x1="0" x2="100" y1="0" y2="100"></line>
                        <circle cx="50" cy="50" fill="none" r="35" stroke="black" strokeWidth="0.1"></circle>
                    </svg>
                </div>

                <div className="absolute bottom-12 text-center w-full z-10">
                    <span className="text-[12px] font-medium tracking-widest text-gray-300 font-sans uppercase">{t.secureInfrastructure}</span>
                </div>
            </div>

            {/* Toast Success */}
            {showCopySuccess && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100] bg-black text-white px-6 py-3 rounded-2xl font-bold text-[14px] shadow-2xl flex items-center space-x-2 animate-in fade-in zoom-in-95 duration-200">
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    <span>{t.copied}</span>
                </div>
            )}
        </div>
    );
};

export default RecoveryPhrasePage;
