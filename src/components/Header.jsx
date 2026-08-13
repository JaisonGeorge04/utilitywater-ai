import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

export const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'AI Functions', path: '/ai-functions-water-treatment-distribution' },
  { name: 'IoT Software', path: '/iot-software-water-treatment-distribution' },
  { name: 'AI & IoT Hardware', path: '/ai-iot-hardware-water-treatment-operations' },
  { name: 'Integration', path: '/integration-water-treatment-distribution' },
  { name: 'Applications', path: '/applications-water-treatment-distribution' },
  { name: 'Resources', path: '/resources' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' }
];

export { BrandLogo };

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Keyboard accessibility: Close drawer on Escape key press & prevent body scroll when open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="site-header" role="banner">
      <div className="container">
        <div className="nav-container">
          {/* Simple Professional Text-Based Wordmark Logo */}
          <BrandLogo onClick={closeMenu} />

          {/* Minimalist Hamburger Menu Button (Desktop & Mobile) */}
          <button
            className="hamburger-btn"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="nav-drawer-panel"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            id="main-hamburger-toggle-btn"
          >
            <Menu size={22} />
            <span className="hamburger-label">Menu</span>
          </button>
        </div>
      </div>

      {/* Backdrop Overlay */}
      {menuOpen && (
        <div 
          className="drawer-backdrop" 
          onClick={closeMenu} 
          aria-hidden="true" 
        />
      )}

      {/* Slide-Over Navigation Drawer */}
      <div 
        id="nav-drawer-panel"
        className={`drawer-panel ${menuOpen ? 'open' : ''}`} 
        role="navigation" 
        aria-label="Main Navigation Drawer"
      >
        <div className="drawer-header">
          <BrandLogo onClick={closeMenu} />
          <button 
            className="drawer-close-btn" 
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <X size={22} />
          </button>
        </div>

        <div className="drawer-content">
          <nav className="drawer-nav">
            {navigationLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => isActive ? 'drawer-nav-item active' : 'drawer-nav-item'}
                onClick={closeMenu}
              >
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="drawer-footer">
          <p className="drawer-footer-text">
            UtilityWater AI &bull; Water Treatment &amp; Distribution Operations
          </p>
        </div>
      </div>
    </header>
  );
}
