import { useState } from "react"
import "./menusidebarwindow.css"
export default function SidebarWindow({ title, onOutlay, onMenuSidebar, onMenuSidebarLink }) {
    const [onMenuSidebarWindow, setOnMenuSidebarWindow] = useState(false)
    return (
        <>
            {(onMenuSidebarLink || onMenuSidebarWindow) && (
                <div onMouseEnter={() => {setOnMenuSidebarWindow(true)}} onMouseLeave={() => {setOnMenuSidebarWindow(false)}} className="popup">
                    <h2>{title}</h2>
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