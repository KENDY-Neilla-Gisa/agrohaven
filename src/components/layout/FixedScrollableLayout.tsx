import { useState, useEffect, useRef } from 'react';
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

  // Update current section based on scroll position
  const handleScroll = () => {
    if (!containerRef.current || isScrolling.current) return;
    
    const scrollPosition = containerRef.current.scrollTop;
    const windowHeight = window.innerHeight;
    
    // Find which section is currently in view
    const current = Math.round(scrollPosition / windowHeight);
    setCurrentSection(Math.min(Math.max(0, current), sections.length - 1));
  };

  // Add scroll event listener
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Handle navigation
  const goToSection = (index: number) => {
    if (index < 0 || index >= sections.length) return;
    
    isScrolling.current = true;
    setCurrentSection(index);
    
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: window.innerHeight * index,
        behavior: 'smooth'
      });
    }
    
    // Reset scrolling flag after animation completes
    setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  };

  // Navigation dots
  const renderDots = () => (
    <div className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => goToSection(index)}
          className={`w-3 h-3 rounded-full transition-all ${
            currentSection === index ? 'bg-green-600 scale-125' : 'bg-gray-300 hover:bg-green-400'
          }`}
          aria-label={`Go to ${section.label}`}
        />
      ))}
    </div>
  );

  // Navigation arrows
  const renderArrows = () => (
    <div className="fixed right-4 bottom-4 md:right-8 md:bottom-8 flex flex-col items-center gap-4 z-50">
      <button
        onClick={() => goToSection(currentSection - 1)}
        disabled={currentSection === 0}
        className="p-2 md:p-3 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-200 disabled:opacity-30 shadow-lg"
        aria-label="Previous section"
      >
        <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
      </button>
      <button
        onClick={() => goToSection(currentSection + 1)}
        disabled={currentSection === sections.length - 1}
        className="p-2 md:p-3 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-200 disabled:opacity-30 shadow-lg"
        aria-label="Next section"
      >
        <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
      </button>
    </div>
  );

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Navbar currentSection={currentSection} sections={sections} onNavClick={goToSection} />
      <main className="w-full">
        <div 
          className="relative h-screen w-full overflow-y-auto snap-y snap-mandatory" 
          ref={containerRef}
          style={{
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            scrollSnapType: 'y mandatory'
          }}
        >
          {sections.map(({ id, component: Component }, index) => (
            <section
              key={id}
              id={id}
              className={`min-h-screen w-full snap-start relative overflow-hidden px-4 sm:px-6 lg:px-8 ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              <div className="max-w-7xl mx-auto h-full w-full flex flex-col">
                <AnimatePresence>
                  <Component onNavClick={goToSection} />
                </AnimatePresence>
                {id === 'contact' && <Footer />}
              </div>
            </section>
          ))}
        </div>
      </main>
      {renderDots()}
      {renderArrows()}
    </div>
  );
};

export default ScrollableLayout;
