import React from 'react';

/**
 * GiftBoxNFT — friendly "puffy" 3D-style gift-box illustration.
 *
 * Built from rounded rectangles (no harsh polygonal isometric faces) so
 * the silhouette feels soft and premium, like a 3D-rendered emoji.
 * Shadow is a real Gaussian-blurred ellipse, so it looks like a proper
 * floor shadow rather than a coloured stain.
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
                {/* --- Body gradient (puffy lavender → indigo) --- */}
                <linearGradient id="gb-body" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#DBEAFE" />
                    <stop offset="55%" stopColor="#A5B4FC" />
                    <stop offset="100%" stopColor="#6366F1" />
                </linearGradient>
                {/* --- Lid gradient (slightly lighter, sits on top) --- */}
                <linearGradient id="gb-lid" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#EFF6FF" />
                    <stop offset="100%" stopColor="#A5B4FC" />
                </linearGradient>

                {/* --- Ribbon gradient (warm pink) --- */}
                <linearGradient id="gb-ribbon" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FBCFE8" />
                    <stop offset="50%" stopColor="#F472B6" />
                    <stop offset="100%" stopColor="#DB2777" />
                </linearGradient>

                {/* --- Bow gradient (puffy/rendered look) --- */}
                <radialGradient id="gb-bow" cx="50%" cy="35%" r="70%">
                    <stop offset="0%" stopColor="#FCE7F3" />
                    <stop offset="55%" stopColor="#F472B6" />
                    <stop offset="100%" stopColor="#BE185D" />
                </radialGradient>

                {/* --- Ambient warm glow --- */}
                <radialGradient id="gb-glow" cx="50%" cy="48%" r="55%">
                    <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.55" />
                    <stop offset="55%" stopColor="#FBCFE8" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#FBCFE8" stopOpacity="0" />
                </radialGradient>

                {/* --- Real Gaussian-blurred floor shadow --- */}
                <filter id="gb-shadow-blur" x="-20%" y="-50%" width="140%" height="200%">
                    <feGaussianBlur stdDeviation="6" />
                </filter>
                {/* --- Soft inner shadow under the lid (separates lid from body) --- */}
                <filter id="gb-lid-shadow" x="-20%" y="-50%" width="140%" height="200%">
                    <feGaussianBlur stdDeviation="2.2" />
                </filter>
            </defs>

            {/* Warm ambient glow behind the scene */}
            <ellipse cx="130" cy="130" rx="118" ry="100" fill="url(#gb-glow)" />

            {/* =================== FLOOR SHADOW =================== */}
            <ellipse
                cx="130"
                cy="234"
                rx="86"
                ry="9"
                fill="#312E81"
                opacity="0.28"
                filter="url(#gb-shadow-blur)"
            />

            {/* =================== STREAMERS (drawn behind the body) =================== */}
            <g>
                {/* left streamer */}
                <path
                    d="M118 88 C 100 110 84 130 78 158 C 76 168 80 174 86 176 L 100 176 C 104 168 108 154 114 138 C 120 120 124 104 128 90 Z"
                    fill="url(#gb-ribbon)"
                    opacity="0.92"
                />
                {/* V-cut at the bottom of left streamer */}
                <path d="M86 176 L96 168 L100 180 Z" fill="#FFF5F7" opacity="0.95" />

                {/* right streamer */}
                <path
                    d="M138 88 C 152 108 168 122 178 148 C 182 158 178 168 172 170 L 158 168 C 154 158 148 144 142 128 C 136 112 132 100 130 90 Z"
                    fill="url(#gb-ribbon)"
                    opacity="0.92"
                />
                <path d="M172 170 L168 182 L160 172 Z" fill="#FFF5F7" opacity="0.95" />
            </g>

            {/* =================== BOX BODY =================== */}

            {/* Body — puffy rounded rect */}
            <rect
                x="44"
                y="118"
                width="172"
                height="106"
                rx="20"
                fill="url(#gb-body)"
            />
            {/* Body inner top highlight (specular) */}
            <rect
                x="54"
                y="124"
                width="152"
                height="14"
                rx="7"
                fill="white"
                opacity="0.32"
            />
            {/* Body soft side shadow on the right */}
            <rect
                x="194"
                y="118"
                width="22"
                height="106"
                rx="11"
                fill="#312E81"
                opacity="0.13"
            />

            {/* =================== RIBBON ON THE BODY =================== */}
            <rect
                x="115"
                y="118"
                width="30"
                height="106"
                fill="url(#gb-ribbon)"
            />
            {/* ribbon highlight */}
            <rect x="118" y="118" width="6" height="106" fill="white" opacity="0.22" />
            {/* ribbon shadow on the right edge */}
            <rect x="139" y="118" width="6" height="106" fill="#831843" opacity="0.18" />

            {/* =================== LID SHADOW (subtle, under the lid) =================== */}
            <rect
                x="40"
                y="120"
                width="180"
                height="8"
                rx="4"
                fill="#312E81"
                opacity="0.35"
                filter="url(#gb-lid-shadow)"
            />

            {/* =================== LID =================== */}
            <rect
                x="36"
                y="96"
                width="188"
                height="32"
                rx="14"
                fill="url(#gb-lid)"
            />
            {/* lid top highlight */}
            <rect
                x="44"
                y="100"
                width="172"
                height="8"
                rx="4"
                fill="white"
                opacity="0.55"
            />
            {/* lid inner bottom shadow line */}
            <rect
                x="36"
                y="120"
                width="188"
                height="8"
                rx="4"
                fill="#1E1B4B"
                opacity="0.10"
            />
            {/* ribbon on the lid */}
            <rect x="115" y="96" width="30" height="32" fill="url(#gb-ribbon)" />
            <rect x="118" y="96" width="6" height="32" fill="white" opacity="0.3" />
            <rect x="139" y="96" width="6" height="32" fill="#831843" opacity="0.18" />

            {/* =================== BOW =================== */}
            <g transform="translate(130 80)">
                {/* Left puffy loop */}
                <path
                    d="M0 8
                       C -10 -22 -50 -28 -52 -2
                       C -54 18 -34 28 -10 22
                       C -4 20 -2 14 0 8 Z"
                    fill="url(#gb-bow)"
                />
                {/* Right puffy loop (mirror) */}
                <path
                    d="M0 8
                       C 10 -22 50 -28 52 -2
                       C 54 18 34 28 10 22
                       C 4 20 2 14 0 8 Z"
                    fill="url(#gb-bow)"
                />
                {/* Inner-loop highlights on top */}
                <path
                    d="M-44 -6 C -32 -16 -16 -16 -8 -8"
                    stroke="white"
                    strokeOpacity="0.6"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    fill="none"
                />
                <path
                    d="M44 -6 C 32 -16 16 -16 8 -8"
                    stroke="white"
                    strokeOpacity="0.6"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    fill="none"
                />
                {/* Inner-loop shadow creases at the knot */}
                <path
                    d="M-46 8 C -34 18 -16 22 -4 14"
                    stroke="#831843"
                    strokeOpacity="0.35"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                />
                <path
                    d="M46 8 C 34 18 16 22 4 14"
                    stroke="#831843"
                    strokeOpacity="0.35"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                />

                {/* Knot in the centre */}
                <rect x="-11" y="-4" width="22" height="26" rx="7" fill="#BE185D" />
                {/* knot top highlight */}
                <rect x="-9" y="-2" width="18" height="6" rx="3" fill="white" opacity="0.45" />
                {/* knot bottom inner shadow */}
                <rect x="-9" y="16" width="18" height="4" rx="2" fill="#831843" opacity="0.85" />
                {/* tiny gleam */}
                <circle cx="-3" cy="2" r="2.2" fill="white" opacity="0.7" />
            </g>

            {/* =================== SPARKLES =================== */}
            <g>
                <path d="M52 70 L54 62 L56 70 L64 72 L56 74 L54 82 L52 74 L44 72 Z" fill="#FBBF24" />
                <path d="M214 158 L215.5 152 L217 158 L223 159.5 L217 161 L215.5 167 L214 161 L208 159.5 Z" fill="#60A5FA" />
                <path d="M40 178 L41 174 L42 178 L46 179 L42 180 L41 184 L40 180 L36 179 Z" fill="#F472B6" />
                <circle cx="220" cy="76" r="3" fill="#F472B6" />
                <circle cx="32" cy="118" r="2.4" fill="#A78BFA" />
                <circle cx="232" cy="118" r="2" fill="#FDE68A" />
                <circle cx="68" cy="220" r="2" fill="#60A5FA" opacity="0.85" />
                <circle cx="200" cy="216" r="2.2" fill="#F9A8D4" opacity="0.85" />
            </g>
        </svg>
    );
}
