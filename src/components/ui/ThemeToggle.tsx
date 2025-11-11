import { useTheme } from '../../contexts/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div 
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full p-0.5 cursor-pointer"
      style={{
        backgroundColor: theme === 'dark' ? '#4b5563' : '#e5e7eb',
        transition: 'background-color 0.3s ease'
      }}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <div 
        className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-0.5'
        }`}
      >
        <div className="flex items-center justify-center w-full h-full">
          {theme === 'dark' ? (
            <FiMoon className="w-3 h-3 text-gray-700" />
          ) : (
            <FiSun className="w-3 h-3 text-yellow-500" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;