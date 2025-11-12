import { useState } from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Our Location',
      description: 'Rwanda Coding Academy',
      link: 'https://www.google.com/maps/place/Rwanda+Coding+Academy/@-2.2461079,29.7483605,17z/data=!3m1!4b1!4m6!3m5!1s0x19c3a0b9d9e5b8b5:0x9d9e5b8b5d9e5b8b5!8m2!3d-2.2461133!4d29.7509354!16s%2Fg%2F11b8z8x8x9?entry=ttu',
      linkText: 'View on Map'
    },
    {
      icon: PhoneIcon,
      title: 'Phone Number',
      description: '+250 795 288 755',
      link: 'tel:+250795288755',
      linkText: 'Call Now'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Address',
      description: 'info@agrohaven.rw',
      link: 'mailto:info@agrohaven.rw',
      linkText: 'Send Email'
    },
    {
      icon: ClockIcon,
      title: 'Working Hours',
      description: 'Mon - Fri: 9:00 AM - 6:00 PM',
      extra: 'Sat: 10:00 AM - 4:00 PM',
      link: '',
      linkText: ''
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white pt-48 pb-24 -mt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-12">Contact Us</h1>
          <p className="mt-8 text-lg leading-8 text-white">
            Have questions about AgroHaven? Check out our frequently asked questions below, or{' '}
            <a 
              href="#contact-form-title" 
              className="text-primary-200 font-medium hover:text-white hover:underline transition-colors"
            >
              contact our support team
            </a>.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you! Whether you have a question about our products, need technical support, 
                or want to explore partnership opportunities, our team is ready to assist you.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                        {item.extra && <p className="text-gray-600">{item.extra}</p>}
                        {item.link && (
                          <a 
                            href={item.link} 
                            className="text-primary-600 hover:text-primary-800 font-medium mt-1 inline-block"
                          >
                            {item.linkText}
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 id="contact-form-title" className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Product Information">Product Information</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Wholesale">Wholesale Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.497175618386!2d30.05821531533071!3d-1.9535375379033327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c3a0b9d9e5b8b5%3A0x9d9e5b8b5d9e5b8b5!2sRwanda%20Coding%20Academy!5e0!3m2!1sen!2srw!4v1620000000000!5m2!1sen!2srw"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Rwanda Coding Academy Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Can't find what you're looking for? Check out our FAQ section below.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: 'How does the AgroHaven system work?',
                  answer: 'AgroHaven uses aeroponic technology to grow plants without soil. The system mists the roots with a nutrient-rich solution, providing optimal growing conditions with minimal water usage.'
                },
                {
                  question: 'What can I grow with AgroHaven?',
                  answer: 'You can grow a variety of herbs, leafy greens, and small vegetables. Our system is perfect for basil, lettuce, kale, spinach, arugula, and many other plants.'
                },
                {
                  question: 'How much electricity does it use?',
                  answer: 'The AgroHaven system uses about as much electricity as a standard LED light bulb. It\'s energy-efficient and designed to minimize power consumption.'
                },
                {
                  question: 'Is it difficult to set up?',
                  answer: 'Not at all! AgroHaven comes with easy-to-follow instructions, and most customers have their system up and running in under 30 minutes.'
                },
                {
                  question: 'Do you ship internationally?',
                  answer: 'Yes, we ship worldwide. Shipping costs and delivery times vary depending on your location.'
                }
              ].map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left font-medium text-gray-900 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    onClick={(e) => {
                      e.preventDefault();
                      const content = e.currentTarget.nextElementSibling as HTMLElement;
                      content.style.display = content.style.display === 'none' ? 'block' : 'none';
                    }}
                  >
                    {faq.question}
                  </button>
                  <div className="px-6 py-4 bg-gray-50" style={{ display: 'none' }}>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <a
                href="mailto:support@agrohaven.rw"
                className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
              >
                Contact our support team
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
