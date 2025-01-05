import { useState } from "react"
import classes from "./AddToWishList.module.css"
import { FavoriteBorder, Favorite } from "@mui/icons-material"

export default function AddToWishList() {
  const [heartBlank, setHeartBlank] = useState(true)
  const toggleBlank = () => {
    setHeartBlank(prev => !prev)
  }
  return (
    <div onClick={toggleBlank} className={classes.addToWishList}>
      {heartBlank ? <FavoriteBorder /> : <Favorite />}
    </div>
  )
}
