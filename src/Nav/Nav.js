import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Nav.css'
import { ImMenu3, ImMenu4 } from "react-icons/im";
import {NavbarData} from "./NavData"

function Nav() {

    const [dropdown, setDropdown] = useState(false);
    const showDropdown = () => setDropdown(!dropdown);

    return (
        <>
            <div className={dropdown ? "nav-container-active" : "nav-container"}>
                <div className={dropdown ? "logo-container-active" : "logo-container"}>
                    <h2>L</h2>
                </div>
                <div className={dropdown ? "link-container-active" : "link-container"}>
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
            <nav>
                <ul className="nav-menu-items"></ul>
                <li className="navbar-toggle">
                    <Link to="#" className={dropdown ? "menu-up" : "menu-up-active"}>
                        <ImMenu4 onClick={showDropdown}/>
                    </Link>
                </li>
            </nav>
            <div className="nav">
                <Link to="#" className={dropdown ? "menu-down-active" : "menu-down"}>
                    <ImMenu3 onClick={showDropdown}/>
                </Link>
            </div>
        </>
    )
}

export default Nav
