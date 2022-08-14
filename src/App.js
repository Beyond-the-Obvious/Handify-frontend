
import React from 'react';
import Header from './component/Navbar/Index';
import Footer from './component/Footer';
import HandeMade from './component/HandeMade';
import Welcome from './component/Welcome';
import Profile from './component/Profile';
import About from './component/About';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <Header />

          <Routes>

            {/* <Route exact path="/" element={ <Welcome />}> </Route> */}
            <Route exact path="/HandeMade" element={ <HandeMade />}> </Route>
            {
              
                <Route path="/profile" element={<Profile />}></Route>
              
            }
           
            <Route exact path="/about" element={<About />}> </Route>
      
          </Routes>

          <Footer />
        </Router>

      </>
    )
  }
}


export default App;

