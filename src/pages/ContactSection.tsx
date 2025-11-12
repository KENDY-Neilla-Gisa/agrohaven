import { motion } from 'framer-motion';
import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <EnvelopeIcon className="w-6 h-6 text-green-600" />,
      title: 'Email Us',
      value: 'info@agrohaven.rw',
      link: 'mailto:info@agrohaven.rw'
    },
    {
      icon: <PhoneIcon className="w-6 h-6 text-green-600" />,
      title: 'Call Us',
      value: '+250 795 288 755',
      link: 'tel:+250795288755'
    },
    {
      icon: <MapPinIcon className="w-6 h-6 text-green-600" />,
      title: 'Location',
      value: 'Rwanda Coding Academy, Nyabihu, Rwanda',
      link: 'https://maps.google.com',
      noIcon: true
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Have questions or want to learn more? We'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Contact Information</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <a 
                    href={item.link} 
                    className="flex items-start group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-green-600 dark:text-green-400 mr-3 mt-0.5">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="pt-4 mt-6 border-t border-gray-100 dark:border-gray-800">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Working Hours</h4>
              <div className="space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded focus:ring-1 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:text-white"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded focus:ring-1 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:text-white"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded focus:ring-1 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:text-white"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded font-medium transition-colors duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;