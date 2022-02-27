import React from 'react'
import "./Footer.css";
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBRipple
  } from 'mdb-react-ui-kit';
  import logoImg from "../images/FastRivi-logos.jpg";




const Footer = () => {
  return (
    <>


    <MDBFooter bgColor='black' className='text-center text-lg-start text-muted footer' >
      <section className='d-flex justify-content-center justify-content-lg-between '>
      
       
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
          

            {/* <MDBCol lg='4' md='4' sm='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src={logoImg} className='w-50 logoimage ' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol> */}

            <div className=' col-md-12 col-lg-12 col-xl-12 mx-auto mb-4 text-white d-flex footer_top'>
              {/* <h6 className='text-uppercase fw-bold mb-4'>Important Links</h6> */}
              <p className='logos_class'>
                <a href='#!' className='text-reset logos_class'>
                  Home
                </a>
              </p>
              <p className='logos_class'>
                <a href='#!' className='text-reset logos_class'>
                  About Us
                </a>
              </p>
              <p className='logos_class'>
                <a href='#!' className='text-reset logos_class'>
                  Services
                </a>
              </p>
              <p className='logos_class'>
                <a href='#!' className='text-reset logos_class'>
                  Contact Us
                </a>
              </p>
            </div>

           

            {/* <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-white'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> New York, NY 10012, US
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                info@example.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> + 01 234 567 88
              </p>
              <p>
                <i className='fas fa-print me-3'></i> + 01 234 567 89
              </p>
            </div> */}
          </div>
        </div>
      </section>

<section>
<div className='text-white ' >
          <a href='' className='me-4 text-reset logos_class'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='' className='me-4 text-reset logos_class'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='' className='me-4 text-reset logos_class'>
            <i className='fab fa-google'></i>
          </a>
          <a href='' className='me-4 text-reset logos_class'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='' className='me-4 text-reset logos_class'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='' className='me-4 text-reset logos_class'>
            <i className='fab fa-github'></i>
          </a>
        </div>
</section>

      <div className='text-center p-4 text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', display:'flex',justifyContent:'center' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          fastrivi.com
        </a>

        {/* <div className='text-white link-content' >
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-google'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-github'></i>
          </a>
        </div> */}
      </div>
    </MDBFooter>
    

    </>
  )
}

export default Footer