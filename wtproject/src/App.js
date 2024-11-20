// import ProfileMenu from "./components/profile_menu";
// import Navbar from "./components/navbar";
import HomePage from "./components/HomePage";
import "./App.css"
import { useEffect } from 'react';
import LoginMain from "./components/loginMain";
import StudentSignup from "./components/studentSignup";
import ClubSignup from "./components/clubSignup";
import Post_feed from "./components/post_temp_feed";


export default  function App() {
  // useEffect(() => {
  //   document.body.style.background = 'linear-gradient( black, #0a494c)';

  //   document.body.style.margin = "0";
  //   return () => {
  //     document.body.style.backgroundColor = ''; // Clean up when component unmounts
  //   };
  // }, []);

  return (
    <div className="app">
      {/* <HomePage/> */}
      {/* <LoginMain/> */}
      {/* <StudentSignup/> */}
      {/* <ClubSignup/> */}
      <Post_feed />

    </div>
  );
}



