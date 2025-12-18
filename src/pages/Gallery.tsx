import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2, Filter } from "lucide-react";

const galleryData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Food Distribution",
    title: "Feeding the Hungry",
    description: "Weekly food distribution drive in local communities.",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Education",
    title: "Rural School Support",
    description:
      "Providing school kits and books to children in remote villages.",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Medical",
    title: "Village Medical Camp",
    description: "Free health checkups and medicines for elderly villagers.",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Rural Development",
    title: "Water Conservation Project",
    description: "Building sustainable water solutions for agriculture.",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Community",
    title: "Community Gathering",
    description: "Building resilience through community engagement.",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Shelter",
    title: "Homeless Support",
    description: "Providing blankets and temporary shelter during winters.",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1504159551531-f40dd639a9d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Community",
    title: "Volunteer Training",
    description: "Empowering local youth to lead community initiatives.",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Food Distribution",
    title: "Nutritious Meals",
    description: "Ensuring every child gets a healthy meal.",
  },
];

const categories = [
  "All",
  ...new Set(galleryData.map((item) => item.category)),
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");
  const [filteredImages, setFilteredImages] = useState(galleryData);

  useEffect(() => {
    if (filter === "All") {
      setFilteredImages(galleryData);
    } else {
      setFilteredImages(galleryData.filter((img) => img.category === filter));
    }
  }, [filter]);

  const openLightbox = (id: number) => {
    const index = filteredImages.findIndex((img) => img.id === id);
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + filteredImages.length) % filteredImages.length
      );
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Our Impact in Pictures
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into the lives we touch and the communities we build.
            Every picture tells a story of hope and resilience.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                filter === cat
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat === "All" && <Filter size={16} />}
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
              onClick={() => openLightbox(image.id)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1">
                  {image.category}
                </span>
                <h3 className="text-white font-bold text-lg mb-1">
                  {image.title}
                </h3>
                <p className="text-gray-300 text-xs line-clamp-2">
                  {image.description}
                </p>
                <div className="mt-4 flex items-center text-white text-sm font-semibold">
                  <Maximize2 size={16} className="mr-2" /> View Full Image
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">
              No images found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox / Image Viewer */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 sm:p-8 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full z-[110]"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 bg-white/10 rounded-full z-[110] hidden sm:block"
            onClick={prevImage}
          >
            <ChevronLeft size={40} />
          </button>
          <button
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 bg-white/10 rounded-full z-[110] hidden sm:block"
            onClick={nextImage}
          >
            <ChevronRight size={40} />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-5xl w-full max-h-[80vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            />

            {/* Image Info */}
            <div className="mt-6 text-center text-white max-w-2xl">
              <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2 block">
                {filteredImages[selectedImage].category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                {filteredImages[selectedImage].title}
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                {filteredImages[selectedImage].description}
              </p>

              {/* Mobile Navigation */}
              <div className="flex justify-center gap-8 mt-6 sm:hidden">
                <button
                  onClick={prevImage}
                  className="p-2 bg-white/10 rounded-full"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="p-2 bg-white/10 rounded-full"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
