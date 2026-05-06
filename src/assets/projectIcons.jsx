import React from 'react';
import polymarketLogo from './project-logo-polymarket.png';
import probableLogo from './project-logo-probable.png';
import predictFunLogo from './project-logo-predict-fun.png';
import opinionLogo from './project-logo-opinion.webp';

export const PROJECT_ICONS = {
    Polymarket: { src: polymarketLogo, alt: 'Polymarket logo' },
    Probable: { src: probableLogo, alt: 'Probable logo' },
    'Predict Fun': { src: predictFunLogo, alt: 'Predict Fun logo' },
    OPINION: { src: opinionLogo, alt: 'OPINION logo' },
};

export function ProjectIconTile({ name, size = 56, className = '' }) {
    const icon = PROJECT_ICONS[name] || PROJECT_ICONS.OPINION;

    return (
        <div
            className={`shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-gray-200 shadow-sm ${className}`}
            style={{ width: size, height: size }}
        >
            <img
                src={icon.src}
                alt={icon.alt}
                className="h-full w-full object-cover"
                draggable="false"
            />
        </div>
    );
}
