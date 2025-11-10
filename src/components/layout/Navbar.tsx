import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentSection: number;
  sections: Array<{ id: string; label: string }>;
  onNavClick: (index: number) => void;
}

const Navbar = ({ currentSection, sections, onNavClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleNavClick = (index: number) => {
    // Close the mobile menu
    setIsOpen(false);
    
    // Get the target section ID from the sections array
    const targetId = sections[index]?.id;
    if (!targetId) return;
    
    // Update the current section immediately for visual feedback
    onNavClick(index);
    
    // Small delay to allow the menu to close before scrolling
    setTimeout(() => {
      // Get all section elements
      const sections = document.querySelectorAll('section[id]');
      
      // Find the target section by ID
      const targetSection = Array.from(sections).find(section => section.id === targetId);
      if (!targetSection) return;
      
      // Get the scroll container
      const scrollContainer = document.querySelector('.overflow-y-auto');
      if (!scrollContainer) return;
      
      // Scroll to the target section
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Manually update the URL hash without scrolling
      window.history.pushState(null, '', `#${targetId}`);
    }, 100);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-white/90 backdrop-blur-sm md:bg-transparent py-2 md:py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          <motion.a 
            href="#"
            className="text-2xl font-bold text-green-700 cursor-pointer hover:text-green-800 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(0);
            }}
          >
            AgroHaven
          </motion.a>

          <div className="hidden md:flex items-center space-x-6">
            {sections.map((section, index) => {
              // Skip the contact section from the main nav (it's a button at the end)
              if (section.id === 'contact') return null;
              
              return (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(index)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    currentSection === index 
                      ? 'text-green-600 border-b-2 border-green-600' 
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  {section.label}
                </button>
              );
            })}
            <button 
              className="ml-2 px-6 py-2 bg-green-600 text-white rounded-full text-sm font-medium hover:bg-green-700 transition-colors duration-200"
              onClick={() => handleNavClick(sections.findIndex(s => s.id === 'contact'))}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white shadow-lg rounded-b-lg mx-2"
            >
              <div className="py-3 px-4 space-y-1">
                {sections.map((section, index) => {
                  if (section.id === 'contact') return null;
                  
                  return (
                    <button
                      key={section.id}
                      onClick={() => handleNavClick(index)}
                      className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                        currentSection === index
                          ? 'bg-green-50 text-green-600 font-semibold'
                          : 'text-gray-800 hover:bg-gray-50'
                      }`}
                    >
                      {section.label}
                    </button>
                  );
                })}
                <button
                  onClick={() => handleNavClick(sections.findIndex(s => s.id === 'contact'))}
                  className={`w-full mt-2 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                    currentSection === sections.findIndex(s => s.id === 'contact')
                      ? 'bg-green-700 text-white font-semibold'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
