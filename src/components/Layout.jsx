import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main id="main-content" style={{ flex: '1 0 auto' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
