import classes from "./StarRatingClicking.module.css"
import { Star } from "@mui/icons-material";
import { useState } from "react";

export default function StarRatingClicking({ totalStars = 5, onRatingChange }) {
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (rating) => {
    setSelectedRating(rating);
    if (onRatingChange) onRatingChange(rating); // Call a callback if provided
  };

  const handleMouseEnter = (rating) => {
    setHoverRating(rating);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className={classes.container}>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <Star
            key={index}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
            style={{
              color: starValue <= (hoverRating || selectedRating) ? "#FFD700" : "#ccc",
              fontSize: "30px",
            }}
          />
        );
      })}
    </div>
  );
}
