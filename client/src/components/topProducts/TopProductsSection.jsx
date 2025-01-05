import classes from "./TopProductsSection.module.css"
import { useState, useRef } from "react"
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

export default function TopProductsSection({ title, totalProducts, TopProduct, slideLength = 1300 }) {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const totalTopProducts = totalProducts

  const listRef = useRef(null);

  const handleClickRight = () => {
    console.log(listRef.current)
    if (listRef.current) {
      listRef.current.scrollLeft += slideLength;
    }
  };

  const handleClickLeft = () => {
    if (listRef.current) {
      listRef.current.scrollLeft -= slideLength;
    }
  };

  const handleScroll = () => {
    if (listRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = listRef.current;
      console.log({ scrollLeft, scrollWidth, clientWidth });
      setShowLeftArrow(listRef.current.scrollLeft > 0);
      setShowRightArrow(listRef.current.scrollLeft + listRef.current.clientWidth < listRef.current.scrollWidth - 1);
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.titleAndButtons}>
        <div className={classes.title}><h2>{title}</h2></div>
        <div className={classes.buttons}>
          <button className={classes.button} onClick={handleClickRight}
            disabled={!showRightArrow}><KeyboardArrowRight sx={{ fontSize: '18px', color: !showRightArrow ? 'black' : 'white' }} /></button>
          <button className={classes.button} onClick={handleClickLeft}
            disabled={!showLeftArrow}><KeyboardArrowLeft sx={{ fontSize: '18px', color: !showLeftArrow ? 'black' : 'white' }} /></button>
        </div>
      </div>
      <div className={classes.topProducts}>
        <div className={classes.sliderTrack} ref={listRef} onScroll={handleScroll}>
          {Array.from({ length: totalTopProducts }).map((_, index) => (
            <TopProduct key={index} price={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
