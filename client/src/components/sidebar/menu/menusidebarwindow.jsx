import { useEffect, useState } from "react"
import "./menusidebarwindow.css"
export default function SidebarWindow({ title, onMenuSidebarLink, menuSidebar }) {
    const [onMenuSidebarWindow, setOnMenuSidebarWindow] = useState(false)
    const [onceEnter, setOnceEnter] = useState(false)
    useEffect(() => {
        if (onMenuSidebarLink && menuSidebar) {
            setOnMenuSidebarWindow(true)
        }
        else if(!menuSidebar) {
            setOnMenuSidebarWindow(false)
        }
    }, [onMenuSidebarLink, menuSidebar])
    const handleEnter = () => {
        setOnceEnter(true)
        setOnMenuSidebarWindow(true)
    }
    const handleLeave = () => {
        if (onceEnter) {
            setOnMenuSidebarWindow(false)
            setOnceEnter(false)
        }
    }
    return (
        <>
            {(onMenuSidebarWindow) && (
                <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="popup">
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