import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white w-full font-sans">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Company Info */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-green-500">AgroHaven</h2>
            <p className="text-gray-400 text-sm">
              <span className="font-semibold text-white">Grow Green, Live Clean.</span> We provide sustainable agricultural solutions for a better tomorrow.
            </p>
          </div>

          {/* Follow Us */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider">Follow Us</h4>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors group" aria-label="Facebook">
                <i className="fab fa-facebook-f text-white text-sm group-hover:scale-110 transition-transform"></i>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors group" aria-label="Twitter">
                <i className="fab fa-twitter text-white text-sm group-hover:scale-110 transition-transform"></i>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors group" aria-label="Instagram">
                <i className="fab fa-instagram text-white text-sm group-hover:scale-110 transition-transform"></i>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors group" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in text-white text-sm group-hover:scale-110 transition-transform"></i>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors group" aria-label="YouTube">
                <i className="fab fa-youtube text-white text-sm group-hover:scale-110 transition-transform"></i>
              </a>
            </div>
            <p className="text-gray-400 text-xs pt-1">Connect with us on social media</p>
          </div>

          {/* Newsletter - Moved to right */}
          <div className="mt-0">
            <h4 className="text-white font-semibold text-xs mb-2 uppercase tracking-wider">Newsletter</h4>
            <p className="text-gray-400 text-xs mb-2">Subscribe for updates and offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-1.5 w-full text-xs bg-gray-800 border border-gray-700 text-white rounded-l focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 placeholder-gray-400"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 text-xs rounded-r transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs">
            <p className="text-gray-500">
              &copy; {currentYear} AgroHaven. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              <Link to="/faq" className="text-gray-500 hover:text-white transition-colors">
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