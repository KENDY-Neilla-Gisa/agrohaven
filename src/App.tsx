import { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ScrollableLayout from './components/layout/ScrollableLayout';
import FAQPage from './pages/FAQPage';

// Component to handle theme class on body
const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  
  // Set initial theme class on html and body
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    
    if (theme === 'dark') {
      html.classList.add('dark');
      body.classList.add('dark');
      body.style.backgroundColor = '#0f172a';
    } else {
      html.classList.remove('dark');
      body.classList.remove('dark');
      body.style.backgroundColor = '#ffffff';
    }
  }, [theme]);

  return (
    <div className={`min-h-screen bg-white dark:bg-dark-background transition-colors duration-200`}>
      {children}
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ThemeWrapper>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<ScrollableLayout />} />
              <Route path="/faq" element={<FAQPage />} />
            </Routes>
          </Suspense>
        </ThemeWrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;