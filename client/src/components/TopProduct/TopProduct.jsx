import classes from "./TopProduct.module.css"

export default function TopProduct({ price }) {
  return (
    <div className={classes.container}>
      <div className={classes.imgDiv}>
        <img src="logo.jpg" alt="" />
      </div>
      <div className={classes.starRatingAndDescription}>
        <div className={classes.starRating}>
          4
        </div>
        <div className={classes.description}>
          Ritter Sport
        </div>
      </div>
      <div className={classes.price}>
        {price}$
      </div>
    </div>
  )
}
