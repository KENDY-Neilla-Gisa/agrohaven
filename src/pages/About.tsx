import { Link } from 'react-router-dom';
import { UsersIcon, LightBulbIcon, GlobeAltIcon, HeartIcon } from '@heroicons/react/24/outline';

const About = () => {
  const teamMembers = [
    {
      name: 'UWAYO Ange Kevine',
      role: 'Chief Executive Officer',
      bio: 'Leading AgroHaven with a vision for sustainable living and innovation.',
      image: '/Ange.png'
    },
    {
      name: 'IHIMBAZWE NIYIKORA Kevine',
      role: 'Chief Operations Officer',
      bio: 'Ensuring operational excellence and customer satisfaction.',
      image: '/Kevine.png'
    },
    {
      name: 'ABARUREMA HIRWA Emma Reponse',
      role: 'Chief Marketing Officer',
      bio: 'Driving brand growth and customer engagement strategies.',
      image: '/Reponse.png'
    },
    {
      name: 'Kendy Neilla GISA',
      role: 'Chief Executive Officer',
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices that protect our environment for future generations.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Affordability',
      description: 'Making sustainable living accessible to everyone through competitive pricing.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Support',
      description: 'Dedicated customer service team ready to assist you with any inquiries.'
    }
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About AgroHaven</h1>
            <p className="text-xl text-gray-600 mb-8">
              Pioneering sustainable agricultural solutions for a greener tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At AgroHaven, we're committed to transforming agricultural practices through innovation and sustainability. 
                Our mission is to provide eco-friendly solutions that empower farmers and promote environmental stewardship.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We believe in creating a future where sustainable agriculture is not just an option, but the standard for 
                communities worldwide.
              </p>
              <Link 
                to="/products" 
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Explore Our Products
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/about-hero.jpg" 
                  alt="Sustainable farming" 
                  className="w-full h-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.id} className="p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <stat.icon className="w-6 h-6" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guiding principles that shape our work and define our commitment to sustainability and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mb-4 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
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
          <h2 className="text-3xl font-bold mb-6">Join Our Green Revolution</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of the movement towards sustainable agriculture and a healthier planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-primary-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              to="/about" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-700 font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;