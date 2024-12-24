import "./menusidebar.css"
import React from 'react'
import { Close } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { MenuSidebarData } from "./menusidebardata"
import { Button } from "@mui/material"
import { useState } from "react"
import SidebarWindow from "./menusidebarwindow"

function MenuSidebar({ active, toggle, closeSidebarWindow }) {
    const [sidebarWindowVisible, setSidebarWindowVisible] = useState(false)
    const [currentButton, setCurrentButton] = useState({
        title: "",
        content: ""
    })
    const [hover, setHover] = useState(false)
    function handleMouseEnterLi(title, content) {
        setSidebarWindowVisible(prev => !prev)
        setCurrentButton({ title, content })
    }
    return (
        <div onMouseEnter={() => {setHover(true)}} onMouseLeave={() => {setHover(false)}} className="sidebarcontainer">
            <aside className={active ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <Button className="close-button" onClick={toggle}><Close /></Button>
                        </Link>
                    </li>
                    {MenuSidebarData.map((data, index) =>
                        <li onMouseEnter={() => handleMouseEnterLi(data.title, data.content)} onMouseLeave={() => handleMouseEnterLi(data.title, data.content)} className={data.cName} key={index}>
                            <Link onClick={toggle} to={data.path}>{data.icon} <span>{data.title}</span> </Link>
                        </li>
                    )}
                </ul>
            </aside>
            <div className="sidebarwindow">
                <SidebarWindow hover={hover} closeSidebarWindow={closeSidebarWindow} visible={sidebarWindowVisible} title={currentButton.title} />
            </div>
        </div>
    )
}

export default MenuSidebar