import React, { useState } from 'react';
import TerminalCard from '../../components/TerminalCard';

const ArchitectureSection = () => {
  const [activeStage, setActiveStage] = useState(null);

  const stages = [
    { 
      id: 'SOURCE', 
      label: 'DEV_ENV', 
      icon: '💻',
      x: '10%', 
      y: '50%',
      title: 'SECURE CODING & COMMIT',
      tools: ['IDE Security Plugins', 'Pre-commit Hooks', 'GPG Signing'],
      desc: 'Enforcing security at the source. Secrets detection and linting run before code is even pushed to the repo.' 
    },
    { 
      id: 'BUILD', 
      label: 'CI_PIPELINE', 
      icon: '⚙️',
      x: '36%', 
      y: '50%',
      title: 'STATIC ANALYSIS (SAST/SCA)',
      tools: ['SonarQube (SAST)', 'Snyk (SCA)', 'Container Scanning'],
      desc: 'Automated analysis of source code and dependencies to catch vulnerabilities (OWASP Top 10) before build artifacts are created.' 
    },
    { 
      id: 'TEST', 
      label: 'STAGING', 
      icon: '🛡️',
      x: '63%', 
      y: '50%',
      title: 'DYNAMIC ANALYSIS (DAST)',
      tools: ['OWASP ZAP', 'Burp Suite CI', 'Integration Tests'],
      desc: 'Black-box testing against the running application. Simulating attacks to find runtime vulnerabilities and logic flaws.' 
    },
    { 
      id: 'PROD', 
      label: 'LIVE_ENV', 
      icon: '🚀',
      x: '90%', 
      y: '50%',
      title: 'RUNTIME PROTECTION',
      tools: ['WAF (ModSecurity)', 'SIEM (Splunk)', 'RASP'],
      desc: 'Active defense. The WAF filters malicious traffic (SQLi/XSS) while SIEM monitors logs for anomaly detection.' 
    }
  ];

  return (
    <div id="architecture" style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 20px' }}>
      <TerminalCard title="// SECURE_SDLC_PIPELINE">
        <div style={styles.diagramContainer}>
          
          {/* THE PIPELINE (SVG CONNECTORS) */}
          <svg style={styles.svgOverlay}>
            {/* Line 1: Source -> Build */}
            <line x1="10%" y1="50%" x2="36%" y2="50%" style={styles.connectionLine} />
            {/* Line 2: Build -> Test */}
            <line x1="36%" y1="50%" x2="63%" y2="50%" style={styles.connectionLine} />
            {/* Line 3: Test -> Prod */}
            <line x1="63%" y1="50%" x2="90%" y2="50%" style={styles.connectionLine} />
            
            {/* Animated Data Packets */}
            <circle r="4" fill="#00ff00">
              <animateMotion dur="4s" repeatCount="indefinite" path="M 100,150 L 900,150" />
            </circle>
          </svg>

          {/* NODES (STAGES) */}
          {stages.map((stage) => (
            <div 
              key={stage.id}
              style={{ ...styles.node, left: stage.x, top: stage.y }}
              onMouseEnter={() => setActiveStage(stage)}
              onMouseLeave={() => setActiveStage(null)}
            >
              <div style={{
                ...styles.nodeIcon,
                borderColor: activeStage?.id === stage.id ? '#00ff00' : '#333',
                boxShadow: activeStage?.id === stage.id ? '0 0 15px #00ff00' : 'none',
                transform: activeStage?.id === stage.id ? 'scale(1.1)' : 'scale(1)'
              }}>
                {stage.icon}
              </div>
              <div style={styles.nodeLabel}>[{stage.label}]</div>
            </div>
          ))}

          {/* INFO PANEL (Dynamic Detail View) */}
          <div style={styles.infoPanel}>
            {activeStage ? (
              <>
                <div style={styles.panelHeader}>
                  <h4 style={{ color: '#00ff00', margin: 0 }}>:: {activeStage.title}</h4>
                  <span style={{ color: '#555', fontSize: '0.8rem' }}>PHASE: {activeStage.id}</span>
                </div>
                
                <div style={{ display: 'flex', gap: '20px', marginTop: '10px', flexWrap: 'wrap' }}>
                  {/* Left: Description */}
                  <p style={{ color: '#ccc', margin: 0, fontSize: '0.9rem', flex: 1, lineHeight: '1.5' }}>
                    {activeStage.desc}
                  </p>
                  
                  {/* Right: Tools List */}
                  <div style={{ flex: 1, borderLeft: '1px solid #333', paddingLeft: '20px', minWidth: '200px' }}>
                    <div style={{ color: '#888', fontSize: '0.75rem', marginBottom: '5px' }}>SECURITY_CONTROLS:</div>
                    <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                      {activeStage.tools.map(tool => (
                        <span key={tool} style={styles.toolBadge}>{tool}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div style={{ textAlign: 'center', color: '#666', paddingTop: '10px' }}>
                &gt; HOVER OVER A PIPELINE STAGE TO VIEW SECURITY PROTOCOLS & TOOLS
              </div>
            )}
          </div>

        </div>
      </TerminalCard>
      
      {/* CSS for Data Packet Animation */}
      <style>{`
        @keyframes flow {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
};

const styles = {
  diagramContainer: {
    height: '350px', // Taller to fit details
    position: 'relative',
    background: 'radial-gradient(circle at center, rgba(0,20,0,0.4) 0%, rgba(0,0,0,0.8) 100%)', // Subtle gradient
    border: '1px solid #333',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  svgOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0
  },
  connectionLine: {
    stroke: '#003300',
    strokeWidth: '3',
    strokeDasharray: '10,5', // Dashed line
    animation: 'flow 1s linear infinite' // Moving effect
  },
  node: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    cursor: 'pointer',
    zIndex: 2,
    width: '120px'
  },
  nodeIcon: {
    width: '50px',
    height: '50px',
    background: '#0d0d0d',
    border: '2px solid #333',
    borderRadius: '50%',
    margin: '0 auto 10px auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    transition: 'all 0.3s'
  },
  nodeLabel: {
    color: '#888',
    fontSize: '0.75rem',
    fontFamily: 'monospace',
    background: '#000',
    padding: '2px 6px',
    border: '1px solid #222',
    borderRadius: '4px'
  },
  infoPanel: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    height: '130px',
    background: 'rgba(0, 20, 0, 0.95)',
    borderTop: '1px solid #00ff00',
    padding: '20px',
    zIndex: 3,
    backdropFilter: 'blur(5px)'
  },
  panelHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px dashed #333',
    paddingBottom: '5px'
  },
  toolBadge: {
    background: 'rgba(0, 255, 0, 0.1)',
    color: '#00ccff',
    border: '1px solid #003300',
    fontSize: '0.7rem',
    padding: '2px 6px',
    borderRadius: '2px',
    fontFamily: 'monospace'
  }
};

export default ArchitectureSection;