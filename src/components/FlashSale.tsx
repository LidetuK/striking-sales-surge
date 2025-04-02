
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 3,
    minutes: 56,
    seconds: 49
  });
  const [copiesLeft, setCopiesleft] = useState(37);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1;
        if (newSeconds >= 0) {
          return { ...prev, seconds: newSeconds };
        }
        
        const newMinutes = prev.minutes - 1;
        if (newMinutes >= 0) {
          return { ...prev, minutes: newMinutes, seconds: 59 };
        }
        
        const newHours = prev.hours - 1;
        if (newHours >= 0) {
          return { hours: newHours, minutes: 59, seconds: 59 };
        }
        
        clearInterval(timer);
        return { hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Random decrease in available copies occasionally
  useEffect(() => {
    const randomTimer = setInterval(() => {
      const shouldDecrease = Math.random() < 0.1; // 10% chance each interval
      if (shouldDecrease && copiesLeft > 1) {
        setCopiesleft(prev => Math.max(prev - 1, 1));
      }
    }, 30000); // Check every 30 seconds
    
    return () => clearInterval(randomTimer);
  }, [copiesLeft]);

  return (
    <div className="bg-red-600 text-white py-4 sticky top-0 z-50 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="flex items-center gap-2 font-bold text-xl">
          <span className="uppercase">Flash Sale</span>
          <Clock className="h-5 w-5" />
        </div>
        
        <div className="flex gap-1 text-2xl font-mono font-bold">
          <span>{String(timeLeft.hours).padStart(2, '0')}</span>
          <span>:</span>
          <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span>:</span>
          <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
        </div>
        
        <div className="text-yellow-200 font-semibold">
          Only <span className="font-bold underline">{copiesLeft}</span> copies left!
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
