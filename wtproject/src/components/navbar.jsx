import "./styles.css"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <div id="navBar" style={{
            display: 'flex',
            justifyContent: 'space-between', // Distribute space
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            height: '70px',
            width: '99%',
            margin: '20px',
            padding: '5px',
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: '20px',
                fontWeight: 'bold',
                fontSize: '24px',
                color: 'white',
                width: '200px' // Give it a fixed width
            }}>
                PeerNav
            </div>

            <div className="search-container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1, // This will push the search bar to the center
                margin: '0 20px',
                marginRight: "120px"
            }}>
                <div style={{
                    position: 'relative',
                    width: '550px', // Match feed container width
                }}>
                    <input
                        type="text"
                        placeholder="Search PeerNav"
                        style={{
                            width: '100%',
                            padding: '10px 40px 10px 15px',
                            borderRadius: '20px',
                            border: 'none',
                            backgroundColor: '#252b3e',
                            color: 'white',
                            fontSize: '16px'
                        }}
                    />
                    <button style={{
                        position: 'absolute',
                        right: '5px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        color: 'white',
                        opacity: 0.6,
                        cursor: 'pointer'
                    }}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                marginRight: '20px',
                width: '200px', // Give it a fixed width
                justifyContent: 'flex-end' // Align items to the right
            }}>
                <div id="navContent" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '20px',
                    marginRight: '20px'
                }}>
                    <button id="navBut">Home</button>
                    <button id="navBut">Chats</button>
                    <button id="navBut">Notifications</button>
                </div>

                <button style={{
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '24px',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </div>
    )
}