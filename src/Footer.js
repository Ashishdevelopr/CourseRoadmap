import React from 'react'
import "./Footer.css"
import {BsLinkedin, BsGithub} from "react-icons/bs"

const Footer = () => {
  return (
    <>
    <footer>
    <div className="container py-5  mx-auto footerback">
      <div className="row">
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div>
            <h4 className="fw-bold">Course Roadmap</h4>
            <p className="">Our Website will help you to know the correct and complete raodmap of courses with direction. Find the best solutions.</p>
          </div>
          <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-dark" href="https://www.linkedin.com/in/ashish-developr/" target="_blank"><BsLinkedin style={{color:"#fff", fontSize:"22px"}}/></a></li>
        <li className="ms-3"><a className="link-dark" href="https://github.com/Ashishdevelopr" target="_blank"><BsGithub style={{color:"#fff", fontSize:"22px"}}/></a></li>
      </ul>
        </div>
        <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
          <div className="">
            <h5 className="fw-semibold">Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-decoration-none">Home</a>
              </li>
              <li>
                <a href="/#about" className="text-decoration-none">About Us</a>
              </li>
              <li>
                <a href="/" className="text-decoration-none">Course Map</a>
              </li>
              <li>
                <a href="./signup" className="text-decoration-none">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6">
          <div>
          <h5 className="fw-semibold">Support</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/signin" className="text-decoration-none">Help & Support</a>
              </li>
              <li>
                <a href="/#FAQ" className="text-decoration-none">FAQ's</a>
              </li>
              <li>
                <a href="/#about" className="text-decoration-none">Features</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6">
          <div>
          <h5 className="fw-semibold">Get in Touch</h5>
            <ul className="list-unstyled list">
              <li>
                <p>Lokandwala Township, Kandivali  Mumbai 400101</p>
              </li>
              <li>
                <p> Email: <a href="#" className="text-decoration-none link-success">ashishdevelopr@gmail.com</a>
                </p>
              </li>
              
              <li>
                <p> Phone: <a href="#" className="text-decoration-none link-success">9324280652</a>
                </p>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      
    </div>
    <div className="container">
    <div className="d-flex justify-content-center pt-1 border-top border-success border-opacity-50">
      <p><a href='https://github.com/Ashishdevelopr' className='footer-link' target='_blank'>Crafted with passion by <span className='footer-span'><BsGithub/> </span>Ashish Developer</a></p>
      
    </div>

    </div>
  </footer>
    
    </>
  )
}

export default Footer