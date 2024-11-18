import "./styles.css"

export default function ProfileMenu() {
    return (
        <div id="profileContent" style={{
            height: "340px",
            width: "320px",
        }}>
            <img id="profileImage" src="https://i.imgur.com/yXOvdOSs.jpg" alt="No image" />
            <p>
                Username, Sem, Branch
            </p>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <p>
                    followers 200
                </p>
                {/* <br /> */}
                <p>
                    following 300
                </p>
            </div>
        </div>
    )
}