import React from 'react'
import "./Lead.css"
import { NavLink } from 'react-router-dom'


const Lead = () => {
  return (
    <>
      <div className=" container leadback">
        <div className="px-4 py-5 my-5 text-center ">
          <h2 className="display-5 fw-bold">Join the community of learners worldwide
          </h2>
          <div className="col-lg-6 mx-auto">
            <p className=" mb-4">Effective learning starts with assessment. We provide the tools and skills to teach what you love.
              Learning a new skill is hard work and signals makes it easier.</p>
            <div className=" col-md-4 col-sm-3 mx-auto">
              <NavLink className="btn buttonpri btn-sm m-0" to="/signup" role="button">Join Now</NavLink>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Lead