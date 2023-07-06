import React from 'react'
import "./Header.css"
import { Typewriter } from 'react-simple-typewriter'
import Card from './Card'
import Lead from "./Lead"
// import Review from './Review'
import Footer from './Footer'
import Faq from './Faq'
import About from './About'

const Header = () => {
  return (
    <>

      <div id="back">

        <div className="px-5 py-5 mx-auto text-center">

          <div className="col-md-10 mx-auto mt-4 ">
            {/* <img className="d-block mx-auto mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}


            <h1 className="fw-bold pt-5 mb-3 textanimation">
              Bulid Better{' '}
              <span style={{ color: "#2eaf44" }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={['Future', 'Skills', 'Career', 'Teams']}
                  loop={false}
                  cursor
                  cursorStyle='|'
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={800}
                />
              </span>
            </h1>


            <div className="col-lg-6 mx-auto info">
              <p className=" h5 mb-4 ">

                Start, switch, or advance your career with many different Course Roadmaps, Learn any skills with most complete roadmaps you will ever find.

              </p>

              <div className="d-grid gap-4 d-sm-flex justify-content-sm-center col-md-7 mx-auto mb-4">
                <a class=" btn buttonprimary" href="/signup" role="button">Join Now</a>

                <a class=" btn buttonprimaryout" href="/frontend" role="button">Access Now</a>


              </div>
              <div className=" d-sm-flex justify-content-sm-center">
                <ul className="list-inline">
                  <li className="list-inline-item"><span><i className="bi bi-check-circle-fill"></i></span><span className="me-2 ms-1">Online roadmaps </span></li>
                  <li className="list-inline-item"><span><i className="bi bi-check-circle-fill"></i></span><span className="me-2 ms-1">Lifetime access </span></li>
                  <li className="list-inline-item"><span><i className="bi bi-check-circle-fill"></i></span><span className="me-2 ms-1">Free Community </span></li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div>
        <Card />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Lead />
      </div>
      <div>
        <Faq />
      </div>
      <div>
        <Footer />
      </div>

    </>

  )
}


export default Header