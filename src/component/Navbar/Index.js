import { Link } from "react-router-dom";
import AuthButton from '../../Auth0/AuthButtons';
import React, { useState } from 'react';
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
} from 'mdb-react-ui-kit';

export default function App() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light' >
      <MDBContainer fluid>
        <MDBNavbarBrand >Handify</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            
            <Link to="/" className="nav-link">Home</Link>         
            <Link to="/profile" className="nav-link">Profile</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/HandeMade" className="nav-link">HandeMade</Link>

            <MDBNavbarLink ></MDBNavbarLink>
            <input className='form-control' placeholder="Type query" aria-label="Search" type='Search' />
          <MDBBtn outline >Search</MDBBtn>
          <MDBNavbarLink ></MDBNavbarLink>
          <AuthButton />
          <MDBNavbarLink ></MDBNavbarLink>
          <MDBNavbarLink > 
              <MDBIcon fas icon='shopping-cart' />
            </MDBNavbarLink>
          </MDBNavbarNav>
          
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
