import React, {useState} from "react";
import './Nav.css'
import { TiThMenuOutline } from "react-icons/ti";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-scroll";

function Nav() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
        <div className="header">
            <nav className="navbar">
                <a href="/" className="logo">
                    <h2>LH</h2>
                </a>
                <div className="menu-bars" onClick={handleClick}>
                    {click ? (<IoMdCloseCircle />) : (<TiThMenuOutline />)}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="about" spy={true} smooth={true} offset={-44} duration={500} onClick={closeMenu}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="work" spy={true} smooth={true} offset={-44} duration={500} onClick={closeMenu}>Work</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )

}

export default Nav


    // const [dropdown, setDropdown] = useState(false);
    // const showDropdown = () => setDropdown(!dropdown);

    // return (
    //     <>
    //         <div className={dropdown ? "nav-container-active" : "nav-container"}>
    //             <div className={dropdown ? "logo-container-active" : "logo-container"}>
    //                 <h2>LH</h2>
    //             </div>
    //             <div className={dropdown ? "link-container-active" : "link-container"}>
    //                 {NavbarData.map((link, index) => {
    //                     return (
    //                         <li key={index} className={link.className}>
    //                             <Link to={link.path}>
    //                                 <span>{link.title}</span>
    //                             </Link>
    //                         </li>
    //                     )
    //                 })}
    //             </div>
    //         </div>
    //         <div>
    //             <Link to="#" className={dropdown ? "menu-up" : "menu-up-active"}>
    //                 <ImMenu4 onClick={showDropdown}/>
    //             </Link>
    //         </div>
    //         <div>
    //             <Link to="#" className={dropdown ? "menu-down-active" : "menu-down"}>
    //                 <ImMenu3 onClick={showDropdown}/>
    //             </Link>
    //         </div>
    //     </>
    // )