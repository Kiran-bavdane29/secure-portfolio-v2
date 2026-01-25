import React, { useState, useEffect } from 'react';

const BootSequence = ({ onComplete }) => {
  const [lines, setLines] = useState([]);

  const bootText = [
    "INITIALIZING KERNEL...",
    "LOADING SECURITY MODULES...",
    "VERIFYING ENCRYPTION KEYS... [OK]",
    "MOUNTING FILE SYSTEM... [OK]",
    "ESTABLISHING SECURE CONNECTION...",
    "ACCESS GRANTED."
  ];

  useEffect(() => {
    let delay = 0;
    bootText.forEach((text, index) => {
      delay += Math.random() * 300 + 200; // Random typing speed
      setTimeout(() => {
        setLines(prev => [...prev, text]);
        // If it's the last line, finish up
        if (index === bootText.length - 1) {
          setTimeout(onComplete, 800);
        }
      }, delay);
    });
  }, []);

  return (
    <div style={styles.bootScreen}>
      <div style={styles.terminal}>
        {lines.map((line, i) => (
          <div key={i} style={styles.line}>&gt; {line}</div>
        ))}
        <div style={styles.cursor}>_</div>
      </div>
    </div>
  );
};

const styles = {
  bootScreen: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '#000',
    zIndex: 99999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#0f0',
    fontFamily: 'Courier New, monospace'
  },
  terminal: {
    width: '90%',
    maxWidth: '600px'
  },
  line: {
    marginBottom: '10px',
    fontSize: '1rem',
    textShadow: '0 0 5px #0f0'
  },
  cursor: {
    animation: 'blink 1s infinite'
  }
};

export default BootSequence;