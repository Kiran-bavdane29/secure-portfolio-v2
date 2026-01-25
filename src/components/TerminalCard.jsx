import React from 'react';

const TerminalCard = ({ title, children }) => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div style={styles.buttons}>
          <span style={{...styles.dot, background: '#ff5f56'}}></span>
          <span style={{...styles.dot, background: '#ffbd2e'}}></span>
          <span style={{...styles.dot, background: '#27c93f'}}></span>
        </div>
        <div style={styles.title}>{title}</div>
      </div>
      <div style={styles.content}>
        {children}
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #333',
    backgroundColor: 'rgba(10, 10, 10, 0.9)', // Slight transparency
    marginBottom: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 30px rgba(0, 255, 0, 0.1)',
    backdropFilter: 'blur(5px)',
    overflow: 'hidden'
  },
  header: {
    backgroundColor: '#1a1a1a',
    padding: '10px 15px',
    borderBottom: '1px solid #333',
    display: 'flex',
    alignItems: 'center',
  },
  buttons: {
    display: 'flex',
    gap: '8px',
    marginRight: '15px'
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    display: 'inline-block'
  },
  title: {
    color: '#888',
    fontSize: '0.9rem',
    fontFamily: 'monospace'
  },
  content: {
    padding: '20px',
    color: '#e0e0e0'
  }
};

export default TerminalCard;