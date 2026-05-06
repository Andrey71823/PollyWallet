import React from 'react';

/**
 * Brand-mark icons for the supported prediction-market projects.
 *
 * Each icon is rendered as a rounded, "app-icon" tile filled with the
 * brand's signature colour and silhouette:
 *  - Polymarket: isometric stack of three rounded cubes on Polymarket blue.
 *  - Predict.fun: bold "P." wordmark on BNB-yellow.
 *  - Probable: rounded "P" on PancakeSwap-incubated pink.
 *  - OPINION: minimalist "O." wordmark on near-black.
 *
 * The design treats the WHOLE tile as the icon (filled background +
 * white-on-colour mark), which is how these projects actually show up as
 * app icons on phones / website favicons. The outer parent no longer adds
 * its own tinted background — the tile itself is the brand surface.
 */

// ---- Polymarket ---------------------------------------------------------
// Deep Polymarket blue tile with three isometric white cubes stacked in a
// "P"-like cluster — directly inspired by the Polymarket brand mark.
export function PolymarketIcon({ size = 56, radius = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="pm-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#1D4ED8" />
                </linearGradient>
            </defs>
            <rect width="64" height="64" rx={radius} fill="url(#pm-bg)" />
            {/* soft top highlight */}
            <rect x="4" y="4" width="56" height="14" rx={radius - 4} fill="white" opacity="0.12" />

            {/* Three isometric cubes, stacked */}
            <g transform="translate(14 12)">
                {/* top cube */}
                <g transform="translate(12 0)">
                    <path d="M0 6 L10 0 L20 6 L10 12 Z" fill="white" />
                    <path d="M0 6 L10 12 L10 22 L0 16 Z" fill="white" opacity="0.78" />
                    <path d="M20 6 L10 12 L10 22 L20 16 Z" fill="white" opacity="0.58" />
                </g>
                {/* bottom-left cube */}
                <g transform="translate(0 18)">
                    <path d="M0 6 L10 0 L20 6 L10 12 Z" fill="white" />
                    <path d="M0 6 L10 12 L10 22 L0 16 Z" fill="white" opacity="0.78" />
                    <path d="M20 6 L10 12 L10 22 L20 16 Z" fill="white" opacity="0.58" />
                </g>
                {/* bottom-right cube */}
                <g transform="translate(22 18)">
                    <path d="M0 6 L10 0 L20 6 L10 12 Z" fill="white" />
                    <path d="M0 6 L10 12 L10 22 L0 16 Z" fill="white" opacity="0.78" />
                    <path d="M20 6 L10 12 L10 22 L20 16 Z" fill="white" opacity="0.58" />
                </g>
            </g>
        </svg>
    );
}

// ---- Predict.fun --------------------------------------------------------
// BNB-yellow tile with the "P." wordmark from the Predict.fun brand.
export function PredictFunIcon({ size = 56, radius = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="pf-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FACC15" />
                    <stop offset="100%" stopColor="#EAB308" />
                </linearGradient>
            </defs>
            <rect width="64" height="64" rx={radius} fill="url(#pf-bg)" />
            <rect x="4" y="4" width="56" height="14" rx={radius - 4} fill="white" opacity="0.25" />
            {/* Bold "P." wordmark */}
            <text
                x="50%"
                y="54%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontFamily="Inter, system-ui, -apple-system, 'Segoe UI', sans-serif"
                fontWeight="900"
                fontSize="38"
                fill="#111827"
                letterSpacing="-1.5"
            >
                P.
            </text>
        </svg>
    );
}

// ---- Probable -----------------------------------------------------------
// Pink PancakeSwap-incubated gradient tile with a soft rounded "P" mark.
export function ProbableIcon({ size = 56, radius = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="pb-bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#F472B6" />
                    <stop offset="100%" stopColor="#DB2777" />
                </linearGradient>
            </defs>
            <rect width="64" height="64" rx={radius} fill="url(#pb-bg)" />
            <rect x="4" y="4" width="56" height="14" rx={radius - 4} fill="white" opacity="0.2" />
            {/* Rounded "P" */}
            <text
                x="50%"
                y="54%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontFamily="Inter, system-ui, -apple-system, 'Segoe UI', sans-serif"
                fontWeight="900"
                fontSize="38"
                fill="white"
                letterSpacing="-1"
            >
                P
            </text>
            {/* small dot accent — echoes the "Probable" tail */}
            <circle cx="44" cy="44" r="3.2" fill="white" opacity="0.95" />
        </svg>
    );
}

// ---- OPINION ------------------------------------------------------------
// Near-black tile with a minimalist "O." wordmark — mirrors the
// OPINION.trade brand look.
export function OpinionIcon({ size = 56, radius = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="op-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1F2937" />
                    <stop offset="100%" stopColor="#0B1220" />
                </linearGradient>
            </defs>
            <rect width="64" height="64" rx={radius} fill="url(#op-bg)" />
            <rect x="4" y="4" width="56" height="14" rx={radius - 4} fill="white" opacity="0.06" />
            {/* "O." wordmark */}
            <text
                x="50%"
                y="54%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontFamily="Inter, system-ui, -apple-system, 'Segoe UI', sans-serif"
                fontWeight="900"
                fontSize="34"
                fill="white"
                letterSpacing="-1"
            >
                O.
            </text>
        </svg>
    );
}

// ---- Meta ---------------------------------------------------------------

export const PROJECT_ICONS = {
    Polymarket: { Icon: PolymarketIcon },
    Probable: { Icon: ProbableIcon },
    'Predict Fun': { Icon: PredictFunIcon },
    OPINION: { Icon: OpinionIcon },
};

/**
 * ProjectIconTile — renders the full brand tile at the requested size.
 * The SVG itself provides its own background / shape, so the parent does
 * NOT add any tinted wrapper. Just controls the size and disabled state.
 */
export function ProjectIconTile({ name, size = 56, radius = 18, disabled = false, className = '' }) {
    const meta = PROJECT_ICONS[name] || PROJECT_ICONS.OPINION;
    const Icon = meta.Icon;
    return (
        <div
            className={`shrink-0 ${disabled ? 'grayscale opacity-50' : ''} ${className}`}
            style={{ width: size, height: size }}
        >
            <Icon size={size} radius={radius} />
        </div>
    );
}
