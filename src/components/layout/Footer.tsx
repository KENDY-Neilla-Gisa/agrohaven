import { Link } from 'react-router-dom';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ArrowRightIcon 
} from '@heroicons/react/24/outline';
// Social icons are now using Font Awesome classes instead of react-icons

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
    <footer className="bg-gray-900 text-white pt-6 pb-4 w-full">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-5 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Company Info */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-green-500">AgroHaven</h2>
            <p className="text-sm text-gray-400"><span className="font-semibold">Grow Green, Live Clean.</span> We provide sustainable agricultural solutions for a better tomorrow.</p>
            
            {/* Social Icons - Matching Contact Page Style */}
            <div className="mt-2">
              <h3 className="text-base font-semibold text-white mb-2">Follow Us</h3>
              <div className="flex space-x-2">
                {[
                  { icon: <i className="fab fa-facebook-f text-lg"></i>, label: 'Facebook', color: 'hover:bg-blue-100 hover:text-blue-600' },
                  { icon: <i className="fab fa-twitter text-lg"></i>, label: 'Twitter', color: 'hover:bg-blue-100 hover:text-blue-400' },
                  { icon: <i className="fab fa-instagram text-lg"></i>, label: 'Instagram', color: 'hover:bg-pink-100 hover:text-pink-600' },
                  { icon: <i className="fab fa-linkedin-in text-lg"></i>, label: 'LinkedIn', color: 'hover:bg-blue-100 hover:text-blue-700' },
                  { icon: <i className="fab fa-youtube text-lg"></i>, label: 'YouTube', color: 'hover:bg-red-100 hover:text-red-600' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className={`w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 text-sm ${social.color} transition-colors duration-200`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-3 text-white">Quick Links</h3>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path} 
                    className="text-gray-400 hover:text-green-500 transition-colors flex items-center group"
                  >
                    <ArrowRightIcon className="h-3 w-3 mr-2 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-base font-semibold mb-3 text-white">Legal</h3>
            <ul className="space-y-1.5">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-green-500 transition-colors flex items-center group"
                  >
                    <ArrowRightIcon className="h-3 w-3 mr-2 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-3">
            <div>
              <h3 className="text-base font-semibold mb-3 text-white">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <EnvelopeIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <a href="mailto:info@agrohaven.rw" className="text-sm text-gray-400 hover:text-white transition-colors">
                    info@agrohaven.rw
                  </a>
                </li>
                <li className="flex items-start">
                  <PhoneIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <a href="tel:+250795288755" className="text-sm text-gray-400 hover:text-white transition-colors">
                    +250 795 288 755
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPinIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-400">Rwanda Coding Academy, Nyabihu, Rwanda</span>
                </li>
              </ul>
            </div>

            <div className="pt-3">
              <h3 className="text-base font-semibold mb-2 text-white">Newsletter</h3>
              <p className="text-gray-400 text-xs mb-2">Subscribe for updates and offers.</p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-1.5 w-full rounded-l-md focus:outline-none focus:ring-1 focus:ring-green-500 bg-gray-800 text-white text-sm"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-r-md transition-colors text-xs font-medium"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright and Bottom Bar */}
        <div className="border-t border-gray-800 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs text-center md:text-left mb-2 md:mb-0">
              © {currentYear} AgroHaven. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/sitemap" className="text-gray-500 hover:text-white text-xs transition-colors">
                Sitemap
              </Link>
              <Link to="/faq" className="text-gray-500 hover:text-white text-xs transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;