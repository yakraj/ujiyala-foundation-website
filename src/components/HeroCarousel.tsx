import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    title: 'Feeding the Hungry',
    subtitle: 'Join us in our mission to end hunger in our communities.'
  },
  {
    url: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    title: 'Educational Support',
    subtitle: 'Empowering the next generation through education.'
  },
  {
    url: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    title: 'Spreading Hope',
    subtitle: 'Bringing light to the darkest corners of society.'
  }
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
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="w-full h-[600px] md:h-[700px] relative group overflow-hidden">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500 relative transition-all ease-in-out"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-center items-center text-center text-white px-4">
          <div className="max-w-4xl animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg leading-tight">{slides[currentIndex].title}</h1>
            <p className="text-xl md:text-3xl mb-10 font-light drop-shadow-md max-w-2xl mx-auto">{slides[currentIndex].subtitle}</p>
            <button className="bg-primary hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full transition duration-300 text-lg shadow-xl transform hover:scale-105 border-2 border-primary hover:border-red-700">
              DONATE NOW
            </button>
          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-y-1/2 left-8 text-2xl rounded-full p-3 bg-black/30 hover:bg-primary text-white cursor-pointer transition-all duration-300 backdrop-blur-sm">
        <ChevronLeft onClick={prevSlide} size={40} />
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-y-1/2 right-8 text-2xl rounded-full p-3 bg-black/30 hover:bg-primary text-white cursor-pointer transition-all duration-300 backdrop-blur-sm">
        <ChevronRight onClick={nextSlide} size={40} />
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`cursor-pointer transition-all duration-300 rounded-full ${
              currentIndex === slideIndex ? 'bg-primary w-8 h-3' : 'bg-white/50 w-3 h-3 hover:bg-white'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
