import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import logo from '../assets/handifylogo.png';

export default function App() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="https://web.facebook.com/" className="me-4 text-reset"><MDBIcon fab icon="facebook-f" /></a>
          <a href="https://twitter.com/" className="me-4 text-reset"><MDBIcon fab icon="twitter" /></a>
           <a href="https://www.instagram.com/" className="me-4 text-reset"><MDBIcon fab icon="instagram" /></a>
          <a href="https://www.linkedin.com/" className="me-4 text-reset"><MDBIcon fab icon="linkedin" /></a>
        
        </div>

      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <img src={ logo } alt="Logo" className="logoImg" />
              <p>Our website is a perfect place to support small buisness owners and provide the users with unique hand-made peices .</p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Provided products you can search or add</h6>
              <p>Food items</p>
              <p>Accessories</p>
              <p>Art works</p>
            
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p><a href="/About" className="text-reset">About us</a></p>
              <p><a href="/contact" className="text-reset">Contact us</a></p>
              <p><a href="/Profile" className="text-reset">Profile</a></p>
              {/* <p><a href="/Home" className="text-reset">Home</a></p> */}
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><MDBIcon icon="home" className="me-2" />Amman,Jordan</p>
              <p><MDBIcon icon="envelope" className="me-3" />info@handify.com</p>
              <p><MDBIcon icon="phone" className="me-3" /> + 96279 345 567 8</p>
              <p><MDBIcon icon="print" className="me-3" /> + 96278 234 674 8</p>
            </MDBCol>

          </MDBRow>
        </MDBContainer>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2022 Copyright | <a className="text-reset fw-bold" href="/">Handify</a>
      </div>
    </MDBFooter>
  );
}