
import { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(current => {
        if (current.seconds > 0) {
          return { ...current, seconds: current.seconds - 1 };
        }
        if (current.minutes > 0) {
          return { ...current, minutes: current.minutes - 1, seconds: 59 };
        }
        if (current.hours > 0) {
          return { hours: current.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 glass-card p-4 rounded-lg shadow-lg z-40 bg-white/95">
      <p className="text-sm font-semibold text-primary mb-2">Limited Time Offer</p>
      <div className="flex gap-2 text-2xl font-bold">
        <div>{String(timeLeft.hours).padStart(2, '0')}:</div>
        <div>{String(timeLeft.minutes).padStart(2, '0')}:</div>
        <div>{String(timeLeft.seconds).padStart(2, '0')}</div>
      </div>
    </div>
  );
};

export default Countdown;
