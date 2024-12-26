import "./RegisterLogin.css"
import { Link } from "react-router-dom"
import { PermIdentity, Password, Email } from "@mui/icons-material"
import { useRef, useState } from "react"

export default function Register({ login }) {
    const [emailIsInvalid, setEmailIsInvalid] = useState(false)
    const [passwordIsInvalid, setPasswordIsInvalid] = useState(false)
    const [usernameIsInvalid, setUsernameIsInvalid] = useState(false)
    const username = useRef()
    const password = useRef()
    const email = useRef()
    const handleSubmit = (event) => {
        event.preventDefault()
        const enteredUsername = username.current.value
        const enteredPassword = password.current.value
        const enteredEmail = email.current.value

        const emailIsValid = enteredEmail.includes('@')
        const passwordIsValid = enteredPassword.length >= 8
        const usernameIsValid = enteredUsername.length > 0

        let check = true

        if (!usernameIsValid) {
            setUsernameIsInvalid(true)
            check = false
        }
        else {
            setUsernameIsInvalid(false)
        }

        if (!emailIsValid) {
            setEmailIsInvalid(true)
            check = false
        }
        else {
            setEmailIsInvalid(false)
        }

        if (!passwordIsValid) {
            setPasswordIsInvalid(true)
            check = false
        }
        else {
            setPasswordIsInvalid(false)
        }

        if (!check) {
            return
        }
    }

    const handleReset = () => {
        username.current.value = ""
        password.current.value = ""
        email.current.value = ""
        setUsernameIsInvalid(false)
        setPasswordIsInvalid(false)
        setEmailIsInvalid(false)
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
                        <div className="input-wrapper">
                            <label htmlFor="username"><PermIdentity /></label>
                            <input type="text" className="username" id="username" name="username" ref={username} />
                        </div>
                        <div className="control-error">{usernameIsInvalid && <p>Username is required</p>}</div>
                    </div>
                    <div className="input-container">
                        <div className="input-wrapper">
                            <label htmlFor="password"><Password /></label>
                            <input type="password" className="password" id="password" name="password" ref={password} />
                        </div>
                        <div className="control-error">{passwordIsInvalid && <p>Password must contain at least 8 characters</p>}</div>
                    </div>
                    {!login && <div className="input-container">
                        <div className="input-wrapper">
                            <label htmlFor="email"><Email /></label>
                            <input type="text" className="email" id="email" name="email" ref={email} />
                        </div>
                        <div className="control-error">{emailIsInvalid && <p>Invalid email</p>}</div>
                    </div>}
                    <div className="link-and-button">
                        {!login ? <div className="to-login"><span><Link to="/login">Already have an account?</Link></span></div> :
                            <div className="to-login"><span><Link to="/register">No account yet?</Link></span></div>}
                        {login && <div className="forgot-password"><span><Link>Forgot password?</Link></span></div>}
                        <div className="buttons">
                            <button type="button" onClick={handleReset} className="register-login-button">Reset</button>
                            <button className="register-login-button">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
