import React, { useState } from "react";
import "./stylesLogin.css";

export default function LoginMain() {
  const [activeTab, setActiveTab] = useState("login"); 

  return (
    <div id="loginContainer">
      
      <div id="toggleButtons">
        <button
          id="loginBut"
          className={activeTab === "login" ? "active" : ""}
          onClick={() => setActiveTab("login")}
        >
          Login
        </button>
        <button
          id="signupBut"
          className={activeTab === "signup" ? "active" : ""}
          onClick={() => setActiveTab("signup")}
        >
          Sign Up
        </button>
      </div>

      {/* Content changes based on active tab */}
      <div id="formContainer">
        {activeTab === "login" && (
          <div id="login">
            <form>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
              <button type="submit">Next</button>
            </form>
          </div>
        )}
        {activeTab === "signup" && (
          <div id="signup">
            <form>
              <p>Sign Up as a Student or a Club?</p>
              <button id="student" type="button">
                Student
              </button>
              <br />
              <button id="club" type="button">
                Club
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
