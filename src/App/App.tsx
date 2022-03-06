import React from 'react';

import GlobalStyle from './GlobalStyle';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

// Sections
import HomeSection from 'sections/HomeSection';
import AboutSection from 'sections/AboutSection';
import ExperienceSection from 'sections/ExperienceSection';
// import PortfolioSection from 'sections/PortfolioSection';
import SkillSection from 'sections/SkillSection';
import ContactSection from 'sections/ContactSection';

function App() {
  return (
    <>
      <GlobalStyle />

      <AppHeader />
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      {/* <PortfolioSection /> */}
      <SkillSection />
      <ContactSection />
      <AppFooter />
    </>
  );
}
export default App;
