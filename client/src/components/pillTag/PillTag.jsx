import classes from "./PillTag.module.css"

export default function PillTag({ title }) {
  return (
    <div className={classes.container}>
      {title}
    </div>
  )
}
