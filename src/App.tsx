import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ScrollableLayout from './components/layout/ScrollableLayout';
import FAQPage from './pages/FAQPage';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<ScrollableLayout />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;