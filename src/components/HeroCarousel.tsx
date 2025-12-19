import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    title: "Empowering Rural India",
    subtitle:
      "Bringing sustainable development and modern resources to the heart of our villages.",
  },
  {
    url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    title: "Nourishing Communities",
    subtitle:
      "Ensuring no child goes to bed hungry through our rural nutrition programs.",
  },
  {
    url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    title: "Education for All",
    subtitle:
      "Bridging the digital and educational divide for children in remote areas.",
  },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="w-full h-[600px] md:h-[85vh] relative group overflow-hidden">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-1000 relative transition-all ease-in-out scale-105 group-hover:scale-100"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col justify-center items-start text-left text-white px-4 sm:px-16 lg:px-32">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block bg-primary text-white text-xs font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-6">
              Ujiyala Foundation
            </span>
            <h1 className="text-5xl md:text-8xl font-black mb-6 drop-shadow-2xl leading-[1.1]">
              {slides[currentIndex].title.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={
                    i === slides[currentIndex].title.split(" ").length - 1
                      ? "text-primary"
                      : ""
                  }
                >
                  {word}{" "}
                </span>
              ))}
            </h1>
            <p className="text-xl md:text-2xl mb-12 font-medium text-gray-200 drop-shadow-md max-w-xl leading-relaxed">
              {slides[currentIndex].subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/donate"
                className="bg-primary hover:bg-secondary text-white font-bold py-5 px-12 rounded-2xl transition-all duration-300 text-lg shadow-2xl shadow-primary/30 transform hover:-translate-y-1 active:scale-95"
              >
                DONATE NOW
              </a>
              <a
                href="/about"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold py-5 px-12 rounded-2xl transition-all duration-300 text-lg border border-white/30 transform hover:-translate-y-1 active:scale-95"
              >
                OUR STORY
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-8 p-4 rounded-2xl bg-white/5 hover:bg-primary text-white transition-all duration-300 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 hidden md:block"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-8 p-4 rounded-2xl bg-white/5 hover:bg-primary text-white transition-all duration-300 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 hidden md:block"
      >
        <ChevronRight size={32} />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-12 left-4 sm:left-16 lg:left-32 flex items-center space-x-4">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              currentIndex === slideIndex
                ? "bg-primary w-16"
                : "bg-white/30 w-8 hover:bg-white/60"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
