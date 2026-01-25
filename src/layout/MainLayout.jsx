import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', padding: '20px' }}>
      <header style={{ borderBottom: '1px solid #333', paddingBottom: '10px', marginBottom: '20px' }}>
        SECURE_PORTFOLIO_V2 :: INITIALIZED
      </header>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;