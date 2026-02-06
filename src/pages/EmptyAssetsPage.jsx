import React from 'react';
import { useWallet } from '../context/WalletContext';
import { translations } from '../translations';

const EmptyAssetsPage = () => {
    const { language } = useWallet();
    const t = translations[language];
    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4 font-sans">
            <div className="w-[375px] h-[667px] bg-white shadow-2xl rounded-[32px] flex flex-col overflow-hidden border border-gray-100 relative">
                <header className="p-6 pb-2 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[10px] font-bold text-gray-400 border border-gray-100">
                            MW
                        </div>
                        <div className="flex items-center space-x-1.5">
                            <span className="text-sm font-semibold text-gray-900">Main Wallet</span>
                            <span className="material-symbols-outlined text-[16px] text-gray-300 cursor-pointer hover:text-gray-500 transition-colors">content_copy</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <span className="material-symbols-outlined text-gray-400 text-xl cursor-pointer">login</span>
                            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-black rounded-full border-2 border-white"></span>
                        </div>
                        <span className="material-symbols-outlined text-gray-400 text-xl cursor-pointer">fullscreen</span>
                    </div>
                </header>

                <div className="px-6 pt-4 pb-8">
                    <div className="bg-subtle rounded-[24px] p-6 border border-gray-50">
                        <div className="flex items-center space-x-2 text-gray-400 mb-1">
                            <span className="text-[11px] font-bold tracking-wider text-gray-400">{t.totalBalance}</span>
                            <span className="material-symbols-outlined text-[14px]">info</span>
                        </div>
                        <div className="flex items-baseline space-x-3 mb-1">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900">$0.00</h1>
                            <span className="material-symbols-outlined text-gray-300 cursor-pointer hover:text-gray-400 transition-colors">visibility_off</span>
                        </div>
                        <div className="text-gray-300 text-xs font-medium">
                            +$0.00 · +0.00%
                        </div>
                    </div>
                </div>

                <div className="px-6">
                    <div className="flex items-center border-b border-gray-50">
                        <button className="relative py-3 pr-6 text-[14px] font-semibold text-gray-900">
                            {t.tokens}
                            <span className="absolute bottom-[-1px] left-0 w-6 h-[2px] bg-black rounded-full"></span>
                        </button>
                        <button className="py-3 px-6 text-[14px] font-medium text-gray-400 hover:text-gray-600 transition-colors">
                            {t.activity}
                        </button>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center px-10 text-center">
                    <div className="flex flex-col items-center opacity-20">
                        <span className="material-symbols-outlined text-5xl mb-4 text-gray-900">account_balance_wallet</span>
                        <p className="text-sm font-medium text-gray-900 tracking-tight">{t.noAssetsFound}</p>
                        <p className="text-xs text-gray-500 mt-1">{t.readOnlyView}</p>
                    </div>
                </div>
                <div className="h-6"></div>
            </div>
        </div>
    );
};

export default EmptyAssetsPage;
