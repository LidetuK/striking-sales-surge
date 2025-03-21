
import React, { useState, useEffect } from "react";

interface BookPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookPopup: React.FC<BookPopupProps> = ({ isOpen, onClose }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false); // Controls fade-in animation

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setVisible(true), 300); // Smooth fade-in after 300ms

      setProgress(0); // Reset progress when the popup opens
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(onClose, 500); // Close popup 0.5s after full progress
            return 100;
          }
          return prev + 1; // Slower progress (1% every 150ms)
        });
      }, 150);

      return () => clearInterval(interval);
    } else {
      setVisible(false);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-500 z-50 px-4 ${visible ? "opacity-100" : "opacity-0"}`}>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-2xl w-full max-w-md relative transform transition-all duration-500 scale-95">
        {/* Close Button */}
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl" onClick={onClose}>
          &times;
        </button>
        {/* Progress Bar */}
        <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden mb-3 md:mb-4">
          <div className="bg-red-500 h-2 transition-all" style={{ width: `${progress}%` }}></div>
        </div>
        {/* Content */}
        <h2 className="text-xl md:text-2xl font-bold text-center text-red-600">WAIT! BEFORE YOU GO...</h2>
        <p className="text-center mt-2 text-sm md:text-base text-gray-700">
          Send me your address and I'll rush a <b>FREE copy</b> of my brand new physical book to your doorstep, ASAP!
        </p>
        <img src="/lovable-uploads/111.png" alt="Sell Like Crazy" className="w-full my-3 md:my-4 rounded-lg shadow-md" />
        <button className="w-full bg-red-500 text-white py-2 md:py-3 px-4 rounded-lg text-base md:text-lg font-bold hover:bg-red-600 transition-all">
          RUSH ME A FREE COPY
        </button>
      </div>
    </div>
  );
};

export default BookPopup;
