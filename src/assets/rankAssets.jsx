import React from 'react';

/**
 * 8 Rank levels with custom icons and color schemes.
 * Each rank exposes:
 *  - Icon: React component (24x24 SVG, currentColor)
 *  - gradient: tailwind classes for the icon tile background
 *  - ring: subtle ring color
 *  - badge: small badge bg + text classes
 *  - text: accent text color (for rank name on dark bg)
 *  - shadow: tailwind shadow class for the tile
 */

const baseSvg = (children, props = {}) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        {children}
    </svg>
);

// --- ICONS ---------------------------------------------------------------

export function NoRankIcon(props) {
    return baseSvg(
        <g>
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" strokeDasharray="2.5 2.5" />
            <path d="M9 12h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </g>,
        props
    );
}

export function BronzeIcon(props) {
    return baseSvg(
        <g>
            <path
                d="M12 3 5 5.6v5.2c0 4.3 3 7.7 7 9.2 4-1.5 7-4.9 7-9.2V5.6L12 3Z"
                fill="currentColor"
                fillOpacity="0.18"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
            <path d="M9.5 11.5h5M12 9v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </g>,
        props
    );
}

export function SilverIcon(props) {
    return baseSvg(
        <g>
            <path
                d="M12 3 5 5.6v5.2c0 4.3 3 7.7 7 9.2 4-1.5 7-4.9 7-9.2V5.6L12 3Z"
                fill="currentColor"
                fillOpacity="0.18"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
            <path d="m8.5 11.5 2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </g>,
        props
    );
}

export function GoldIcon(props) {
    return baseSvg(
        <g>
            <path
                d="m12 3.5 2.5 5 5.5.8-4 3.9.95 5.5L12 16l-4.95 2.6.95-5.5-4-3.9 5.5-.8L12 3.5Z"
                fill="currentColor"
                fillOpacity="0.22"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
        </g>,
        props
    );
}

export function PlatinumIcon(props) {
    return baseSvg(
        <g>
            <path
                d="M12 3 4 8v8l8 5 8-5V8l-8-5Z"
                fill="currentColor"
                fillOpacity="0.16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
            <path d="m8.5 11.8 2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </g>,
        props
    );
}

export function BlackIcon(props) {
    return baseSvg(
        <g>
            <path
                d="M12 3 4 8v8l8 5 8-5V8l-8-5Z"
                fill="currentColor"
                fillOpacity="0.85"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
            <path
                d="M9.5 11.5 12 9l2.5 2.5L12 14l-2.5-2.5Z"
                fill="white"
                stroke="white"
                strokeWidth="1.2"
                strokeLinejoin="round"
            />
        </g>,
        props
    );
}

export function DiamondIcon(props) {
    return baseSvg(
        <g>
            <path
                d="M6 3h12l4 6-10 13L2 9l4-6Z"
                fill="currentColor"
                fillOpacity="0.22"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
            <path d="M2 9h20M9 3l3 6 3-6M12 9v13" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round" />
        </g>,
        props
    );
}

export function SpecialIcon(props) {
    return baseSvg(
        <g>
            <path
                d="M12 2.5 14 8l5.5 1.5L15.5 13l1 5.8L12 16l-4.5 2.8 1-5.8L4.5 9.5 10 8l2-5.5Z"
                fill="currentColor"
                fillOpacity="0.22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <circle cx="18.5" cy="5.5" r="1.2" fill="currentColor" />
            <circle cx="5.5" cy="6.5" r="0.9" fill="currentColor" />
            <circle cx="6.5" cy="18" r="0.9" fill="currentColor" />
        </g>,
        props
    );
}

// --- META ----------------------------------------------------------------

export const RANKS = {
    'No Rank': {
        Icon: NoRankIcon,
        tile: 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-500',
        ring: 'ring-gray-200/60',
        badge: 'bg-gray-100 text-gray-500',
        text: 'text-gray-500',
        soft: 'bg-gray-50 text-gray-500',
        shadow: 'shadow-[0_8px_20px_rgba(0,0,0,0.05)]',
    },
    Bronze: {
        Icon: BronzeIcon,
        tile: 'bg-gradient-to-br from-orange-300 to-amber-700 text-white',
        ring: 'ring-amber-500/30',
        badge: 'bg-orange-50 text-amber-700',
        text: 'text-amber-700',
        soft: 'bg-orange-50 text-amber-700',
        shadow: 'shadow-[0_8px_24px_rgba(180,83,9,0.25)]',
    },
    Silver: {
        Icon: SilverIcon,
        tile: 'bg-gradient-to-br from-slate-200 to-slate-400 text-slate-700',
        ring: 'ring-slate-300/60',
        badge: 'bg-slate-50 text-slate-600',
        text: 'text-slate-600',
        soft: 'bg-slate-50 text-slate-600',
        shadow: 'shadow-[0_8px_24px_rgba(71,85,105,0.18)]',
    },
    Gold: {
        Icon: GoldIcon,
        tile: 'bg-gradient-to-br from-yellow-300 to-amber-500 text-white',
        ring: 'ring-amber-400/40',
        badge: 'bg-yellow-50 text-amber-700',
        text: 'text-amber-700',
        soft: 'bg-yellow-50 text-amber-700',
        shadow: 'shadow-[0_8px_24px_rgba(234,179,8,0.30)]',
    },
    Platinum: {
        Icon: PlatinumIcon,
        tile: 'bg-gradient-to-br from-cyan-200 via-teal-300 to-sky-400 text-white',
        ring: 'ring-cyan-300/40',
        badge: 'bg-cyan-50 text-cyan-700',
        text: 'text-cyan-700',
        soft: 'bg-cyan-50 text-cyan-700',
        shadow: 'shadow-[0_8px_24px_rgba(14,165,233,0.25)]',
    },
    Black: {
        Icon: BlackIcon,
        tile: 'bg-gradient-to-br from-gray-800 to-black text-white',
        ring: 'ring-gray-900/40',
        badge: 'bg-gray-900 text-white',
        text: 'text-gray-900',
        soft: 'bg-gray-100 text-gray-900',
        shadow: 'shadow-[0_8px_24px_rgba(0,0,0,0.35)]',
    },
    Diamond: {
        Icon: DiamondIcon,
        tile: 'bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-500 text-white',
        ring: 'ring-blue-400/40',
        badge: 'bg-blue-50 text-blue-600',
        text: 'text-blue-600',
        soft: 'bg-blue-50 text-blue-600',
        shadow: 'shadow-[0_10px_30px_rgba(59,130,246,0.35)]',
    },
    Special: {
        Icon: SpecialIcon,
        tile: 'bg-gradient-to-br from-fuchsia-400 via-purple-500 to-indigo-500 text-white',
        ring: 'ring-purple-400/40',
        badge: 'bg-purple-50 text-purple-700',
        text: 'text-purple-700',
        soft: 'bg-purple-50 text-purple-700',
        shadow: 'shadow-[0_10px_30px_rgba(168,85,247,0.35)]',
    },
};

export const RANK_ORDER = [
    'No Rank',
    'Bronze',
    'Silver',
    'Gold',
    'Platinum',
    'Black',
    'Diamond',
    'Special',
];

export function getRank(name) {
    return RANKS[name] || RANKS['No Rank'];
}

/**
 * RankBadge - rounded tile with the rank icon.
 * size in px (default 48), used for icon container.
 */
export function RankBadge({ rank, size = 48, iconSize, className = '', radius = '20px' }) {
    const meta = getRank(rank);
    const Icon = meta.Icon;
    const finalIconSize = iconSize ?? Math.round(size * 0.55);
    return (
        <div
            className={`flex items-center justify-center ring-1 ${meta.tile} ${meta.ring} ${meta.shadow} ${className}`}
            style={{ width: size, height: size, borderRadius: radius }}
        >
            <Icon width={finalIconSize} height={finalIconSize} style={{ color: 'currentColor' }} />
        </div>
    );
}
