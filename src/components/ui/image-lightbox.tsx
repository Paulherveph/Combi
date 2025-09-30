import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageLightboxProps {
  images: { src: string; alt: string; title: string }[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ImageLightbox = ({ 
  images, 
  isOpen, 
  currentIndex, 
  onClose, 
  onNext, 
  onPrev 
}: ImageLightboxProps) => {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/50 to-transparent">
        <div className="flex items-center justify-between p-4">
          <div className="text-white">
            <h3 className="text-lg font-semibold">{currentImage?.title}</h3>
            <p className="text-sm text-white/70">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsZoomed(!isZoomed)}
              className="text-white hover:bg-white/20"
            >
              <ZoomIn className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/20"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 w-12 h-12"
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 w-12 h-12"
          >
            <ChevronRight className="w-8 h-8" />
          </Button>
        </>
      )}

      {/* Image Container */}
      <div className="flex items-center justify-center h-full p-4 pt-20">
        <div 
          className={`relative transition-transform duration-300 ${
            isZoomed ? 'scale-150' : 'scale-100'
          } cursor-zoom-${isZoomed ? 'out' : 'in'}`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            src={currentImage?.src}
            alt={currentImage?.alt}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent">
          <div className="flex items-center justify-center space-x-2 p-4 overflow-x-auto">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  const diff = index - currentIndex;
                  if (diff > 0) {
                    for (let i = 0; i < diff; i++) onNext();
                  } else if (diff < 0) {
                    for (let i = 0; i < Math.abs(diff); i++) onPrev();
                  }
                }}
                className={`flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${
                  index === currentIndex 
                    ? 'border-primary scale-110' 
                    : 'border-white/30 hover:border-white/60'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Close on background click */}
      <div 
        className="absolute inset-0 -z-10"
        onClick={onClose}
      />
    </div>
  );
};

export default ImageLightbox;