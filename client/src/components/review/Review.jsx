import { useState } from "react"
import StarRating from "../starRating/StarRating"
import classes from "./Review.module.css"
import { KeyboardArrowDown, KeyboardArrowUp, ThumbDown, ThumbUp } from "@mui/icons-material"
import ExpandableContent from "../expandableContent/ExpandableContent"
import { formatDate } from "../../utils/formatDate"

const dummyContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi beatae omnis vitae at accusantium, consequuntur aperiam, tenetur, nisi officiis quos fuga inventore fugiat voluptatum reiciendis. Laborum cum quidem est doloremque."
const dummySubject = "Really Good"
const dummyUsername = "gaoxam123"

export default function Review({ stars = 4.7, date = 1428278400000, content = dummyContent, username = dummyUsername, subject = dummySubject, initNumThumbUp, initNumThumbDown }) {
  // const [isExpanded, setIsExpanded] = useState(false)
  const [numThumbUp, setNumThumbUp] = useState(initNumThumbUp)
  const [numThumbDown, setNumThumbDown] = useState(initNumThumbDown)
  // const toggleExpand = () => {
  //   setIsExpanded(prev => !prev)
  // }
  const handleClickThumpUp = () => {
    if (numThumbUp === initNumThumbUp) {
      setNumThumbUp(prev => prev + 1)
    }
    else {
      setNumThumbUp(prev => prev - 1)
    }
  }
  const handleClickThumpDown = () => {
    if (numThumbDown === initNumThumbDown) {
      setNumThumbDown(prev => prev + 1)
    }
    else {
      setNumThumbDown(prev => prev - 1)
    }
  }
  return (
    <div className={classes.container}>
      <div className={classes.starsAndDate}>
        <StarRating stars={stars} onlyStars={true} />
        <p>{formatDate(date)}</p>
      </div>
      <div className={classes.content}>
        <div className={classes.subject}>{subject}</div>
        <div className={classes.fromUser}>from {username}</div>
        <div className={classes.mainContent}>
          <ExpandableContent text={content}/>
        </div>
      </div>
      <div className={classes.helpfulVotes}>
        <p>Helpful?</p>
        <span className={classes.thumb}>
          <ThumbUp onClick={handleClickThumpUp} className={`${classes.thumbIcon} ${numThumbUp !== initNumThumbUp && classes.clicked}`} />
          ({numThumbUp})
        </span>
        <span className={classes.thumb}>
          <ThumbDown onClick={handleClickThumpDown} className={`${classes.thumbIcon} ${numThumbDown !== initNumThumbDown && classes.clicked}`} />
          ({numThumbDown})
        </span>
      </div>
    </div>
  )
}
