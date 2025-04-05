import React, { useEffect, useState } from 'react';

interface SplashCursorProps {
  color?: string;
  size?: number;
  duration?: number;
  zIndex?: number;
}

export function SplashCursor({
  color = 'rgba(215, 181, 80, 0.5)', // Gold color with transparency
  size = 100,
  duration = 1000,
  zIndex = 9999,
}: SplashCursorProps) {
  const [splashes, setSplashes] = useState<{ id: number; x: number; y: number; createdAt: number }[]>([]);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newSplash = {
        id: nextId,
        x: e.clientX,
        y: e.clientY,
        createdAt: Date.now(),
      };

      setSplashes((prev) => [...prev, newSplash]);
      setNextId((prev) => prev + 1);

      // Remove splash after animation completes
      setTimeout(() => {
        setSplashes((prev) => prev.filter((splash) => splash.id !== newSplash.id));
      }, duration);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [nextId, duration]);

  // Add keyframes to document if they don't exist yet
  useEffect(() => {
    if (!document.getElementById('splash-cursor-keyframes')) {
      const styleElement = document.createElement('style');
      styleElement.id = 'splash-cursor-keyframes';
      styleElement.textContent = `
        @keyframes splash-cursor-animation {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(styleElement);
    }

    return () => {
      const styleElement = document.getElementById('splash-cursor-keyframes');
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, []);

  return (
    <>
      {splashes.map((splash) => (
        <div
          key={splash.id}
          style={{
            position: 'fixed',
            left: splash.x - size / 2,
            top: splash.y - size / 2,
            width: size,
            height: size,
            borderRadius: '50%',
            backgroundColor: color,
            pointerEvents: 'none',
            zIndex,
            animation: `splash-cursor-animation ${duration}ms ease-out forwards`,
          }}
        />
      ))}
    </>
  );
}
