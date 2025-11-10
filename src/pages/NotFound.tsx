import { Link } from 'react-router-dom';
import { HomeIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">
            <svg
              className="h-16 w-16 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>
        
        <h1 className="text-6xl font-extrabold text-gray-900">404</h1>
        
        <h2 className="mt-4 text-3xl font-bold text-gray-900">Page Not Found</h2>
        
        <p className="mt-4 text-lg text-gray-600">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="mt-8 space-y-4">
          <Link
            to="/"
            className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <HomeIcon className="h-5 w-5 mr-2" />
            Go back home
          </Link>
          
          <p className="text-sm text-gray-500">
            or
          </p>
          
          <Link
            to="/contact"
            className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Contact support
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        </div>
        
        <div className="mt-12">
          <h3 className="text-sm font-medium text-gray-500">Helpful Links</h3>
          <nav className="mt-4 flex justify-center space-x-6">
            {[
              { name: 'About Us', href: '/about' },
              { name: 'Features', href: '/features' },
              { name: 'FAQ', href: '/faq' },
              { name: 'Contact', href: '/contact' },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-primary-600 hover:text-primary-500"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} AgroHaven. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
