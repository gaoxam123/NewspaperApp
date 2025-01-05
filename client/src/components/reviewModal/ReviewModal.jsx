import { Close, Star } from "@mui/icons-material"
import classes from "./ReviewModal.module.css"
import { useImperativeHandle, useRef, useEffect } from "react"
import StarRatingClicking from "../starRatingClicking/StarRatingClicking"
import Input from "../../pages/authentication/Input"

export default function ReviewModal({
  ref,
  imgSrc = "logo.jpg",
  title = "Ritter Sport",
  handleTitleChange,
  handleContentChange,
  handleTitleBlur,
  handleContentBlur,
  titleInvalid,
  contentInvalid,
  nicknameInvalid,
  handleSubmit,
  onRatingChange,
  setOpenModal
}) {
  const dialog = useRef()

  useImperativeHandle(ref, () => {
    return {
      open() {
        setOpenModal(true)
        dialog.current.showModal()
      },
      close() {
        setOpenModal(false)
        dialog.current.close()
      }
    }
  })

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(event.current)
      if (dialog.current
        && event.target === dialog.current) {
          setOpenModal(false)
        dialog.current.close()
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <dialog ref={dialog} className={classes.container}>
      <div className={classes.header}>
        <div className={classes.text}>
          Product Review
        </div>
        <div className={classes.closeButton}>
          <form method="dialog">
            <button onClick={() => setOpenModal(false)} className={classes.button}><Close /></button>
          </form>
        </div>
      </div>
      <div className={classes.form}>
        <div className={classes.desc}>
          <img src={imgSrc} alt="" />
          <p>{title}</p>
        </div>
        <div className={classes.starRating}>
          <p className={classes.starRatingTitle}>Star Rating</p>
          <div className={classes.stars}>
            <StarRatingClicking onRatingChange={onRatingChange}/>
          </div>
          <div className={classes.starRatingInstruction}><p>Please choose a rating from 1 to 5</p> <Star sx={{ fontSize: '18px', color: 'gold' }} /></div>
        </div>
        <div className={classes.ratingForm}>
          <div className={classes.ratingFormTitleAndInstructions}>
            <p className={classes.ratingFormTitle}>Your Review</p>
            <p className={classes.titleInstruction}>
              Please write the title of your product review briefly and concisely, so that it captures the essence of the product.
            </p>
            <p className={classes.contentInstruction}>
              In the product review, you can elaborate on your experiences with the product in detail.
            </p>
          </div>

          <form onSubmit={handleSubmit} action="">
            <div className={classes.formWrapper}>
              <Input type="text"
                containerClass={classes.inputContainer}
                wrapperClass={`${classes.inputWrapper} ${titleInvalid && classes.redBorder}`}
                errorClass={classes.error}
                componentType="input"
                placeholder="Title of your review"
                className={`${classes.title}`}
                id="title"
                name="title"
                onChange={handleTitleChange}
                onBlur={handleTitleBlur}
                error={titleInvalid && "Please provide the title of your review"} />
              <Input type="text"
                containerClass={classes.textareaContainer}
                wrapperClass={`${classes.textareaWrapper} ${contentInvalid && classes.redBorder}`}
                errorClass={classes.error}
                componentType="textarea"
                placeholder="Content of your review"
                className={`${classes.content}`}
                id="content"
                name="content"
                onChange={handleContentChange}
                onBlur={handleContentBlur}
                error={contentInvalid && "Please provide the content of your review"} />
              <Input type="text"
                containerClass={classes.inputContainer}
                wrapperClass={`${classes.inputWrapper} ${nicknameInvalid && classes.redBorder}`}
                errorClass={classes.error}
                componentType="input"
                placeholder="Your nickname"
                className={`${classes.title}`}
                id="title"
                name="title"
                onChange={handleTitleChange}
                onBlur={handleTitleBlur}
                error={nicknameInvalid && "Please provide the title of your review"} />
            </div>
            <button className={classes.submitButton}>Submit Review</button>
          </form>
        </div>
      </div>
      <div className={classes.footer}></div>
    </dialog>
  )
}
