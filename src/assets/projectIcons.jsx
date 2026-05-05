import React from 'react';

/**
 * Stylized brand marks for the supported prediction-market projects.
 * Each icon is a self-contained SVG rendered on a rounded tile.
 *
 * Design goal: colours and silhouette clearly reference each brand,
 * while the rounded container keeps the whole grid visually consistent.
 */

// ---- Polymarket ---------------------------------------------------------
// Blue concentric circles with a rounded "P" cap on top — the signature
// Polymarket mark.
export function PolymarketIcon({ size = 28, ...props }) {
    return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle cx="20" cy="22" r="14" stroke="#1652F0" strokeWidth="2.5" />
            <circle cx="20" cy="22" r="9" stroke="#1652F0" strokeWidth="2.5" />
            <circle cx="20" cy="22" r="3.5" fill="#1652F0" />
            <path
                d="M14 10a6 6 0 0 1 12 0v2H14v-2Z"
                fill="#1652F0"
            />
        </svg>
    );
}

// ---- Probable -----------------------------------------------------------
// Rising green bar chart — classic "probability / data" brand language.
export function ProbableIcon({ size = 28, ...props }) {
    return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect x="6" y="22" width="6" height="12" rx="1.6" fill="#16A34A" />
            <rect x="14.5" y="16" width="6" height="18" rx="1.6" fill="#22C55E" />
            <rect x="23" y="10" width="6" height="24" rx="1.6" fill="#15803D" />
            <path
                d="M6 12 15 18 24 10 33 14"
                stroke="#052E16"
                strokeOpacity="0.45"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="33" cy="14" r="2" fill="#052E16" fillOpacity="0.55" />
        </svg>
    );
}

// ---- Predict Fun --------------------------------------------------------
// Playful game-pad, purple/violet.
export function PredictFunIcon({ size = 28, ...props }) {
    return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M10 14h20c3.3 0 6 2.7 6 6v2a6 6 0 0 1-11 3.4l-1-1.5a4 4 0 0 0-3.3-1.8h-1.4a4 4 0 0 0-3.3 1.8l-1 1.5A6 6 0 0 1 4 22v-2c0-3.3 2.7-6 6-6Z"
                fill="#8B5CF6"
            />
            <rect x="10.5" y="18" width="2.2" height="6" rx="1.1" fill="white" />
            <rect x="7.8" y="20.2" width="6" height="2.2" rx="1.1" fill="white" />
            <circle cx="27" cy="19.5" r="1.6" fill="white" />
            <circle cx="30.5" cy="22.5" r="1.6" fill="white" />
        </svg>
    );
}

// ---- OPINION ------------------------------------------------------------
// Soft rounded speech-bubble — "opinions / discussion" metaphor.
export function OpinionIcon({ size = 28, ...props }) {
    return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M8 14a6 6 0 0 1 6-6h12a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6h-8l-5.5 4.5A1 1 0 0 1 11 32v-3.2A6 6 0 0 1 8 23v-9Z"
                fill="#64748B"
            />
            <circle cx="15.5" cy="18.5" r="1.5" fill="white" />
            <circle cx="20" cy="18.5" r="1.5" fill="white" />
            <circle cx="24.5" cy="18.5" r="1.5" fill="white" />
        </svg>
    );
}

// ---- Meta ---------------------------------------------------------------

export const PROJECT_ICONS = {
    Polymarket: {
        Icon: PolymarketIcon,
        tileBg: 'bg-blue-50',
        ring: 'ring-blue-100',
    },
    Probable: {
        Icon: ProbableIcon,
        tileBg: 'bg-green-50',
        ring: 'ring-green-100',
    },
    'Predict Fun': {
        Icon: PredictFunIcon,
        tileBg: 'bg-purple-50',
        ring: 'ring-purple-100',
    },
    OPINION: {
        Icon: OpinionIcon,
        tileBg: 'bg-gray-100',
        ring: 'ring-gray-200',
    },
};

/**
 * ProjectIconTile — rounded tile with the stylised brand icon inside.
 * Use across Point screens for visual consistency.
 */
export function ProjectIconTile({ name, size = 56, iconSize, radius = '20px', disabled = false, className = '' }) {
    const meta = PROJECT_ICONS[name] || PROJECT_ICONS.OPINION;
    const Icon = meta.Icon;
    const finalIconSize = iconSize ?? Math.round(size * 0.55);
    return (
        <div
            className={`flex items-center justify-center shrink-0 ring-1 ${disabled ? 'bg-gray-100 ring-gray-200 opacity-70' : `${meta.tileBg} ${meta.ring}`} ${className}`}
            style={{ width: size, height: size, borderRadius: radius }}
        >
            <Icon size={finalIconSize} />
        </div>
    );
}
