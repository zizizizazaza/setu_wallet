import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import { translations } from '../translations';

const WalletDetailsPage = () => {
    const navigate = useNavigate();
    const { wallets, setWallets, setCurrentAccount, language } = useWallet();
    const t = translations[language];

    const wallet = wallets[0];

    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [password, setPassword] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [tempName, setTempName] = useState(wallet?.name || '');
    const [showSecurityModal, setShowSecurityModal] = useState(false);
    const [showCopySuccess, setShowCopySuccess] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    if (!wallet) return null;

    const handleVerifyPassword = () => {
        if (password.length >= 8) {
            setShowPasswordModal(false);
            setShowSecurityModal(true);
            setPassword('');
            setPasswordError('');
        } else {
            setPasswordError('Password must be at least 8 characters.');
        }
    };

    const handleSaveName = () => {
        const updatedWallets = wallets.map(w =>
            w.id === wallet.id ? { ...w, name: tempName } : w
        );
        setWallets(updatedWallets);
        setIsEditing(false);
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setShowCopySuccess(true);
        setTimeout(() => setShowCopySuccess(false), 2000);
    };

    const confirmDelete = () => {
        if (wallets.length <= 1) {
            setShowDeleteConfirm(false);
            return;
        }
        const updatedWallets = wallets.filter(w => w.id !== wallet.id);
        setWallets(updatedWallets);
        const nextWallet = updatedWallets[0];
        if (nextWallet) {
            setCurrentAccount(nextWallet.accounts[0]);
        }
        navigate('/accounts');
    };

    const mnemonicArray = (wallet.accounts[0]?.mnemonic || '').split(' ');

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4 font-sans text-black">
            <div className="w-[375px] h-[667px] bg-white shadow-2xl rounded-[32px] flex flex-col overflow-hidden border border-gray-100 relative text-black">
                <header className="px-6 py-4 flex items-center bg-white shrink-0">
                    <button
                        onClick={() => navigate('/accounts')}
                        className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors text-gray-900 flex items-center"
                    >
                        <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                    </button>
                    <h2 className="ml-4 text-[17px] font-bold text-gray-900">{t.walletDetails}</h2>
                </header>

                <div className="flex-1 flex flex-col items-center overflow-y-auto pt-8">
                    <div className="mb-8">
                        <div className="w-24 h-24 rounded-3xl bg-gray-900 flex items-center justify-center shadow-lg transform -rotate-3">
                            <span className="material-symbols-outlined text-white text-5xl">wallet</span>
                        </div>
                    </div>

                    <div className="text-center mb-10 px-6 w-full">
                        {isEditing ? (
                            <div className="flex items-center justify-center space-x-2">
                                <input
                                    autoFocus
                                    className="text-xl font-bold text-gray-900 border-b-2 border-black outline-none w-48 text-center bg-transparent text-black"
                                    value={tempName}
                                    onChange={(e) => setTempName(e.target.value)}
                                    onBlur={handleSaveName}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
                                />
                            </div>
                        ) : (
                            <div className="flex items-center justify-center space-x-2">
                                <h3 className="text-2xl font-bold text-gray-900">{wallet.name}</h3>
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="text-gray-400 hover:text-black transition-colors"
                                >
                                    <span className="material-symbols-outlined text-[20px]">edit</span>
                                </button>
                            </div>
                        )}
                        <p className="text-gray-400 text-sm mt-1 font-medium">{wallet.accounts.length} {language === 'Chinese' ? '个账户' : 'Accounts'}</p>
                    </div>

                    <div className="w-full">
                        <div className="px-8 py-2">
                            <p className="text-[11px] font-bold text-gray-400 tracking-wider font-sans">{t.security}</p>
                        </div>
                        <button
                            onClick={() => setShowPasswordModal(true)}
                            className="w-full px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors group"
                        >
                            <div className="flex items-center space-x-4">
                                <span className="material-symbols-outlined text-gray-400 group-hover:text-black transition-colors font-light">history_edu</span>
                                <span className="text-[15px] font-medium text-gray-700 group-hover:text-black">{t.showBackupPhrase}</span>
                            </div>
                            <span className="material-symbols-outlined text-gray-300 text-[18px]">chevron_right</span>
                        </button>
                    </div>
                </div>

                <div className="p-8 mt-auto shrink-0">
                    <button
                        onClick={() => setShowDeleteConfirm(true)}
                        className="w-full flex items-center justify-center space-x-2 text-red-500 hover:bg-red-50 py-4 rounded-2xl transition-all border border-transparent hover:border-red-100 font-bold text-[15px] shadow-sm active:scale-[0.98]"
                    >
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                        <span>{t.removeWallet}</span>
                    </button>
                </div>

                {/* Password Verification Modal */}
                {showPasswordModal && (
                    <div className="absolute inset-0 z-[60] bg-white flex flex-col pt-4 animate-in fade-in slide-in-from-bottom-4 duration-300 font-sans text-black">
                        <header className="px-6 py-4 flex items-center bg-white shrink-0">
                            <button
                                onClick={() => setShowPasswordModal(false)}
                                className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors text-gray-900 flex items-center"
                            >
                                <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                            </button>
                            <h2 className="ml-4 text-[17px] font-bold text-gray-900">{t.securityCheck}</h2>
                        </header>

                        <div className="flex-1 px-8 pt-10">
                            <h1 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{t.verifyPassword}</h1>
                            <p className="text-[15px] text-gray-400 leading-relaxed mb-12">
                                {t.walletBackupNotice}
                            </p>

                            <div className="space-y-6 flex flex-col items-center">
                                <div className="relative w-full flex flex-col items-center mb-8">
                                    <div className="w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center mb-8 border border-gray-100">
                                        <span className="material-symbols-outlined text-gray-400 text-[32px]">lock</span>
                                    </div>
                                    <div className="w-full relative">
                                        <label className={`text-[11px] font-bold tracking-wider ml-1 mb-2 block ${passwordError ? 'text-red-500' : 'text-gray-400'}`}>{t.currentPassword}</label>
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                                if (passwordError) setPasswordError('');
                                            }}
                                            placeholder="Enter Password"
                                            className={`w-full bg-gray-50 text-gray-900 border rounded-2xl px-6 py-5 outline-none transition-all text-[15px] font-semibold ${passwordError ? 'border-red-500 focus:border-red-600 shadow-sm shadow-red-50' : 'border-gray-100 focus:border-black'}`}
                                            autoFocus
                                        />
                                        {passwordError && (
                                            <p className="text-red-500 text-[12px] font-medium mt-2 ml-1 flex items-center space-x-1 animate-in fade-in slide-in-from-top-1">
                                                <span className="material-symbols-outlined text-[14px]">error</span>
                                                <span>{passwordError}</span>
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 pb-10">
                            <button
                                onClick={handleVerifyPassword}
                                disabled={!password}
                                className={`w-full py-4 rounded-2xl font-bold text-[15px] transition-all shadow-lg active:scale-[0.98] ${password ? 'bg-black text-white shadow-white/10' : 'bg-gray-100 text-gray-300 shadow-none cursor-not-allowed'}`}
                            >
                                {t.confirm}
                            </button>
                        </div>
                    </div>
                )}

                {/* Security Modal */}
                {showSecurityModal && (
                    <div className="absolute inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-end justify-center font-sans text-black">
                        <div className="w-full h-full bg-white rounded-t-[32px] overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-full duration-300">
                            <header className="px-6 py-4 flex items-center bg-white shrink-0">
                                <button
                                    onClick={() => setShowSecurityModal(false)}
                                    className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors text-gray-900 flex items-center"
                                >
                                    <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                                </button>
                                <h2 className="ml-4 text-[17px] font-bold text-gray-900">{t.recoverMnemonic}</h2>
                            </header>

                            <div className="flex-1 px-8 pt-0 overflow-y-auto">
                                <div className="bg-red-50 p-4 rounded-2xl border border-red-100 mb-8 mt-0">
                                    <div className="flex items-start space-x-3">
                                        <span className="material-symbols-outlined text-red-500 text-[20px] shrink-0 mt-0.5">warning</span>
                                        <p className="text-[13px] text-red-600 font-medium leading-relaxed">
                                            {t.neverShareBackup}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    {mnemonicArray.map((word, idx) => (
                                        <div key={idx} className="bg-gray-50 rounded-xl px-4 py-3 flex items-center border border-gray-100/50">
                                            <span className="text-[10px] font-bold text-gray-300 w-5">{idx + 1}</span>
                                            <span className="text-[14px] font-bold text-gray-800">{word}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 pb-10 space-y-3 shrink-0">
                                <button
                                    onClick={() => handleCopy(mnemonicArray.join(' '))}
                                    className="w-full bg-gray-50 text-gray-900 py-4 rounded-2xl font-bold text-[15px] active:scale-[0.98] transition-all border border-gray-100"
                                >
                                    {language === 'Chinese' ? '复制到剪贴板' : 'Copy to Clipboard'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Delete Confirm Modal */}
                {showDeleteConfirm && (
                    <div className="absolute inset-0 z-[70] bg-black/40 backdrop-blur-sm flex items-center justify-center p-6 font-sans text-black">
                        <div className="bg-white w-full rounded-[32px] p-8 animate-in zoom-in-95 fade-in duration-200 shadow-2xl">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{t.deleteConfirmTitle}</h3>
                            <p className="text-[15px] text-gray-500 text-center mb-8 leading-relaxed">
                                {t.walletDeleteNotice}
                            </p>
                            <div className="space-y-3">
                                <button
                                    onClick={confirmDelete}
                                    className="w-full bg-red-500 text-white py-4 rounded-2xl font-bold text-[15px] active:scale-[0.98] transition-all shadow-lg shadow-red-200"
                                >
                                    {t.deleteAnyway}
                                </button>
                                <button
                                    onClick={() => setShowDeleteConfirm(false)}
                                    className="w-full bg-gray-50 text-gray-900 py-4 rounded-2xl font-bold text-[15px] active:scale-[0.98] transition-all"
                                >
                                    {t.cancel}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Toast Success */}
                {showCopySuccess && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100] bg-black text-white px-6 py-3 rounded-2xl font-bold text-[14px] shadow-2xl flex items-center space-x-2 animate-in fade-in zoom-in-95 duration-200">
                        <span className="material-symbols-outlined text-[18px]">check_circle</span>
                        <span>{t.copied}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WalletDetailsPage;
