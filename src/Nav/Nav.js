import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Nav.css'
import { ImMenu3, ImMenu4 } from "react-icons/im";
import {NavbarData} from "./NavData"

function Nav() {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className={sidebar ? "nav-container active" : "nav-container"}>
                <div className="logo-container">
                    <h2>L</h2>
                </div>
                <div className="link-container">
                    {NavbarData.map((link, index) => {
                        return (
                            <li key={index} className={link.className}>
                                <Link to={link.path}>
                                    <span>{link.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </div>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items"></ul>
                <li className="navbar-toggle">
                    <Link to="#" className="menu-up">
                        <ImMenu4/>
                    </Link>
                </li>
            </nav>
            <div className="nav">
                <Link to="#" className="menu-down">
                    <ImMenu3 onClick={showSidebar}/>
                </Link>
            </div>
        </>
    )
}

export default Nav
