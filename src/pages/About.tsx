import { Link } from 'react-router-dom';
import { UsersIcon, LightBulbIcon, GlobeAltIcon, HeartIcon } from '@heroicons/react/24/outline';

const About = () => {
  const teamMembers = [
    {
      name: 'Reponse',
      role: 'CEO',
      bio: 'Leading AgroHaven with a vision for sustainable living and innovation.',
      image: '/Reponse.png'
    },
    {
      name: 'Kevine',
      role: 'COO',
      bio: 'Ensuring operational excellence and customer satisfaction.',
      image: '/Kevine.png'
    },
    {
      name: 'Ange',
      role: 'CMO',
      bio: 'Driving brand growth and customer engagement strategies.',
      image: '/Ange.png'
    },
    {
      name: 'Kendy',
      role: 'CFO',
      bio: 'Financial strategist ensuring sustainable business growth.',
      image: '/Kendy.png'
    }
  ];

  const stats = [
    { id: 1, name: 'Homes Transformed', value: '55+', icon: UsersIcon },
    { id: 2, name: 'Months of Experience', value: '3+', icon: LightBulbIcon },
    { id: 3, name: 'Communities Served', value: '50+', icon: GlobeAltIcon },
    { id: 4, name: 'Happy Customers', value: '98%', icon: HeartIcon },
  ];

  const values = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: 'Quality',
      description: 'We deliver products of the highest standard that our customers can trust.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Sustainability',
      description: 'We\'re committed to practices that protect our planet for future generations.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Community',
      description: 'We believe in building strong relationships with our customers and communities.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Innovation',
      description: 'We constantly push boundaries to create cutting-edge solutions for modern living.'
    }
  ] as const;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white pt-48 pb-24 -mt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-12">Our Story</h1>
          <p className="text-xl max-w-3xl mx-auto mt-8">
            Pioneering sustainable indoor farming solutions for a greener tomorrow
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">
                AgroHaven was born from a simple idea: what if everyone could grow fresh, healthy food at home, 
                regardless of space or gardening experience? Founded in 2025, our mission is to <strong>help people breathe cleaner air, eat fresher food, and live more sustainably - all from the comfort of their homes.</strong>
              </p>
              <p className="text-gray-700 mb-8">
                What started as a small team of passionate individuals has grown into a movement, helping thousands 
                of households transform their living spaces into productive, green oases.
              </p>
              <Link 
                to="/features" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
              >
                EXPLORE OUR FEATURES
                <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gray-100 rounded-2xl p-2">
                <img 
                  src="/images/about-story.jpg" 
                  alt="Our Story" 
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-2xl text-primary-600 font-medium">
              To transform every home into a haven.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Values</h3>
              <div className="grid grid-cols-1 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary-600 flex items-center justify-center text-white mr-4">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{value.title}</h4>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl overflow-hidden h-64 md:h-80">
              <img 
                src="/images/about/vision.jpg" 
                alt="Sustainable farming vision" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.id} className="bg-white p-6 rounded-xl shadow-sm text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      console.error('Failed to load image:', member.image);
                      target.src = 'https://via.placeholder.com/300x300?text=Image+Not+Found';
                    }}
                    onLoad={() => console.log('Image loaded successfully:', member.image)}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl mb-8">
              Be part of the sustainable farming revolution. Start growing your own fresh produce today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#" 
                className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium cursor-pointer"
              >
                Get Started
              </a>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-3 rounded-lg font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;