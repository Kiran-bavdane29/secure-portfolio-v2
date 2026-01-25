import React, { useState } from 'react';
import TerminalCard from '../../components/TerminalCard';

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "kiranbavdane578@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', textAlign: 'center' }}>
      <TerminalCard title="// ESTABLISH_CONNECTION">
        <h2 style={{ color: '#fff' }}>READY TO SECURE YOUR ARCHITECTURE?</h2>
        <p style={{ color: '#ccc', marginBottom: '2rem' }}>
          My secure communication channels are open for new opportunities.
        </p>
        
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {/* Button 1: Mailto Link */}
          <a 
            href={`mailto:${email}`}
            style={styles.primaryBtn}
          >
            [ INITIATE EMAIL PROTOCOL ]
          </a>

          {/* Button 2: Copy to Clipboard */}
          <button 
            onClick={handleCopy}
            style={styles.secondaryBtn}
          >
            {copied ? "✓ ID COPIED TO CLIPBOARD" : "[ COPY SECURE ID ]"}
          </button>
        </div>
      </TerminalCard>
    </div>
  );
};

const styles = {
  primaryBtn: {
    textDecoration: 'none', 
    border: '1px solid #0f0', 
    padding: '15px 30px', 
    color: '#0f0', 
    fontWeight: 'bold',
    background: 'rgba(0, 255, 0, 0.1)',
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'all 0.3s'
  },
  secondaryBtn: {
    border: '1px dashed #555', 
    padding: '15px 30px', 
    color: '#ccc', 
    fontWeight: 'bold',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontFamily: 'inherit'
  }
};

export default ContactSection;