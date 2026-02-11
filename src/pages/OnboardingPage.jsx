import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* ═══════════════════════════════════════════════════════════════
   Slide 1 — Reputable Tokens
   Visual: A coin/token with a shield-checkmark verification badge
   ═══════════════════════════════════════════════════════════════ */
const ReputationIllustration = () => (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Subtle background ring */}
        <circle cx="100" cy="100" r="92" stroke="#f3f4f6" strokeWidth="0.8" strokeDasharray="4 8"
            className="anim-spin-slow" style={{ transformOrigin: '100px 100px' }} />

        {/* === Main Coin === */}
        {/* Coin body - outer ring */}
        <circle cx="92" cy="100" r="56" fill="none" stroke="#374151" strokeWidth="2" />
        {/* Coin inner ring */}
        <circle cx="92" cy="100" r="48" fill="none" stroke="#9ca3af" strokeWidth="0.8" strokeDasharray="2 3" />
        {/* Coin inner area fill - very light */}
        <circle cx="92" cy="100" r="44" fill="#f9fafb" />

        {/* "S" symbol on coin for Setu */}
        <text x="92" y="110" textAnchor="middle" fontFamily="Georgia, serif" fontSize="36"
            fontWeight="bold" fill="#374151" opacity="0.85">S</text>

        {/* Coin edge highlight (3D feel) */}
        <path d="M48,68 A56,56 0 0,1 136,68" fill="none" stroke="#e5e7eb" strokeWidth="1.5" />

        {/* Star decorations on coin */}
        <circle cx="67" cy="75" r="2" fill="#d1d5db" />
        <circle cx="117" cy="75" r="2" fill="#d1d5db" />
        <circle cx="67" cy="125" r="2" fill="#d1d5db" />
        <circle cx="117" cy="125" r="2" fill="#d1d5db" />

        {/* === Verification Shield Badge === */}
        {/* Shield with checkmark - overlapping bottom-right of coin */}
        <g transform="translate(128, 114)">
            {/* Shield glow */}
            <circle cx="20" cy="20" r="28" fill="#eef2ff" opacity="0.6" />
            {/* Shield shape */}
            <path d="M20,2 L36,10 L36,24 C36,34 28,42 20,44 C12,42 4,34 4,24 L4,10 Z"
                fill="#6366f1" fillOpacity="0.12" stroke="#6366f1" strokeWidth="1.8" strokeLinejoin="round" />
            {/* Checkmark inside shield */}
            <polyline points="12,21 18,27 28,15" fill="none" stroke="#6366f1" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Floating accent particles */}
        <circle cx="42" cy="56" r="2.5" fill="#818cf8" opacity="0.6" className="anim-pulse-dot" />
        <circle cx="158" cy="86" r="2" fill="#818cf8" opacity="0.4" className="anim-pulse-dot"
            style={{ animationDelay: '1s' }} />
        <circle cx="52" cy="160" r="1.8" fill="#c7d2fe" opacity="0.5" className="anim-pulse-dot"
            style={{ animationDelay: '2s' }} />

        {/* Small sparkle decorations */}
        <g stroke="#c7d2fe" strokeWidth="1" strokeLinecap="round">
            <line x1="30" y1="42" x2="36" y2="42" />
            <line x1="33" y1="39" x2="33" y2="45" />
        </g>
        <g stroke="#c7d2fe" strokeWidth="1" strokeLinecap="round">
            <line x1="160" y1="60" x2="166" y2="60" />
            <line x1="163" y1="57" x2="163" y2="63" />
        </g>
    </svg>
);

/* ═══════════════════════════════════════════════════════════════
   Slide 2 — Contribution-Based Assets
   Visual: Stacked blocks/layers building upward → gem on top
   ═══════════════════════════════════════════════════════════════ */
const ContributionIllustration = () => (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Subtle background ring */}
        <circle cx="100" cy="100" r="92" stroke="#f3f4f6" strokeWidth="0.8" strokeDasharray="4 8"
            className="anim-spin-slow" style={{ transformOrigin: '100px 100px' }} />

        {/* === Stacked contribution blocks === */}
        {/* Bottom layer - widest (past contributions) */}
        <rect x="42" y="145" width="116" height="18" rx="4"
            fill="#faf5ff" stroke="#374151" strokeWidth="1.5" />
        <line x1="58" y1="154" x2="80" y2="154" stroke="#d1d5db" strokeWidth="1" strokeLinecap="round" />
        <line x1="86" y1="154" x2="96" y2="154" stroke="#d1d5db" strokeWidth="1" strokeLinecap="round" />

        {/* Middle layer */}
        <rect x="54" y="122" width="92" height="18" rx="4"
            fill="#faf5ff" stroke="#374151" strokeWidth="1.5" />
        <line x1="68" y1="131" x2="86" y2="131" stroke="#d1d5db" strokeWidth="1" strokeLinecap="round" />
        <line x1="92" y1="131" x2="100" y2="131" stroke="#d1d5db" strokeWidth="1" strokeLinecap="round" />

        {/* Top layer - narrowest */}
        <rect x="66" y="99" width="68" height="18" rx="4"
            fill="#f5f3ff" stroke="#374151" strokeWidth="1.5" />
        <line x1="78" y1="108" x2="92" y2="108" stroke="#d1d5db" strokeWidth="1" strokeLinecap="round" />

        {/* Small "contribution" labels → little squares on blocks */}
        <rect x="104" y="150" width="6" height="6" rx="1" fill="#e9d5ff" stroke="#c084fc" strokeWidth="0.8" />
        <rect x="114" y="150" width="6" height="6" rx="1" fill="#e9d5ff" stroke="#c084fc" strokeWidth="0.8" />
        <rect x="124" y="150" width="6" height="6" rx="1" fill="#e9d5ff" stroke="#c084fc" strokeWidth="0.8" />
        <rect x="108" y="127" width="6" height="6" rx="1" fill="#e9d5ff" stroke="#c084fc" strokeWidth="0.8" />
        <rect x="118" y="127" width="6" height="6" rx="1" fill="#e9d5ff" stroke="#c084fc" strokeWidth="0.8" />
        <rect x="100" y="104" width="6" height="6" rx="1" fill="#e9d5ff" stroke="#c084fc" strokeWidth="0.8" />

        {/* === Gem / Crystal rising from blocks === */}
        <path d="M100,42 L86,68 L100,92 L114,68 Z"
            fill="#f5f3ff" stroke="#374151" strokeWidth="1.8" strokeLinejoin="round" />
        {/* Crown line */}
        <line x1="86" y1="68" x2="114" y2="68" stroke="#374151" strokeWidth="1.5" />
        {/* Facets */}
        <line x1="93" y1="55" x2="86" y2="68" stroke="#6b7280" strokeWidth="1" />
        <line x1="107" y1="55" x2="114" y2="68" stroke="#6b7280" strokeWidth="1" />
        <line x1="100" y1="68" x2="100" y2="92" stroke="#9ca3af" strokeWidth="0.8" />
        {/* Highlight facet */}
        <path d="M93,55 L100,42 L100,68 L86,68 Z" fill="#a855f7" fillOpacity="0.08" />
        {/* Sparkle on gem tip */}
        <circle cx="100" cy="42" r="3" fill="#a855f7" className="anim-pulse-dot" />

        {/* === Upward growth arrows on sides === */}
        {/* Left arrow */}
        <g stroke="#a855f7" strokeWidth="1.2" strokeLinecap="round" opacity="0.5">
            <line x1="46" y1="110" x2="46" y2="82" />
            <line x1="42" y1="88" x2="46" y2="82" />
            <line x1="50" y1="88" x2="46" y2="82" />
        </g>
        {/* Right arrow */}
        <g stroke="#a855f7" strokeWidth="1.2" strokeLinecap="round" opacity="0.5">
            <line x1="154" y1="110" x2="154" y2="82" />
            <line x1="150" y1="88" x2="154" y2="82" />
            <line x1="158" y1="88" x2="154" y2="82" />
        </g>
        {/* Center top arrow */}
        <g stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
            <line x1="100" y1="34" x2="100" y2="20" />
            <line x1="95" y1="25" x2="100" y2="20" />
            <line x1="105" y1="25" x2="100" y2="20" />
        </g>

        {/* Floating accent dots */}
        <circle cx="36" cy="72" r="2" fill="#c084fc" opacity="0.4" className="anim-pulse-dot"
            style={{ animationDelay: '1.5s' }} />
        <circle cx="164" cy="72" r="2" fill="#c084fc" opacity="0.4" className="anim-pulse-dot"
            style={{ animationDelay: '0.5s' }} />

        {/* Plus decorations */}
        <g stroke="#e9d5ff" strokeWidth="1" strokeLinecap="round">
            <line x1="165" y1="48" x2="171" y2="48" />
            <line x1="168" y1="45" x2="168" y2="51" />
            <line x1="29" y1="130" x2="35" y2="130" />
            <line x1="32" y1="127" x2="32" y2="133" />
        </g>
    </svg>
);

/* ═══════════════════════════════════════════════════════════════
   Slide 3 — Native Setu Payments
   Visual: Lightning bolt + credit card (recreated from original PNG)
   ═══════════════════════════════════════════════════════════════ */
const PaymentIllustration = () => (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Subtle background ring */}
        <circle cx="100" cy="100" r="92" stroke="#f3f4f6" strokeWidth="0.8" strokeDasharray="4 8"
            className="anim-spin-slow" style={{ transformOrigin: '100px 100px' }} />

        {/* === Credit Card === */}
        <g transform="translate(88, 68) rotate(-8)">
            {/* Card body */}
            <rect x="0" y="0" width="72" height="48" rx="6" ry="6"
                fill="#f0fdfa" stroke="#0d9488" strokeWidth="1.8" />
            {/* Card magnetic stripe */}
            <rect x="0" y="12" width="72" height="8" fill="#0d9488" opacity="0.2" />
            {/* Card chip */}
            <rect x="8" y="24" width="12" height="9" rx="2" fill="none" stroke="#0d9488" strokeWidth="1" opacity="0.6" />
            {/* Card number dots */}
            <g fill="#0d9488" opacity="0.4">
                <circle cx="36" cy="36" r="1.5" />
                <circle cx="42" cy="36" r="1.5" />
                <circle cx="48" cy="36" r="1.5" />
                <circle cx="54" cy="36" r="1.5" />
            </g>
            {/* Contactless icon */}
            <g transform="translate(57, 24)" stroke="#0d9488" strokeWidth="0.8" fill="none" opacity="0.5">
                <path d="M0,8 C2,-2 8,-2 8,4" />
                <path d="M2,8 C4,2 7,2 7,5" />
            </g>
        </g>

        {/* === Lightning Bolt === */}
        <g transform="translate(56, 42)">
            {/* Lightning shadow / back layer for depth */}
            <path d="M52,8 L32,56 L44,56 L28,100 L68,44 L54,44 L72,8 Z"
                fill="none" stroke="#99f6e4" strokeWidth="4" opacity="0.3" />
            {/* Main lightning bolt */}
            <path d="M50,10 L30,54 L42,54 L26,96 L66,44 L52,44 L70,10 Z"
                fill="#f0fdfa" stroke="#0d9488" strokeWidth="2" strokeLinejoin="round" />
            {/* Inner lightning highlight */}
            <path d="M54,18 L40,48 L48,48 L38,76"
                fill="none" stroke="#0d9488" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
        </g>

        {/* === Speed / swoosh lines === */}
        {/* Upper-right swoosh */}
        <path d="M140,56 C150,52 160,54 168,50"
            fill="none" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M144,64 C152,60 158,61 164,58"
            fill="none" stroke="#0d9488" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
        <path d="M148,72 C154,69 158,70 162,67"
            fill="none" stroke="#0d9488" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

        {/* Lower-left swoosh */}
        <path d="M62,152 C52,156 42,154 34,158"
            fill="none" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M58,144 C50,148 44,147 38,150"
            fill="none" stroke="#0d9488" strokeWidth="1" strokeLinecap="round" opacity="0.35" />

        {/* Floating accent particles */}
        <circle cx="170" cy="42" r="2.5" fill="#5eead4" opacity="0.6" className="anim-pulse-dot" />
        <circle cx="30" cy="164" r="2" fill="#5eead4" opacity="0.4" className="anim-pulse-dot"
            style={{ animationDelay: '1s' }} />
        <circle cx="160" cy="150" r="1.8" fill="#99f6e4" opacity="0.5" className="anim-pulse-dot"
            style={{ animationDelay: '2s' }} />

        {/* Plus decorations */}
        <g stroke="#99f6e4" strokeWidth="1" strokeLinecap="round">
            <line x1="170" y1="90" x2="176" y2="90" />
            <line x1="173" y1="87" x2="173" y2="93" />
            <line x1="24" y1="58" x2="30" y2="58" />
            <line x1="27" y1="55" x2="27" y2="61" />
        </g>
    </svg>
);

const slides = [
    {
        title: 'Reputable Tokens',
        description: 'Only assets verified by real on-chain behavior gain reputation backing, staying far away from junk coins.',
        illustration: 'reputation',
        color: 'from-blue-50/50 to-indigo-50/50'
    },
    {
        title: 'Contribution-Based Assets',
        description: 'Every token stems from your effort, witnessing your growth and construction in the Setu universe.',
        illustration: 'contribution',
        color: 'from-purple-50/50 to-fuchsia-50/50'
    },
    {
        title: 'Native Setu Payments',
        description: 'A seamless native payment experience, connecting reality and digital, opening a new on-chain lifestyle.',
        illustration: 'payment',
        color: 'from-teal-50/50 to-emerald-50/50'
    }
];

const OnboardingPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    const handleNext = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        } else {
            localStorage.setItem('hasSeenOnboarding', 'true');
            navigate('/tokens');
        }
    };

    const renderIllustration = () => {
        const slide = slides[currentSlide];
        if (slide.illustration === 'reputation') return <ReputationIllustration />;
        if (slide.illustration === 'contribution') return <ContributionIllustration />;
        if (slide.illustration === 'payment') return <PaymentIllustration />;
        return null;
    };

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4 font-sans focus:outline-none">
            <style>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                    100% { transform: translateY(0px); }
                }
                @keyframes slideUp {
                    from { transform: translateY(16px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes spinSlow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes pulseDot {
                    0%, 100% { opacity: 0.4; r: 2; }
                    50% { opacity: 1; r: 3.5; }
                }
                .anim-float { animation: float 5s ease-in-out infinite; }
                .anim-slide-up { animation: slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .anim-spin-slow { animation: spinSlow 20s linear infinite; }
                .anim-pulse-dot { animation: pulseDot 3s ease-in-out infinite; }
            `}</style>

            <div className="w-[375px] h-[667px] bg-white shadow-2xl rounded-[40px] flex flex-col overflow-hidden border border-gray-100 relative text-black">
                {/* Progress Bar */}
                <div className="flex gap-2 px-10 pt-10 shrink-0 relative z-30">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`h-1 flex-1 rounded-full transition-all duration-700 ${index <= currentSlide ? 'bg-black' : 'bg-gray-100'
                                }`}
                        />
                    ))}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col items-center px-10 text-center relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-b ${slides[currentSlide].color} opacity-30 transition-colors duration-1000`} />

                    <div key={currentSlide} className="relative z-10 w-full flex flex-col items-center flex-1 justify-center">
                        <div className="w-52 h-52 flex items-center justify-center mb-8 anim-float">
                            {renderIllustration()}
                        </div>

                        {/* Text */}
                        <div className="anim-slide-up">
                            <h2 className="text-[30px] font-bold text-gray-900 leading-[1.15] mb-4 tracking-tight">
                                {slides[currentSlide].title}
                            </h2>
                            <p className="text-[15px] text-gray-500 leading-relaxed font-medium px-2">
                                {slides[currentSlide].description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-10 pb-10 pt-4 shrink-0 relative z-20">
                    <button
                        onClick={handleNext}
                        className="w-full py-4 bg-black text-white text-[16px] font-bold rounded-2xl hover:bg-zinc-900 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
                    >
                        {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
                        <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                            arrow_forward
                        </span>
                    </button>

                    {currentSlide < slides.length - 1 && (
                        <button
                            onClick={() => {
                                localStorage.setItem('hasSeenOnboarding', 'true');
                                navigate('/tokens');
                            }}
                            className="w-full mt-4 text-[13px] font-bold text-gray-400 hover:text-black transition-colors"
                        >
                            Skip
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OnboardingPage;
