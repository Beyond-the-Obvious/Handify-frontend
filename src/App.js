import React from "react";
import Header from "./component/Navbar/Index";
import Footer from "./component/Footer";
import HandeMade from "./component/HandeMade";
import Profile from "./component/Profile";
import About from "./component/About";
import SignUp from "./component/Signup";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />

          <Routes>
            <Route exact path="/HandeMade" element={<HandeMade />}></Route>
            <Route exact path="/profile" element={<Profile />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/signup" element={<SignUp />} />
          </Routes>

          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
