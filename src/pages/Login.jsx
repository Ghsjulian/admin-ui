import React, { useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const msgRef = useRef(null);
    const checkEmail = value => {
        if (value === "") {
            return "Email Is Required";
        } else if (
            !value.includes("@") ||
            !value.includes(".com") ||
            !value.includes("gmail")
        ) {
            return "Invalid Email Address";
        } else if (
            value.includes("%") ||
            value.includes("+") ||
            value.includes("-") ||
            value.includes("?") ||
            value.includes("{") ||
            value.includes("}") ||
            value.includes("(") ||
            value.includes(")") ||
            value.includes("[") ||
            value.includes("]") ||
            value.includes("<") ||
            value.includes(">") ||
            value.includes("=") ||
            value.includes("|") ||
            value.includes("!") ||
            value.includes(":") ||
            value.includes("'") ||
            value.includes("#") ||
            value.includes("_") ||
            value.includes("*") ||
            value.includes("$") ||
            value.includes(";") ||
            value.includes(",")
        ) {
            return "Invalid Email Address";
        } else if (
            value.includes("sexy") ||
            value.includes("sex") ||
            value.includes("fuck") ||
            value.includes("fucking") ||
            value.includes("dick") ||
            value.includes("pussy") ||
            value.includes("stupid") ||
            value.includes("nonsense") ||
            value.includes("romantic") ||
            value.includes("romance") ||
            value.includes("love") ||
            value.includes("you") ||
            value.includes("hate") ||
            value.includes("hacker") ||
            value.includes("hacking") ||
            value.includes("hack") ||
            value.includes("black") ||
            value.includes("girl") ||
            value.includes("boy") ||
            value.includes("wife") ||
            value.includes("dangerous") ||
            value.includes("player") ||
            value.includes("sucks")
        ) {
            return "Bad String Or Words";
        } else {
            return true;
        }
    };
    const Login = e => {
        e.preventDefault();
        const check = checkEmail(email.trim());
        if (typeof check === "string") {
            msgRef.current.classList.remove("success");
            msgRef.current.classList.add("error");
            msgRef.current.style.display = "block";
            msgRef.current.textContent = check;
        } else {
            if (password.trim() === "") {
                msgRef.current.classList.remove("success");
                msgRef.current.classList.add("error");
                msgRef.current.style.display = "block";
                msgRef.current.textContent = "Password Is Required";
            } else if (password.trim().length < 6) {
                msgRef.current.classList.remove("success");
                msgRef.current.classList.add("error");
                msgRef.current.style.display = "block";
                msgRef.current.textContent = "password must be at 6 characters";
            } else {
                msgRef.current.classList.remove("error");
                msgRef.current.classList.add("success");
                msgRef.current.style.display = "block";
                msgRef.current.textContent = "Axios Server Side Here";
            }
        }
        setTimeout(() => {
        msgRef.current.style.display = "none";
    }, 3000);
    };
    
    return (
        <>
            <div className="login">
                <form>
                    <h2>Admin Login</h2>
                    <span ref={msgRef} style={{ display: "none" }}></span>
                    <input
                        type="email"
                        placeholder="Enter Admin Email"
                        onChange={e => {
                            setEmail(e.target.value);
                        }}
                        value={email}
                    />
                    <input
                        type="password"
                        placeholder="Enter Admin Password"
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                        value={password}
                    />
                    <button
                        onClick={e => {
                            Login(e);
                        }}
                        className="login-btn"
                    >
                        Login Now
                    </button>
                </form>
            </div>
        </>
    );
};

export default Login;
