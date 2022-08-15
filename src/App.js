import React from "react";
import Header from "./component/NavBar";
import Footer from "./component/Footer";
import Product from "./component/Product";
import Profile from "./component/Profile";
import About from "./component/About";
import SignUp from "./component/Signup";
import Login from "./component/Login";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />

          

          <Routes>
            <Route exact path="/product" element={<Product />}></Route>
            <Route exact path="/profile" element={<Profile />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>

          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
