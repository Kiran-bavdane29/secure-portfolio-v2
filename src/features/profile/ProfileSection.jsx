import React from 'react';
import TerminalCard from '../../components/TerminalCard';
import GlitchText from '../../components/GlitchText';
import { portfolioData } from '../../utils/portfolioData';
import { useTypewriter } from '../../hooks/useTypewriter';

const ProfileSection = () => {
  const { personal, stats } = portfolioData;
  const typedSummary = useTypewriter(personal.summary, 20); 

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <TerminalCard title="// USER_IDENTITY">
        <div style={{ marginBottom: '10px' }}>
            <GlitchText text={personal.name} as="h1" />
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <h3 style={{ color: '#888', margin: 0 }}>{personal.role}</h3>
        <span style={{ 
            background: '#003300', 
            color: '#0f0', 
            padding: '2px 8px', 
            borderRadius: '4px', 
            fontSize: '0.7rem', 
            border: '1px solid #0f0',
            letterSpacing: '1px'
        }}>
            ✓ VERIFIED_CEH
        </span>
        </div>
        
        <p style={{ lineHeight: '1.6', color: '#ccc', minHeight: '80px' }}>
          {typedSummary}<span className="cursor">|</span>
        </p>

        <div style={{ marginTop: '20px', borderTop: '1px dashed #333', paddingTop: '15px', fontSize: '0.9rem' }}>
          {/* CONTACT INFO */}
          <div style={{ marginBottom: '15px' }}>
            📍 {personal.location} <br/>
            {/* 📧 {personal.email} */}
          </div>

          {/* SOCIAL UPLINKS (NEW FEATURE) */}
          <div style={{ display: 'flex', gap: '15px' }}>
            <a 
              href="https://www.linkedin.com/in/kiran-bavdane-0471a0194" 
              target="_blank" 
              rel="noreferrer"
              style={styles.socialLink}
            >
              [ LINKEDIN_UPLINK ]
            </a>
            {/* If you have GitHub, add it here. If not, keep this commented out or remove it */}
            {/* <a href="https://github.com/YOUR_GITHUB" target="_blank" style={styles.socialLink}>[ GITHUB_REPO ]</a> */}
          </div>
        </div>
      </TerminalCard>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        {stats.map((stat, index) => (
          <div key={index} style={styles.statBox}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#00ff00' }}>{stat.value}</div>
            <div style={{ fontSize: '0.8rem', color: '#888' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      <style>{`
        .cursor { animation: blink 1s step-end infinite; color: #0f0; }
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
    </div>
  );
};

const styles = {
  statBox: {
    background: 'rgba(0, 255, 0, 0.05)',
    border: '1px solid #333',
    padding: '1rem',
    textAlign: 'center',
    borderRadius: '4px'
  },
  socialLink: {
    textDecoration: 'none',
    color: '#00ccff', // Cyan color to stand out from the green
    border: '1px solid #00ccff',
    padding: '5px 10px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    transition: 'all 0.3s',
    display: 'inline-block'
  }
};

export default ProfileSection;