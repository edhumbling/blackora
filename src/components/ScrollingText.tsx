import React from 'react';

interface ScrollingTextProps {
  text: string;
  speed?: number; // Duration in seconds for one complete scroll
}

const ScrollingText: React.FC<ScrollingTextProps> = ({ text, speed = 20 }) => {
  // Repeat the text to ensure continuous scrolling
  const repeatedText = `${text} • ${text} • ${text} • ${text} • ${text} • `;
  
  return (
    <div className="w-full overflow-hidden bg-gold-900 py-3">
      <div 
        className="whitespace-nowrap animate-scroll-x inline-block text-gold-100 font-serif font-bold text-4xl md:text-5xl lg:text-6xl tracking-wide"
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
