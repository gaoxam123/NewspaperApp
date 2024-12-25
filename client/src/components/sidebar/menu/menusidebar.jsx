import "./menusidebar.css"
import React from 'react'
import { Close } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { MenuSidebarData } from "./menusidebardata"
import { Button } from "@mui/material"
import { useState } from "react"
import SidebarWindow from "./menusidebarwindow"

function MenuSidebar({ active, toggle, onOutlay }) {
    const [onMenuSidebar, setOnMenuSidebar] = useState(false)
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
        <div onMouseEnter={() => {setOnMenuSidebar(true)}} onMouseLeave={() => {setOnMenuSidebar(false)}} className="menu-sidebarcontainer">
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
                <SidebarWindow onMenuSidebarLink={onMenuSidebarLink} onMenuSidebar={onMenuSidebar} onOutlay={onOutlay} title={currentButton.title} />
            </div>
        </div>
    )
}

export default MenuSidebar