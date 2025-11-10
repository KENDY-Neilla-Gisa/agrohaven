import { motion } from 'framer-motion';

const AboutSection = () => {
  const teamMembers = [
    {
      name: 'ABARUREMA HIRWA Emma Reponse',
      role: 'Chief Executive Officer',
      bio: 'Leading AgroHaven with a vision for sustainable living and innovation.',
      image: '/Reponse.png'
    },
    {
      name: 'IHIMBAZWE NIYIKORA Kevine',
      role: 'Chief Operating Officer',
      bio: 'Ensuring operational excellence and customer satisfaction.',
      image: '/Kevine.png'
    },
    {
      name: 'UWAYO Ange Kevine',
      role: 'Chief Marketing Officer',
      bio: 'Driving brand growth and customer engagement strategies.',
      image: '/Ange.png'
    },
    {
      name: 'Kendy Neilla GISA',
      role: 'Chief Financial Officer',
      bio: 'Financial strategist ensuring sustainable business growth.',
      image: '/Kendy.png'
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About AgroHaven
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-green-600 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          {/* Left Column - Our Story and Core Values */}
          <div className="md:w-1/2">
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Story</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                AgroHaven was born from a simple idea: what if everyone could grow fresh, healthy food at home, regardless of space or gardening experience? 
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Founded in 2025, our mission is <span className="font-semibold">to help people breathe cleaner air, eat fresher food, and live more sustainably - all from the comfort of their homes</span> and our vision is <span className="font-semibold">to transform every home into a haven</span>.
              </p>
              
              {/* Core Values */}
              <div className="space-y-4">
                {[
                  { title: 'Quality', description: 'We deliver products of the highest standard that our customers can trust.' },
                  { title: 'Sustainability', description: 'We\'re committed to practices that protect our planet for future generations.' },
                  { title: 'Innovation', description: 'We constantly push boundaries to create cutting-edge solutions for modern living.' }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  >
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Leadership Team */}
          <div className="md:w-1/2">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg sticky top-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-xl font-semibold text-gray-800 mb-6 text-center">Meet the Team</h4>
              <div className="space-y-4">
                {teamMembers.map((member, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-3 overflow-hidden flex-shrink-0">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          console.error('Failed to load image:', member.image);
                          target.src = 'https://via.placeholder.com/100?text=' + member.name.charAt(0);
                        }}
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{member.name}</p>
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
  );
};

export default AboutSection;