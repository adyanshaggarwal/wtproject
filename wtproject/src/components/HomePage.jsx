import ProfileMenu from "./profile_menu";
import Navbar from "./navbar";

import Feed from "./Feed";
import React, { useState } from "react";

export default function HomePage() {
    const [feedItems, setFeedItems] = useState([]); 
   
    const addFeedItem = () => {
        setFeedItems((prevItems) => [
            ...prevItems,
            { id: prevItems.length + 1, text: `Feed Item ${prevItems.length + 1}` }
        ]);
    };

    return (
        <div className="homePage" style={{
            height: '100vh', 
            display: 'flex', 
            flexDirection: 'column',
             overflow: 'hidden'
        }}>
            <Navbar />
            <div className="pageContent" style={{
                display: "flex",
                flexDirection: "row",
                height: "100%",
                flex: 1,
            }}>
                <ProfileMenu />

                <Feed
                    feedItems={feedItems} 
                    addFeedItem={addFeedItem} 
                />

                <div id="recentTags" style={{
                    height: "500px",
                    width: "280px",
                    position: "sticky",
                    top: "80px",
                    overflowY: 'auto',
                    maxHeight: '100%',
                }}>
                    <p># tag 1</p>
                    <p># tag 2</p>
                    <p># tag</p>
                </div>
            </div>
        </div>
    );
}