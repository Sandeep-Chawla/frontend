// DefaultLayout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
