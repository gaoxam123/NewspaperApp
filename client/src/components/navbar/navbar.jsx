import "./navbar.css"
import { Search, ShoppingCart, Menu } from "@mui/icons-material"
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { IconButton, Button } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
import MenuSidebar from "../sidebar/menu/menusidebar"
import AccountSidebar from "../sidebar/account/accountsidebar"
import StoreSidebar from "../sidebar/store/storesidebar"

export default function Navbar() {
  const [menuSidebar, setMenuSidebar] = useState(false)
  function handleMenuClick() {
    setMenuSidebar(prev => !prev)
  }
  const [accountSidebar, setAccountSidebar] = useState(false)
  function handleAccountClick() {
    setAccountSidebar(prev => !prev)
  }
  const [storeSidebar, setStoreSidebar] = useState(false)
  function handleStoreClick() {
    setStoreSidebar(prev => !prev)
  }
  function closeAllSidebars() {
    setAccountSidebar(false)
    setMenuSidebar(false)
    setStoreSidebar(false)
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
              <IconButton sx={{ borderTopRightRadius: 0, borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', borderBottomRightRadius: 0 }} className="icon-button"><Search /></IconButton>
              <input placeholder="What are you looking for?" className="searchInput" />
            </div>
          </div>
          <div className="search-nearby-store">
            <Button onClick={handleStoreClick} className="custom-button">
              <div className="button-content">
                <div className="bigger">My Store</div>
                <div className="smaller">No Store chosen</div>
              </div>
              <div className="button-icon"><KeyboardArrowDownIcon /></div>
            </Button>
          </div>
          <div className="user-icon">
            <IconButton onClick={handleAccountClick}><PermIdentityIcon sx={{ fontSize: 35, color: 'black' }} alt="Name" src="" /></IconButton>
          </div>
          <div className="wish-list">
            <IconButton><ShoppingCart sx={{ fontSize: 35, color: 'black' }} /></IconButton>
          </div>
        </div>
        <div className="lower">
          <div className="navbar-menu">
            <Button onClick={handleMenuClick}><Menu />Menu</Button>
            <ul className="category-list">
              <li><Link className="navbar-link">Category A</Link></li>
              <li><Link className="navbar-link">Category A</Link></li>
              <li><Link className="navbar-link">Category A</Link></li>
              <li><Link className="navbar-link">Category A</Link></li>
              <li><Link className="navbar-link">Category A</Link></li>
              <li><Link className="navbar-link">Category A</Link></li>
              <li><Link className="navbar-link">Category A</Link></li>
              <li><Link className="navbar-link">Category A</Link></li>
              <li><Link className="navbar-link">Category A</Link></li>
              <li><Link className="navbar-link">Category A</Link></li>
            </ul>
          </div>
          <div className="arrow-button">
            <IconButton><KeyboardArrowRightIcon sx={{ color: 'white' }} /></IconButton>
          </div>
        </div>
      </div>
      <div onClick={closeAllSidebars} className={"overlay " + ((menuSidebar || accountSidebar || storeSidebar) ? "active" : null)}></div>
      <MenuSidebar active={menuSidebar} toggle={handleMenuClick} />
      <AccountSidebar active={accountSidebar} toggle={handleAccountClick}/>
      <StoreSidebar active={storeSidebar} toggle={handleStoreClick}/>
    </>
  )
}