import React from 'react';
import TerminalCard from '../../components/TerminalCard';
import { portfolioData } from '../../utils/portfolioData';

const SkillBadge = ({ skill, type }) => {
  // Dynamic color based on type (Security = Red/Green mix, Dev = Blue/Green mix)
  const isSec = type === 'security';
  
  return (
    <div style={styles.badge(isSec)} className="skill-badge">
      <span style={{ marginRight: '8px' }}>{isSec ? '🛡' : '⚡'}</span>
      {skill}
      
      {/* Hover Animation Styles injected locally for simplicity */}
      <style>{`
        .skill-badge {
          transition: all 0.3s ease;
        }
        .skill-badge:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 5px 15px rgba(0, 255, 0, 0.2);
          border-color: #00ff00 !important;
          background: rgba(0, 255, 0, 0.1) !important;
          color: #fff !important;
          cursor: help;
        }
      `}</style>
    </div>
  );
};

const SkillsSection = () => {
  const { skills } = portfolioData;

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
      <TerminalCard title="// SYSTEM_CAPABILITIES">
        
        {/* DEV STACK */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={styles.categoryTitle}>:: DEV_STACK_MODULES</h4>
          <div style={styles.grid}>
            {skills.development.map(skill => (
              <SkillBadge key={skill} skill={skill} type="dev" />
            ))}
          </div>
        </div>

        {/* SECURITY TOOLS */}
        <div>
          <h4 style={styles.categoryTitle}>:: SECURITY_ARSENAL</h4>
          <div style={styles.grid}>
            {skills.security.map(skill => (
              <SkillBadge key={skill} skill={skill} type="security" />
            ))}
          </div>
        </div>

      </TerminalCard>
    </div>
  );
};

const styles = {
  categoryTitle: {
    color: '#888',
    borderBottom: '1px solid #333',
    paddingBottom: '10px',
    marginBottom: '15px',
    fontFamily: '"Courier New", monospace'
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px'
  },
  badge: (isSec) => ({
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid #333',
    padding: '8px 16px',
    borderRadius: '4px',
    color: isSec ? '#00ff00' : '#00ccff', // Different colors for visual hierarchy
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none'
  })
};

export default SkillsSection;