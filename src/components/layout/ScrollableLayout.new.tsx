import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
import Navbar from './Navbar';
import HomeSection from '../../pages/HomeSection';
import AboutSection from '../../pages/AboutSection';
import FeaturesSection from '../../pages/FeaturesSection';
import ContactSection from '../../pages/ContactSection';

const sections = [
  { id: 'home', label: 'Home', component: HomeSection },
  { id: 'about', label: 'About', component: AboutSection },
  { id: 'features', label: 'Features', component: FeaturesSection },
  { id: 'contact', label: 'Contact', component: ContactSection },
];

const ScrollableLayout = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Handle scroll events for section changes
  const handleScroll = useCallback((e: WheelEvent) => {
    e.preventDefault();
    
    if (isScrolling) return;
    
    // Determine scroll direction
    const delta = Math.sign(e.deltaY);
    
    if (delta > 0 && currentSection < sections.length - 1) {
      // Scroll down
      setIsScrolling(true);
      setCurrentSection(prev => {
        const nextSection = Math.min(prev + 1, sections.length - 1);
        return nextSection;
      });
    } else if (delta < 0 && currentSection > 0) {
      // Scroll up
      setIsScrolling(true);
      setCurrentSection(prev => {
        const prevSection = Math.max(prev - 1, 0);
        return prevSection;
      });
    }
    
    // Prevent rapid scrolling
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  }, [currentSection, isScrolling]);

  // Add and remove scroll event listener
  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [handleScroll]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' && currentSection < sections.length - 1) {
        e.preventDefault();
        setCurrentSection(prev => prev + 1);
      } else if (e.key === 'ArrowUp' && currentSection > 0) {
        e.preventDefault();
        setCurrentSection(prev => prev - 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSection(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSection(sections.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection]);

  // Handle navigation dots click
  const goToSection = (index: number) => {
    setCurrentSection(index);
  };

  // Navigation dots
  const renderDots = () => (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-4 z-50">
      {sections.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSection(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentSection === index ? 'bg-green-600 scale-125' : 'bg-gray-400 hover:bg-green-400'
          }`}
          aria-label={`Go to ${sections[index].label}`}
          aria-current={currentSection === index ? 'step' : undefined}
        />
      ))}
    </div>
  );

  // Navigation arrows
  const renderArrows = () => (
    <div className="fixed right-8 bottom-8 flex flex-col items-center gap-4 z-50">
      <button
        onClick={() => setCurrentSection(prev => Math.max(0, prev - 1))}
        disabled={currentSection === 0}
        className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200 disabled:opacity-30"
        aria-label="Previous section"
      >
        <ChevronUp className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={() => setCurrentSection(prev => Math.min(sections.length - 1, prev + 1))}
        disabled={currentSection === sections.length - 1}
        className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200 disabled:opacity-30"
        aria-label="Next section"
      >
        <ChevronDown className="w-6 h-6 text-white" />
      </button>
    </div>
  );

  // Scroll to section when currentSection changes
  useEffect(() => {
    const section = document.getElementById(sections[currentSection].id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentSection]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Navbar currentSection={currentSection} sections={sections} onNavClick={goToSection} />
      
      <div className="h-full overflow-y-auto snap-y snap-mandatory">
        {sections.map((section, _index) => (
          <section
            key={section.id}
            id={section.id}
            className="h-screen w-full snap-start relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full"
              >
                {<section.component />}
              </motion.div>
            </AnimatePresence>
          </section>
        ))}
      </div>

      {renderDots()}
      {renderArrows()}
    </div>
  );
};

export default ScrollableLayout;
