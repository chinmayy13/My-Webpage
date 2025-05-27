import React, { useState, useEffect } from 'react';
import Introduction from './components/Introduction';
import MemeGallery from './components/MemeGallery';
import SocialLinks from './components/SocialLinks';
import CreativeSkills from './components/CreativeSkills';
import VolunteerWork from './components/VolunteerWork';
import PersonalProjects from './components/PersonalProjects';
import ProfileVibes from './components/ProfileVibes';
import FloatingParticles from './components/FloatingParticles';
import ScrollProgress from './components/ScrollProgress';
import { MoodProvider } from './contexts/MoodContext';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <MoodProvider>
      <div className="relative">
        <ScrollProgress />
        <FloatingParticles scrollY={scrollY} />
        
        <main className="w-full overflow-hidden">
          <Introduction />
          <MemeGallery />
          <SocialLinks />
          <CreativeSkills />
          <VolunteerWork />
          <PersonalProjects />
          <ProfileVibes />
        </main>
      </div>
    </MoodProvider>
  );
}

export default App