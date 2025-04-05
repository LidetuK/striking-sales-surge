
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'

// Pages
import Index from './pages/Index'
import Success from './pages/Success'
import NotFound from './pages/NotFound'

// Components
import Navbar from './components/Navbar'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
})

// Get basename from environment or default for development
const basename = import.meta.env.MODE === 'development' 
  ? '/' 
  : '/empowerment/self-development-guide/elevate-higher-the-book'

function App() {
  useEffect(() => {
    // Handle animation on scroll
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on page load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router basename={basename}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Toaster position="top-right" />
    </QueryClientProvider>
  )
}

export default App
