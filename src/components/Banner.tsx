import { useState, useEffect } from "react";

interface BannerProps {
  images: { image: string }[];
  onSearch: () => void;
}

const Banner: React.FC<BannerProps> = ({ images, onSearch }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden">
      {images.length > 0 && (
        <img
          src={images[currentIndex].image}
          alt="Banner"
          className="w-full h-full object-cover transition-all duration-500"
        />
      )}
      <div className="absolute inset-0 flex justify-center items-center">
        <input
          type="text"
          placeholder="Where do you want to go?"
          className="px-4 py-2 w-3/4 md:w-1/2 bg-white rounded-md shadow-md text-lg"
          onClick={onSearch}
        />
      </div>
    </div>
  );
};

export default Banner;
