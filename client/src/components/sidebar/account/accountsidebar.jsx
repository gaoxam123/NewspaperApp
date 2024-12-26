import "./AccountSidebar.css"
import { Link } from "react-router-dom"
import CustomButton from "../../customButton/CustomButton"
import { Close, FavoriteBorder, HouseOutlined, ShoppingCartCheckout, Person2Outlined } from "@mui/icons-material"
import { Button } from "@mui/material"

export default function AccountSidebar({ active, toggle }) {
    return (
        <div className="account-sidebarcontainer">
            <aside className={active ? 'nav-account active' : 'nav-account'}>
                <ul className="nav-account-items">
                    <li className="account-toggle">
                        <Link to="#" className="menu-bars">
                            <Button className="close-button" onClick={toggle}><Close /></Button>
                        </Link>
                    </li>
                    <li className="account-buttons">
                        <Link to="/login">
                            <CustomButton className="account-item-button">Login</CustomButton>
                        </Link>
                        <Link to="/register">
                            <CustomButton className="account-item-button">Register</CustomButton>
                        </Link>
                    </li>
                    <li className="account-item">
                        <Link to="#" className="account-item-link">
                            <HouseOutlined className="account-icon" />
                            <span className="account-list-item-text">Account</span>
                        </Link>
                    </li>
                    <li className="account-item">
                        <Link to="#" className="account-item-link">
                            <ShoppingCartCheckout className="account-icon" />
                            <span className="account-list-item-text">My Purchases</span>
                        </Link>
                    </li>
                    <li className="account-item">
                        <Link to="#" className="account-item-link">
                            <FavoriteBorder className="account-icon" />
                            <span className="account-list-item-text">My Wishlist</span>
                        </Link>
                    </li>
                    <hr className="account-hr"/>
                    <li className="account-item">
                        <Link to="#" className="account-item-link">
                            <Person2Outlined className="account-icon" />
                            <span className="account-list-item-text">Guest Checkout</span>
                        </Link>
                    </li>
                </ul>
            </aside>
        </div>
    )
}
