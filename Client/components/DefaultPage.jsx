import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SectionOne from './SectionOne.jsx';
import About from './About.jsx'
function DefaultPage({aboutRef, handleScrollToAbout}) {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToAbout) {
      // Wait one tick so About renders first
      setTimeout(() => handleScrollToAbout(), 50);
    }
  }, [location, handleScrollToAbout]);
  
  return (
    <div>
        <SectionOne onScrollToAbout={handleScrollToAbout}/>
        <About aboutRef={aboutRef}/>
    </div>
  )
}

export default DefaultPage;