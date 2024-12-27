import React, { useEffect, useState } from 'react';
import Offer from '../offer/Offer';
import classes from './SlidingOffers.module.css';

export default function SlidingOffers() {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current slide
  const totalOffers = 6; // Total number of offers
  const visibleOffers = 3; // Number of visible offers at a time
  const gap = 20; // Gap between offers in pixels

  const timer = setTimeout(() => {
    if (currentIndex === 0) {
      handleRightClick()
    }
    else {
      handleLeftClick()
    }
  }, 5000)

  const handleLeftClick = () => {
    clearTimeout(timer)
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0)); // Move 3 items back
  };

  const handleRightClick = () => {
    clearTimeout(timer)
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, Math.ceil(totalOffers / visibleOffers) - 1) // Move 3 items forward
    );
  };

  useEffect(() => {
    timer
  }, [currentIndex])

  return (
    <div className={classes.slidingOffers}>
      <div className={classes.contentWrapper}>
        <div
          className={classes.sliderTrack}
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * gap * (visibleOffers - 2)}px))`,
          }}
        >
          <Offer />
          <Offer />
          <Offer />
          <Offer />
          <Offer />
          <Offer />
        </div>
      </div>
      <div className={classes.buttonWrapper}>
        <div className={classes.twoButtons}>
          <button onClick={handleLeftClick} disabled={currentIndex === 0}>
            Left
          </button>
          <button
            onClick={handleRightClick}
            disabled={currentIndex === Math.ceil(totalOffers / visibleOffers) - 1}
          >
            Right
          </button>
        </div>
      </div>
    </div>
  );
}
