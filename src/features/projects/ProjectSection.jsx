import React, { useState } from 'react';
import TerminalCard from '../../components/TerminalCard';
import { portfolioData } from '../../utils/portfolioData';

// Internal Component for Hover Logic
const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    border: isHovered ? '1px solid #00ff00' : '1px solid #333', // Border turns green
    padding: '1.5rem',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease',
    cursor: 'pointer', // Indicates interactivity
    transform: isHovered ? 'translateY(-5px)' : 'translateY(0)', // Lifts up
    boxShadow: isHovered ? '0 10px 30px rgba(0, 255, 0, 0.15)' : 'none', // Green Glow
    position: 'relative',
    overflow: 'hidden'
  };

  return (
    <div 
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Optional: Scanline Effect inside the card */}
      {isHovered && <div style={styles.scanline} />}

      <div style={styles.header}>
        <span style={{ color: isHovered ? '#00ff00' : '#ffbd2e', fontSize: '0.8rem', transition: 'color 0.3s', fontWeight: 'bold' }}>
          [{project.status}]
        </span>
        <h3 style={{ margin: '5px 0', color: '#fff', textShadow: isHovered ? '0 0 10px #00ff00' : 'none' }}>
          {project.title}
        </h3>
      </div>
      
      <div style={{ fontSize: '0.85rem', color: '#888', marginBottom: '1rem' }}>
        TYPE: {project.type}
      </div>
      
      <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.5', flex: 1 }}>
        {project.desc}
      </p>
      
      <div style={{ marginTop: '15px', paddingTop: '10px', borderTop: '1px dashed #333' }}>
        {project.tech.map(tech => (
          <span key={tech} style={{
            ...styles.tag,
            borderColor: isHovered ? '#00ff00' : '#333',
            color: isHovered ? '#fff' : '#0f0'
          }}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectSection = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
      <TerminalCard title="// MISSION_LOGS">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </TerminalCard>
    </div>
  );
};

const styles = {
  header: { marginBottom: '10px' },
  tag: {
    display: 'inline-block',
    background: '#111',
    color: '#0f0',
    fontSize: '0.75rem',
    padding: '2px 8px',
    marginRight: '5px',
    marginTop: '5px',
    borderRadius: '2px',
    border: '1px solid #333',
    transition: 'all 0.3s'
  },
  scanline: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, transparent 50%, rgba(0, 255, 0, 0.05) 50%)',
    backgroundSize: '100% 4px',
    pointerEvents: 'none'
  }
};

export default ProjectSection;