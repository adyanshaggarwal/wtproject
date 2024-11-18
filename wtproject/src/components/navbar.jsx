import "./styles.css"
import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <div id="navBar" >
            <div id="navContent">
                <button id="navBut" >Home</button>
                <button id="navBut" >Notification</button>
                <button id="navBut" >Chats</button>
                <button id="navBut" >Menu</button>
            </div>
        </div>
    )

}