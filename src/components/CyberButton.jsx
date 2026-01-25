import React from 'react';

const CyberButton = ({ text, onClick }) => {
  return (
    <button style={styles.btn} onClick={onClick}>
      <span style={styles.glitch}></span>
      <span style={styles.tag}>&gt;&gt;</span> {text}
    </button>
  );
};

const styles = {
  btn: {
    background: 'transparent',
    border: '1px solid #0f0',
    color: '#0f0',
    padding: '10px 25px',
    fontFamily: '"Courier New", monospace',
    fontSize: '1rem',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    marginTop: '20px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    boxShadow: '0 0 10px rgba(0, 255, 0, 0.2)'
  },
  tag: {
    marginRight: '10px'
  }
};

export default CyberButton;