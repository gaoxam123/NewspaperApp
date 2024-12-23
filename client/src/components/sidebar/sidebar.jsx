import "./sidebar.css"
import React from 'react'
import { Close } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { SidebarData } from "./sidebardata"
import { Button } from "@mui/material"

function Sidebar({ active, toggle }) {
    return (
        <aside className={active ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items">
                <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                        <Button onClick={toggle}><Close /></Button>
                    </Link>
                </li>
                {SidebarData.map((data, index) =>
                    <li className={data.cName} key={index}>
                        <Link onClick={toggle} to={data.path}>{data.icon} <span>{data.title}</span> </Link>
                    </li>
                )}
            </ul>
        </aside>
    )
}

export default Sidebar