import React from 'react';

export default function Feed({ feedItems, addFeedItem }) {
    return (
        <div id="feed" style={{
            minHeight: "150px",
            width: "900px",
            flex: 1,
            overflowY: 'auto',
            maxHeight: '100%', 
            marginBottom: "100px",
            padding: '20px',
        }}>
            <button
                onClick={addFeedItem}
                style={{
                    display: "block",
                    margin: "10px auto",
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                    backgroundColor: "#88D4AB",
                }}
            >
                Add Feed Item
            </button>

            {feedItems.map((item) => (
                <div 
                    id="post"
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
    );
}