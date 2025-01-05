import classes from "./ReviewChart.module.css"
import { Star } from "@mui/icons-material"

export default function ReviewChart({ ratingData }) {
  let starsAndCounts = [0, 0, 0, 0, 0]
  ratingData.forEach((data) => {
    starsAndCounts[data.stars - 1]++
  })
  starsAndCounts.reverse()
  return (
    <div className={classes.ratingBars}>
      {starsAndCounts.map((starCount, index) =>
        <div key={index} className={classes.barRow}>
          <div className={classes.starLabel}>{5 - index} <Star /></div>
          <div className={classes.barWrapper}>
            <div className={classes.barFill} style={{ width: `${(starCount / ratingData.length) * 100}%` }}></div>
          </div>
          <span className={classes.countLabel}>({starCount})</span>
        </div>
      )}
    </div>
  )
}
