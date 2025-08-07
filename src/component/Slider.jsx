import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import your banner images - make sure the file path and name are correct
import baner1 from '../assets/baner1.webp';
// Add more banner imports if you have them
// import baner2 from '../assets/baner2.webp';
// import baner3 from '../assets/baner3.webp';

// Use the imported images correctly (not as objects)
const Ban1 = baner1;
const Ban2 = baner1; // Using same image for now
const Ban3 = baner1; // Using same image for now

const banners = [Ban1, Ban2, Ban3];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(1); // Start from 1 instead of 0
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef(null);

  // Create extended array with duplicates for infinite effect
  const extendedBanners = [banners[banners.length - 1], ...banners, banners[0]];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Handle transition end to reset position for infinite loop
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    
    if (currentSlide === 0) {
      setCurrentSlide(banners.length);
    } else if (currentSlide === extendedBanners.length - 1) {
      setCurrentSlide(1);
    }
  };

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index + 1);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(prev => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(prev => prev - 1);
  };

  // Get the actual slide index for dots
  const getActualSlideIndex = () => {
    if (currentSlide === 0) return banners.length - 1;
    if (currentSlide === extendedBanners.length - 1) return 0;
    return currentSlide - 1;
  };

  return (
    <div className="w-full px-2 md:px-4 my-4">
      {/* Main Slider Container */}
      <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-900">
        <div className="relative h-48 md:h-56 lg:h-64">
          <motion.div 
            className="flex"
            animate={{ x: -currentSlide * 100 + '%' }}
            transition={{ 
              duration: isTransitioning ? 0.5 : 0,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            onAnimationComplete={handleTransitionEnd}
          >
            {extendedBanners.map((banner, index) => (
              <img
                key={index}
                src={banner}
                alt={`Banner ${(index % banners.length) + 1}`}
                className="w-full h-48 md:h-56 lg:h-64 object-cover flex-shrink-0"
              />
            ))}
          </motion.div>

          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="hidden md:flex absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 disabled:opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 z-10"
            aria-label="Previous slide"
          >
            <FaChevronLeft size={16} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="hidden md:flex absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 disabled:opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 z-10"
            aria-label="Next slide"
          >
            <FaChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Navigation Dots - Animated Progress Bars */}
      <div className="flex justify-center space-x-2 mt-3">
        {banners.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`relative h-1 rounded-full transition-all duration-300 bg-gray-300 ${
              getActualSlideIndex() === index ? 'w-8' : 'w-8'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {getActualSlideIndex() === index && (
              <motion.div
                className="absolute inset-0 bg-gray-800 rounded-full origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ 
                  duration: 4, 
                  ease: 'linear'
                }}
                key={`progress-${getActualSlideIndex()}`}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}