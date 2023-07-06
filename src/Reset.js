import React from 'react'
import "./Reset.css"

const Reset = () => {
  return (
    <div className="container-fulid">
    <div className="form-wrapper">
    <div className="card"> 
                <div className="logo">
                    <h3>CareerRoadmap</h3>
                  </div>
                <div className="text-center my-1">
                    <h4 className="font-weight-bold mb-2">Reset Password</h4>
                    <p className="small">Type and send the email address to reset your password.</p>
                </div>

                <form>
                    
                    <div className="form-group">
                        <label>Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" required/>
                    </div>
                    
                    
                    <div className="form-group">
                        <button className="btn buttonprimary ">Send</button>
                    </div>

                    <hr mt-1/>
                    <div>
                    <p className="text-center">You can now  
                    <a href="./signup" className="link">  Sign up </a>or
                    <a href="./signin" className="link"> Sign in </a>.
                    </p>
                    </div>
                </form>
    </div>
    </div>
    </div>
  )
}

export default Reset