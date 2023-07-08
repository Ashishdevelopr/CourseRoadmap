import React from 'react'
import "./index.css"
import { FiMenu } from "react-icons/fi"
import Signin from './Signin'
import Signup from './Signup'
import Reset from './Reset'
import { Route, Routes, useNavigate } from 'react-router-dom'
import logo from "./logo.png"
import { NavLink } from 'react-router-dom'


const Navbar = () => {

  const navigate = useNavigate()
  return (
    <>
      {/* Serach box */}
      <div id="navbar">
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModal">Search Box</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <nav className="navbar">
                <div className="container-fluid">
                  <form className="d-flex mx-2" role="search">
                    <input className="form-control me-2 col-5 " type="search" placeholder="Search Roadmap" aria-label="Search" />
                    <button className="btn buttonprimary" type="submit">Search</button>
                  </form>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Searchbox */}

      {/* Navbar Start */}
      <nav className="navbar navbar-expand-md fixed-top bg-light shadow-sm p-3">
        <div className="container-fluid">

          {/* Navbar Logo */}
          <div className='order-0'>
            <a className="navbar-brand ms-3 " href="#">
              <img src={logo} style={{ width: "45px", height: "45px" }} />
            </a>
          </div>

          {/* Navbar Searchbox */}
          <div className="order-md-3 searchbox d-flex gap-3 d-md-flex">
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className=" btn btn-outline">
              <i className="bi bi-search"></i> </button>

          </div>

          {/* Navbar Menu */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            {/* <span className="navbar-toggler-icon"></span> */}
            <span><FiMenu /></span>
          </button>
          <div className="collapse navbar-collapse order-sm-2" id="navbarNavDropdown">
            <ul className="navbar-nav m-auto ">

              <li className="nav-item mx-2">
                <a className="nav-link" href="#about">Features</a>
              </li>
              <li className="nav-item dropdown mx-2">
                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Roadmap
                </a>
                <ul className="dropdown-menu mb-3">
                  <li><NavLink to="/frontend" className="dropdown-item" onClick={()=>navigate("/frontend")}>Frontend Development</NavLink></li>
                  <li><NavLink to="/backend" className="dropdown-item" onClick={()=>navigate("/backend")}>Backend Development</NavLink></li>
                  <li><NavLink to="/blockchain" className="dropdown-item" onClick={()=>navigate("/blockchain")}>Blockchain Development</NavLink></li>
                </ul>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#FAQ">FAQs</a>
              </li>
            </ul>

            <div className="d-flex gap-3 d-md-flex me-4">
              <NavLink className="btn buttonprimary sm mx-auto" to="/signup" role="button">SignUp</NavLink>
              <NavLink className="btn buttonprimaryout sm mx-auto" to="/signin" role="button">SignIn</NavLink>
            </div>
          </div>

          {/* Navbar Menu end */}
        </div>
      </nav>

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
      </div>
    </>
  )
}

export default Navbar