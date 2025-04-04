import { useState, useRef, useEffect, TouchEvent } from 'react';

interface SwipeCardsOptions {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  swipeThreshold?: number;
  rotationFactor?: number;
  allowSwipe?: boolean;
}

interface SwipeCardsResult {
  handleTouchStart: (e: TouchEvent) => void;
  handleTouchMove: (e: TouchEvent) => void;
  handleTouchEnd: () => void;
  cardStyle: {
    transform: string;
    transition: string;
  };
  direction: 'left' | 'right' | null;
  isSwiping: boolean;
  resetPosition: () => void;
}

/**
 * A hook that implements Tinder-like swipe card functionality
 * for mobile interfaces.
 */
const useSwipeCards = ({
  onSwipeLeft,
  onSwipeRight,
  swipeThreshold = 100,
  rotationFactor = 10,
  allowSwipe = true,
}: SwipeCardsOptions = {}): SwipeCardsResult => {
  const [startX, setStartX] = useState<number>(0);
  const [currentX, setCurrentX] = useState<number>(0);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const swipingRef = useRef<boolean>(false);

  // Reset position when allowSwipe changes
  useEffect(() => {
    if (!allowSwipe) {
      resetPosition();
    }
  }, [allowSwipe]);

  const handleTouchStart = (e: TouchEvent) => {
    if (!allowSwipe) return;
    
    setStartX(e.touches[0].clientX);
    setIsSwiping(true);
    swipingRef.current = true;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!allowSwipe || !swipingRef.current) return;
    
    const currentX = e.touches[0].clientX;
    setCurrentX(currentX);
    
    const diff = currentX - startX;
    setDirection(diff > 0 ? 'right' : 'left');
  };

  const handleTouchEnd = () => {
    if (!allowSwipe || !swipingRef.current) return;
    
    swipingRef.current = false;
    setIsSwiping(false);
    
    const diff = currentX - startX;
    const absDiff = Math.abs(diff);
    
    if (absDiff >= swipeThreshold) {
      if (diff > 0 && onSwipeRight) {
        onSwipeRight();
      } else if (diff < 0 && onSwipeLeft) {
        onSwipeLeft();
      }
    } else {
      resetPosition();
    }
  };

  const resetPosition = () => {
    setStartX(0);
    setCurrentX(0);
    setDirection(null);
  };

  // Calculate the transform based on swipe distance
  const getTransform = () => {
    if (!isSwiping) return 'translateX(0) rotate(0deg)';
    
    const diff = currentX - startX;
    const rotate = diff / rotationFactor; // Smaller rotation factor for more subtle rotation
    
    return `translateX(${diff}px) rotate(${rotate}deg)`;
  };

  const cardStyle = {
    transform: getTransform(),
    transition: isSwiping ? 'none' : 'transform 0.3s ease-out',
  };

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    cardStyle,
    direction,
    isSwiping,
    resetPosition,
  };
};

export default useSwipeCards;