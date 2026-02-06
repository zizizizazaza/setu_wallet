import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import { translations } from '../translations';

const NetworksPage = () => {
    const navigate = useNavigate();
    const { currentNetwork, setCurrentNetwork, language } = useWallet();
    const t = translations[language];

    const networks = [
        { name: 'Setu Mainnet', rpc: 'https://mainnet.setu.io', isDefault: true, color: 'text-black', icon: 'public' },
        { name: 'Setu Testnet', rpc: 'https://testnet.setu.io', isDefault: false, color: 'text-zinc-400', icon: 'science' },
        { name: 'Subnet: xxx', rpc: 'http://127.0.0.1:8545', isDefault: false, color: 'text-blue-400', icon: 'hub' },
    ];

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4 font-sans focus:outline-none">
            <div className="w-[375px] h-[667px] bg-white shadow-2xl rounded-[32px] flex flex-col overflow-hidden border border-gray-100 relative">
                <header className="px-6 py-4 flex items-center bg-white shrink-0">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors text-gray-900 flex items-center"
                    >
                        <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                    </button>
                    <h2 className="ml-4 text-[17px] font-bold text-gray-900">{t.networks}</h2>
                </header>

                <div className="flex-1 overflow-y-auto px-6 py-4">
                    <div className="space-y-3">
                        {networks.map((network, idx) => (
                            <div
                                key={idx}
                                onClick={() => setCurrentNetwork(network)}
                                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${currentNetwork.name === network.name
                                    ? 'border-black bg-white shadow-sm ring-1 ring-black'
                                    : 'border-gray-100 bg-gray-50 hover:border-gray-300'
                                    }`}
                            >
                                <div className="flex items-center space-x-3">
                                    <span className={`material-symbols-outlined ${network.color} text-[20px]`}>{network.icon}</span>
                                    <div>
                                        <p className="text-[14px] font-bold text-gray-900">{network.name}</p>
                                        <p className="text-[11px] text-gray-400 truncate w-48">{network.rpc}</p>
                                    </div>
                                </div>
                                {currentNetwork.name === network.name && (
                                    <span className="material-symbols-outlined text-black">check_circle</span>
                                )}
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => navigate('/add-network')}
                        className="w-full mt-6 flex items-center justify-center space-x-2 py-4 border-2 border-dashed border-gray-200 rounded-2xl text-gray-400 hover:border-gray-400 hover:text-gray-600 transition-all font-sans"
                    >
                        <span className="material-symbols-outlined">add_circle</span>
                        <span className="text-[14px] font-semibold">{t.addNetwork}</span>
                    </button>
                </div>

                <div className="p-8 mt-auto shrink-0 text-center">
                    <p className="text-xs text-gray-400 px-6">
                        {t.networkSwitchNotice}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NetworksPage;
