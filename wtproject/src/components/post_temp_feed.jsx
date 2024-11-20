import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faTrash, faHeart, faShare, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import "./stylesPost.css";

export default function PostFeed({
    username,
    content,
    profilePic,
    initialLikeCount,
    initialDislikeCount,
    initialSavedStatus,
    timestamp,
    tags = ["webdev","testing"] 
}) {
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [saved, setSaved] = useState(initialSavedStatus);
    const [likeCount, setLikeCount] = useState(initialLikeCount);
    const [dislikeCount, setDislikeCount] = useState(initialDislikeCount);

    const formatTimestamp = (timestamp) => {
        const postDate = new Date(timestamp); 
        const timeDiff = Math.floor((new Date() - postDate) / 1000); // Calculate the time difference
    
        if (timeDiff < 60) {
            return `${timeDiff} second${timeDiff === 1 ? '' : 's'} ago`;
        } else if (timeDiff < 3600) {
            const minutes = Math.floor(timeDiff / 60);
            return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
        } else if (timeDiff < 86400) {
            const hours = Math.floor(timeDiff / 3600);
            return `${hours} hour${hours === 1 ? '' : 's'} ago`;
        } else if (timeDiff < 2592000) {
            const days = Math.floor(timeDiff / 86400);
            return `${days} day${days === 1 ? '' : 's'} ago`;
        } else {
            const months = Math.floor(timeDiff / 2592000);
            return `${months} month${months === 1 ? '' : 's'} ago`;
        }
    };
    
    const toggleLike = () => {
        if (!liked && disliked) {
            setDisliked(false);
            setDislikeCount(dislikeCount - 1);
        }
        setLiked(!liked);
        setLikeCount((prevCount) => (liked ? prevCount - 1 : prevCount + 1));
    };

    const toggleDislike = () => {
        if (!disliked && liked) {
            setLiked(false);
            setLikeCount(likeCount - 1);
        }
        setDisliked(!disliked);
        setDislikeCount((prevCount) => (disliked ? prevCount - 1 : prevCount + 1));
    };

    const toggleSaved = () => {
        setSaved(!saved);
    };

    const renderTags = () => {
        return tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="tag">#{tag}</span>
        ));
    };

    return (
        <div className="post-feed">
            <div className="profile-picture">
                <img src={profilePic} alt="Profile" />
            </div>
            <div className="content-section">
                <div className="header">
                    <strong>{username}</strong>
                    <span className="username">@{username}</span>
                    <span className="timestamp">{formatTimestamp(timestamp)}</span>
                    <button onClick={toggleSaved} className={saved ? "saved" : ""} >
                        <FontAwesomeIcon icon={faBookmark} />
                    </button>
                </div>
                <p className="tweet-content">{content}</p>
                {tags.length > 0 && (
                    <div className="tags-section">
                        {renderTags()}
                    </div>
                )}
                <div className="footer-icons">
                    <button onClick={toggleDislike} className={disliked ? "disliked" : ""}>
                        <FontAwesomeIcon icon={faThumbsDown}  /> <span>{dislikeCount}</span>
                    </button>
                    <button onClick={toggleLike} className={liked ? "liked" : ""}>
                        <FontAwesomeIcon icon={faHeart} /> <span>{likeCount}</span>
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faShare} />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </div>
        </div>
    );
}


PostFeed.defaultProps = {
    username: "JohnDoe",
    content: "This is a default post content.",
    profilePic: "https://via.placeholder.com/50",
    initialLikeCount: 100,
    initialDislikeCount: 21,
    initialSavedStatus: false,
    timestamp: new Date().toISOString()
};