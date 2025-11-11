import { Link } from 'react-router-dom';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ArrowRightIcon 
} from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About Us', path: '#about' },
    { name: 'Features', path: '#features' },
    { name: 'Contact', path: '#contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Shipping Policy', path: '/shipping-policy' },
    { name: 'Returns & Refunds', path: '/returns' },
  ];

  return (
    <footer className="bg-gray-900 text-white w-full font-sans">
      <div className="max-w-7xl mx-auto px-6 pb-2 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-green-500">AgroHaven</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              <span className="font-semibold text-white">Grow Green, Live Clean.</span> We provide sustainable agricultural solutions for a better tomorrow.
            </p>
            <div className="pt-1">
              <h4 className="text-white font-semibold text-sm mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 rounded-full bg-gray-700 hover:bg-green-600 flex items-center justify-center transition-colors" aria-label="Facebook">
                  <i className="fab fa-facebook-f text-white text-sm"></i>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-700 hover:bg-green-600 flex items-center justify-center transition-colors" aria-label="Twitter">
                  <i className="fab fa-twitter text-white text-sm"></i>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-700 hover:bg-green-600 flex items-center justify-center transition-colors" aria-label="Instagram">
                  <i className="fab fa-instagram text-white text-sm"></i>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-700 hover:bg-green-600 flex items-center justify-center transition-colors" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in text-white text-sm"></i>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-700 hover:bg-green-600 flex items-center justify-center transition-colors" aria-label="YouTube">
                  <i className="fab fa-youtube text-white text-sm"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-1">
            <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path}
                    className="text-gray-400 hover:text-green-500 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRightIcon className="h-3 w-3 mr-2 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="mt-1">
            <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path}
                    className="text-gray-400 hover:text-green-500 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRightIcon className="h-3 w-3 mr-2 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Contact Us</h4>
              <ul className="space-y-2.5">
                <li className="flex items-start">
                  <EnvelopeIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <a href="mailto:info@agrohaven.rw" className="text-gray-400 hover:text-white transition-colors text-sm">
                    info@agrohaven.rw
                  </a>
                </li>
                <li className="flex items-start">
                  <PhoneIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <a href="tel:+250795288755" className="text-gray-400 hover:text-white transition-colors text-sm">
                    +250 795 288 755
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPinIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Rwanda Coding Academy, Nyabihu, Rwanda</span>
                </li>
              </ul>
            </div>

            <div className="mt-1">
              <h4 className="text-white font-semibold text-sm mb-2 uppercase tracking-wider">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-3 leading-snug">Subscribe for updates and offers.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 w-full text-xs bg-gray-800 border border-gray-700 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 placeholder-gray-400"
                />
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-xs rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8">
          <div className="border-t border-gray-800 flex items-center h-10">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm w-full pt-1">
              <p className="text-gray-500 text-center md:text-left">
                &copy; {currentYear} AgroHaven. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <Link to="/sitemap" className="text-gray-500 hover:text-white transition-colors">
                  Sitemap
                </Link>
                <Link to="/faq" className="text-gray-500 hover:text-white transition-colors">
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;