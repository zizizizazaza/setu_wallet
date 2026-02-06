import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import { translations } from '../translations';

const AddNetworkPage = () => {
    const navigate = useNavigate();
    const { language } = useWallet();
    const t = translations[language];

    const [formData, setFormData] = useState({
        name: 'Setu Network',
        rpcUrl: 'http://your-ip:8081',
        symbol: 'FLUX',
        decimals: 8
    });

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4 font-sans text-black">
            <div className="w-[375px] h-[667px] bg-white shadow-2xl rounded-[32px] flex flex-col overflow-hidden border border-gray-100 relative">
                <header className="px-6 py-4 flex items-center bg-white shrink-0">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors text-gray-900 flex items-center"
                    >
                        <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                    </button>
                    <h2 className="ml-4 text-[17px] font-bold text-gray-900">{t.addNetwork}</h2>
                </header>

                <div className="flex-1 overflow-y-auto px-6 pt-4">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[12px] font-bold text-gray-400 tracking-wider ml-1">{t.networkName}</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-[15px] font-semibold focus:outline-none focus:border-black transition-colors"
                                placeholder={language === 'Chinese' ? '输入网络名称' : 'Enter network name'}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[12px] font-bold text-gray-400 tracking-wider ml-1">{t.rpcUrl}</label>
                            <input
                                type="text"
                                value={formData.rpcUrl}
                                onChange={(e) => setFormData({ ...formData, rpcUrl: e.target.value })}
                                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-[15px] font-semibold focus:outline-none focus:border-black transition-colors"
                                placeholder="https://..."
                            />
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-1 space-y-2">
                                <label className="text-[12px] font-bold text-gray-400 tracking-wider ml-1">{t.symbol}</label>
                                <input
                                    type="text"
                                    value={formData.symbol}
                                    onChange={(e) => setFormData({ ...formData, symbol: e.target.value })}
                                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-[15px] font-semibold focus:outline-none focus:border-black transition-colors"
                                    placeholder="FLUX"
                                />
                            </div>
                            <div className="flex-1 space-y-2">
                                <label className="text-[12px] font-bold text-gray-400 tracking-wider ml-1">{t.decimals}</label>
                                <input
                                    type="number"
                                    value={formData.decimals}
                                    onChange={(e) => setFormData({ ...formData, decimals: parseInt(e.target.value) })}
                                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-[15px] font-semibold focus:outline-none focus:border-black transition-colors"
                                    placeholder="8"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-white shrink-0">
                    <button
                        onClick={() => navigate(-1)}
                        className="w-full bg-black text-white py-4 rounded-2xl font-bold text-[15px] shadow-lg shadow-black/10 active:scale-[0.98] transition-all"
                    >
                        {t.saveNetwork}
                    </button>
                    <button
                        onClick={() => navigate(-1)}
                        className="w-full bg-white text-gray-400 py-3 rounded-2xl font-bold text-[13px] mt-2 hover:text-black transition-colors tracking-widest"
                    >
                        {t.cancel}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddNetworkPage;
