import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import { translations } from '../translations';

const AccountsPage = () => {
    const navigate = useNavigate();
    const { wallets, currentAccount, setCurrentAccount, setWallets, language } = useWallet();
    const t = translations[language];
    const [showAddWalletModal, setShowAddWalletModal] = useState(false);
    const [modalStep, setModalStep] = useState('options');
    const [importType, setImportType] = useState('phrase');
    const [toastMessage, setToastMessage] = useState('Copied');
    const [showToast, setShowToast] = useState(false);

    const handleSelectAccount = (account) => {
        setCurrentAccount(account);
        navigate('/tokens');
    };

    const handleAddAccountToWallet = (walletId) => {
        const updatedWallets = wallets.map(w => {
            if (w.id === walletId) {
                const newAccountId = w.accounts.length + 1;
                const newAccount = {
                    name: `Account ${newAccountId}`,
                    address: `0x${Math.random().toString(16).substring(2, 10)}...`,
                    balance: '0.00',
                    color: iToColor(newAccountId),
                    mnemonic: w.accounts[0]?.mnemonic || ''
                };
                return { ...w, accounts: [...w.accounts, newAccount] };
            }
            return w;
        });
        setWallets(updatedWallets);
    };

    const iToColor = (i) => {
        const colors = ['bg-purple-600', 'bg-lime-500', 'bg-blue-500', 'bg-orange-500', 'bg-pink-500'];
        return colors[i % colors.length];
    };

    const closeModal = () => {
        setShowAddWalletModal(false);
        setModalStep('options');
    };

    const showFeedback = (msg) => {
        setToastMessage(msg);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        showFeedback(t.copied);
    };

    const handleAddWalletSuccess = (name) => {
        const newWallet = {
            id: `w${wallets.length + 1}`,
            name: name,
            balance: '0.00',
            accounts: [
                {
                    name: 'Account 1',
                    address: `0x${Math.random().toString(16).substring(2, 10)}...`,
                    balance: '0.00',
                    color: 'bg-purple-600',
                    mnemonic: 'input arctic long either gym enhance decorate session tennis sting baby scissors'
                }
            ]
        };
        setWallets([...wallets, newWallet]);
        setModalStep('welcome');
    };

    const mnemonicArray = ['input', 'arctic', 'long', 'either', 'gym', 'enhance', 'decorate', 'session', 'tennis', 'sting', 'baby', 'scissors'];

    const [importPhrase, setImportPhrase] = useState(Array(12).fill(''));

    const handlePastePhrase = async () => {
        try {
            const text = await navigator.clipboard.readText();
            const words = text.trim().split(/\s+/).slice(0, 12);
            if (words.length > 0) {
                const newPhrase = [...importPhrase];
                words.forEach((word, i) => {
                    newPhrase[i] = word.toLowerCase();
                });
                setImportPhrase(newPhrase);
                showFeedback(t.pasted);
            }
        } catch (err) {
            console.error('Failed to read clipboard', err);
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4 font-sans text-black">
            <div className="w-[375px] h-[667px] bg-white shadow-2xl rounded-[32px] flex flex-col overflow-hidden border border-gray-100 relative">
                <header className="px-6 py-4 flex items-center bg-white shrink-0">
                    <button onClick={() => navigate('/tokens')} className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors text-gray-900 flex items-center">
                        <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                    </button>
                    <h2 className="ml-4 text-[17px] font-bold text-gray-900">{t.accounts}</h2>
                </header>

                <div className="flex-1 overflow-y-auto pt-4">
                    {wallets.map((wallet) => (
                        <div key={wallet.id} className="mb-6 group/wallet">
                            <div className="px-6 py-2 flex items-center justify-between">
                                <div className="flex flex-col">
                                    <h3 className="text-[11px] font-bold text-gray-400 tracking-wider font-sans">{wallet.name}</h3>
                                    <span className="text-[11px] text-gray-400 font-medium">${wallet.balance}</span>
                                </div>
                                <button
                                    onClick={() => navigate('/wallet-details')}
                                    className="opacity-0 group-hover/wallet:opacity-100 p-2 -mr-2 transition-opacity hover:bg-gray-100 rounded-lg"
                                >
                                    <span className="material-symbols-outlined text-gray-400 text-[20px]">more_vert</span>
                                </button>
                            </div>

                            <div className="mt-1">
                                {wallet.accounts.map((account, idx) => {
                                    const isActive = currentAccount.address === account.address;
                                    return (
                                        <div
                                            key={idx}
                                            onClick={() => handleSelectAccount(account)}
                                            className={`px-6 py-3 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors ${isActive ? 'bg-gray-50 border-l-[3px] border-black' : 'border-l-[3px] border-transparent'}`}
                                        >
                                            <div className="flex items-center space-x-3">
                                                <div className={`w-10 h-10 rounded-xl ${account.color} flex items-center justify-center`}>
                                                    <span className="material-symbols-outlined text-white text-[20px]">person</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[15px] font-semibold text-gray-900">{account.name}</span>
                                                    <span className="text-[13px] text-gray-400 font-mono tracking-tight">{account.address}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <span className="text-[15px] font-bold text-gray-900">${account.balance}</span>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setCurrentAccount(account);
                                                        navigate('/account-details');
                                                    }}
                                                    className="p-1 hover:bg-gray-200 rounded-full"
                                                >
                                                    <span className="material-symbols-outlined text-gray-300 text-[20px]">more_vert</span>
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}

                                <button
                                    onClick={() => handleAddAccountToWallet(wallet.id)}
                                    className="px-6 py-3 flex items-center space-x-3 text-blue-600 hover:bg-blue-50/50 w-full transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-[20px]">add</span>
                                    </div>
                                    <span className="text-[15px] font-bold">{t.addAccount}</span>
                                </button>
                            </div>
                            <div className="mx-6 h-[1px] bg-gray-50 mt-4"></div>
                        </div>
                    ))}
                </div>

                <div className="p-6 bg-white border-t border-gray-100 shrink-0">
                    <button
                        onClick={() => setShowAddWalletModal(true)}
                        className="w-full bg-black text-white py-4 rounded-2xl font-bold text-[15px] shadow-lg shadow-black/10 transition-all active:scale-[0.98]"
                    >
                        {t.addWallet}
                    </button>
                </div>

                {showAddWalletModal && (
                    <div className="absolute inset-0 z-50 bg-white flex flex-col pt-4 animate-in fade-in slide-in-from-bottom-4 duration-300 font-sans">
                        {modalStep === 'options' && (
                            <>
                                <header className="px-6 py-4 flex items-center shrink-0">
                                    <button onClick={closeModal} className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors text-black">
                                        <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                                    </button>
                                    <h2 className="ml-4 text-[17px] font-bold text-gray-900">{t.addWallet}</h2>
                                </header>
                                <div className="px-6 space-y-3">
                                    <button
                                        onClick={() => setModalStep('create-backup')}
                                        className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-[24px] transition-all group"
                                    >
                                        <div className="flex items-center space-x-5 text-left">
                                            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center group-hover:bg-white transition-colors border border-gray-200">
                                                <span className="material-symbols-outlined text-gray-900 text-[24px]">add_card</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[17px] font-semibold text-gray-900">{t.newWallet}</span>
                                                <span className="text-[13px] text-gray-500">{t.generateNewPhrase}</span>
                                            </div>
                                        </div>
                                        <span className="material-symbols-outlined text-gray-300 group-hover:text-gray-900 transition-colors">chevron_right</span>
                                    </button>
                                    <button
                                        onClick={() => setModalStep('import-input')}
                                        className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-[24px] transition-all group"
                                    >
                                        <div className="flex items-center space-x-5 text-left text-black">
                                            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center group-hover:bg-white transition-colors border border-gray-200">
                                                <span className="material-symbols-outlined text-gray-900 text-[24px]">download</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[17px] font-semibold text-gray-900">{t.iHaveAWallet}</span>
                                                <span className="text-[13px] text-gray-500">{t.restoreUsingPhrase}</span>
                                            </div>
                                        </div>
                                        <span className="material-symbols-outlined text-gray-300 group-hover:text-gray-900 transition-colors">chevron_right</span>
                                    </button>
                                </div>
                            </>
                        )}

                        {modalStep === 'create-backup' && (
                            <>
                                <header className="px-6 py-4 flex items-center shrink-0 text-black">
                                    <button onClick={() => setModalStep('options')} className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors text-black">
                                        <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                                    </button>
                                    <h2 className="ml-4 text-[17px] font-bold text-gray-900">{t.recoverMnemonic}</h2>
                                </header>
                                <div className="flex-1 px-10 pt-4 overflow-y-auto text-black">
                                    <h1 className="text-xl font-bold mb-2">{t.recoverMnemonic}</h1>
                                    <p className="text-[14px] text-gray-400 mb-8">{t.writeDownPhrase}</p>
                                    <div className="grid grid-cols-2 gap-3 mb-8">
                                        {mnemonicArray.map((word, i) => (
                                            <div key={i} className="bg-gray-50 rounded-xl px-4 py-3 flex items-center border border-gray-100/50">
                                                <span className="text-[10px] font-bold text-gray-300 w-5">{(i + 1).toString()}</span>
                                                <span className="text-[14px] font-bold text-gray-800">{word}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-auto p-8 pb-10 space-y-3 shrink-0">
                                    <button
                                        onClick={() => handleCopy(mnemonicArray.join(' '))}
                                        className="w-full bg-gray-50 text-gray-900 py-4 rounded-2xl font-bold text-[15px] active:scale-[0.98] transition-all border border-gray-100"
                                    >
                                        {t.copyToClipboard}
                                    </button>
                                    <button
                                        onClick={() => handleAddWalletSuccess('New Wallet')}
                                        className="w-full bg-black text-white py-4 rounded-2xl font-bold text-[15px] shadow-lg shadow-black/10 active:scale-[0.98] transition-all"
                                    >
                                        {t.iveSavedIt}
                                    </button>
                                </div>
                            </>
                        )}

                        {modalStep === 'import-input' && (
                            <>
                                <header className="px-6 py-4 flex items-center shrink-0 text-black">
                                    <button onClick={() => setModalStep('options')} className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors text-black">
                                        <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                                    </button>
                                    <h2 className="ml-4 text-[17px] font-bold">{t.importWallet}</h2>
                                </header>
                                <div className="px-6 flex mb-6 shrink-0">
                                    <div className="flex-1 flex p-1 bg-gray-100/80 rounded-2xl">
                                        <button
                                            onClick={() => setImportType('phrase')}
                                            className={`flex-1 py-2.5 text-[13px] font-bold rounded-[14px] transition-all ${importType === 'phrase' ? 'bg-white text-black shadow-sm' : 'text-gray-400'}`}
                                        >{language === 'Chinese' ? '助记词' : 'Phrase'}</button>
                                        <button
                                            onClick={() => setImportType('key')}
                                            className={`flex-1 py-2.5 text-[13px] font-bold rounded-[14px] transition-all ${importType === 'key' ? 'bg-white text-black shadow-sm' : 'text-gray-400'}`}
                                        >{language === 'Chinese' ? '私钥' : 'Key'}</button>
                                    </div>
                                </div>
                                <div className="flex-1 px-6 overflow-y-auto">
                                    {importType === 'phrase' ? (
                                        <div className="grid grid-cols-2 gap-3 text-black">
                                            {importPhrase.map((word, i) => (
                                                <div key={i} className="relative bg-gray-50 rounded-xl border border-gray-100/50">
                                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 font-bold w-4">{i + 1}</span>
                                                    <input
                                                        className="w-full bg-transparent pl-8 pr-3 py-3 outline-none text-[14px] font-semibold text-black"
                                                        placeholder={`word ${i + 1}`}
                                                        value={word}
                                                        onChange={(e) => {
                                                            const newPhrase = [...importPhrase];
                                                            newPhrase[i] = e.target.value.toLowerCase().trim();
                                                            setImportPhrase(newPhrase);
                                                        }}
                                                        onPaste={(e) => {
                                                            const pastedData = e.clipboardData.getData('Text');
                                                            const words = pastedData.trim().split(/\s+/).slice(0, 12);
                                                            if (words.length > 1) {
                                                                e.preventDefault();
                                                                const newPhrase = [...importPhrase];
                                                                words.forEach((w, index) => {
                                                                    if (i + index < 12) {
                                                                        newPhrase[i + index] = w.toLowerCase();
                                                                    }
                                                                });
                                                                setImportPhrase(newPhrase);
                                                                showFeedback(t.pasted);
                                                            }
                                                        }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <textarea
                                            rows="6"
                                            className="w-full bg-gray-50 border border-gray-100/50 rounded-2xl p-5 text-[14px] font-mono outline-none focus:border-black transition-all text-black placeholder:text-gray-300 leading-relaxed"
                                            placeholder={t.pastePrivateKey}
                                        />
                                    )}
                                </div>
                                <div className="mt-auto p-8 pb-10 space-y-3 shrink-0">
                                    {importType === 'phrase' && (
                                        <button
                                            onClick={handlePastePhrase}
                                            className="w-full bg-gray-50 text-gray-900 py-4 rounded-2xl font-bold text-[15px] active:scale-[0.98] transition-all border border-gray-100"
                                        >
                                            {t.pasteFromClipboard}
                                        </button>
                                    )}
                                    <button onClick={() => handleAddWalletSuccess('Imported Wallet')} className="w-full bg-black text-white py-4 rounded-2xl font-bold text-[15px] shadow-lg shadow-black/10 active:scale-[0.98] transition-all">{t.importWallet}</button>
                                </div>
                            </>
                        )}

                        {modalStep === 'welcome' && (
                            <div className="flex-1 flex flex-col items-center justify-center px-10 text-center text-black">
                                <div className="w-24 h-24 bg-gray-50 rounded-[32px] flex items-center justify-center mb-8 border border-gray-100">
                                    <span className="material-symbols-outlined text-black text-[48px]">check_circle</span>
                                </div>
                                <h1 className="text-xl font-bold mb-12 tracking-tight leading-tight px-4">{t.walletAdded}</h1>
                                <button onClick={closeModal} className="w-full bg-black text-white py-4 rounded-2xl font-bold text-[15px] shadow-lg shadow-black/10 active:scale-[0.98] transition-all">{t.goodToGo}</button>
                            </div>
                        )}
                    </div>
                )}

                {showToast && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100] bg-black text-white px-6 py-3 rounded-2xl font-bold text-[14px] shadow-2xl flex items-center space-x-2 animate-in fade-in zoom-in-95 duration-200">
                        <span className="material-symbols-outlined text-[18px]">check_circle</span>
                        <span>{toastMessage}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AccountsPage;
