import React, { createContext, useContext, useState } from 'react';

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState({
        name: 'Account 1',
        address: 'SP385E...6QXT',
        balance: '1,245.68',
        mnemonic: 'input arctic long either gym enhance decorate session tennis sting baby scissors'
    });

    const [wallets, setWallets] = useState([
        {
            id: 'w1',
            name: 'Wallet 01',
            balance: '1,245.68',
            accounts: [
                { name: 'Account 1', address: 'SP385E...6QXT', balance: '1,245.68', color: 'bg-purple-600', mnemonic: 'input arctic long either gym enhance decorate session tennis sting baby scissors' },
                { name: 'Account 2', address: '0xbb8...18A...', balance: '0.00', color: 'bg-lime-500' },
            ]
        }
    ]);

    const [currentNetwork, setCurrentNetwork] = useState({
        name: 'Setu Mainnet',
        isDefault: true
    });

    const [isBalanceVisible, setIsBalanceVisible] = useState(true);
    const [language, setLanguage] = useState('English');

    const resetWallet = () => {
        setWallets([]);
        setCurrentAccount(null);
    };

    return (
        <WalletContext.Provider value={{
            currentAccount, setCurrentAccount,
            wallets, setWallets,
            currentNetwork, setCurrentNetwork,
            isBalanceVisible, setIsBalanceVisible,
            language, setLanguage,
            resetWallet
        }}>
            {children}
        </WalletContext.Provider>
    );
};

export const useWallet = () => useContext(WalletContext);
