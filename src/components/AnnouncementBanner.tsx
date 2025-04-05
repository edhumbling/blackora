import { useState } from "react";
import { X } from "lucide-react";

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gold-500 text-white py-3 px-4 text-center">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="animate-pulse mr-2">🎉</div>
          <p className="font-medium">
            We just launched! Excited to Welcome you!
          </p>
          <div className="animate-pulse ml-2">🎉</div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors"
          aria-label="Close announcement"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
