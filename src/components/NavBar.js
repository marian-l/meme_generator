import React from "react";
import BobZiroll from "../images/BobZiroll.jpeg"

export default function NavBar() {
    return (
        <div className="navbar">
            <nav> 
                <img src={BobZiroll} alt="Funney." className="navbar--icon"/>
                <h3 className="navbar--logo_text">Bob Ziroll Course</h3>
                <h4 className="navbar--title">React Course - Project 3</h4>
            </nav>
        </div>
    )
}