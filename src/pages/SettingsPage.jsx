import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import { translations } from '../translations';

const SettingsPage = () => {
    const navigate = useNavigate();
    const { language, setLanguage } = useWallet();
    const t = translations[language];

    const [activeModal, setActiveModal] = useState(null); // 'password' | 'language' | null
    const [alertMessage, setAlertMessage] = useState(null);
    const [showSuccessToast, setShowSuccessToast] = useState(false);

    const languages = [
        { name: 'English', flag: '🇺🇸' },
        { name: 'Chinese', flag: '🇨🇳' },
    ];

    const menuGroups = [
        {
            title: t.security,
            items: [
                { id: 'password', label: t.changePassword, icon: 'history' },
            ]
        },
        {
            title: t.preferences,
            items: [
                { id: 'language', label: t.language, icon: 'public', value: language === 'Chinese' ? '中文' : 'English' },
            ]
        },
        {
            title: t.supportLabel,
            items: [
                { id: 'version', label: t.version, icon: 'info', value: '2.4.0' },
            ]
        }
    ];

    const handleItemClick = (id) => {
        if (id === 'password') setActiveModal('password');
        else if (id === 'language') setActiveModal('language');
        else if (id === 'version') setAlertMessage(t.upToDate);
        else setAlertMessage(`${id.split('_').join(' ')} feature coming soon!`);
    };

    const handlePasswordChange = () => {
        setShowSuccessToast(true);
        setTimeout(() => setShowSuccessToast(false), 2000);
        setActiveModal(null);
    };

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4 font-sans focus:outline-none text-black">
            <div className="w-[375px] h-[667px] bg-white shadow-2xl rounded-[32px] flex flex-col overflow-hidden border border-gray-100 relative">
                <header className="px-6 py-4 flex items-center bg-white shrink-0">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors text-gray-900 flex items-center"
                    >
                        <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                    </button>
                    <h2 className="ml-4 text-[17px] font-bold text-gray-900">{t.settings}</h2>
                </header>

                <div className="flex-1 overflow-y-auto px-0 py-4 font-sans">
                    {menuGroups.map((group, idx) => (
                        <div key={idx} className="mb-6">
                            <div className="px-8 py-2">
                                <p className="text-[11px] font-bold text-gray-400 tracking-wider font-sans">{group.title}</p>
                            </div>
                            <div className="mt-1">
                                {group.items.map((item, iIdx) => (
                                    <button
                                        key={iIdx}
                                        onClick={() => handleItemClick(item.id)}
                                        className="w-full px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-transparent text-left group"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <span className="material-symbols-outlined text-gray-400 group-hover:text-black transition-colors text-[20px] font-light">
                                                {item.icon}
                                            </span>
                                            <span className="text-[15px] font-medium text-gray-700 group-hover:text-black transition-colors">
                                                {item.label}
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            {item.value && (
                                                <span className="text-[13px] text-gray-400 font-medium">{item.value}</span>
                                            )}
                                            <span className="material-symbols-outlined text-gray-300 text-[18px]">chevron_right</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="px-10 pb-10 pt-4 shrink-0 text-center font-sans">
                    <div className="flex items-center justify-center space-x-6 mb-6">
                        <a href="#" className="text-gray-300 hover:text-black transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-black transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                    <p className="text-[10px] text-gray-300 font-bold tracking-widest">
                        Setu Wallet © 2026
                    </p>
                </div>

                {/* --- CHANGE PASSWORD MODAL --- */}
                {activeModal === 'password' && (
                    <div className="absolute inset-0 z-50 bg-white flex flex-col pt-4 animate-in fade-in slide-in-from-bottom-4 duration-300 font-sans">
                        <header className="px-6 py-4 flex items-center bg-white shrink-0 text-black">
                            <button onClick={() => setActiveModal(null)} className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors text-gray-900 flex items-center">
                                <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                            </button>
                            <h2 className="ml-4 text-[17px] font-bold text-gray-900">{t.changePassword}</h2>
                        </header>
                        <div className="px-10 flex-1 space-y-6 pt-10">
                            <div>
                                <label className="block text-[11px] font-bold text-gray-400 tracking-widest mb-3">{t.currentPassword}</label>
                                <input
                                    type="password"
                                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 outline-none focus:ring-1 focus:ring-black text-[15px] font-semibold"
                                    placeholder={language === 'Chinese' ? '请输入当前密码' : 'Enter current password'}
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-[11px] font-bold text-gray-400 tracking-widest mb-3">{t.newPassword}</label>
                                    <input
                                        type="password"
                                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 outline-none focus:ring-1 focus:ring-black text-[15px] font-semibold"
                                        placeholder={language === 'Chinese' ? '至少 8 个字符' : 'Min. 8 characters'}
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-bold text-gray-400 tracking-widest mb-3">{t.confirmPassword}</label>
                                    <input
                                        type="password"
                                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 outline-none focus:ring-1 focus:ring-black text-[15px] font-semibold"
                                        placeholder={language === 'Chinese' ? '重复新密码' : 'Repeat new password'}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="p-8 pb-10">
                            <button
                                onClick={handlePasswordChange}
                                className="w-full bg-black text-white py-4 rounded-2xl font-bold text-[15px] shadow-lg shadow-black/10 active:scale-[0.98] transition-all"
                            >
                                {t.saveChanges}
                            </button>
                        </div>
                    </div>
                )}

                {/* --- LANGUAGE MODAL --- */}
                {activeModal === 'language' && (
                    <div className="absolute inset-0 z-50 bg-white flex flex-col pt-4 animate-in fade-in slide-in-from-bottom-4 duration-300 font-sans">
                        <header className="px-6 py-4 flex items-center bg-white shrink-0 text-black">
                            <button onClick={() => setActiveModal(null)} className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors text-gray-900 flex items-center">
                                <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                            </button>
                            <h2 className="ml-4 text-[17px] font-bold text-gray-900">{t.language}</h2>
                        </header>
                        <div className="flex-1 overflow-y-auto pt-6">
                            {languages.map((lang) => (
                                <button
                                    key={lang.name}
                                    onClick={() => {
                                        setLanguage(lang.name);
                                        setActiveModal(null);
                                    }}
                                    className="w-full px-10 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center space-x-4">
                                        <span className="text-xl">{lang.flag}</span>
                                        <span className={`text-[17px] ${language === lang.name ? 'font-bold text-black' : 'font-medium text-gray-600'}`}>
                                            {lang.name === 'Chinese' ? '中文' : 'English'}
                                        </span>
                                    </div>
                                    {language === lang.name && (
                                        <span className="material-symbols-outlined text-black font-bold">check</span>
                                    )}
                                </button>
                            ))}
                        </div>
                        <div className="p-10 text-center opacity-40">
                            <p className="text-xs">{language === 'Chinese' ? '更多语言即将推出' : 'More languages coming soon'}</p>
                        </div>
                    </div>
                )}

                {/* Simple Alert Modal */}
                {alertMessage && (
                    <div className="absolute inset-0 z-[80] bg-black/40 backdrop-blur-sm flex items-center justify-center p-6 font-sans">
                        <div className="bg-white w-full rounded-[32px] p-8 animate-in zoom-in-95 fade-in duration-200 shadow-2xl border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{language === 'Chinese' ? '通知' : 'Notification'}</h3>
                            <p className="text-[15px] text-gray-500 text-center mb-8 leading-relaxed">
                                {alertMessage}
                            </p>
                            <button
                                onClick={() => setAlertMessage(null)}
                                className="w-full bg-black text-white py-4 rounded-2xl font-bold text-[15px] active:scale-[0.98] transition-all"
                            >
                                {language === 'Chinese' ? '知道了' : 'Understood'}
                            </button>
                        </div>
                    </div>
                )}

                {/* Success Toast */}
                {showSuccessToast && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100] bg-black text-white px-6 py-3 rounded-2xl font-bold text-[14px] shadow-2xl flex items-center space-x-2 animate-in fade-in zoom-in-95 duration-200 font-sans">
                        <span className="material-symbols-outlined text-[18px]">check_circle</span>
                        <span>{t.saved}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SettingsPage;
