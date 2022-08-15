import React from "react";
import Header from "./component/Home";
import Footer from "./component/Footer";
import Product from "./component/Product";
import Profile from "./component/Profile";
import About from "./component/About";
import SignUp from "./component/Signup";
import Login from "./component/Login";
import Home from "./component/Home";
import Contact from  "./component/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
/* import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 */


import Homepage from "./Login/HomePage"
import Log from "./Login/login"
import Register from "./Login/register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {


  const [ user, setLoginUser] = useState({})

    return (

      <div className="App">
       
      <Router>
        <Home/>
        <Routes>
      
        {/* <Route exact path="/" element={user && user._id ? <Homepage setLoginUser={setLoginUser}  /> : <Log setLoginUser={setLoginUser}/>}></Route> */}

        <Route exact path="/Profile" element={user && user._id ? <Profile setLoginUser={setLoginUser}  /> : <Log setLoginUser={setLoginUser}/>}></Route>

        {/* <Route exact path="/Home" element={user && user._id ? <Home setLoginUser={setLoginUser}  /> : <Log setLoginUser={setLoginUser}/>}></Route> */}


          
          <Route exact path="/login" element={<Log setLoginUser={setLoginUser}/>}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          {/* <Route exact path="/cart" element={<Cart />}></Route> */}

           {/* <Route exact path="/Profile" element={<Profile />}></Route> */}
          </Routes>
          <Footer />
      </Router>
    </div>
    );
  }


export default App;
