import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import { translations } from '../translations';

const ImportPhrasePage = () => {
    const navigate = useNavigate();
    const { language } = useWallet();
    const t = translations[language];

    return (
        <div className="h-screen flex overflow-hidden bg-white">
            <main className="w-full lg:w-1/2 flex flex-col p-8 lg:p-12 xl:p-16 overflow-y-auto z-10 bg-white">
                <header className="flex items-center justify-between mb-8">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors group"
                    >
                        <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                        <span className="text-[15px] font-normal">{t.back}</span>
                    </button>
                    <div className="w-20"></div>
                </header>

                <div className="max-w-xl mx-auto w-full flex-1 flex flex-col">
                    <div className="mb-6">
                        <h1 className="text-[28px] font-bold text-black leading-tight tracking-[-0.01em] mb-2">{t.enterRecoveryPhrase}</h1>
                        <p className="text-gray-500 text-[14px] font-normal leading-[1.6] mb-6">{t.importPhraseInstruction}</p>
                    </div>

                    <div className="bg-gray-50/50 rounded-[24px] p-6 border border-gray-100 mb-4">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-[12px] font-bold text-gray-400 tracking-wider font-sans">{t.recoverMnemonic}</span>
                            <div className="flex items-center bg-gray-100/50 p-1 rounded-lg">
                                <button className="px-4 py-1 text-[11px] font-bold bg-white shadow-sm rounded-md text-black transition-all">12 {language === 'Chinese' ? '位单词' : 'Words'}</button>
                                <button className="px-4 py-1 text-[11px] font-bold text-gray-400 hover:text-black transition-all">24 {language === 'Chinese' ? '位单词' : 'Words'}</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
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
                    </div>

                    <div className="flex gap-3 mb-6">
                        <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 py-3 rounded-xl text-[14px] font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                            <span className="material-symbols-outlined text-[18px]">upload_file</span>
                            {t.uploadFile}
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 py-3 rounded-xl text-[14px] font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                            <span className="material-symbols-outlined text-[18px]">content_paste</span>
                            {t.pasteClipboard}
                        </button>
                    </div>

                    <div className="mt-auto pt-4">
                        <button
                            onClick={() => navigate('/set-password')}
                            className="w-full bg-black text-white font-bold py-4 rounded-xl text-[15px] leading-none hover:bg-zinc-900 transition-all active:scale-[0.99] mb-4 shadow-lg shadow-black/10"
                        >
                            {t.continue}
                        </button>
                        <div className="text-center">
                            <button
                                onClick={() => navigate('/recovery')}
                                className="text-[13px] text-gray-400 font-bold hover:text-black transition-colors tracking-widest"
                            >
                                {t.iNeedANewWallet}
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <aside className="hidden lg:flex lg:w-1/2 light-geometric-bg relative items-center justify-center border-l border-gray-100 overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Background Ripples */}
                    <div className="absolute w-[500px] h-[500px] rounded-full border border-black/[0.03]"></div>
                    <div className="absolute w-[400px] h-[400px] rounded-full border border-black/[0.04]"></div>
                    <div className="absolute w-[300px] h-[300px] rounded-full border border-black/[0.05]"></div>

                    {/* Central Glass Element */}
                    <div className="relative z-10 w-64 h-64 glass-element rounded-[40px] -rotate-3 flex items-center justify-center shadow-2xl shadow-black/[0.02]">
                        <div className="w-full h-full border border-black/5 rounded-[40px] flex items-center justify-center overflow-hidden relative">
                            <div
                                className="absolute inset-0 opacity-[0.03]"
                                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }}
                            ></div>
                            <span className="material-symbols-outlined text-black/10 text-[100px] font-extralight">download</span>
                        </div>

                        {/* Floating Accents */}
                        <div className="absolute -top-10 -left-6 w-16 h-16 glass-element rounded-2xl rotate-12 flex items-center justify-center shadow-lg border border-black/5">
                            <span className="material-symbols-outlined text-black/20 text-3xl font-light">terminal</span>
                        </div>
                        <div className="absolute bottom-4 -right-8 w-20 h-20 glass-element rounded-full -rotate-12 flex items-center justify-center shadow-lg border border-black/5">
                            <span className="material-symbols-outlined text-black/20 text-4xl font-light">database</span>
                        </div>
                    </div>

                    {/* Geometric Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <line stroke="black" strokeWidth="0.1" x1="0" x2="100" y1="100" y2="0"></line>
                        <line stroke="black" strokeWidth="0.1" x1="0" x2="100" y1="0" y2="100"></line>
                    </svg>
                </div>
                <div className="absolute bottom-12 text-center w-full z-10">
                    <span className="text-[12px] font-bold tracking-widest text-gray-300 font-sans">{t.secureImport}</span>
                </div>
            </aside>
        </div>
    );
};

export default ImportPhrasePage;
