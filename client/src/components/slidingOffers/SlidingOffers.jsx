import React, { useEffect, useState } from 'react';
import Offer from '../offer/Offer';
import classes from './SlidingOffers.module.css';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

export default function SlidingOffers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalOffers = 6;
  const visibleOffers = 3;
  const gap = 20;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex === 0) {
        handleRightClick()
      }
      else {
        handleLeftClick()
      }
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [currentIndex])

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => 1 - prevIndex);
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => 1 - prevIndex);
  };

  return (
    <div className={classes.slidingOffers}>
      <div className={classes.contentWrapper}>
        <div
          className={classes.sliderTrack}
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * gap}px))`,
          }}
        >
          {Array.from({ length: totalOffers }).map((_, index) => <Offer key={index} />)}
        </div>
      </div>
      <div className={classes.buttonWrapper}>
        <div className={classes.twoButtons}>
          <button onClick={handleLeftClick} className={classes.button} disabled={currentIndex === 0}>
            <KeyboardArrowLeft sx={{ fontSize: '18px', color: currentIndex === 0 ? 'black' : 'white' }} />
          </button>
          <button
            onClick={handleRightClick}
            className={classes.button}
            disabled={currentIndex === Math.ceil(totalOffers / visibleOffers) - 1}
          >
            <KeyboardArrowRight sx={{ fontSize: '18px', color: currentIndex === Math.ceil(totalOffers / visibleOffers) - 1 ? 'black' : 'white' }} />
          </button>
        </div>
      </div>
    </div>
  );
}
