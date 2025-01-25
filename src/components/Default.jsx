import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import {useState} from "react";
import Logo from "./Home/Logo.jsx";
import Footer from "./Home/Footer";
import Body from "./Home/Body";


const Default = () => {

    return (
        <div>
            <Logo/>
            <Body/>
            <Footer/>
        </div>
    );
};

export default Default;