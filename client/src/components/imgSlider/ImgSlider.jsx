import { useState } from "react"
import classes from "./ImgSlider.module.css"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

export default function ImgSlider({ imgs = ["logo.jpg", "logo.jpg", "logo.jpg", "logo.jpg", "logo.jpg"] }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? imgs.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
        );
    };
    return (
        <div className={classes.slider}>
            <div className={classes.mainImage}>
                <button className={`${classes.button} ${classes.prev}`} disabled={currentIndex === 0} onClick={handlePrev}>
                    <KeyboardArrowLeft sx={{ fontSize: '18px', color: currentIndex === 0 ? 'black' : 'white' }}/>
                </button>
                <img src="./logo.jpg" alt={`Slide ${currentIndex + 1}`} />
                <button className={`${classes.button} ${classes.next}`} disabled={currentIndex === imgs.length - 1} onClick={handleNext}>
                    <KeyboardArrowRight sx={{ fontSize: '18px', color: currentIndex === imgs.length - 1 ? 'black' : 'white' }}/>
                </button>
            </div>

            <div className={classes.thumbnailContainer}>
                {imgs.map((_, index) => (
                    <div
                        key={index}
                        className={`${classes.thumbnail} ${index === currentIndex ? classes.active : ""
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    >
                        <img src="./logo.jpg" alt={`Thumbnail ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}
