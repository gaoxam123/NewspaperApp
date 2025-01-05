import classes from "./Footer.module.css"
import { KeyboardArrowRight } from "@mui/icons-material"

export default function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h2>Don't miss out any promotions</h2>
        <p>Subscribe to our news so we can inform you about our newest promotions and sales</p>
      </div>
      <div className={classes.link}>
        <KeyboardArrowRight sx={{ color: "red" }} /><a href="/login">Register</a>
      </div>
    </div>
  )
}
