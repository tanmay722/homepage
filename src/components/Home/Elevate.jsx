import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import elevateImg from "../../assets/Home/Elevate.png";
import { testimonials } from "../../constants/testimonials"; // Import testimonials data
import { NavLink } from "react-router-dom";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [autoplay, setAutoplay] = useState(true);
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Calculate card positions based on screen size
  const getCardPosition = (index) => {
    const diff = index - currentIndex;
    const isMobile = width < 768;

    if (diff === 0)
      return {
        zIndex: 5,
        x: 0,
        scale: 1,
        opacity: 1,
        rotateY: 0,
      };

    if (
      diff === -1 ||
      (diff === testimonials.length - 1 && currentIndex === 0)
    ) {
      return {
        zIndex: 4,
        x: isMobile ? "-55%" : "-65%",
        scale: isMobile ? 0.8 : 0.85,
        opacity: 0.6,
        rotateY: 15,
      };
    }

    if (
      diff === 1 ||
      (diff === -(testimonials.length - 1) &&
        currentIndex === testimonials.length - 1)
    ) {
      return {
        zIndex: 4,
        x: isMobile ? "55%" : "65%",
        scale: isMobile ? 0.8 : 0.85,
        opacity: 0.6,
        rotateY: -15,
      };
    }

    if (
      diff == -2 ||
      (diff === testimonials.length - 2 && currentIndex === 0)
    ) {
      return {
        zIndex: 3,
        x: isMobile ? "-75%" : "-85%",
        scale: isMobile ? 0.6 : 0.7,
        opacity: 0.2,
        rotateY: 40,
      };
    }

    if (
      diff == 2 ||
      (diff === -(testimonials.length - 2) &&
        currentIndex === testimonials.length - 1)
    ) {
      return {
        zIndex: 3,
        x: isMobile ? "75%" : "85%",
        scale: isMobile ? 0.6 : 0.7,
        opacity: 0.2,
        rotateY: -40,
      };
    }

    return { zIndex: 1, x: 0, scale: 0.5, opacity: 0, rotateY: 0 };
  };

  // Render star ratings
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ));
  };

  return (
    <div className="relative w-full min-h-[85vh] md:min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${elevateImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50"></div>
      </div>

      {/* Header content */}
      <motion.div
        className="relative z-10 text-center mb-4 md:mb-6 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white">
          Elevate Your Trading Experience
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-2 text-gray-200 max-w-2xl mx-auto">
          Join 3,000+ traders who trust our algorithms
        </p>
      </motion.div>

      {/* Testimonial carousel */}
      <div className="relative w-full max-w-7xl h-[280px] sm:h-[300px] flex items-center justify-center z-10 px-4">
        <AnimatePresence>
          {testimonials.map((testimonial, index) => {
            const position = getCardPosition(index);

            return (
              <motion.div
                key={testimonial.id}
                className={`absolute w-[280px] sm:w-[320px] md:w-[380px] xl:w-[420px] h-auto rounded-xl shadow-xl ${testimonial.color} overflow-hidden`}
                initial={false}
                animate={{
                  x: position.x,
                  scale: position.scale,
                  opacity: position.opacity,
                  zIndex: position.zIndex,
                  rotateY: position.rotateY,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                <div className="p-6 flex flex-col h-full">
                  {/* Quote icon */}
                  <div className="mb-2 sm:mb-4 opacity-80">
                    <Quote className="w-6 sm:w-8 h-6 sm:h-8 text-white/80" />
                  </div>

                  {/* Testimonial content */}
                  <p className="text-white text-xs sm:text-sm md:text-base mb-2 sm:mb-4 flex-grow">
                    "{testimonial.feedback}"
                  </p>

                  {/* Rating */}
                  <div className="flex mb-2 sm:mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* User info */}
                  <div className="flex items-center mt-auto">
                    {/* <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div> */}
                    <div className="">
                      <h3 className="font-bold text-white text-xs sm:text-sm md:text-base inline">
                        {testimonial.name}
                      </h3>
                      <span className="text-white/80 text-xs md:text-sm ml-2">
                        - {testimonial.designation}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Navigation buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-10 z-20 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 md:right-10 z-20 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* CTA section */}
      <div className="relative z-10 mt-4 mb-6 md:mt-6 text-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative group"
        >
          <NavLink to="/club">
            <button className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-2xl bg-gradient-to-r from-[#24B224] to-green-700">
              Join Finaquity Club
            </button>
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
