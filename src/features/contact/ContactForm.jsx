import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import TerminalCard from '../../components/TerminalCard';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xaqoyvbr"); // PASTE YOUR ID HERE
  
  const [securityLogs, setSecurityLogs] = useState([]);
  const [ip, setIp] = useState("127.0.0.1");
  const [isValid, setIsValid] = useState(false);
  
  // Validation State
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  // Start with errors = true to force validation before sending
  const [errors, setErrors] = useState({ name: true, email: true, message: true }); 

  // 1. Fake IP Fetch
  useEffect(() => {
    setTimeout(() => setIp("192.168.1.105 (Secure Proxy)"), 1500);
    addLog("INITIALIZING_SECURE_CHANNEL...", "info");
    addLog("WAF_RULES_LOADED: STRICT_MODE", "success");
  }, []);

  const addLog = (msg, type = "info") => {
    const color = type === 'error' ? '#ff3333' : (type === 'success' ? '#0f0' : '#00ccff');
    setSecurityLogs(prev => [`<span style="color:${color};">> ${msg}</span>`, ...prev.slice(0, 6)]);
  };

  // 2. THE UPGRADED SECURITY ENGINE
  const validateField = (field, value) => {
    let hasError = false;

    // --- LEVEL 1: DANGEROUS PATTERNS (Keywords) ---
    // catches <script>, javascript:, DROP TABLE, etc.
    const patterns = /script|alert|onload|eval|document\.|window\.|drop table|insert into|delete from/i;
    if (patterns.test(value)) {
      addLog(`CRITICAL_THREAT: INJECTION_KEYWORD [${field.toUpperCase()}]`, "error");
      return true; // Immediate fail
    }

    // --- LEVEL 2: UNSAFE SPECIAL CHARACTERS (The Fix) ---
    // We block: < > ; { } ( ) = $ `
    // NOTE: We allow ' and " for standard grammar, but you can block them by adding them here.
    const unsafeChars = /[<>;(){}=$`]/; 
    if (unsafeChars.test(value)) {
       // Find exactly which char triggered it for the log
       const char = value.match(unsafeChars)[0];
       addLog(`WARN: ILLEGAL_CHARACTER DETECTED: '${char}'`, "error");
       return true; // Immediate fail
    }

    // --- LEVEL 3: STRICT EMAIL CHECK ---
    if (field === 'email') {
      // Must be standard email format
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(value)) {
         return true; 
      } else {
         // Only verify if we haven't verified recently to avoid log spam
         if (errors.email) addLog("EMAIL_SYNTAX_VERIFIED [✓]", "success");
      }
    }

    // --- LEVEL 4: EMPTY CHECK ---
    if (value.trim().length < 2) return true;

    return false; // No errors found
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    
    // 1. Run Strict Validation
    const isError = validateField(name, value);

    // 2. Update State
    setFormState(prev => ({ ...prev, [name]: value }));
    
    setErrors(prev => {
      const newErrors = { ...prev, [name]: isError };
      // 3. Check Master Switch (Are ALL fields clean?)
      const allClean = !newErrors.name && !newErrors.email && !newErrors.message;
      setIsValid(allClean);
      return newErrors;
    });
  };

  const handleSecureSubmit = (e) => {
    e.preventDefault();
    if (!isValid) {
      addLog("TRANSMISSION_ABORTED: SECURITY_VIOLATION", "error");
      return;
    }
    addLog("PACKET_ENCRYPTION_STARTED...", "info");
    handleSubmit(e);
  };

  if (state.succeeded) {
    return (
      <div style={{ maxWidth: '900px', margin: '2rem auto' }}>
        <TerminalCard title="// TRANSMISSION_LOG">
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <h2 style={{ color: '#0f0' }}>✓ PAYLOAD DELIVERED</h2>
            <p style={{ color: '#ccc' }}>Secure handshake complete.</p>
          </div>
        </TerminalCard>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '900px', margin: '2rem auto' }}>
      <TerminalCard title="// SECURE_COMMS_LINK">
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          
          {/* LEFT: FORM INPUTS */}
          <div style={{ flex: '2', minWidth: '300px' }}>
            <form onSubmit={handleSecureSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              
              <div>
                <label style={styles.label}>IDENTIFY_YOURSELF:</label>
                <input 
                  type="text" 
                  name="name" 
                  // Border turns RED if error, GREEN if valid
                  style={{ ...styles.input, borderColor: errors.name ? '#ff3333' : '#0f0' }} 
                  placeholder="Recruiter Name"
                  onChange={handleInput}
                  autoComplete="off"
                />
              </div>

              <div>
                <label style={styles.label}>RETURN_PATH (EMAIL):</label>
                <input 
                  type="email" 
                  name="email" 
                  style={{ ...styles.input, borderColor: errors.email ? '#ff3333' : '#0f0' }} 
                  placeholder="name@company.com" 
                  onChange={handleInput}
                  autoComplete="off"
                />
              </div>

              <div>
                <label style={styles.label}>PAYLOAD:</label>
                <textarea 
                  name="message" 
                  style={{ ...styles.textarea, borderColor: errors.message ? '#ff3333' : '#0f0' }} 
                  placeholder="Enter message (Special chars blocked)" 
                  onChange={handleInput}
                  autoComplete="off"
                />
              </div>

              {/* BUTTON DISABLED UNTIL VALID */}
              <button 
                type="submit" 
                style={{ 
                  ...styles.button, 
                  opacity: isValid ? 1 : 0.5, 
                  cursor: isValid ? 'pointer' : 'not-allowed',
                  background: isValid ? '#003300' : '#330000', // Red background if locked
                  borderColor: isValid ? '#00ff00' : '#ff3333'
                }} 
                disabled={!isValid || state.submitting}
              >
                {state.submitting ? 'TRANSMITTING...' : isValid ? '[ EXECUTE SECURE SEND ]' : '[ LOCKED: SECURITY VIOLATION ]'}
              </button>
            
            </form>
          </div>

          {/* RIGHT: LIVE SECURITY LOG */}
          <div style={{ flex: '1', minWidth: '250px', background: 'rgba(0,0,0,0.3)', border: '1px solid #333', padding: '15px', borderRadius: '4px' }}>
            <div style={{ borderBottom: '1px solid #333', paddingBottom: '10px', marginBottom: '10px', fontSize: '0.8rem', color: '#888' }}>
              :: NETWORK_METRICS
            </div>
            <div style={{ fontSize: '0.75rem', color: '#00ccff', marginBottom: '15px', fontFamily: 'monospace' }}>
              <div>CLIENT_IP: {ip}</div>
              <div>PROTOCOL: TLS 1.3</div>
              <div style={{ color: isValid ? '#0f0' : '#ff3333' }}>
                STATUS: {isValid ? 'SECURE' : 'THREAT_DETECTED'}
              </div>
            </div>

            <div style={{ borderBottom: '1px solid #333', paddingBottom: '10px', marginBottom: '10px', fontSize: '0.8rem', color: '#888' }}>
              :: LIVE_WAF_LOGS
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: '0.7rem' }}>
              {securityLogs.map((log, i) => (
                <div key={i} dangerouslySetInnerHTML={{__html: log}} style={{ marginBottom: '4px' }} />
              ))}
            </div>
          </div>

        </div>
      </TerminalCard>
    </div>
  );
};

const styles = {
  label: { color: '#888', fontSize: '0.75rem', marginBottom: '5px', display: 'block' },
  input: { width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid #333', color: '#fff', outline: 'none', fontFamily: 'monospace', transition: 'border-color 0.3s' },
  textarea: { width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid #333', color: '#fff', minHeight: '120px', outline: 'none', fontFamily: 'monospace', resize: 'vertical', transition: 'border-color 0.3s' },
  button: { width: '100%', padding: '15px', color: '#fff', fontWeight: 'bold', marginTop: '10px', transition: 'all 0.3s', border: '1px solid' },
};

export default ContactForm;