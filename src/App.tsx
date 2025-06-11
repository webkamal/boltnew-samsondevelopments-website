import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ThankYouPage from './pages/ThankYouPage';
import ProjectsPage from './pages/ProjectsPage';
import NewsPage from './pages/NewsPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  useEffect(() => {
    // Handle navigation based on URL hash
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setCurrentPage(hash);
        // Scroll to top when page changes
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        setCurrentPage('home');
        window.history.pushState(null, '', '#home');
        // Scroll to top for home page
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    };

    // Initialize page based on current hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Render the appropriate page based on currentPage
  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <ServicesPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'news':
        return <NewsPage />;
      case 'thank-you':
        return <ThankYouPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;