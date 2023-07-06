import React, { useState } from 'react';
import axios from "axios";
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./Signup.css";



const Signup = () => {
    const navigate = useNavigate();
    const [inputFelid, setInputFeild] = useState({
        name: "",
        email: "",
        password: ""
    })

    const inputHandler = (e) => {
        setInputFeild({ ...inputFelid, [e.target.name]: e.target.value });
    };

    const submitButton = async () => {
        let url = "http://localhost:5555/users/add";
        let option = {
            method: "POST",
            url: url,
            headers: {},
            data: inputFelid,
        }
        try {
            let response = await axios(option);
            if (response.status == 200 && response.status !== 409) {
                window.alert("Added Successfully!");
                setTimeout(() => {
                    navigate("/")
                }, 1500)
            }
        } catch (error) {
            console.log("Email-Id already Exist");
        }
    }

    return (
        <div className="form-wrapper">
            <div className="card">
                <div className="logo">
                    <h3>CareerRoadmap</h3>
                </div>
                <div className="text-center my-1">
                    <h4 className="font-weight-bold mb-1">Sign up</h4>
                    <p className="fs-6">You can create a free account now</p>
                </div>

                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" id="fullname"
                            onChange={inputHandler}
                            value={inputFelid.name}
                            placeholder="John" autofocus />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email"
                            onChange={inputHandler}
                            value={inputFelid.email}
                            className="form-control"
                            name="email"
                            id="email" placeholder="john@mail.com" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password"
                            onChange={inputHandler}
                            value={inputFelid.password}
                            className="form-control"
                            name="password" id="password" placeholder="at least 8 character" />
                    </div>

                    <div className="form-group">
                        <button type="button" className="btn buttonprimary " onClick={submitButton}>Sign Up</button>
                    </div>
                    <hr mt-1 />
                    <div>
                        <p className="text-center">Do you already have an account? <br />
                            <a href="./signin" className="link">Sign in</a></p>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Signup