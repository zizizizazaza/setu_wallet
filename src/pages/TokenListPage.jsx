import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import { translations } from '../translations';

const TokenListPage = () => {
    const navigate = useNavigate();
    const { currentAccount, currentNetwork, isBalanceVisible, setIsBalanceVisible, language } = useWallet();
    const t = translations[language];

    // Current requirement: Only FLUX
    const tokens = [
        {
            symbol: 'FLUX',
            name: 'Flux Token',
            amount: currentAccount.balance,
            value: '$1.00',
            total: `$${currentAccount.balance}`,
            change: '(+2.82%)',
            changeColor: 'text-green-500',
            materialIcon: 'auto_awesome'
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4 font-sans focus:outline-none">
            <div className="w-[375px] h-[667px] bg-white shadow-2xl rounded-[32px] flex flex-col overflow-hidden border border-gray-100 relative text-black">
                <header className="p-6 pb-2 flex items-center justify-between bg-white shrink-0">
                    <div
                        onClick={() => navigate('/accounts')}
                        className="flex items-center space-x-3 cursor-pointer group"
                    >
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[10px] font-bold text-gray-400 border border-gray-100 group-hover:bg-gray-100 transition-colors">
                            {currentAccount.name.substring(0, 2).toUpperCase()}
                        </div>
                        <div className="flex items-center space-x-1.5">
                            <span className="text-[15px] font-bold text-gray-900">{currentAccount.name}</span>
                            <span className="material-symbols-outlined !fill-none text-[16px] text-gray-300 transition-colors group-hover:text-gray-500">expand_more</span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => navigate('/networks')}
                            className="flex items-center space-x-1.5 px-3 py-1 bg-gray-50 rounded-full border border-gray-100 hover:bg-gray-100 transition-all hover:border-gray-200 group"
                        >
                            <span className="material-symbols-outlined text-[14px] text-gray-400 group-hover:text-black transition-colors">
                                {currentNetwork.icon || 'public'}
                            </span>
                            <span className="text-[11px] font-bold tracking-wider text-gray-400 group-hover:text-black transition-colors">{currentNetwork.name.split(' ').pop()}</span>
                        </button>
                        <span
                            onClick={() => navigate('/settings')}
                            className="material-symbols-outlined text-[24px] cursor-pointer hover:opacity-70 transition-opacity"
                            style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}
                        >
                            settings
                        </span>
                    </div>
                </header>

                <div className="px-6 pt-4 pb-4">
                    <div className="bg-subtle rounded-[24px] p-6 border border-gray-50">
                        <div className="flex items-center space-x-2 text-gray-400 mb-1">
                            <span className="text-[11px] font-bold tracking-wider text-gray-400">{t.totalBalance}</span>
                        </div>
                        <div className="flex items-baseline space-x-3 mb-1">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                                {isBalanceVisible ? `$${currentAccount.balance}` : '••••••••'}
                            </h1>
                            <span
                                onClick={() => setIsBalanceVisible(!isBalanceVisible)}
                                className="material-symbols-outlined !fill-none text-gray-300 cursor-pointer hover:text-gray-400 transition-colors"
                            >
                                {isBalanceVisible ? 'visibility' : 'visibility_off'}
                            </span>
                        </div>
                        <div className="text-gray-500 text-xs font-medium">
                            +$34.12 · +2.82%
                        </div>
                    </div>
                </div>

                <div className="px-6">
                    <div className="flex items-center border-b border-gray-50">
                        <button className="relative py-3 pr-6 text-[14px] font-semibold text-gray-900">
                            {t.tokens}
                            <span className="absolute bottom-[-1px] left-0 w-6 h-[2px] bg-black rounded-full"></span>
                        </button>
                        <button
                            onClick={() => navigate('/activity')}
                            className="py-3 px-6 text-[14px] font-medium text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            {t.activity}
                        </button>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto px-6 pt-5 pb-5">
                    {/* Enhanced Flux Banner with Animations */}
                    <style>{`
                        @keyframes shimmer {
                            0% { background-position: 0% 50%; }
                            50% { background-position: 100% 50%; }
                            100% { background-position: 0% 50%; }
                        }
                        @keyframes float {
                            0% { transform: translateY(0) scale(1.05); }
                            50% { transform: translateY(-5px) scale(1.1); }
                            100% { transform: translateY(0) scale(1.05); }
                        }
                    `}</style>
                    <div
                        onClick={() => {
                            console.log('Navigating to flux-details...');
                            navigate('/flux-details');
                        }}
                        className="relative overflow-hidden rounded-[20px] py-4 px-5 cursor-pointer group transition-all duration-500 active:scale-[0.97] border border-indigo-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-2 text-black"
                        style={{
                            background: 'linear-gradient(-45deg, #eef2ff, #f0f9ff, #e0e7ff, #faf5ff)',
                            backgroundSize: '400% 400%',
                            animation: 'shimmer 15s ease infinite'
                        }}
                    >
                        {/* Interactive Wave Texture */}
                        <div
                            className="absolute inset-0 opacity-[0.4] pointer-events-none group-hover:opacity-[0.6] transition-opacity duration-700"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='200' viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-50 100 C 50 150, 150 50, 250 100 S 450 50, 550 100' stroke='rgba(79, 70, 229, 0.2)' fill='none' stroke-width='1.5'/%3E%3Cpath d='M-50 120 C 50 170, 150 70, 250 120 S 450 70, 550 120' stroke='rgba(79, 70, 229, 0.1)' fill='none' stroke-width='1.5'/%3E%3C/svg%3E")`,
                                backgroundSize: '200% 100%',
                                animation: 'float 8s ease-in-out infinite'
                            }}
                        />

                        {/* Subtle Glow Overlay */}
                        <div className="absolute inset-x-0 -bottom-10 h-20 bg-indigo-400/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative z-10 flex items-center justify-between">
                            <div className="text-left">
                                <div className="flex items-center space-x-2 mb-1">
                                    <span className="material-symbols-outlined text-indigo-600 text-[18px] animate-pulse">auto_awesome</span>
                                    <p className="text-[14px] font-black text-indigo-950 tracking-tight">{t.fluxIntro}</p>
                                </div>
                                <p className="text-[11px] text-indigo-600/70 font-bold leading-tight flex items-center">
                                    {language === 'Chinese' ? '探索 Cetu 算力网络的系统灵魂' : 'Explore the soul of Cetu network'}
                                    <span className="material-symbols-outlined text-[12px] ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </p>
                            </div>

                            {/* Abstract decorative element */}
                            <div className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center border border-white group-hover:rotate-12 transition-transform duration-500 shadow-sm">
                                <span className="material-symbols-outlined text-indigo-600 text-[20px]">insights</span>
                            </div>
                        </div>
                    </div>

                    {tokens.map((token, index) => (
                        <div
                            key={index}
                            onClick={() => navigate('/token-details')}
                            className="flex items-center justify-between py-5 border-b border-gray-50/50 last:border-0 hover:bg-gray-50/50 cursor-pointer transition-colors px-1 -mx-1 rounded-xl"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-xl">{token.materialIcon}</span>
                                </div>
                                <div>
                                    <p className="text-[15px] font-bold text-gray-900">{token.symbol}</p>
                                    <p className="text-[13px] text-gray-400">{token.amount} {token.symbol}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-[15px] font-bold text-gray-900">{token.total}</p>
                                <p className="text-[13px] text-gray-400">{token.value} <span className={`${token.changeColor} text-[12px]`}>{token.change}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TokenListPage;
