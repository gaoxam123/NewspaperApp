import "./StoreAddress.css"
import { useState } from "react"

export default function StoreAddress({ title, address, isOpen }) {
    const [showMore, setShowMore] = useState(false)
    function handleClick() {
        setShowMore(prev => !prev)
    }
    return (
        <div className="store-address-container">
            <h3>{title}</h3>
            <span>{address}</span>
            {isOpen ? <span>Open</span> : <span>Close</span>}
            {showMore && <span>Monday to Sunday</span>}
            {!showMore && <span onClick={handleClick}><div className=""></div><div className="">See more</div></span>}
            {showMore && <span onClick={handleClick}><div className=""></div><div className="">Show less</div></span>}
            <span>To Website</span>
        </div>
    )
}
