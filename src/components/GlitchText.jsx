import React from 'react';

const GlitchText = ({ text, as = 'h1' }) => {
  const Tag = as;
  return (
    <div className="glitch-wrapper">
      <Tag className="glitch" data-text={text}>{text}</Tag>
      
      <style>{`
        .glitch-wrapper { display: inline-block; }
        .glitch {
          position: relative;
          color: #0f0;
          letter-spacing: 2px;
          margin: 0; /* Reset default margins */
        }
        .glitch::before, .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #0d0d0d;
        }
        .glitch::before {
          left: 2px;
          text-shadow: -1px 0 #ff00c1;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }
        .glitch::after {
          left: -2px;
          text-shadow: -1px 0 #00fff9;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim2 5s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim {
          0% { clip: rect(30px, 9999px, 10px, 0); }
          20% { clip: rect(80px, 9999px, 90px, 0); }
          40% { clip: rect(10px, 9999px, 50px, 0); }
          60% { clip: rect(40px, 9999px, 20px, 0); }
          80% { clip: rect(70px, 9999px, 30px, 0); }
          100% { clip: rect(60px, 9999px, 80px, 0); }
        }
        @keyframes glitch-anim2 {
          0% { clip: rect(10px, 9999px, 80px, 0); }
          20% { clip: rect(50px, 9999px, 20px, 0); }
          40% { clip: rect(20px, 9999px, 60px, 0); }
          60% { clip: rect(80px, 9999px, 10px, 0); }
          80% { clip: rect(30px, 9999px, 60px, 0); }
          100% { clip: rect(70px, 9999px, 50px, 0); }
        }
      `}</style>
    </div>
  );
};

export default GlitchText;