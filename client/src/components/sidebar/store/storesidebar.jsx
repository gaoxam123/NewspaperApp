import "./StoreSidebar.css"
import { Link } from "react-router-dom"
import { Button, IconButton } from "@mui/material"
import { Close, Cancel, Search } from "@mui/icons-material"
import StoreAddress from "./StoreAddress.jsx"

export default function StoreSidebar({ active, toggle }) {
    return (
        <div className="store-sidebarcontainer">
            <aside className={active ? 'nav-store active' : 'nav-store'}>
                <div className="title-and-button">
                    <div className="nav-store-items">
                        <Link to="#" className="close-link">
                            <Button className="close-button" onClick={toggle}><Close /></Button>
                        </Link>
                    </div>
                    <div className="title-and-instruction">
                        <h3>Choose your store</h3>
                        <p>Please provide your post code to show nearby stores. Through this, you can check the product availability in the market.</p>
                    </div>
                </div>
                <div className="store-content">
                    <div className="search-area">
                        <div className="search-input">
                            <IconButton sx={{ borderTopRightRadius: 0, borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', borderBottomRightRadius: 0 }} className="icon-button"><Search /></IconButton>
                            <input placeholder="post code" className="searchInput" />
                            <IconButton sx={{ borderTopRightRadius: '10px', borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: '10px' }} className="icon-button"><Cancel /></IconButton>
                        </div>
                        <div className="search-button">
                            <Button>Search</Button>
                        </div>
                    </div>
                    <div className="address-area">
                        <StoreAddress title="Media Markt" address="Tal 19 - 80331 Munich" isOpen={true} />
                        <StoreAddress title="Media Markt" address="Tal 19 - 80331 Munich" isOpen={true} />
                        <StoreAddress title="Media Markt" address="Tal 19 - 80331 Munich" isOpen={true} />
                        <StoreAddress title="Media Markt" address="Tal 19 - 80331 Munich" isOpen={true} />
                        <StoreAddress title="Media Markt" address="Tal 19 - 80331 Munich" isOpen={true} />
                        <StoreAddress title="Media Markt" address="Tal 19 - 80331 Munich" isOpen={true} />
                    </div>
                    <hr className="store-sidebar-hr"/>
                    <div className="select-button">
                        <Button>Choose Store</Button>
                    </div>
                </div>
            </aside>
        </div>
    )
}
