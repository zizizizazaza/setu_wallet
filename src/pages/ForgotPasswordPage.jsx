import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import { translations } from '../translations';

const ForgotPasswordPage = () => {
    const navigate = useNavigate();
    const { language, resetWallet } = useWallet();
    const t = translations[language];

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4 font-sans text-black">
            <div className="w-[360px] h-[600px] bg-white shadow-2xl rounded-[40px] flex flex-col border border-gray-100 overflow-hidden relative">
                {/* Header */}
                <div className="px-6 h-16 flex items-center justify-between relative">
                    <button
                        onClick={() => navigate(-1)}
                        className="z-10 flex items-center justify-center hover:bg-gray-50 p-2 rounded-full transition-colors"
                    >
                        <span className="material-symbols-outlined text-[24px] text-gray-900">west</span>
                    </button>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="text-sm font-semibold text-gray-900 tracking-tight">{t.forgotPassword}</span>
                    </div>
                    <div className="w-10"></div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col items-center px-10 text-center">
                    <div className="mt-14 mb-10">
                        <div className="w-[140px] h-[140px] relative bg-gradient-to-b from-gray-50 to-gray-100 rounded-[48px] flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
                            {/* Lock Illustration */}
                            <div className="absolute top-[32px] w-[44px] h-[48px] border-[7px] border-gray-300 border-bottom-0 rounded-t-[22px]"></div>
                            <div className="relative top-[14px] w-[56px] h-[44px] bg-[#111827] rounded-[10px] shadow-[0_8px_16px_rgba(0,0,0,0.15)] flex items-center justify-center">
                                <div className="w-[5px] h-[12px] bg-gray-600 rounded-[3px]"></div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-[20px] font-bold leading-tight tracking-tight text-gray-900">
                            {t.setuCannotRecoverNotice}
                        </h1>
                        <p className="text-[15px] leading-relaxed text-gray-500 px-2 font-normal">
                            {t.resetWalletInstruction}
                        </p>
                    </div>
                </div>

                {/* Footer Action */}
                <div className="px-8 pb-14">
                    <button
                        onClick={() => {
                            resetWallet();
                            navigate('/');
                        }}
                        className="w-full bg-black text-white text-[15px] font-semibold py-4 rounded-2xl hover:bg-zinc-800 active:scale-[0.98] transition-all h-[56px] flex items-center justify-center shadow-lg shadow-black/5"
                    >
                        {t.resetAndWipeWallet}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
