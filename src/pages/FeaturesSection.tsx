import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Soilless Growing',
      description: 'Revolutionary aeroponic technology for clean, efficient, and space-saving indoor gardening.',
      bulletPoints: [
        'No soil required',
        'Faster plant growth',
        'Higher yields',
        'Cleaner than traditional methods'
      ],
      icon: (
        <div className="p-2 rounded-lg bg-green-100 dark:bg-gray-800">
          <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
      )
    },
    {
      title: 'Water Efficient',
      description: 'Uses up to 90% less water than traditional gardening methods.',
      bulletPoints: [
        'Closed-loop water system',
        'Automatic recycling',
        'Minimal evaporation',
        'Sustainable water usage'
      ],
      icon: (
        <div className="p-2 rounded-lg bg-green-100 dark:bg-gray-800">
          <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z" />
          </svg>
        </div>
      )
    },
    {
      title: 'Smart Controls',
      description: 'Monitor and control your garden from anywhere with our intuitive mobile app.',
      bulletPoints: [
        'Real-time monitoring',
        'Remote adjustments',
        'Custom schedules',
        'Push notifications'
      ],
      icon: (
        <div className="p-2 rounded-lg bg-green-100 dark:bg-gray-800">
          <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
      )
    },
    {
      title: 'Optimal Lighting',
      description: 'Full-spectrum LED lighting system designed for all plant growth stages.',
      bulletPoints: [
        'Adjustable intensity',
        'Automated day/night cycles',
        'Energy efficient',
        'Promotes photosynthesis'
      ],
      icon: (
        <div className="p-2 rounded-lg bg-green-100 dark:bg-gray-800">
          <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
      )
    },
    {
      title: 'Eco-Friendly',
      description: 'Sustainable growing solution that reduces your carbon footprint.',
      bulletPoints: [
        'Reduces food miles',
        'Lowers water usage',
        'No pesticides needed',
        'Year-round production'
      ],
      icon: (
        <div className="p-2 rounded-lg bg-green-100 dark:bg-gray-800">
          <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )
    },
    {
      title: 'Fresh & Healthy',
      description: 'Grow organic produce with maximum nutritional value.',
      bulletPoints: [
        'Pesticide-free',
        'Higher nutrient density',
        'Better taste',
        'Always fresh'
      ],
      icon: (
        <div className="p-2 rounded-lg bg-green-100 dark:bg-gray-800">
          <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Features
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Innovative solutions designed to empower modern farmers
          </motion.p>
          <motion.div 
            className="w-20 h-1 bg-green-600 mx-auto mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-transparent p-4 rounded-lg shadow-sm hover:shadow dark:shadow-none transition-all duration-200 flex flex-col h-full border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-start">
                <div className="p-1.5 rounded-lg flex-shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(22, 163, 74, 0.1)' }}>
                  {feature.icon}
                </div>
                <div className="ml-3 flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
                  <ul className="mt-2 space-y-1">
                    {feature.bulletPoints.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-3.5 h-3.5 text-green-600 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-600 dark:text-gray-300 leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;