import React, { useEffect, useState, useCallback } from "react";
import { twMerge } from "tailwind-merge";

const CustomScroll = ({
  to,
  activeClass = "",
  duration = 500,
  children,
  className = "",
  offset = 0,
  onScrollComplete,
  threshold = 0.5,
  onClick, // Prop is already included in your destructuring
}) => {
  const [activeLink, setActiveLink] = useState(false);

  // Memoize the smooth scroll function
  const smoothScrollTo = useCallback(
    (targetPosition, duration) => {
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime = null;

      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const scrollAnimation = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const nextScrollPosition = easeInOutQuad(
          timeElapsed,
          startPosition,
          distance,
          duration
        );

        window.scrollTo(0, nextScrollPosition);

        if (timeElapsed < duration) {
          requestAnimationFrame(scrollAnimation);
        } else {
          onScrollComplete?.();
        }
      };

      requestAnimationFrame(scrollAnimation);
    },
    [onScrollComplete]
  );

  // Memoize the click handler
  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      const targetElement = document.getElementById(to);

      if (targetElement) {
        const elementPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset +
          offset;
        smoothScrollTo(elementPosition, duration);
      }

      // Call the onClick prop if it exists
      if (onClick) {
        onClick(e); // Pass the event to the prop function
      }
    },
    [to, offset, duration, smoothScrollTo, onClick] 
  );

  // Memoize the intersection observer callback
  const observerCallback = useCallback((entries) => {
    entries.forEach((entry) => {
      setActiveLink(entry.isIntersecting);
    });
  }, []);

  useEffect(() => {
    const targetElement = document.getElementById(to);
    if (!targetElement) return;

    const observer = new IntersectionObserver(observerCallback, {
      threshold: threshold,
      rootMargin: `${offset}px`,
    });

    observer.observe(targetElement);

    return () => {
      observer.disconnect();
    };
  }, [to, offset, threshold, observerCallback]);

  return (
    <a
      className={twMerge(`px-2 ${className} ${activeLink ? activeClass : ""}`).trim()}
      onClick={handleClick}
      aria-current={activeLink ? "location" : undefined}
    >
      {children}
    </a>
  );
};

export default CustomScroll;