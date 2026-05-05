import React from 'react';

/**
 * GiftBoxNFT — a premium 3/4-perspective gift-box illustration used as
 * the cover artwork of the PolyWallet NFT. Drawn as inline SVG with
 * visible front face + top face + side face, a wrapping ribbon, a pushy
 * multi-loop bow, a small hanging tag, soft ground shadow and floating
 * sparkles.
 */
export default function GiftBoxNFT({ size = 240, className = '', ...props }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 260 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <defs>
                {/* --- Box gradients --- */}
                <linearGradient id="gb-front" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C7D2FE" />
                    <stop offset="60%" stopColor="#A5B4FC" />
                    <stop offset="100%" stopColor="#818CF8" />
                </linearGradient>
                <linearGradient id="gb-top" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#DBEAFE" />
                    <stop offset="100%" stopColor="#A5B4FC" />
                </linearGradient>
                <linearGradient id="gb-side" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#818CF8" />
                    <stop offset="100%" stopColor="#4F46E5" />
                </linearGradient>

                {/* --- Ribbon gradients --- */}
                <linearGradient id="gb-ribbon" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FDA4AF" />
                    <stop offset="50%" stopColor="#F472B6" />
                    <stop offset="100%" stopColor="#DB2777" />
                </linearGradient>
                <linearGradient id="gb-ribbon-top" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FBCFE8" />
                    <stop offset="100%" stopColor="#F472B6" />
                </linearGradient>
                <linearGradient id="gb-ribbon-side" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#F472B6" />
                    <stop offset="100%" stopColor="#BE185D" />
                </linearGradient>

                {/* --- Bow gradient (slightly lighter so it pops off the body) --- */}
                <radialGradient id="gb-bow" cx="50%" cy="40%" r="70%">
                    <stop offset="0%" stopColor="#FBCFE8" />
                    <stop offset="55%" stopColor="#F472B6" />
                    <stop offset="100%" stopColor="#DB2777" />
                </radialGradient>

                {/* --- Ambient glow + shadow --- */}
                <radialGradient id="gb-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#FDE68A" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="gb-shadow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#312E81" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#312E81" stopOpacity="0" />
                </radialGradient>

                <filter id="gb-soft" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="0.6" />
                </filter>
            </defs>

            {/* Warm ambient glow behind the scene */}
            <circle cx="130" cy="130" r="112" fill="url(#gb-glow)" />

            {/* Ground shadow */}
            <ellipse cx="130" cy="232" rx="96" ry="12" fill="url(#gb-shadow)" />

            {/* =================== BOX BODY (3/4 PERSPECTIVE) =================== */}

            {/* Right side face (darker, gives depth) */}
            <path
                d="M200 108 L236 82 L236 198 L200 224 Z"
                fill="url(#gb-side)"
            />
            {/* Front face */}
            <path
                d="M44 108 L200 108 L200 224 L44 224 Z"
                fill="url(#gb-front)"
            />
            {/* Top face (flat parallelogram, showing the lid surface) */}
            <path
                d="M44 108 L80 82 L236 82 L200 108 Z"
                fill="url(#gb-top)"
            />

            {/* Front face soft inner highlight band */}
            <path
                d="M52 114 L192 114 L192 122 L52 122 Z"
                fill="white"
                opacity="0.22"
            />

            {/* Edge definition: subtle inner strokes where faces meet */}
            <path
                d="M44 108 L200 108 M200 108 L200 224 M200 108 L236 82"
                stroke="#4338CA"
                strokeOpacity="0.18"
                strokeWidth="1.5"
                strokeLinecap="round"
            />

            {/* =================== LID SEAM =================== */}
            {/* A thin horizontal shadow line just under the top face to suggest a separate lid */}
            <path
                d="M44 108 L200 108"
                stroke="#312E81"
                strokeOpacity="0.25"
                strokeWidth="2"
            />
            <path
                d="M200 108 L236 82"
                stroke="#312E81"
                strokeOpacity="0.18"
                strokeWidth="1.5"
            />

            {/* =================== RIBBON — vertical wrap =================== */}

            {/* Vertical band on the FRONT face */}
            <path
                d="M110 108 L150 108 L150 224 L110 224 Z"
                fill="url(#gb-ribbon)"
            />
            {/* Front-ribbon top highlight */}
            <path
                d="M113 108 L147 108 L147 118 L113 118 Z"
                fill="white"
                opacity="0.25"
            />

            {/* Vertical band continuing across the TOP face */}
            <path
                d="M110 108 L146 82 L186 82 L150 108 Z"
                fill="url(#gb-ribbon-top)"
            />
            {/* Subtle seam at the front-top edge of the ribbon */}
            <path
                d="M110 108 L150 108"
                stroke="#BE185D"
                strokeOpacity="0.35"
                strokeWidth="1.2"
            />

            {/* Short band visible on the RIGHT side face where the ribbon wraps */}
            <path
                d="M150 108 L186 82 L186 166 L150 192 Z"
                fill="url(#gb-ribbon-side)"
            />
            <path
                d="M150 108 L186 82"
                stroke="#BE185D"
                strokeOpacity="0.4"
                strokeWidth="1.2"
            />

            {/* =================== BOW =================== */}

            <g transform="translate(166 70)">
                {/* Trailing streamers — drawn BEHIND the loops so they tuck under */}
                <path
                    d="M-8 18 C -16 38 -24 54 -34 68 L -18 70 C -10 54 -4 38 0 22 Z"
                    fill="url(#gb-ribbon)"
                    opacity="0.95"
                />
                <path
                    d="M8 18 C 14 34 20 50 30 62 L 18 70 C 10 54 4 38 2 22 Z"
                    fill="url(#gb-ribbon)"
                    opacity="0.95"
                />
                {/* V-cuts at the ends of the streamers */}
                <path
                    d="M-34 68 L -26 60 L -22 72 Z"
                    fill="#F9FAFB"
                    opacity="0.9"
                />
                <path
                    d="M30 62 L 26 72 L 20 64 Z"
                    fill="#F9FAFB"
                    opacity="0.9"
                />

                {/* Left loop — large puffy teardrop */}
                <path
                    d="M2 10
                       C -22 -22 -64 -20 -58 12
                       C -54 30 -28 32 -8 20
                       Z"
                    fill="url(#gb-bow)"
                />
                {/* Left loop inner crease (adds depth) */}
                <path
                    d="M-48 0 C -36 -10 -20 -10 -10 -2"
                    stroke="white"
                    strokeOpacity="0.55"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                />
                <path
                    d="M-54 12 C -44 20 -28 22 -12 14"
                    stroke="#9D174D"
                    strokeOpacity="0.35"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                />

                {/* Right loop — mirrored */}
                <path
                    d="M-2 10
                       C 22 -22 64 -20 58 12
                       C 54 30 28 32 8 20
                       Z"
                    fill="url(#gb-bow)"
                />
                <path
                    d="M48 0 C 36 -10 20 -10 10 -2"
                    stroke="white"
                    strokeOpacity="0.55"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                />
                <path
                    d="M54 12 C 44 20 28 22 12 14"
                    stroke="#9D174D"
                    strokeOpacity="0.35"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                />

                {/* Knot in the centre */}
                <rect x="-12" y="-2" width="24" height="24" rx="7" fill="#BE185D" />
                <rect x="-10" y="0" width="20" height="6" rx="3" fill="white" opacity="0.4" />
                <rect x="-10" y="16" width="20" height="4" rx="2" fill="#831843" opacity="0.8" />
            </g>

            {/* =================== HANGING TAG =================== */}
            <g transform="translate(196 110)">
                {/* string */}
                <path
                    d="M -32 -40 C -28 -28 -18 -18 -4 -6"
                    stroke="#4F46E5"
                    strokeOpacity="0.55"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    fill="none"
                />
                {/* tag body */}
                <g transform="rotate(12)">
                    <path
                        d="M -2 -2 L 26 -2 L 32 8 L 26 18 L -2 18 Z"
                        fill="#FEF3C7"
                        stroke="#F59E0B"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                    />
                    {/* hole */}
                    <circle cx="2" cy="8" r="1.8" fill="#92400E" />
                    {/* tiny sparkle on the tag */}
                    <path
                        d="M14 4 L15 8 L19 9 L15 10 L14 14 L13 10 L9 9 L13 8 Z"
                        fill="#F59E0B"
                        opacity="0.85"
                    />
                </g>
            </g>

            {/* =================== SPARKLES =================== */}
            <g opacity="0.95">
                {/* 4-point stars */}
                <path d="M50 60 L52 52 L54 60 L62 62 L54 64 L52 72 L50 64 L42 62 Z" fill="#FBBF24" />
                <path d="M218 148 L219.5 142 L221 148 L227 149.5 L221 151 L219.5 157 L218 151 L212 149.5 Z" fill="#60A5FA" />
                <path d="M36 170 L37 166 L38 170 L42 171 L38 172 L37 176 L36 172 L32 171 Z" fill="#F472B6" />
                {/* dots */}
                <circle cx="226" cy="60" r="3" fill="#F472B6" />
                <circle cx="28" cy="110" r="2.4" fill="#A78BFA" />
                <circle cx="244" cy="120" r="2" fill="#FDE68A" />
                <circle cx="64" cy="214" r="2" fill="#60A5FA" opacity="0.85" />
            </g>

            {/* Front-face soft shine overlay (very subtle) */}
            <path
                d="M44 108 L92 108 L62 224 L44 224 Z"
                fill="white"
                opacity="0.07"
                filter="url(#gb-soft)"
            />
        </svg>
    );
}
