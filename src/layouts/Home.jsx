import bgAsset from "../assets/bgAsset.png";
import homeSlide from "../assets/homeSlide.png";
import lady from "../assets/lady.png";
import './styles.css'; 
import { useState, useEffect } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="overflow-hidden relative w-full" id="Home">
      <img
        src={bgAsset}
        className="hidden md:flex scale-x-[-1] -translate-y-14 ml-10 absolute inset-0"
        alt="bgAsset" />

      <div className="relative w-full">
        <div
          className="carousel-slides flex"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `${totalSlides * 100}%`,
            transition: 'transform 0.5s ease-in-out'
          }}
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className="carousel-slide flex-shrink-0 relative items-center justify-center"
            >
              <img
                src={homeSlide}
                className="hidden md:flex p-20 ml-48 object-cover"
                alt="homeSlide" />
                  <img
                src={lady}
                className="sm:hidden w-1/3 p-6"
                alt="homeSlide" />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Container */}
      <div className="absolute bottom-0  left-1/2 transform -translate-x-1/2 flex space-x-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-orange-500 opacity-100' : 'bg-gray-300 opacity-50'}`}
          ></div>
        ))}
      </div>
    </div>
    <img
        src={bgAsset}
        className="hidden md:flex absolute right-0 -translate-y-20 -translate-x-10"
        alt="bgAsset" />
        </>
  );
};

export default Home;
