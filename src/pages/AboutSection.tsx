import { motion } from 'framer-motion';

const AboutSection = () => {
  const teamMembers = [
    { 
      name: 'UWAYO Ange Kevine', 
      role: 'Chief Executive Officer', 
      bio: 'Leading AgroHaven with a vision for sustainable living and innovative home gardening solutions.', 
      image: '/Ange.png' 
    },
    { 
      name: 'IHIMBAZWE NIYIKORA Kevine', 
      role: 'Chief Operating Officer', 
      bio: 'Ensuring operational excellence and seamless delivery of our products and services.', 
      image: '/Kevine.png' 
    },
    { 
      name: 'ABARUREMA HIRWA Emma Reponse', 
      role: 'Chief Marketing Officer', 
      bio: 'Driving brand growth and connecting with our community of home gardeners.', 
      image: '/Reponse.png' 
    },
    { 
      name: 'Kendy Neilla GISA', 
      role: 'Chief Financial Officer', 
      bio: 'Financial strategist ensuring the sustainable growth of AgroHaven.', 
      image: '/Kendy.png' 
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Section 1: Our Story with Image on Right */}
      <section id="about" className="py-20 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            {/* Left Column - Our Story */}
            <div className="md:w-1/2">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-gray-600 dark:text-white leading-relaxed">
                      AgroHaven was born from a simple idea: what if everyone could grow fresh, healthy food at home, regardless of space or gardening experience?
                    </p>
                    <p className="text-gray-600 dark:text-white leading-relaxed">
                      Founded in 2025, our mission is <span className="font-semibold dark:text-white">to help people breathe cleaner air, eat fresher food, and live more sustainably - all from the comfort of their homes</span> and our vision is <span className="font-semibold dark:text-white">to transform every home into a haven</span>.
                    </p>
                  </div>
                  
                  <div className="mt-8 space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-green-100 p-1.5 rounded-full">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-800 dark:text-white font-medium">Quality</p>
                        <p className="text-gray-600 dark:text-gray-200 text-sm mt-1">We deliver products of the highest standard that our customers can trust.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-green-100 p-1.5 rounded-full">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-800 dark:text-white font-medium">Sustainability</p>
                        <p className="text-gray-600 dark:text-gray-200 text-sm mt-1">We're committed to practices that protect our planet for future generations.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-green-100 p-1.5 rounded-full">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-800 dark:text-white font-medium">Innovation</p>
                        <p className="text-gray-600 dark:text-gray-200 text-sm mt-1">We constantly push boundaries to create cutting-edge solutions for modern living.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Image */}
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden shadow-xl"
              >
                <img 
                  src="/about-image.jpg" 
                  alt="Our Story"
                  className="w-full h-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Meet the Team with Image on Left */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 rounded-3xl m-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            {/* Left Column - Image */}
            <div className="md:w-1/2 order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden shadow-xl"
              >
                <img 
                  src="/us.jpg" 
                  alt="Our Team"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
                  }}
                />
              </motion.div>
            </div>

            {/* Right Column - Meet the Team */}
            <div className="md:w-1/2 order-1 md:order-2">
              <motion.div 
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Meet the Team</h2>
                <div className="space-y-4">
                  {teamMembers.map((member, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="w-14 h-14 bg-gray-200 rounded-full mr-4 overflow-hidden flex-shrink-0">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(member.name) + '&background=4CAF50&color=fff';
                          }}
                        />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 dark:text-gray-100">{member.name}</p>
                        <p className="text-green-600 text-sm font-medium">{member.role}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;