import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material"
import classes from "./SortingAndDropDownWindow.module.css"
import { useEffect, useRef, useState } from "react"

const options = ["Best", "Newest", "Most Helpful", "Worst"]

export default function SortingAndDropDownWindow({ setSortOption }) {
  const [arrow, setArrow] = useState(false)
  const [option, setOption] = useState(0)
  const dropDownRef = useRef()
  const sortRef = useRef()

  const handleClick = () => {
    setArrow(prev => !prev)
  }

  const handleChangeOption = (index) => {
    setOption(index)
    setSortOption(index)
    setArrow(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current
        && sortRef.current
        && !dropDownRef.current.contains(event.target)
        && !sortRef.current.contains(event.target)) {
        setArrow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={classes.sortingAndDropDownWindow}>
      <div ref={sortRef} onClick={handleClick} className={`${classes.sorting} ${arrow ? classes.active : classes.inactive}`}>
        <div className={classes.textAndOptions}>
          <div className={classes.text}>Sort by:</div>
          <div className={classes.options}>{options[option]}</div>
        </div>
        <div className={classes.arrows}>
          {!arrow && <KeyboardArrowDown />}
          {arrow && <KeyboardArrowUp />}
        </div>
      </div>
      <div ref={dropDownRef} className={`${classes.dropDownWindow} ${arrow ? classes.visible : classes.hidden}`}>
        <ul className={classes.listOptions}>
          {options.map((op, index) => {
            return <li onClick={() => handleChangeOption(index)} className={`${classes.op} ${option === index && classes.chosen}`} key={index}>{op}</li>
          })}
        </ul>
      </div>
    </div>
  )
}
