import React from 'react'
import "./About.css"
import { GiArchiveResearch } from "react-icons/gi"
import { FaRoute, FaRobot } from "react-icons/fa"
import { BsPeopleFill } from "react-icons/bs"
import aboutus from "./about.png"
const About = () => {
  return (
    <section id="about">
      <div className="lg-container  mx-auto about routing">
        <div className="row">
          <div className="col-md-10 mx-auto text-center">
            <h2 className="display-6 fw-bold">Key Features</h2>
            <div className="col-lg-6 mx-auto">
              <p>Everything you need to master the career oppurtunity</p>
            </div>
          </div>
        </div>

        <div className="container ">
          <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-4">

            <div className="d-flex flex-column align-items-start gap-2 order-sm-1">
              <img src={aboutus} className="aboutimg img-fluid" />

            </div>
            <div className="row row-cols-1 row-cols-sm-2 g-4 order-sm-0">
              <div className="d-flex flex-column gap-2">
                <div
                  className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-4 rounded-3">
                  <span>
                    <FaRoute />
                  </span>
                </div>
                <h4 className=" fw-semibold mb-0 abouthover">Learning Path</h4>
                <p className="text-muted">Best possible roadmaps available to start your journey.</p>
              </div>

              <div className="d-flex flex-column gap-2">
                <div
                  className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-4 rounded-3">
                  <BsPeopleFill />
                </div>
                <h4 className=" fw-semibold mb-0 abouthover">Join Community</h4>
                <p className="text-muted">Be the smart learner with connecting the other users worldwide.</p>
              </div>

              <div className="d-flex flex-column gap-2">
                <div
                  className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-4 rounded-3">
                  <GiArchiveResearch />
                </div>
                <h4 className="fw-semibold mb-0 abouthover">Course Description</h4>
                <p className="text-muted">Get detiled idea about every course and scope of course.</p>
              </div>

              <div className="d-flex flex-column gap-2">
                <div
                  className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-4 rounded-3">
                  <FaRobot />
                </div>
                <h4 className="fw-semibold mb-0 abouthover">David the Chatbot</h4>
                <p className="text-muted">Making us available to answer your queries for 24/7.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About