import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [time, setTime] = useState(new Date());
  const [latency, setLatency] = useState(12); // Start at 12ms

  useEffect(() => {
    // 1. Clock Timer (Updates every second)
    const clockInterval = setInterval(() => setTime(new Date()), 1000);
    
    // 2. Dynamic Latency Simulator (Updates every 2 seconds)
    // This makes the "PING" value jump around like a real network connection
    const pingInterval = setInterval(() => {
      // Random number between 10 and 40
      const newPing = Math.floor(Math.random() * (40 - 10 + 1) + 10);
      setLatency(newPing);
    }, 2000);

    return () => {
      clearInterval(clockInterval);
      clearInterval(pingInterval);
    };
  }, []);

  const formatTime = (date) => {
    return date.toISOString().split('T')[1].split('.')[0] + ' UTC';
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/* LEFT: Identity & Copyright */}
        <div style={styles.leftSection}>
          <span style={styles.copyright}>&copy; {new Date().getFullYear()}</span>
          <span style={styles.name}>KIRAN_BAVDANE</span>
          <span style={styles.tag}>:: SOFTWARE_SECURITY_ENGINEER</span>
        </div>

        {/* RIGHT: System Metrics (Dynamic) */}
        <div style={styles.rightSection}>
          
          {/* Dynamic Ping */}
          <div style={styles.metric}>
            <span style={styles.label}>LATENCY:</span>
            {/* Color changes to yellow if ping is high (>30ms) */}
            <span style={{ color: latency > 30 ? '#ffbd2e' : '#0f0', width: '35px', display: 'inline-block' }}>
              {latency}ms
            </span>
          </div>

          <span style={styles.separator}>|</span>

          <div style={styles.metric}>
            <span style={styles.label}>LOC:</span>
            <span style={styles.value}>MUMBAI_HQ</span>
          </div>

          <span style={styles.separator}>|</span>

          {/* Dynamic Clock */}
          <div style={styles.metric}>
            <span style={styles.value}>{formatTime(time)}</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: '60px',
    borderTop: '1px solid #333',
    background: '#050505',
    fontFamily: '"Courier New", monospace',
    width: '100%',
    padding: '15px 0',
    fontSize: '0.75rem', // Smaller, cleaner font
    color: '#666'
  },
  container: {
    maxWidth: '1200px', // Matches your other sections
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap', // Responsive wrapping
    gap: '15px'
  },
  
  // Left Side Styles
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  },
  copyright: {
    color: '#444'
  },
  name: {
    color: '#ccc',
    fontWeight: 'bold',
    letterSpacing: '1px'
  },
  tag: {
    color: '#00ccff', // Cyan accent
    opacity: 0.8
  },

  // Right Side Styles
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  },
  metric: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  label: {
    color: '#444',
    fontWeight: 'bold'
  },
  value: {
    color: '#aaa'
  },
  separator: {
    color: '#222'
  }
};

export default Footer;