import "./menusidebar.css"
import React from 'react'
import { Close } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { MenuSidebarData } from "./menusidebardata"
import { Button } from "@mui/material"
import { useState } from "react"
import SidebarWindow from "./menusidebarwindow"

function MenuSidebar({ active, toggle, menuSidebar }) {
    const [onMenuSidebarLink, setOnMenuSidebarLink] = useState(false)
    const [currentButton, setCurrentButton] = useState({
        title: "",
        content: ""
    })
    function handleMouseEnterLi(title, content) {
        setCurrentButton({ title, content })
        setOnMenuSidebarLink(prev => !prev)
    }
    return (
        <div className="menu-sidebarcontainer">
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
                <SidebarWindow onMenuSidebarLink={onMenuSidebarLink} title={currentButton.title} menuSidebar={menuSidebar} />
            </div>
        </div>
    )
}

export default MenuSidebar