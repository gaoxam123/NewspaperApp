import { useRef, useState, useEffect } from "react"
import ImgSlider from "../../components/imgSlider/ImgSlider"
import Review from "../../components/review/Review"
import SortingAndDropDownWindow from "../../components/sortingAndDropDownWindow/SortingAndDropDownWindow"
import StarRating from "../../components/starRating/StarRating"
import classes from "./SingleProduct.module.css"
import { HomeOutlined, KeyboardArrowRight, Euro, KeyboardArrowDown, KeyboardArrowUp, AddShoppingCart } from "@mui/icons-material"
import ReviewModal from "../../components/reviewModal/ReviewModal"
import { useInput } from "../../hooks/useInput"
import { isNotEmpty } from "../../utils/validation"
import { formatDate } from "../../utils/formatDate"
import { sortByBest, sortByNewest, sortByRelevance, sortByWorst } from "../../utils/sortFunctions"
import ReviewChart from "../../components/reviewChart/ReviewChart"
import ExpandableContent from "../../components/expandableContent/ExpandableContent"
import AddToWishList from "../../components/addToWishList/AddToWishList"

const dummyReviews = [
  {
    id: 0,
    stars: 4,
    content: "",
    username: "",
    date: "",
    numThumbUp: 14,
    numThumbDown: 23,
    subject: ""
  },
  {
    id: 1,
    stars: 4,
    content: "",
    username: "",
    date: "",
    numThumbUp: 23,
    numThumbDown: 14,
    subject: ""
  },
  {
    id: 2,
    stars: 4,
    content: "",
    username: "",
    date: "",
    numThumbUp: 23,
    numThumbDown: 14,
    subject: ""
  },
  {
    id: 3,
    stars: 4,
    content: "",
    username: "",
    date: "",
    numThumbUp: 23,
    numThumbDown: 14,
    subject: ""
  },
  {
    id: 4,
    stars: 4,
    content: "",
    username: "",
    date: "",
    numThumbUp: 23,
    numThumbDown: 14,
    subject: ""
  },
  {
    id: 5,
    stars: 4,
    content: "",
    username: "",
    date: "",
    numThumbUp: 23,
    numThumbDown: 14,
    subject: ""
  },
]

const dummyDescriptionText = "Delicate and colorful, macarons are French confections made with almond flour, egg whites, and sugar. These light, airy cookies are sandwiched together with luscious fillings like buttercream, ganache, or fruit jams. Their crisp outer shell gives way to a soft, chewy center, creating a perfect bite. Available in a rainbow of colors and flavors, macarons range from classic vanilla and chocolate to exotic rose and pistachio. They are not just sweets but a symbol of elegance and indulgence, perfect for special occasions or as a luxurious treat."

const sortOptions = [sortByBest, sortByNewest, sortByRelevance, sortByWorst]

export default function SingleProduct({ category = "Chocolate", title = "Ritter Sport", price = 500, numReviews = dummyReviews.length, id = 0 }) {
  const [openModal, setOpenModal] = useState(false)
  const [sortOption, setSortOption] = useState(0)
  const {
    value: enteredTitle,
    handleValueChange: handleTitleChange,
    handleValueBlur: handleTitleBlur,
    hasError: titleInvalid,
    setEnteredValue: setEnteredTitle,
    setDidEditValue: setDidEditTitle
  } = useInput('', isNotEmpty)
  const {
    value: enteredContent,
    handleValueChange: handleContentChange,
    handleValueBlur: handleContentBlur,
    hasError: contentInvalid,
    setEnteredValue: setEnteredContent,
    setDidEditValue: setDidEditContent
  } = useInput('', isNotEmpty)
  const {
    value: enteredNickname,
    // handleValueChange: handleNicknameChange,
    // handleValueBlur: handleNicknameBlur,
    hasError: nicknameInvalid,
    setEnteredValue: setEnteredNickname,
    // setDidEditValue: setDidEditNickname
  } = useInput('', () => { true })
  const [reviews, setReviews] = useState(dummyReviews)
  const [rating, setRating] = useState(0)
  const [isReviewExpanded, setIsReviewExpanded] = useState(false)
  const averageRating = (reviews.reduce((acc, num) => acc + num.stars, 0) / reviews.length).toFixed(1)
  const dialog = useRef()
  const sortReviews = (option) => {
    setReviews(prev => {
      let newReviews = sortOptions[option](prev)
      return newReviews
    })
  }
  useEffect(() => sortReviews(sortOption), [sortOption])
  const toggleExpand = () => {
    setIsReviewExpanded(prev => !prev)
  }
  const handleOpenModal = () => {
    dialog.current.open()
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (titleInvalid || contentInvalid) {
      return
    }
    setReviews(prev => {
      return [{
        id: prev.length,
        stars: rating,
        content: enteredContent,
        username: enteredNickname || "anonymous",
        date: formatDate(Date.now()),
        numThumbUp: 0,
        numThumbDown: 0,
        subject: enteredTitle
      }, ...prev]
    })
    sortReviews(sortOption)
    setRating(0)
    setEnteredContent('')
    setEnteredNickname('')
    setEnteredTitle('')
    setDidEditContent(false)
    setDidEditTitle(false)
    dialog.current.close()
  }
  console.log(openModal)
  useEffect(() => {
    if (openModal) {
      document.body.classList.add(classes.noScroll);
    } else {
      document.body.classList.remove(classes.noScroll);
    }
    return () => {
      document.body.classList.remove(classes.noScroll);
    };
  }, [openModal]);
  return (
    <>
      <ReviewModal
        ref={dialog}
        handleTitleChange={handleTitleChange}
        handleContentChange={handleContentChange}
        handleTitleBlur={handleTitleBlur}
        handleContentBlur={handleContentBlur}
        titleInvalid={titleInvalid}
        contentInvalid={contentInvalid}
        nicknameInvalid={nicknameInvalid}
        handleSubmit={handleSubmit}
        onRatingChange={setRating}
        setOpenModal={setOpenModal} />
      <div className={`${classes.container}`}>
        <div className={classes.navigateLink}>
          <HomeOutlined />
          <KeyboardArrowRight />
          <p className={classes.text}>{category}</p>
          <KeyboardArrowRight />
          <p className={classes.text}>{title}</p>
        </div>
        <div className={classes.imgAndOrder}>
          <div className={classes.left}>
            <div className={classes.ratingAndTitle}>
              <div className={classes.rating}>
                <StarRating stars={averageRating} numReviews={reviews.length} />
              </div>
              <div className={classes.title}>
                <h2>{title}</h2>
              </div>
            </div>
            <div className={classes.imgPart}>
              <ImgSlider />
              <div className={classes.productDescription}>
                <ExpandableContent text={dummyDescriptionText} />
              </div>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.price}>
              <h1>{price} <Euro sx={{ fontSize: '30px' }} /></h1>
            </div>
            <div className={classes.addReviews}>
              <div className={classes.reviewStatistic}>
                <div className={classes.reviewStatisticOverview}>
                  <h2>{averageRating}</h2>
                  <StarRating stars={averageRating} onlyStars={true} />
                  <p>({reviews.length})</p>
                </div>
                <div className={classes.reviewChart}>
                  <ReviewChart ratingData={reviews} />
                </div>
              </div>
              <div onClick={handleOpenModal} className={classes.reviewButtonWrapper}>
                Add Review
              </div>
            </div>
            <div className={classes.showReviews}>
              <div className={classes.numReviewsAndSorting}>
                <h2>{reviews.length} Reviews</h2>
                <SortingAndDropDownWindow setSortOption={setSortOption} />
              </div>
              <div className={classes.reviewsWrapper}>
                <ul className={`${classes.listReviews}`}>
                  {reviews.slice(0, isReviewExpanded ? reviews.length : 2).map((review, index) => {
                    return (
                      <li key={review.id}>
                        <Review
                          stars={review.stars}
                          content={review.content !== "" ? review.content : undefined}
                          subject={review.subject !== "" ? review.subject : undefined}
                          date={review.date !== "" ? review.date : undefined}
                          username={review.username !== "" ? review.username : undefined}
                          initNumThumbUp={review.numThumbUp}
                          initNumThumbDown={review.numThumbDown}
                        />
                      </li>
                    )
                  })}
                </ul>
                <div className={classes.expandButton} onClick={toggleExpand}>
                  {isReviewExpanded && reviews.length > 2 && <KeyboardArrowUp />} {isReviewExpanded && reviews.length > 2 && "Show Less"}
                  {!isReviewExpanded && reviews.length > 2 && <KeyboardArrowDown />} {!isReviewExpanded && reviews.length > 2 && "Read More"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.addToCartButton}>
        <div className={classes.priceTag}>
          <h3>{price} <Euro /></h3>
        </div>
        <div className={classes.addToCartButtonWrapper}>
          <AddShoppingCart /> <p>Add To Cart</p>
        </div>
        <AddToWishList />
      </div>
    </>
  )
}
