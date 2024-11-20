import React, { useState } from "react";
import "./stylesLogin.css";

const Signup1 = ({ setSignupStep }) => (
    <div id="signup1">
        <form>
            <label htmlFor="name">Club Name</label>
            <input type="text" id="name" />
            <label htmlFor="email">e-mail</label>
            <input type="email" id="email" />
            <label htmlFor="domain">Domain</label>
            <input type="text" id="domain" />
            <button type="button" onClick={() => setSignupStep(2)}>
                Next
            </button>
        </form>
    </div>
);

const Signup2 = ({ setSignupStep }) => (
    <div id="signup2">
        <form>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input type="password" id="confirmpassword" />
            <div id="buttonContainer">
                <button type="button" onClick={() => setSignupStep(1)}>
                    Back
                </button>
                <button type="submit" onClick={() => alert("Club details have, been sent for verification! Once verified the account will be created.")}>
                    Verify
                </button>
            </div>
        </form>
    </div>
);



export default function ClubSignup() {
    const [activeTab, setActiveTab] = useState("login");
    const [signupStep, setSignupStep] = useState(1); // Step management for signup pages

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

                {activeTab === "signup" && signupStep === 1 && (
                    <Signup1 setSignupStep={setSignupStep} />
                )}
                {activeTab === "signup" && signupStep === 2 && (
                    <Signup2 setSignupStep={setSignupStep} />
                )}
            </div>
        </div>
    );
}
