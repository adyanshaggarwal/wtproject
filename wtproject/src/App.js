// import ProfileMenu from "./components/profile_menu";
// import Navbar from "./components/navbar";
// import HomePage from "./components/HomePage";
import "./App.css"
import { useEffect } from 'react';
import LoginMain from "./components/loginMain";
import StudentSignup from "./components/studentSignup";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = '#0C111F';
    document.body.style.margin = "0";
    return () => {
      document.body.style.backgroundColor = ''; // Clean up when component unmounts
    };
  }, []);

  return (
    <div className="app">
      {/* <HomePage/> */}
      {/* <LoginMain/> */}
      <StudentSignup/>
    </div>
  );
}
export default App;


