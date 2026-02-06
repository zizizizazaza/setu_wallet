import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import { translations } from '../translations';

const ActivityPage = () => {
    const navigate = useNavigate();
    const { currentAccount, currentNetwork, isBalanceVisible, setIsBalanceVisible, language } = useWallet();
    const t = translations[language];
    const activities = [
        {
            date: 'Today',
            items: [
                {
                    type: 'Sent',
                    address: 'To 0x8b32...4f91',
                    amount: '-120 FLUX',
                    time: '12 mins ago',
                    status: 'Pending',
                    statusIcon: 'sync',
                    amountColor: 'text-gray-900',
                    isPending: true
                },
                {
                    type: 'Received',
                    address: 'From 0x4a12...9e33',
                    amount: '+500 FLUX',
                    time: '2 hours ago',
                    status: 'Finalized',
                    statusIcon: 'check_circle',
                    amountColor: 'text-success'
                }
            ]
        },
        {
            date: 'Jan 25, 2026',
            items: [
                {
                    type: 'Sent',
                    address: 'To 0x77c2...11d0',
                    amount: '-10 FLUX',
                    time: '14:20',
                    status: 'Finalized',
                    statusIcon: 'check_circle',
                    amountColor: 'text-gray-900'
                },
                {
                    type: 'Sent',
                    address: 'To 0x33b1...aa22',
                    amount: '-1,000 FLUX',
                    time: '09:15',
                    status: 'Failed',
                    statusIcon: 'error',
                    statusColor: 'text-red-500',
                    amountColor: 'text-gray-400',
                    isFailed: true
                }
            ]
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
                        <button
                            onClick={() => navigate('/settings')}
                            className="flex items-center hover:opacity-70 transition-opacity"
                        >
                            <span className="material-symbols-outlined text-[24px] cursor-pointer" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>settings</span>
                        </button>
                    </div>
                </header>

                <div className="px-6 pt-4 pb-8 shrink-0">
                    <div className="bg-subtle rounded-[24px] p-6 border border-gray-50">
                        <div className="flex items-center space-x-2 text-gray-400 mb-1">
                            <span className="text-[11px] font-bold tracking-wider text-gray-400">{t.totalBalance}</span>
                            <span className="material-symbols-outlined !fill-none text-[14px]">info</span>
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

                <div className="px-6 shrink-0">
                    <div className="flex items-center border-b border-gray-50">
                        <button
                            onClick={() => navigate('/tokens')}
                            className="py-3 pr-6 text-[14px] font-medium text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            {t.tokens}
                        </button>
                        <button className="relative py-3 px-6 text-[14px] font-semibold text-gray-900">
                            {t.activity}
                            <span className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-6 h-[2px] bg-black rounded-full"></span>
                        </button>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto px-6 pb-6 mt-2">
                    {activities.map((group, gIdx) => (
                        <div key={gIdx} className="mb-2">
                            <p className="text-[11px] font-bold text-gray-400 mb-4 mt-6 tracking-wide">{group.date === 'Today' ? t.today : group.date}</p>
                            <div className="space-y-1">
                                {group.items.map((item, iIdx) => (
                                    <div key={iIdx} className="flex items-center justify-between py-4 hover:bg-gray-50/50 cursor-pointer transition-colors px-1 -mx-1 rounded-2xl group/item">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 shrink-0 relative">
                                                <span className={`material-symbols-outlined text-[20px] ${item.isPending ? 'animate-spin opacity-40' : item.isFailed ? 'text-red-400' : 'text-gray-900 font-light'}`}>
                                                    {item.statusIcon}
                                                </span>
                                            </div>
                                            <div className="flex flex-col min-w-0">
                                                <div className="flex items-center space-x-2">
                                                    <p className="text-[15px] font-bold text-gray-900 capitalize">
                                                        {item.type === 'Sent' ? t.sent : item.type === 'Received' ? t.received : item.type}
                                                    </p>
                                                    {item.status !== 'Finalized' && (
                                                        <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold tracking-wider ${item.isPending ? 'bg-amber-50 text-amber-500' : item.isFailed ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-400'}`}>
                                                            {item.status === 'Pending' ? t.pending : item.status === 'Failed' ? t.failed : item.status}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex items-center text-[13px] text-gray-400 space-x-1 mt-0.5">
                                                    <span className="truncate">{item.address}</span>
                                                    <span className="text-[10px] opacity-40">•</span>
                                                    <span className="shrink-0">{item.time}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right pl-4">
                                            <p className={`text-[15px] font-bold ${item.amountColor} whitespace-nowrap`}>
                                                {item.amount}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ActivityPage;
