import "./sidebarwindow.css"
import { useState } from "react"
export default function SidebarWindow({ visible, title, closeSidebarWindow }) {
    const [hover, setHover] = useState(false)
    return (
        <>
            {((visible || hover) && !closeSidebarWindow) && (
                <div onMouseEnter={() => {setHover(true)}} onMouseLeave={() => {setHover(false)}} className="popup">
                    <p>{title}</p>
                    <ul>
                        <li>Product 1</li>
                        <li>Product 2</li>
                        <li>Product 3</li>
                    </ul>
                </div>
            )}
        </>
    )
}