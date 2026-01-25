import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ProfileSection from '../features/profile/ProfileSection';
import SkillsSection from '../features/skills/SkillsSection';
import ProjectSection from '../features/projects/ProjectSection';
import CyberButton from '../components/CyberButton';
import MatrixRain from '../components/MatrixRain';
import ContactForm from '../features/contact/ContactForm';
import ExperienceSection from '../features/experience/ExperienceSection';
import ArchitectureSection from '../features/development/ArchitectureSection';
import BootSequence from '../components/BootSequence';
// 1. Import the Footer
import Footer from '../components/Footer';

const Home = () => {
  const [booted, setBooted] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Kiran_Bavdane_CEH_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {!booted ? (
        <BootSequence onComplete={() => setBooted(true)} />
      ) : (
        <>
          <MatrixRain />
          <Navbar />

          {/* 2. UPDATE: Changed paddingBottom to 0 for better footer alignment */}
          <div style={{ paddingTop: '80px', paddingBottom: '0px', paddingLeft: '20px', paddingRight: '20px' }}>
            
            <section id="identity">
              <ProfileSection />
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                 <CyberButton text="DOWNLOAD ENCRYPTED RESUME" onClick={handleDownload} />
              </div>
            </section>

            <section id="skills">
              <SkillsSection />
            </section>

            <section id="architecture">
               <ArchitectureSection />
            </section>

            <section id="history">
               <ExperienceSection />
            </section>

            <section id="missions">
              <ProjectSection />
            </section>

            <section id="contact">
              <ContactForm /> 
            </section>

            {/* 3. UPDATE: Replaced "System Offline" text with the Cyber Footer */}
            <Footer />

          </div>
        </>
      )}
    </>
  );
};

export default Home;