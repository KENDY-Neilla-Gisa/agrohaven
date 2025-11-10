import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { 
  DevicePhoneMobileIcon,
  SunIcon,
  GlobeAltIcon,
  HeartIcon,
  SparklesIcon,
  CubeIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Grow Fresh Food <br />
                <span className="text-primary-600">Indoors</span> All Year Round
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Transform your home into a green oasis with AgroHaven's smart indoor gardening system. 
                Grow fresh herbs, vegetables, and more with minimal effort and maximum yield.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#" 
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center transition-colors duration-200 cursor-pointer"
                >
                  Get Started
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
                <Link 
                  to="/features" 
                  className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-full font-medium flex items-center justify-center transition-colors duration-200"
                >
                  How It Works
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="bg-primary-100 rounded-3xl p-8 transform rotate-2">
                  <img 
                    src="/images/hero-image.jpg" 
                    alt="AgroHaven Smart Garden" 
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600">90%</div>
                    <div className="text-sm text-gray-600">Water Saved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Indoor Gardening Made Simple</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              AgroHaven combines cutting-edge technology with sustainable practices to bring you the future of home gardening.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CubeIcon className="h-6 w-6 text-white" />,
                title: 'Soilless Growing',
                description: 'Grow plants without the mess of soil using our advanced aeroponic system.'
              },
              {
                icon: <SparklesIcon className="h-6 w-6 text-white" />,
                title: 'Water Efficient',
                description: 'Uses up to 90% less water than traditional gardening methods.'
              },
              {
                icon: <DevicePhoneMobileIcon className="h-6 w-6 text-white" />,
                title: 'Smart Controls',
                description: 'Monitor and control your garden from anywhere with our mobile app.'
              },
              {
                icon: <SunIcon className="h-6 w-6 text-white" />,
                title: 'Optimal Lighting',
                description: 'Full-spectrum LED lights provide the perfect conditions for plant growth.'
              },
              {
                icon: <GlobeAltIcon className="h-6 w-6 text-white" />,
                title: 'Eco-Friendly',
                description: 'Reduce your carbon footprint with sustainable growing practices.'
              },
              {
                icon: <HeartIcon className="h-6 w-6 text-white" />,
                title: 'Fresh & Healthy',
                description: 'Grow organic produce right in your kitchen, year-round.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center mb-6 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Indoor Garden?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers growing fresh, healthy food at home with AgroHaven.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 cursor-pointer"
          >
            Shop Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
