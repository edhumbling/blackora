import React from 'react';

interface ScrollingTextProps {
  text: string;
  speed?: number; // Duration in seconds for one complete scroll
}

const ScrollingText: React.FC<ScrollingTextProps> = ({ text, speed = 20 }) => {
  // Repeat the text to ensure continuous scrolling
  const repeatedText = `${text} • ${text} • ${text} • ${text} • ${text} • `;

  return (
    <div className="w-full overflow-hidden bg-black py-6">
      <div
        className="whitespace-nowrap animate-scroll-x inline-block text-gold-100 font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider font-display"
        style={{
          animationDuration: `${speed}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
      >
        {repeatedText}
      </div>
    </div>
  );
};

export default ScrollingText;
