import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * UtilityWater AI Brand Logo Icon (Standalone Vector SVG)
 * Vector icon combining water droplet + IoT node network + AI data links
 */
export function BrandLogoIcon({ className = '', size = 34 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer Water Droplet Contour */}
      <path 
        d="M20 3C20 3 7 17.5 7 26.5C7 33.5 12.8 38 20 38C27.2 38 33 33.5 33 26.5C33 17.5 20 3 20 3Z" 
        fill="url(#dropletGrad)" 
        stroke="#0284c7" 
        strokeWidth="1.25"
      />
      {/* Dynamic Water Wave Sub-Curve */}
      <path 
        d="M13 27C13 23 16 19.5 20 17C24 19.5 27 23 27 27C27 30.866 23.866 34 20 34C16.134 34 13 30.866 13 27Z" 
        fill="#ffffff" 
        fillOpacity="0.22"
      />
      {/* Interconnecting AI/IoT Tech Lines */}
      <path d="M20 15V23" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 23L14.5 27.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 23L25.5 27.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />

      {/* Central IoT Tech Node & AI Connection Points */}
      <circle cx="20" cy="23" r="3.5" fill="#ffffff" />
      <circle cx="20" cy="14" r="2.5" fill="#38bdf8" />
      <circle cx="14" cy="28" r="2.5" fill="#38bdf8" />
      <circle cx="26" cy="28" r="2.5" fill="#38bdf8" />
      
      <defs>
        <linearGradient id="dropletGrad" x1="7" y1="3" x2="33" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0284c7" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/**
 * UtilityWater AI Complete Corporate Header Logo Component
 */
export default function BrandLogo({ onClick, compact = false, light = false }) {
  return (
    <NavLink 
      to="/" 
      className="brand-logo-container" 
      onClick={onClick} 
      aria-label="UtilityWater AI Homepage"
      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}
    >
      <BrandLogoIcon size={34} />
      {!compact && (
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', lineHeight: 1 }}>
          <span style={{ 
            fontFamily: 'var(--font-family-display)', 
            fontSize: '1.25rem', 
            fontWeight: 800, 
            color: light ? '#ffffff' : '#0f172a', 
            letterSpacing: '-0.025em' 
          }}>
            UtilityWater
          </span>
          <span style={{ 
            fontFamily: 'var(--font-family-display)', 
            fontSize: '0.85rem', 
            fontWeight: 800, 
            color: light ? '#38bdf8' : '#0284c7', 
            backgroundColor: light ? 'rgba(56, 189, 248, 0.15)' : '#e0f2fe', 
            padding: '0.18rem 0.45rem', 
            borderRadius: '4px', 
            letterSpacing: '0.04em' 
          }}>
            AI
          </span>
        </div>
      )}
    </NavLink>
  );
}
