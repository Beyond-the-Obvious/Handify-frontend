import { Link } from "react-router-dom";
import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  // MDBCollapse,
  MDBBtn,
} from "mdb-react-ui-kit";
import logo from '../assets/handifylogo.png';

export default class Home extends React.Component {

  render() {
  return (

    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand> <img src={ logo } alt="Logo" className="logoImg" /></MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded="false"
          aria-label="Toggle navigation"
          // onClick={this.toggleCollapse}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        {/* <MDBCollapse navbar isOpen={this.state.isOpen}> */}
          <MDBNavbarNav>
            
            <Link to="/" className="nav-link">Home</Link>
            {/* <Link to="/Login" className="nav-link">Login</Link> */}
            {/* <Link to="/signup" className="nav-link">SignUp</Link> */}
            <Link to="/profile" className="nav-link">Profile</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
           
 
            <MDBNavbarLink></MDBNavbarLink>
            <input
              className="form-control"
              placeholder="Type query"
              aria-label="Search"
              type="Search"
            />
            <MDBBtn outline>Search</MDBBtn>
            <MDBNavbarLink></MDBNavbarLink>
            <MDBNavbarLink></MDBNavbarLink>
            <MDBNavbarLink href="/cart" className="me-4 text-reset"><MDBIcon fas icon="shopping-cart" /></MDBNavbarLink>
          </MDBNavbarNav>
        {/* </MDBCollapse> */}

      </MDBContainer>
    </MDBNavbar>
    
  );
}
}
