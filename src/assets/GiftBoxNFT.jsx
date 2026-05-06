import React from 'react';

const MARK_PARTS = [
    { points: '76,59.7 76,19.9 110.5,0 145,19.9 145,59.7 110.5,79.6' },
    { points: '109.9,119.6 109.9,79.8 144.3,59.8 178.8,79.8 178.8,119.6 144.3,139.5' },
    { points: '0,62.8 0,23 34.5,3 69,23 69,62.8 34.5,82.7' },
    { points: '33.8,122.6 33.8,82.8 68.3,62.9 102.8,82.8 102.8,122.6 68.3,142.5' },
];

export default function GiftBoxNFT({ size = 280, className = '', style = {} }) {
    return (
        <div
            className={`pointer-events-none select-none ${className}`}
            style={{ width: size, height: size, maxWidth: '100%', maxHeight: '100%', ...style }}
            aria-hidden="true"
        >
            <svg
                viewBox="-34 -30 246 202"
                preserveAspectRatio="xMidYMid meet"
                className="h-full w-full overflow-visible"
                role="img"
            >
                <defs>
                    <linearGradient id="pwFlatFace" x1="0" y1="0" x2="178" y2="142" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="hsl(var(--nft-logo-light))" />
                        <stop offset="0.46" stopColor="hsl(var(--nft-logo))" />
                        <stop offset="1" stopColor="hsl(var(--nft-logo-deep))" />
                    </linearGradient>
                    <filter id="pwFlatShadow" x="-35%" y="-35%" width="170%" height="180%">
                        <feDropShadow dx="0" dy="18" stdDeviation="15" floodColor="hsl(var(--nft-logo-shadow))" floodOpacity="0.34" />
                    </filter>
                </defs>

                <g className="origin-center animate-[nft-logo-drift_9s_ease-in-out_infinite]" filter="url(#pwFlatShadow)">
                    {MARK_PARTS.map((part) => (
                        <polygon
                            key={part.points}
                            points={part.points}
                            fill="url(#pwFlatFace)"
                            stroke="hsl(var(--nft-logo-rim))"
                            strokeWidth="2.3"
                            strokeLinejoin="round"
                        />
                    ))}
                    <g opacity="0.34" fill="none" stroke="hsl(var(--nft-logo-glint))" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.5">
                        <path d="M110.5 8 137.5 23.8" />
                        <path d="M34.8 11.5 62 27" />
                        <path d="M144.3 68.5 171.3 84.1" />
                        <path d="M68.3 71.5 95.4 87" />
                    </g>
                </g>
            </svg>
        </div>
    );
}