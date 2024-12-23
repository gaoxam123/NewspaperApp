import "./navbar.css"
import { Search, ShoppingCart, Menu } from "@mui/icons-material"
import { Avatar, IconButton, Button } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
import Sidebar from "../sidebar/sidebar"

export default function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    function handleClick() {
        setSidebar(prev => !prev)
    }
    return (
        <>
            <div className="navbar-container">
                <div className="upper">
                    <div className="navbar-upper-left">
                        <img src="logo.jpg" />
                    </div>
                    <div className="navbar-upper-center">
                        <div className="searchbar">
                            <IconButton className="icon-button"><Search /></IconButton>
                            <input placeholder="What are you looking for?" className="searchInput" />
                        </div>
                    </div>
                    <div className="search-nearby-store">
                        <Button className="custom-button">
                            <div className="bigger">My Store</div>
                            <div className="smaller">No Store chosen</div>
                        </Button>
                    </div>
                    <div className="user-icon">
                        <IconButton><Avatar alt="Name" src="" /></IconButton>
                    </div>
                    <div className="wish-list">
                        <IconButton><ShoppingCart /></IconButton>
                    </div>
                </div>
                <div className="lower">
                    <div className="navbar-menu">
                        <ul className="category-list">
                            <li><Button onClick={handleClick}><Menu />Menu</Button></li>
                            <li><Link className="navbar-link">Category A</Link></li>
                            <li><Link className="navbar-link">Category A</Link></li>
                            <li><Link className="navbar-link">Category A</Link></li>
                            <li><Link className="navbar-link">Category A</Link></li>
                            <li><Link className="navbar-link">Category A</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={"overlay " + (sidebar ? "active" : null)}></div>
            <Sidebar active={sidebar} toggle={handleClick} />
        </>
    )
}