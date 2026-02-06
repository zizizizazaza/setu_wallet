import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import { translations } from '../translations';

const TokenDetailsPage = () => {
    const navigate = useNavigate();
    const { currentAccount, language } = useWallet();
    const t = translations[language];

    const tokenInfo = {
        name: 'FLUX',
        symbol: 'FLUX',
        subnet: 'Subnet-0 (ROOT)',
        decimals: 8,
        balance: currentAccount.balance,
        value: '$1,245.68',
    };

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4 font-sans focus:outline-none">
            <div className="w-[375px] h-[667px] bg-white shadow-2xl rounded-[32px] flex flex-col overflow-hidden border border-gray-100 relative text-black">
                {/* Header */}
                <header className="px-6 py-4 flex items-center bg-white shrink-0">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors text-gray-900 flex items-center"
                    >
                        <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                    </button>
                    <h2 className="ml-4 text-[17px] font-bold text-gray-900">{t.tokenDetails}</h2>
                </header>

                <div className="flex-1 overflow-y-auto">
                    {/* Token Icon & Hero */}
                    <div className="flex flex-col items-center py-8 px-6">
                        <div className="w-20 h-20 bg-black rounded-[28px] flex items-center justify-center mb-6 shadow-xl shadow-black/10">
                            <span className="material-symbols-outlined text-white text-4xl">auto_awesome</span>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-1">{tokenInfo.balance} {tokenInfo.symbol}</h1>
                        <p className="text-[15px] text-gray-500 font-medium">≈ {tokenInfo.value}</p>
                    </div>

                    {/* Stats/Info Grid */}
                    <div className="px-6 space-y-4">
                        <div className="p-5 rounded-3xl bg-gray-50 border border-gray-100/50 space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-[13px] font-bold text-gray-400 tracking-wider font-sans">{t.tokenName}</span>
                                <span className="text-[15px] font-bold text-gray-900">{tokenInfo.name}</span>
                            </div>
                            <div className="h-[1px] bg-gray-200/50 w-full" />
                            <div className="flex justify-between items-center">
                                <span className="text-[13px] font-bold text-gray-400 tracking-wider font-sans">{t.symbol}</span>
                                <span className="text-[15px] font-bold text-gray-900">{tokenInfo.symbol}</span>
                            </div>
                            <div className="h-[1px] bg-gray-200/50 w-full" />
                            <div className="flex justify-between items-center">
                                <span className="text-[13px] font-bold text-gray-400 tracking-wider font-sans">{t.subnet}</span>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    <span className="text-[15px] font-bold text-gray-900">{tokenInfo.subnet}</span>
                                </div>
                            </div>
                            <div className="h-[1px] bg-gray-200/50 w-full" />
                            <div className="flex justify-between items-center">
                                <span className="text-[13px] font-bold text-gray-400 tracking-wider font-sans">{t.decimals}</span>
                                <span className="text-[15px] font-bold text-gray-900">{tokenInfo.decimals}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TokenDetailsPage;
