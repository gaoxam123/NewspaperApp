import "./sidebar.css"
import React from 'react'
import { Close } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { SidebarData } from "./sidebardata"
import { Button } from "@mui/material"
import { useState } from "react"
import SidebarWindow from "./sidebarwindow"

function Sidebar({ active, toggle, closeSidebarWindow }) {
    const [sidebarWindowVisible, setSidebarWindowVisible] = useState(false)
    const [currentButton, setCurrentButton] = useState({
        title: "",
        content: ""
    })
    function handleMouseEnter() {
        setSidebarWindowVisible(prev => !prev)
    }
    return (
        <div className="sidebarcontainer">
            <aside className={active ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <Button className="close-button" onClick={toggle}><Close /></Button>
                        </Link>
                    </li>
                    {SidebarData.map((data, index) =>
                        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter} className={data.cName} key={index}>
                            <Link onClick={toggle} to={data.path}>{data.icon} <span>{data.title}</span> </Link>
                        </li>
                    )}
                </ul>
            </aside>
            <div className="sidebarwindow">
                <SidebarWindow closeSidebarWindow={closeSidebarWindow} visible={sidebarWindowVisible} title={currentButton.title}/>
            </div>
        </div>
    )
}

export default Sidebar