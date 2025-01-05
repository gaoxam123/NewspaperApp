import classes from "./TopCategories.module.css"

export default function TopCategories({ title }) {
  return (
    <div className={classes.container}>
      <h2>{title}</h2>
      <div className={classes.imgSection}>
        <div className={classes.imgDiv}>
          <a href="#">
            <img src="logo.jpg" alt="" />
            <h3>Cookie</h3>
          </a>
        </div>
        <div className={classes.imgDiv}>
          <a href="#">
            <img src="logo.jpg" alt="" />
            <h3>Cookie</h3>
          </a>
        </div>
        <div className={classes.imgDiv}>
          <a href="#">
            <img src="logo.jpg" alt="" />
            <h3>Cookie</h3>
          </a>
        </div>
        <div className={classes.imgDiv}>
          <a href="#">
            <img src="logo.jpg" alt="" />
            <h3>Cookie</h3>
          </a>
        </div>
        <div className={classes.imgDiv}>
          <a href="#">
            <img src="logo.jpg" alt="" />
            <h3>Cookie</h3>
          </a>
        </div>
        <div className={classes.imgDiv}>
          <a href="#">
            <img src="logo.jpg" alt="" />
            <h3>Cookie</h3>
          </a>
        </div>
      </div>
    </div>
  )
}
