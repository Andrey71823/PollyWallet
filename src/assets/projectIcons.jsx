import React from 'react';
import polymarketLogo from './logo-polymarket.png';
import predictfunLogo from './logo-predictfun.png';
import probableLogo from './logo-probable.png';
import opinionLogo from './logo-opinion.png';

export const PROJECT_ICONS = {
    Polymarket: { src: polymarketLogo },
    Probable: { src: probableLogo },
    'Predict Fun': { src: predictfunLogo },
    OPINION: { src: opinionLogo },
};

export function ProjectIconTile({ name, size = 56, radius = 18, disabled = false, className = '' }) {
    const meta = PROJECT_ICONS[name] || PROJECT_ICONS.OPINION;
    return (
        <div
            className={`shrink-0 overflow-hidden bg-white ${disabled ? 'grayscale opacity-50' : ''} ${className}`}
            style={{ width: size, height: size, borderRadius: radius }}
        >
            <img
                src={meta.src}
                alt={`${name} logo`}
                width={size}
                height={size}
                loading="lazy"
                className="w-full h-full object-cover"
            />
        </div>
    );
}
