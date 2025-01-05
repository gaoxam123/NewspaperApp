import PillTag from "../pillTag/PillTag"
import classes from "./LiveConsultation.module.css"

export default function LiveConsultation() {
  return (
    <div className={classes.container}>
      <a className={classes.a} href="#">
        <div className={classes.wrapper}>
          <div className={classes.contentDiv}>
            <div className={classes.topHalf}>
              <div className={classes.pillWrapper}>
                <PillTag title="Service" />
              </div>
              <div className="">
                <p>Free and Personal</p>
                <h3>Live Consultation at Candies</h3>
              </div>
              <div className="">
                We assist you in finding your favourite sweets
              </div>
            </div>
            <div className={classes.bottomHalf}>
              <PillTag title="Video-Chat" />
              <PillTag title="Flexible Availability" />
              <PillTag title="Qualified Experts" />
            </div>
          </div>
          <div className={classes.imgDiv}>
            <img src="logo.jpg" alt="" />
          </div>
        </div>
      </a>
    </div>
  )
}
