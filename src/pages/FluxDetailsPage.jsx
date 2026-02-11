import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import { translations } from '../translations';

const FluxDetailsPage = () => {
    const navigate = useNavigate();
    const { language } = useWallet();
    const t = translations[language];

    const isCN = language === 'Chinese';

    return (
        <div className="bg-white min-h-screen flex items-center justify-center p-0 font-sans text-black">
            <div className="w-[375px] h-[667px] bg-white flex flex-col overflow-hidden relative">
                {/* Modern Header */}
                <header className="px-6 py-5 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-20">
                    <button
                        onClick={() => navigate(-1)}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                    >
                        <span className="material-symbols-outlined text-gray-900 text-[22px]">arrow_back</span>
                    </button>
                    <h1 className="text-[17px] font-bold text-gray-900">{t.fluxTitle}</h1>
                    <div className="w-8" />
                </header>

                <div className="flex-1 overflow-y-auto">
                    {/* Hero Section - System Emphasis */}
                    <div className="relative pt-6 pb-8 px-8 overflow-hidden bg-gradient-to-b from-indigo-50/30 to-white">
                        <div className="relative z-10">
                            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-600 rounded-full mb-6">
                                <span className="material-symbols-outlined text-white text-[14px]">psychology</span>
                                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Cetu Core Engine</span>
                            </div>
                            <h2 className="text-[42px] font-black tracking-tighter text-gray-950 leading-[0.9] mb-4">
                                Flux <span className="text-indigo-600">Soul.</span>
                            </h2>
                            <p className="text-[16px] text-gray-500 font-medium leading-relaxed max-w-[260px]">
                                {isCN ? '连接信誉与算力，驱动 Cetu 生态运转的唯一能源。' : 'The unique energy driving Cetu, bridging reputation and computing power.'}
                            </p>
                        </div>
                        {/* Abstract background element */}
                        <div className="absolute top-10 right-[-20px] w-48 h-48 bg-indigo-100 rounded-full blur-3xl opacity-50" />
                    </div>

                    {/* System Features - Grid Highlight */}
                    <div className="px-8 space-y-8 pb-10">
                        {/* Feature 1: POCW */}
                        <section>
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-indigo-600 text-[20px]">settings_input_component</span>
                                </div>
                                <h3 className="text-[14px] font-bold text-gray-900 tracking-tight">
                                    {isCN ? 'POCW 核心算法' : 'POCW Core Engine'}
                                </h3>
                            </div>
                            <p className="text-[15px] leading-relaxed text-gray-600 pl-1">
                                {t.fluxDefinition}
                            </p>
                        </section>

                        {/* Feature 2: Computation */}
                        <section>
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-indigo-600 text-[20px]">memory</span>
                                </div>
                                <h3 className="text-[14px] font-bold text-gray-900 tracking-tight">
                                    {isCN ? '可编程算力调用' : 'Programmable Computing'}
                                </h3>
                            </div>
                            <p className="text-[15px] leading-relaxed text-gray-600 pl-1">
                                {t.fluxConsumption}
                            </p>
                        </section>

                        {/* Feature 3: Non-Transferable Reputation */}
                        <section>
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-indigo-600 text-[20px]">verified_user</span>
                                </div>
                                <h3 className="text-[14px] font-bold text-gray-900 tracking-tight">
                                    {isCN ? '不可篡改的信誉体系' : 'Immutable Reputation'}
                                </h3>
                            </div>
                            <p className="text-[15px] leading-relaxed text-gray-600 pl-1">
                                {t.fluxNature}
                            </p>
                        </section>

                        {/* System Vision Highlights */}
                        <div className="bg-gray-900 rounded-[28px] p-7 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full -mr-20 -mt-20 blur-2xl" />
                            <div className="relative z-10">
                                <h4 className="text-[11px] font-bold tracking-[0.2em] text-indigo-400 uppercase mb-4">
                                    {t.fluxPhilosophyTitle}
                                </h4>
                                <p className="text-[18px] leading-tight font-bold mb-4 tracking-tight">
                                    {isCN ? '一个基于信誉的算力未来' : 'A computing future skin-in-the-game.'}
                                </p>
                                <p className="text-[14px] leading-relaxed text-gray-400 font-medium">
                                    {t.fluxPhilosophyContent}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FluxDetailsPage;
