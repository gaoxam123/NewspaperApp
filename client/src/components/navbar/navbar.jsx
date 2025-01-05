import "./Navbar.css"
import { Search, ShoppingCart, Menu } from "@mui/icons-material"
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { IconButton, Button } from "@mui/material"
import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import MenuSidebar from "../sidebar/menu/MenuSidebar"
import AccountSidebar from "../sidebar/account/AccountSidebar"
import StoreSidebar from "../sidebar/store/StoreSidebar"

export default function Navbar() {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const listRef = useRef(null);

  const handleScrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollLeft += 100; // Cuộn sang phải 100px
    }
  };

  const handleScrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollLeft -= 100; // Cuộn sang phải 100px
    }
  };

  const handleScroll = () => {
    if (listRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = listRef.current;
      console.log({ scrollLeft, scrollWidth, clientWidth });
      setShowLeftArrow(listRef.current.scrollLeft > 0);
      setShowRightArrow(listRef.current.scrollLeft + listRef.current.clientWidth < listRef.current.scrollWidth - 1);
    }
  }

  useEffect(() => {
    setShowRightArrow(true)
  }, [])

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
          <Button onClick={handleMenuClick}><Menu />Menu</Button>
          {showLeftArrow && (<div className="arrow-button">
            <IconButton onClick={handleScrollLeft}>
              <KeyboardArrowLeftIcon sx={{ color: 'white' }} />
            </IconButton>
          </div>)
          }
          <div className="navbar-menu">
            <ul className="category-list" ref={listRef} onScroll={handleScroll}>
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
          {showRightArrow && (
            <div className="arrow-button">
              <IconButton onClick={handleScrollRight} sx={{ display: showRightArrow ? 'flex' : 'hidden' }}>
                <KeyboardArrowRightIcon sx={{ color: 'white' }} />
              </IconButton>
            </div>
          )}
        </div>
      </div>
      <div onClick={closeAllSidebars} className={"overlay " + ((menuSidebar || accountSidebar || storeSidebar) ? "active" : null)}></div>
      <MenuSidebar active={menuSidebar} toggle={handleMenuClick} menuSidebar={menuSidebar} />
      <AccountSidebar active={accountSidebar} toggle={handleAccountClick} />
      <StoreSidebar active={storeSidebar} toggle={handleStoreClick} />
    </>
  )
}