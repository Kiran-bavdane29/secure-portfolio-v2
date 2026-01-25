import React, { useEffect, useRef, useState } from 'react';
import TerminalCard from '../../components/TerminalCard';

const timelineData = [
  {
    year: '2026',
    meta: 'EXPECTED',
    title: 'MASTER OF SCIENCE (CS)',
    org: 'Ramniranjan Jhunjhunwala College',
    type: 'EDUCATION',
    desc: 'Specializing in Advanced Algorithms and Network Security.',
    id: 'log_01'
  },
  {
    year: '2024',
    meta: 'JAN',
    title: 'CERTIFIED ETHICAL HACKER (CEH)',
    org: 'EC-Council',
    type: 'CERTIFICATION',
    desc: 'Achieved global credential for penetration testing and vulnerability assessment.',
    highlight: true, // Gold Glow
    id: 'log_02'
  },
  {
    year: '2022',
    meta: 'PRESENT',
    title: 'SOFTWARE ENGINEER (SECURITY)',
    org: 'Sodel Software Solutions',
    type: 'EXPERIENCE',
    desc: 'Led vulnerability remediation (20+ critical patches). Architected HTTPS/TLS channels and reduced app risk by 40%.',
    id: 'log_03'
  },
  {
    year: '2022',
    meta: 'MAY',
    title: 'BACHELOR OF SCIENCE (CS)',
    org: 'Ramniranjan Jhunjhunwala College',
    type: 'EDUCATION',
    desc: 'Graduated with focus on Computer Science fundamentals.',
    id: 'log_04'
  }
];

// Individual Timeline Item Component
const TimelineItem = ({ item, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  // Scroll Detection Logic
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });
    const currentElement = domRef.current;
    if (currentElement) observer.observe(currentElement);
    return () => currentElement && observer.unobserve(currentElement);
  }, []);

  return (
    <div 
      ref={domRef} 
      style={{
        ...styles.timelineItem,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
        transition: `all 0.6s ease-out ${index * 0.2}s`,
        maxWidth: '1000px', 
        margin: '2rem auto' // Staggered delay
      }}
    >
      {/* 1. The Timestamp Column (Prominent Year) */}
      <div style={styles.timeColumn}>
        <div style={styles.year}>{item.year}</div>
        <div style={styles.meta}>{item.meta}</div>
      </div>

      {/* 2. The Connector Dot */}
      <div style={{
        ...styles.dot,
        background: item.highlight ? '#ffbd2e' : '#003300',
        borderColor: item.highlight ? '#ffbd2e' : (isVisible ? '#00ff00' : '#333'),
        boxShadow: item.highlight ? '0 0 20px rgba(255, 189, 46, 0.6)' : (isVisible ? '0 0 15px rgba(0, 255, 0, 0.4)' : 'none')
      }}></div>

      {/* 3. The Content Card */}
      <div style={{
        ...styles.card,
        borderColor: item.highlight ? '#ffbd2e' : (isVisible ? '#00ff00' : '#333'),
        background: item.highlight ? 'rgba(255, 189, 46, 0.05)' : 'rgba(0, 255, 0, 0.02)'
      }}>
        <div style={styles.cardHeader}>
          <span style={styles.typeBadge}>[{item.type}]</span>
          <span style={styles.logId}>::{item.id}</span>
        </div>
        
        <h3 style={{ ...styles.title, color: item.highlight ? '#ffbd2e' : '#fff' }}>
          {item.title}
        </h3>
        
        <div style={styles.org}>@{item.org}</div>
        
        <p style={styles.desc}>{item.desc}</p>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '4rem auto' }}>
      <TerminalCard title="// SYSTEM_HISTORY_LOG">
        <div style={styles.timelineContainer}>
          {/* The Laser Line (Pulsing) */}
          <div style={styles.verticalLine}></div>
          
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </TerminalCard>
      
      {/* Inject Keyframe Animations */}
      <style>{`
        @keyframes pulseLine {
          0% { opacity: 0.3; box-shadow: 0 0 5px #00ff00; }
          50% { opacity: 1; box-shadow: 0 0 15px #00ff00; }
          100% { opacity: 0.3; box-shadow: 0 0 5px #00ff00; }
        }
      `}</style>
    </div>
  );
};

const styles = {
  timelineContainer: {
    position: 'relative',
    paddingLeft: '80px', // Space for the timestamp
    paddingTop: '20px'
  },
  verticalLine: {
    position: 'absolute',
    left: '87px', // Aligned with dots
    top: '0',
    bottom: '0',
    width: '2px',
    background: '#00ff00',
    animation: 'pulseLine 3s infinite', // Pulsing Laser Effect
    zIndex: 0
  },
  timelineItem: {
    position: 'relative',
    marginBottom: '50px',
    display: 'flex',
    alignItems: 'flex-start'
  },
  // TIMESTAMP STYLES (New)
  timeColumn: {
    position: 'absolute',
    left: '-80px',
    width: '60px',
    textAlign: 'right',
    paddingRight: '10px'
  },
  year: {
    color: '#00ff00',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    fontFamily: 'monospace',
    textShadow: '0 0 5px rgba(0, 255, 0, 0.5)'
  },
  meta: {
    color: '#666',
    fontSize: '0.7rem',
    fontFamily: 'monospace'
  },
  // DOT STYLES
  dot: {
    position: 'absolute',
    left: '0', // Relative to the flex container start
    top: '5px',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    border: '2px solid',
    zIndex: 2,
    background: '#000',
    transition: 'all 0.5s ease'
  },
  // CARD STYLES
  card: {
    marginLeft: '30px', // Distance from line
    border: '1px solid #333',
    padding: '20px',
    borderRadius: '4px',
    transition: 'all 0.3s',
    flex: 1, // Take remaining width
    position: 'relative',
    boxShadow: '0 5px 20px rgba(0,0,0,0.3)' // Depth
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    borderBottom: '1px dashed rgba(255,255,255,0.1)',
    paddingBottom: '5px'
  },
  typeBadge: {
    fontSize: '0.7rem',
    color: '#888',
    fontFamily: 'monospace',
    letterSpacing: '1px'
  },
  logId: {
    fontSize: '0.7rem',
    color: '#444',
    fontFamily: 'monospace'
  },
  title: {
    margin: '0 0 5px 0',
    fontSize: '1.2rem',
    letterSpacing: '0.5px'
  },
  org: {
    color: '#00ccff',
    fontSize: '0.9rem',
    marginBottom: '15px',
    fontWeight: 'bold'
  },
  desc: {
    color: '#ccc',
    fontSize: '0.9rem',
    lineHeight: '1.6',
    margin: 0
  }
};

export default ExperienceSection;