import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signin.css"
import { NavLink } from 'react-router-dom';

const Signin = () => {
    const navigate = useNavigate();
    const [inputFelid, setInputFeild] = useState({
        email: "",
        password: ""
    })

    const inputHandler = (e) =>{
        setInputFeild({...inputFelid, [e.target.name]:e.target.value});
    };

    const submitButton =async () =>{
        let url="http://localhost:5555/users/login";
        let options={
            method:"POST",
            url:url,
            headers:{},
            data:inputFelid,
        }
        try {
            let response = await axios(options);
            console.log(response);
            if (response.data.data.message == "Login Successfully") {
              window.alert("hii Login Successfuly!");
            //   localStorage.setItem("token", response.data.data.token);
              
              setTimeout(() => {
                navigate("/");
              }, 1100);
            } 
            else{
                window.alert("Invalid EmailID")
            }
          } catch (error) {
            console.log("Something went wrong");
          }
    }

  return (
    <div className="container-fulid routing-signin">
    <div className="form-wrapper">
    <div className="card"> 
                <div className="logo">
                    <h3>CareerRoadmap</h3>
                  </div>
                <div className="text-center my-1">
                    <h4 className="font-weight-bold mb-2">Sign in</h4>
                    <p className="small">Sign in to CareerRoadmap to continue</p>
                </div>

                <form>
                    
                    <div className="form-group">
                        <label>Email</label>
                            <input type="email"
                            name="email"
                            onChange={inputHandler}
                            value={inputFelid.email}
                            className="form-control" id="email" placeholder="Enter email" required/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                            <input type="password"
                             onChange={inputHandler}
                             value={inputFelid.password}
                             name='password'
                            className="form-control" id="password" placeholder="Enter password"/>
                    </div>
                    
                    <div className="form-group">
                        <button type="button" className="btn buttonprimary" onClick={submitButton}>Sign In</button>
                    </div>

                    <div className="form-group">
                        <button type='button'

                        className=" btn forget text-center" ><a href="./Reset">Forget Password?</a></button>
                    </div>

                    <hr mt-1/>
                    <div>
                    <p className="text-center">Don't have an account? <br/>
                    <NavLink to="/signup" className="link">Sign up</NavLink></p>
                    </div>
                </form>
    </div>
    </div>
    </div>
  )
}

export default Signin