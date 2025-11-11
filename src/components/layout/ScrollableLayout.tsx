/// <reference types="node" />
import { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Debounce function to limit how often we check scroll position
  const debounce = useCallback((func: Function, wait: number) => {
    return function executedFunction(...args: any[]) {
      const later = () => {
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        func(...args);
      };
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(later, wait);
    };
  }, []);

  // Update current section based on scroll position
  const handleScroll = useCallback(() => {
    if (!containerRef.current || isScrolling.current) return;
    
    const container = containerRef.current;
    const scrollPosition = container.scrollTop + (container.clientHeight / 3);
    const sections = Array.from(container.children[0].children).slice(0, -1) as HTMLElement[];
    
    // Find which section is currently in view
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        setCurrentSection(i);
        break;
      }
    }
  }, []);

  // Create a debounced version of handleScroll
  const debouncedHandleScroll = useCallback(debounce(handleScroll, 50), [handleScroll]);

  // Add scroll event listener with debounce
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', debouncedHandleScroll, { passive: true });
      return () => {
        container.removeEventListener('scroll', debouncedHandleScroll);
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      };
    }
  }, [debouncedHandleScroll]);

  // Handle navigation
  const goToSection = useCallback((index: number) => {
    if (index < 0 || index >= sections.length) return;
    
    isScrolling.current = true;
    setCurrentSection(index);
    
    if (containerRef.current) {
      const sectionElement = containerRef.current.children[0].children[index] as HTMLElement;
      if (sectionElement) {
        sectionElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    
    // Reset scrolling flag after animation completes
    setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  }, []);

  // Navigation dots with labels and progress indicator
  const renderDots = () => {
    const sectionTitles = ['Home', 'About', 'Features', 'Contact'];
    
    return (
      <div className="fixed right-2 md:right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-6">
        {/* Vertical progress line */}
        <div className="h-32 w-0.5 bg-gray-200 dark:bg-gray-700 relative">
          <div 
            className="absolute left-0 w-0.5 bg-green-500 transition-all duration-300"
            style={{
              height: `${(currentSection / (sections.length - 1)) * 100}%`,
              top: '0',
              transform: 'translateY(0)',
              willChange: 'height'
            }}
          />
        </div>
        
        {/* Navigation dots */}
        <div className="flex flex-col items-center gap-6">
          {sections.map((section, index) => {
            const isActive = currentSection === index;
            return (
              <button
                key={section.id}
                onClick={() => goToSection(index)}
                className="flex items-center gap-3 group relative"
                aria-label={`Go to ${section.label}`}
              >
                <div className="absolute right-4 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {sectionTitles[index]}
                </div>
                <span 
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-green-600 scale-125 ring-4 ring-green-100 dark:ring-green-900/30' 
                      : 'bg-gray-300 dark:bg-gray-600 group-hover:bg-green-500 group-hover:scale-110'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  // Navigation arrows
  const renderArrows = () => (
    <div className="fixed right-4 bottom-4 md:right-8 md:bottom-8 flex flex-col items-center gap-3 z-40">
      <button
        onClick={() => goToSection(currentSection - 1)}
        disabled={currentSection === 0}
        className="p-2.5 md:p-3 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 disabled:opacity-30 shadow-lg border border-gray-200 dark:border-gray-700"
        aria-label="Previous section"
      >
        <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-gray-700 dark:text-gray-300" />
      </button>
      <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
        {currentSection + 1} / {sections.length}
      </div>
      <button
        onClick={() => goToSection(currentSection + 1)}
        disabled={currentSection === sections.length - 1}
        className="p-2.5 md:p-3 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 disabled:opacity-30 shadow-lg border border-gray-200 dark:border-gray-700"
        aria-label="Next section"
      >
        <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-gray-700 dark:text-gray-300" />
      </button>
    </div>
  );

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Navbar currentSection={currentSection} sections={sections} onNavClick={goToSection} />
      <div className="w-full">
        <div 
          ref={containerRef}
          className="h-screen overflow-y-auto overflow-x-hidden scroll-smooth bg-white dark:bg-dark-background transition-colors duration-200 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent"
          onScroll={handleScroll}
        >
          <div className="pt-16">
            {sections.map((section, index) => {
              const SectionComponent = section.component;
              return (
                <section
                  key={section.id}
                  id={section.id}
                  className={`min-h-screen flex items-center justify-center p-6 transition-colors duration-200 ${
                    index % 2 === 0 
                      ? 'bg-gray-50 dark:bg-gray-800' 
                      : 'bg-white dark:bg-gray-900'
                  }`}
                >
                  <div className="w-full max-w-7xl mx-auto">
                    <AnimatePresence>
                      <SectionComponent onNavClick={goToSection} />
                    </AnimatePresence>
                  </div>
                </section>
              );
            })}
            {/* Footer outside sections */}
            <div className="w-full">
              <Footer />
            </div>
          </div>
        </div>
      </div>
      {renderDots()}
      {renderArrows()}
    </div>
  );
};

export default ScrollableLayout;