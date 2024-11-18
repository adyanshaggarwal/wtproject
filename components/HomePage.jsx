import ProfileMenu from "./profile_menu";
import Navbar from "./navbar";
import React, { useState } from "react";

// style={{display:"flex", flex}}


export default function HomePage() {

    const [feedItems, setFeedItems] = useState([]); // State to hold the list of feed items
    const widths = ["40%", "50%", "60%", "70%"];
   
    const addFeedItem = () => {
        setFeedItems((prevItems) => [
            ...prevItems,
            { id: prevItems.length + 1, text: `Feed Item ${prevItems.length + 1}` }
        ]);
    };



    return (
        <div className="homePage" >
            <Navbar />
            <div className="pageContent" style={{
                display: "flex",
                flexDirection: "row",
                height: "100%"

            }}>

                <ProfileMenu />

                <div id="feed" style={{
                    minHeight: "150px",
                    width: "700px",
                }}>

                    <button
                        onClick={addFeedItem}
                        style={{
                            display: "block",
                            margin: "10px auto",
                            padding: "10px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                        }}
                    >
                        Add Feed Item
                    </button>

                    {feedItems.map((item) => (
                        <div id="post"
                            key={item.id}
                            style={{
                                
                                width: "100%",
                                height: "100px",
                                margin: "10px 0",
                                
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "1px solid #ddd",
                            }}
                        >
                            <p>{item.text}</p>
                        </div>
                    ))}                   
            </div>

            <div id="recentTags" style={{
                height: "700px",
                width: "320px",
                position: "sticky",
                top: "80px"
            }}>
                <p>
                    # tag 1
                </p>
                <p>
                    # tag 2
                </p>
                <p>
                    # tag
                </p>

            </div>
        </div>

        </div >
    )

}