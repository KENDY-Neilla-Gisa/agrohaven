import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface HomeSectionProps {
  onNavClick?: (index: number) => void;
}

const HomeSection = ({ onNavClick }: HomeSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  const textVariants = {
    hidden: { 
      opacity: 0,
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
      x: -20
    },
    visible: { 
      opacity: 1,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      x: 0,
      transition: { 
        duration: 1,
        ease: [0.19, 1.0, 0.22, 1.0]
      }
    }
  };
  
  const restTextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.8
      }
    }
  };

  const stats = [
    { 
      number: '55+', 
      label: 'Homes Transformed',
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      number: '3+', 
      label: 'Months of Experience',
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      number: '50+', 
      label: 'Communities Served',
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      number: '98%', 
      label: 'Happy Customers',
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];
  return (
    <section ref={ref} id="home" className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-green-50 to-white">
      {/* Main Content */}
      <div className="flex-grow pt-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center mb-8">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <div className="pl-4 md:pl-0">
                <div>Grow Fresh Food</div>
                <div className="flex items-start">
                  <div className="w-4 flex-shrink-0"></div>
                  <div>
                    <motion.span 
                      className="inline-block text-green-600 relative"
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      variants={textVariants}
                    >
                      Indoors
                    </motion.span>
                    <motion.span 
                      className="text-black inline-block"
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      variants={restTextVariants}
                    >
                      &nbsp;All Year Round
                    </motion.span>
                  </div>
                </div>
              </div>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Transform your home into a green oasis with AgroHaven's smart indoor gardening system. Grow fresh herbs, vegetables, and more with minimal effort and maximum yield.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors duration-200"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-green-600 text-green-600 rounded-full font-medium hover:bg-green-50 transition-colors duration-200"
                onClick={() => {
                  const featuresSection = document.getElementById('features');
                  if (featuresSection) {
                    featuresSection.scrollIntoView({ behavior: 'smooth' });
                    // Set the active section to Features (index 2)
                    if (onNavClick) {
                      onNavClick(2);
                    }
                  }
                }}
              >
                How It Works
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 mt-12 md:mt-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full bg-green-100 rounded-2xl"></div>
              <div className="relative">
                <img 
                  src="/agrohaven.png" 
                  alt="AgroHaven indoor garden system" 
                  className="relative z-10 rounded-2xl shadow-lg w-full h-auto border-4 border-white"
                  style={{ transform: 'translate(8px, -8px)' }}
                />
                <div className="absolute -top-4 -right-4 bg-green-100 text-green-800 px-4 py-2 rounded-lg shadow-md z-20">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.215.33-.331.69-.331 1.052v.243a4.5 4.5 0 01-.5 1.5 4.5 4.5 0 01-9 0 4.5 4.5 0 01-.5-1.5v-.243c0-.362-.116-.722-.331-1.052a2.5 2.5 0 01-.822-.88 1 1 0 00-1.45.385c-.27.405-.31.913-.11 1.35.2.436.56.75.98.75h1.293a1 1 0 01.707.293l.707.707a.5.5 0 00.354.146H5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h.5a.5.5 0 00.354-.146l.707-.707a1 1 0 01.707-.293h1.293a1 1 0 00.98-.75c.2-.437.16-.945-.11-1.35z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-bold text-lg">90% <span className="font-normal">Water Saved</span></div>
                      <div className="text-xs">vs traditional farming</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="bg-white py-6 mt-auto">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.2 + (index * 0.1)
                }}
              >
                <div className="p-2 bg-green-100 rounded-full mb-2">
                  {stat.icon}
                </div>
                <p className="text-xl md:text-2xl font-bold text-gray-800 mb-1">{stat.number}</p>
                <p className="text-xs md:text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;