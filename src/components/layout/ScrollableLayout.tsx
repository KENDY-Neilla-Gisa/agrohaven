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

  // Vertical progress line only (dots removed)
  const renderProgress = () => {
    return (
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
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
      </div>
    );
  };

  // Back to top button
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Check if scrolled to bottom
  const checkScrollPosition = useCallback(() => {
    if (!containerRef.current) return;
    
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    const isAtBottom = scrollHeight - (scrollTop + clientHeight) < 50; // 50px threshold from bottom
    
    setShowBackToTop(isAtBottom);
  }, []);

  // Add scroll event listener
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      return () => container.removeEventListener('scroll', checkScrollPosition);
    }
  }, [checkScrollPosition]);

  // Scroll to top function
  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setCurrentSection(0);
    }
  };

  // Back to top button
  const renderBackToTop = () => (
    <button
      onClick={scrollToTop}
      className={`fixed right-6 bottom-6 p-3 rounded-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300 shadow-lg z-40 ${
        showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Navbar currentSection={currentSection} sections={sections} onNavClick={goToSection} />
      <div className="w-full">
        <div 
          ref={containerRef}
          className="h-screen overflow-y-auto overflow-x-hidden scroll-smooth bg-white dark:bg-dark-background transition-colors duration-200 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar]:h-1.5"
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
      {renderProgress()}
      {renderBackToTop()}
    </div>
  );
};

export default ScrollableLayout;