import "./RegisterLogin.css"
import { Link } from "react-router-dom"
import { PermIdentity, Password, Email } from "@mui/icons-material"
import { useRef } from "react"
import CustomButton from "../../components/customButton/CustomButton"

export default function Register({ login }) {
    const username = useRef()
    const password = useRef()
    const email = useRef()
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(username.current.value, password.current.value, email.current.value)
    }
    return (
        <div className="container">
            <div className="img-container">
                <img src="logo.jpg" alt="" />
            </div>
            <div className="text"><h2>{login ? "Login" : "Sign Up"}</h2></div>
            <div className="form-container">
                <form onSubmit={handleSubmit} action="" className="form">
                    <div className="input-container">
                        <label htmlFor="username"><PermIdentity /></label>
                        <input type="text" className="username" id="username" name="username" ref={username} />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password"><Password /></label>
                        <input type="password" className="password" id="password" name="password" ref={password} />
                    </div>
                    {!login && <div className="input-container">
                        <label htmlFor="email"><Email /></label>
                        <input type="text" className="email" id="email" name="email" ref={email} />
                    </div>}
                    <div className="link-and-button">
                        {!login ? <div className="to-login"><span><Link to="/login">Already have an account?</Link></span></div> :
                            <div className="to-login"><span><Link to="/register">No account yet?</Link></span></div>}
                        {login && <div className="forgot-password"><span><Link>Forgot password?</Link></span></div>}
                        <CustomButton>Submit</CustomButton>
                    </div>
                </form>
            </div>
        </div>
    )
}
