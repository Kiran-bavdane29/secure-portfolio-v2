import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <span style={{ color: '#ffbd2e' }}>⚠</span> SECURE_PORTFOLIO :: v2.0
      </div>
      <div style={styles.links}>
        <button onClick={() => scrollToSection('identity')} style={styles.link}>// IDENTITY</button>
        <button onClick={() => scrollToSection('skills')} style={styles.link}>// CAPABILITIES</button>
        <button onClick={() => scrollToSection('missions')} style={styles.link}>// MISSIONS</button>
        <button onClick={() => scrollToSection('contact')} style={styles.link}>// COMMUNICATION</button>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '60px',
    backgroundColor: 'rgba(13, 13, 13, 0.9)', // Glass effect
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid #333',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2rem',
    zIndex: 1000,
    boxShadow: '0 2px 20px rgba(0, 255, 0, 0.1)'
  },
  logo: {
    fontWeight: 'bold',
    letterSpacing: '1px',
    color: '#0f0'
  },
  links: {
    display: 'flex',
    gap: '20px'
  },
  link: {
    background: 'transparent',
    border: 'none',
    color: '#888',
    fontFamily: 'inherit',
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'color 0.3s ease',
  }
};

export default Navbar;