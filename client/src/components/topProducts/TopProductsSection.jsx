import TopProduct from "../TopProduct/TopProduct"
import classes from "./TopProductsSection.module.css"
import { useState } from "react"

export default function TopProductsSection({title, totalProducts}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalTopProducts = totalProducts
  const visibleTopProducts = 5
  const gap = 10;

  const maxIndex = Math.ceil(totalTopProducts / visibleTopProducts) - 1;

  console.log(currentIndex)
  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  return (
    <div className={classes.container}>
      <div className={classes.titleAndButtons}>
        <div className={classes.title}><h2>{title}</h2></div>
        <div className={classes.buttons}>
          <button onClick={handleRightClick}
            disabled={currentIndex === maxIndex}>Right</button>
          <button onClick={handleLeftClick}
            disabled={currentIndex === 0}>Left</button>
        </div>
      </div>
      <div className={classes.topProducts}>
        <div className={classes.sliderTrack}
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * gap * (visibleTopProducts)}px))`,
          }}
        >
          {Array.from({ length: totalTopProducts }).map((_, index) => (
            <TopProduct key={index} price={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
