import React from 'react';

/**
 * GiftBoxNFT — soft, friendly gift-box illustration used as the cover
 * artwork of the PolyWallet NFT. Drawn as an inline SVG so it scales
 * crisply at any size and inherits theme classes.
 *
 * Props:
 *  - size: width/height in px (default 180)
 *  - className: extra classes on the outer svg
 *  - variant: 'light' (pastel) | 'dark' (on dark hero card)
 */
export default function GiftBoxNFT({ size = 180, className = '', variant = 'light', ...props }) {
    const isDark = variant === 'dark';

    // Palette — soft pastel gradients for a friendly feel
    const lidFrom = isDark ? '#60A5FA' : '#93C5FD'; // blue-300 / blue-400
    const lidTo = isDark ? '#6366F1' : '#818CF8'; // indigo-400 / indigo-500
    const bodyFrom = isDark ? '#A5B4FC' : '#C7D2FE'; // indigo-200 / indigo-300
    const bodyTo = isDark ? '#818CF8' : '#A5B4FC';
    const ribbon = isDark ? '#F472B6' : '#F9A8D4'; // pink-300/400
    const ribbonDark = isDark ? '#DB2777' : '#EC4899';
    const highlight = 'rgba(255,255,255,0.55)';

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 220 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <defs>
                <linearGradient id="gb-lid" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={lidFrom} />
                    <stop offset="100%" stopColor={lidTo} />
                </linearGradient>
                <linearGradient id="gb-body" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={bodyFrom} />
                    <stop offset="100%" stopColor={bodyTo} />
                </linearGradient>
                <linearGradient id="gb-ribbon" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={ribbon} />
                    <stop offset="100%" stopColor={ribbonDark} />
                </linearGradient>
                <radialGradient id="gb-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#FDE68A" stopOpacity="0" />
                </radialGradient>
            </defs>

            {/* Soft warm glow behind the box */}
            <circle cx="110" cy="120" r="92" fill="url(#gb-glow)" />

            {/* --- Box BODY --- */}
            <g>
                {/* main body */}
                <rect
                    x="36"
                    y="102"
                    width="148"
                    height="90"
                    rx="16"
                    fill="url(#gb-body)"
                />
                {/* soft inner highlight */}
                <rect
                    x="42"
                    y="108"
                    width="136"
                    height="12"
                    rx="6"
                    fill={highlight}
                    opacity="0.35"
                />
                {/* vertical ribbon on body */}
                <rect
                    x="99"
                    y="102"
                    width="22"
                    height="90"
                    fill="url(#gb-ribbon)"
                />
                <rect
                    x="99"
                    y="102"
                    width="22"
                    height="10"
                    fill={highlight}
                    opacity="0.3"
                />
            </g>

            {/* --- Box LID --- */}
            <g>
                <rect
                    x="28"
                    y="82"
                    width="164"
                    height="32"
                    rx="12"
                    fill="url(#gb-lid)"
                />
                {/* lid inner shadow line */}
                <rect
                    x="28"
                    y="108"
                    width="164"
                    height="6"
                    rx="3"
                    fill="rgba(0,0,0,0.08)"
                />
                {/* top highlight */}
                <rect
                    x="34"
                    y="86"
                    width="152"
                    height="8"
                    rx="4"
                    fill={highlight}
                    opacity="0.45"
                />
                {/* lid ribbon */}
                <rect
                    x="99"
                    y="82"
                    width="22"
                    height="32"
                    fill="url(#gb-ribbon)"
                />
                <rect
                    x="99"
                    y="86"
                    width="22"
                    height="6"
                    fill={highlight}
                    opacity="0.5"
                />
            </g>

            {/* --- BOW --- */}
            <g transform="translate(110 70)">
                {/* left loop */}
                <path
                    d="M0 12 C -18 -14 -46 -8 -44 14 C -42 28 -22 30 -6 18 Z"
                    fill="url(#gb-ribbon)"
                />
                {/* right loop */}
                <path
                    d="M0 12 C 18 -14 46 -8 44 14 C 42 28 22 30 6 18 Z"
                    fill="url(#gb-ribbon)"
                />
                {/* loop highlights */}
                <path
                    d="M-36 2 C -30 -6 -18 -8 -10 -2"
                    stroke={highlight}
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.6"
                />
                <path
                    d="M36 2 C 30 -6 18 -8 10 -2"
                    stroke={highlight}
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.6"
                />
                {/* knot */}
                <ellipse cx="0" cy="14" rx="9" ry="10" fill={ribbonDark} />
                <ellipse cx="-2" cy="11" rx="3" ry="3" fill={highlight} opacity="0.7" />
                {/* ribbon tails */}
                <path
                    d="M-4 24 C -10 34 -16 40 -22 44 L -14 44 C -10 40 -6 32 -2 24 Z"
                    fill={ribbonDark}
                    opacity="0.85"
                />
                <path
                    d="M4 24 C 10 34 16 40 22 44 L 14 44 C 10 40 6 32 2 24 Z"
                    fill={ribbonDark}
                    opacity="0.85"
                />
            </g>

            {/* floating sparkles */}
            <g opacity="0.9">
                <path d="M40 60 l3 0 l0 -8 l-3 0 z M36 56 l0 3 l8 0 l0 -3 z" fill="#FBBF24" opacity="0.75" />
                <circle cx="182" cy="54" r="3" fill="#F472B6" opacity="0.75" />
                <circle cx="172" cy="36" r="2" fill="#60A5FA" opacity="0.7" />
                <circle cx="52" cy="40" r="2" fill="#A78BFA" opacity="0.7" />
                <circle cx="196" cy="120" r="2.5" fill="#FDE68A" opacity="0.8" />
            </g>
        </svg>
    );
}
