import { Star, StarBorder, StarHalf } from "@mui/icons-material"
import classes from "./StarRating.module.css"

export default function StarRating({ stars = 4.7, numReviews = 170, typeNumber = "06042015", brand = "GB", onlyStars = false }) {
  const fullStars = Math.floor(stars)
  const halfStar = stars % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <div className={classes.rating}>
      <div className={classes.stars}>
        {Array(fullStars).fill().map((_, i) => (
          <div key={`full-${i}`} className={classes.full}><Star /></div>
        ))}
        {halfStar && <div className={classes.half}><StarHalf /></div>}
        {Array(emptyStars).fill().map((_, i) => (
          <div key={`empty-${i}`} className={classes.empty}><StarBorder /></div>
        ))}
      </div>
      {!onlyStars && <div className={classes.wrapper}>
        <span className={classes.reviews}>{stars} ({numReviews})</span>
        <span className={classes.seperator}>|</span>
        <span className={classes.typeNumber}>Type.-Nr.: {typeNumber}</span>
        <span className={classes.seperator}>|</span>
        <span className={classes.brand}>{brand}</span>
      </div>}
    </div>
  )
}
