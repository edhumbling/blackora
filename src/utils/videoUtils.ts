/**
 * Utility functions for handling video playback, especially on mobile devices
 */

/**
 * Ensures videos play on mobile devices by handling autoplay restrictions
 * This function should be called when the component mounts
 * @param videoRef - Reference to the video element
 */
export const ensureVideoPlayback = (videoRef: React.RefObject<HTMLVideoElement>) => {
  if (!videoRef.current) return;
  
  const video = videoRef.current;
  
  // Function to attempt playing the video
  const attemptPlay = () => {
    video.play().catch(error => {
      console.log("Autoplay prevented, trying again on user interaction:", error);
    });
  };
  
  // Try to play the video immediately
  attemptPlay();
  
  // Add event listeners to play video on user interaction
  const playOnInteraction = () => {
    attemptPlay();
    // Remove event listeners after first interaction
    document.removeEventListener('touchstart', playOnInteraction);
    document.removeEventListener('click', playOnInteraction);
  };
  
  // Add event listeners for user interaction
  document.addEventListener('touchstart', playOnInteraction);
  document.addEventListener('click', playOnInteraction);
  
  // Handle visibility changes (when user switches tabs or apps)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      attemptPlay();
    }
  });
  
  // Ensure video loops properly
  video.addEventListener('ended', () => {
    video.currentTime = 0;
    attemptPlay();
  });
};
