import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ServicesPage from './components/ServicesPage';
import BlogPage from './components/BlogPage';
import FAQPage from './components/FAQPage';
import ServiceDetailPage from './components/ServiceDetailPage'; // Import the new component

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => {
      setCurrentPath(window.location.hash);
      window.scrollTo(0, 0); // Scroll to top on page change
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Simple Router Switch
  const renderPage = () => {
    // Check if the path starts with #service/
    if (currentPath.startsWith('#service/')) {
      const serviceId = currentPath.replace('#service/', '');
      return <ServiceDetailPage serviceId={serviceId} />;
    }

    switch (currentPath) {
      case '#services-page':
        return <ServicesPage />;
      case '#blog-page':
        return <BlogPage />;
      case '#faqs-page':
        return <FAQPage />;
      default:
        return <Hero />;
    }
  };

  return (
    <>
      {renderPage()}
    </>
  );
}

export default App;