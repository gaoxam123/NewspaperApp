import classes from "./Offer.module.css"
import { KeyboardArrowRight } from "@mui/icons-material"

export default function Offer() {
  return (
    <div className={classes.container}>
      <div className={classes.imgDiv}>
        <img src="logo.jpg" alt="dcmm" />
      </div>
      <div className={classes.description}>
        <p className={classes.freeShipping}>Free Shipping</p>
        <h1 className={classes.headline}>Endless Creativity</h1>
        <p className={classes.desc}>
        Crisp, colorful French cookies with a chewy center and luxurious fillings in every bite!
        </p>
      </div>
      <div className={classes.button}>
        <a href="#">
          <div className={classes.buttonWrapper}>
            <KeyboardArrowRight /> <p>To Product</p>
          </div>
        </a>
      </div>
    </div>
  )
}
