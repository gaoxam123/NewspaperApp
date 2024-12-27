import { Link } from "react-router-dom"
import classes from "./Offer.module.css"
import { Button } from "@mui/material"

export default function Offer() {
    return (
        <div className={classes.container}>
            <img src="" alt="" />
            <div className={classes.description}></div>
            <div className={classes.button}>
                <Link><Button>More Info</Button></Link>
            </div>
        </div>
    )
}
