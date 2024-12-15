import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './components/Gallery';
import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Router>
        {/* Fixed Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Hero Section */}
                <section className="hero h-screen flex justify-center items-center bg-gradient-to-r from-gray-800 to-gray-900">
                  <div className="text-center px-4 sm:px-12">
                    <motion.h1
                      className="text-6xl sm:text-8xl font-bold mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    >
                      UntoldExtacy Photos
                    </motion.h1>
                    <motion.p
                      className="text-lg sm:text-2xl font-light text-gray-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    >
                      Capturing moments, creating art.
                    </motion.p>
                  </div>
                </section>

                

                {/* Footer */}
                <Footer />
              </>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
