import { Link } from 'react-router-dom';
import { 
  DevicePhoneMobileIcon, 
  SunIcon, 
  CubeIcon,
  SparklesIcon,
  GlobeAltIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const Features = () => {
  const features = [
    {
      icon: CubeIcon,
      title: 'Soilless Growing',
      description: 'Revolutionary aeroponic technology for clean, efficient, and space-saving indoor gardening.',
      benefits: [
        'No soil required',
        'Faster plant growth',
        'Higher yields',
        'Cleaner than traditional methods'
      ]
    },
    {
      icon: SparklesIcon,
      title: 'Water Efficient',
      description: 'Uses up to 90% less water than traditional gardening methods.',
      benefits: [
        'Closed-loop water system',
        'Automatic recycling',
        'Minimal evaporation',
        'Sustainable water usage'
      ]
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Smart Controls',
      description: 'Monitor and control your garden from anywhere with our intuitive mobile app.',
      benefits: [
        'Real-time monitoring',
        'Remote adjustments',
        'Custom schedules',
        'Push notifications'
      ]
    },
    {
      icon: SunIcon,
      title: 'Optimal Lighting',
      description: 'Full-spectrum LED lighting system designed for all plant growth stages.',
      benefits: [
        'Adjustable intensity',
        'Automated day/night cycles',
        'Energy efficient',
        'Promotes photosynthesis'
      ]
    },
    {
      icon: GlobeAltIcon,
      title: 'Eco-Friendly',
      description: 'Sustainable growing solution that reduces your carbon footprint.',
      benefits: [
        'Reduces food miles',
        'Lowers water usage',
        'No pesticides needed',
        'Year-round production'
      ]
    },
    {
      icon: HeartIcon,
      title: 'Fresh & Healthy',
      description: 'Grow organic produce with maximum nutritional value.',
      benefits: [
        'Pesticide-free',
        'Higher nutrient density',
        'Better taste',
        'Always fresh'
      ]
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Set Up',
      description: 'Assemble your AgroHaven system and connect it to the mobile app.'
    },
    {
      step: 2,
      title: 'Plant',
      description: 'Add your choice of seeds or seedlings to the growing pods.'
    },
    {
      step: 3,
      title: 'Grow',
      description: 'Watch your plants thrive with automated care and optimal conditions.'
    },
    {
      step: 4,
      title: 'Harvest',
      description: 'Enjoy fresh, homegrown produce in just weeks, not months.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white pt-48 pb-24 -mt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-12">AgroHaven Features</h1>
          <p className="text-xl max-w-3xl mx-auto mt-8">
            Discover how AgroHaven revolutionizes indoor gardening with cutting-edge technology
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose AgroHaven?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our smart indoor gardening system combines innovation and simplicity for the perfect growing experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <div className="p-6 flex-1">
                    <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How AgroHaven Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get started with your indoor garden in just a few simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-2xl font-bold text-primary-600 mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">Technical Specifications</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Dimensions</h3>
                    <p className="text-gray-600">12" x 12" x 24" (W x D x H)</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Weight</h3>
                    <p className="text-gray-600">15 lbs (6.8 kg)</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Power</h3>
                    <p className="text-gray-600">60W LED, 110-240V, 50/60Hz</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Water Capacity</h3>
                    <p className="text-gray-600">2.5 gallons (9.5L)</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Connectivity</h3>
                    <p className="text-gray-600">WiFi 802.11 b/g/n, 2.4GHz</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Compatibility</h3>
                    <p className="text-gray-600">iOS 12+ and Android 8.0+</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 md:p-12 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-xl bg-gray-200">
                    <img 
                      src="/images/device-specs.jpg" 
                      alt="AgroHaven Device Specifications" 
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      * Actual product may vary slightly from images
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Home?</h2>
            <p className="text-xl mb-8">
              Join thousands of happy customers growing fresh, healthy food at home with AgroHaven.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#" 
                className="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium cursor-pointer"
              >
                Shop Now
              </a>
              <Link 
                to="/contact#contact-form-title" 
                className="btn border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-3 rounded-lg font-medium"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
