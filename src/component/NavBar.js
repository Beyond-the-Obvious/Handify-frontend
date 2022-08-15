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
  MDBCollapse,
  MDBBtn,
} from "mdb-react-ui-kit";


export default class Home extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isOpen: false,
  //   };
  //   this.toggleCollapse = this.toggleCollapse.bind(this);
  // }
  
  // toggleCollapse() {
  //   this.setState({ isOpen: !this.state.isOpen });
  // }

  render() {
  return (
    <>
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Handify</MDBNavbarBrand>
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
            <Link to="/profile" className="nav-link">Profile</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/Product" className="nav-link">Product</Link>
            <Link to="/signup" className="nav-link">Sign Up</Link>
            <Link to="/Login" className="nav-link">Login</Link>

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
            <MDBNavbarLink>
              <MDBIcon fas icon="shopping-cart" />
            </MDBNavbarLink>
          </MDBNavbarNav>
        {/* </MDBCollapse> */}

      </MDBContainer>
    </MDBNavbar>

    </>
  );
}
}
