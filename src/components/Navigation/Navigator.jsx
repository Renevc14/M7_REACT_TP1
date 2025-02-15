import { Link } from "react-router";
import React from "react";
import Logout from "../Logout/Logout.jsx";
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"

const Navigator = () => {
    const useLogin = useSelector((state) => state.formRed.loginForm)
    const [showLogout, setLogout] = useState(false)
    useEffect(() => {

        setLogout(useLogin.isLoggedIn)
    }, [useLogin.isLoggedIn])

    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/counter" className="nav-link">Counter</Link>
            <Link to="/think" className="nav-link">Think</Link>
            <Link to="/product" className="nav-link">Product</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/dictionary" className="nav-link">Dictionary</Link>
            <Logout visible={showLogout} userName={`Bienvenido ${useLogin.username} | ${useLogin.email}`} />
        </nav >
    )
}
export default Navigator;