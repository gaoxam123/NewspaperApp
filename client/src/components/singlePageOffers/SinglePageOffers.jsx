import Offer from "../offer/Offer"
import classes from "./SinglePageOffers.module.css"

export default function SinglePageOffers() {
  return (
    <div className={classes.container}>
        {Array.from({length: 3}).map((_, index) => <Offer key={index} />)}
    </div>
  )
}
