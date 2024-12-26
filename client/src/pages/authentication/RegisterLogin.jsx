import "./RegisterLogin.css"
import { Link } from "react-router-dom"
import { PermIdentity, Password, Email } from "@mui/icons-material"
import { Button } from "@mui/material"

export default function Register({ login }) {
    return (
        <div className="container">
            <div className="img-container">
                <img src="logo.jpg" alt="" />
            </div>
            <div className="text"><h2>{login ? "Login" : "Sign Up"}</h2></div>
            <div className="form-container">
                <form action="" className="form">
                    <div className="input-container">
                        <label htmlFor="username"><PermIdentity /></label>
                        <input type="text" className="username" id="username" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password"><Password /></label>
                        <input type="password" className="password" id="password" />
                    </div>
                    {!login && <div className="input-container">
                        <label htmlFor="email"><Email /></label>
                        <input type="text" className="email" id="email" />
                    </div>}
                </form>
                {!login ? <div className="to-login"><span><Link to="/login">Already have an account?</Link></span></div> :
                    <div className="to-login"><span><Link to="/register">No account yet?</Link></span></div>}
                {!login && <div className="forgot-password"><span><Link>Forgot password?</Link></span></div>}
                <Button variant="contained" color="info" sx={{ marginTop: '20px' }}>Submit</Button>
            </div>
        </div>
    )
}
