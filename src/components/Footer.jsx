import React from 'react';
import { Link } from 'react-router-dom';
import { Radio } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { navigationLinks } from './Header';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div>
            <BrandLogo light={true} />
            <p className="footer-brand-desc">
              AI and IoT identification and location solutions for water treatment plants, distribution networks, pump stations, chemical storage facilities, and utility field operations.
            </p>
            <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.75rem' }}>
              <span className="badge badge-dark">
                <Radio size={14} /> RFID &bull; BLE &bull; GPS &bull; LoRaWAN
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <div className="footer-links">
              {navigationLinks.slice(0, 5).map(item => (
                <Link key={item.path} to={item.path}>{item.name}</Link>
              ))}
            </div>
          </div>

          {/* Platform & Solutions */}
          <div>
            <h4 className="footer-col-title">Solutions</h4>
            <div className="footer-links">
              {navigationLinks.slice(5).map(item => (
                <Link key={item.path} to={item.path}>{item.name}</Link>
              ))}
            </div>
          </div>

          {/* Contact & Capabilities */}
          <div>
            <h4 className="footer-col-title">Core Capabilities</h4>
            <div className="footer-links">
              <Link to="/ai-functions-water-treatment-distribution">Workforce Location</Link>
              <Link to="/ai-functions-water-treatment-distribution">Secure Facility Access</Link>
              <Link to="/iot-software-water-treatment-distribution">Asset Location & Utilization</Link>
              <Link to="/ai-iot-hardware-water-treatment-operations">Chemical & Spare Parts Inventory</Link>
              <Link to="/integration-water-treatment-distribution">Process Traceability</Link>
              <Link to="/contact" style={{ color: '#38bdf8', fontWeight: '600', marginTop: '0.5rem' }}>
                &rarr; Contact Operations
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} UtilityWater AI. All rights reserved. Sub-industry: Water Treatment &amp; Distribution.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/resources">Documentation</Link>
            <Link to="/contact">Privacy Notice</Link>
            <Link to="/contact">Terms of Operation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
