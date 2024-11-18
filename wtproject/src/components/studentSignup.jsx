import React, { useState } from "react";
import "./stylesLogin.css";

const Signup1 = ({ setSignupStep }) => (
  <div id="signup1">
    <form>
      <label htmlFor="srn">SRN</label>
      <input type="text" id="srn" />
      <label htmlFor="semester">Semester</label>
      <input type="text" id="semester" />
      <label htmlFor="campus">Campus</label>
      <input type="text" id="campus" />
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
        <button type="button" onClick={() => setSignupStep(3)}>
          Next
        </button>
      </div>
    </form>
  </div>
);

const Signup3 = ({ setSignupStep }) => (
  <div id="signup3">
    <form>
      <label htmlFor="tags">Select Your Interested Tags</label>
      <input type="text" id="tags" placeholder="e.g., AI, Web Dev, Sports" />
      <div id="buttonContainer">
        <button type="button" onClick={() => setSignupStep(2)}>
          Back
        </button>
        <button type="submit">Finish</button>
      </div>
    </form>
  </div>
);

export default function LoginMain() {
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
        {activeTab === "signup" && signupStep === 3 && (
          <Signup3 setSignupStep={setSignupStep} />
        )}
      </div>
    </div>
  );
}
