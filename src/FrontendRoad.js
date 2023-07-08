import React from 'react'
import './Map.css'
import FrontRoad from './FrontRoad'
import Footer from "./Footer"
import {TbChecks} from 'react-icons/tb'
import logo from "./logo.png"
import { useLocation } from 'react-router-dom'


const FrontendRoad = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      // "document.documentElement.scrollTo" is the magic for React Router Dom v6
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // Optional if you want to skip the scrolling animation
      });
    }, [pathname]);
  return (
    <section id="frontend">
  <nav className="navbar navbar-expand-md fixed-top bg-light shadow-sm">
  <div className="container-fluid py-2">

<div className='col-md-2'>
    <a className="navbar-brand" href="#">
      <img src={logo}  style={{width:"45px",height:"45px"}} />
    </a>
</div>
<div className="col-md-10 mx-auto text-center p-0 res-head">
    <h2 className="fw-bold p-0 m-0">Frontend Development</h2>
</div>
</div>
</nav> 
                        
    <div className='map-details'>
    <FrontRoad/>
   
    </div>
  

    <div className="container-fluid py-5"style={{backgroundColor: "#2ea44f"}}>  
    <div className="row mx-auto">

        <div className='col-md-8 col-12 '>
        <div className="shadow p-5  bg-body rounded">
        <h3 className='fw-semibold'>Course Description</h3>
      <p>Front-end web development is the development of the graphical user interface of a website, 
           through the use of HTML, CSS, and JavaScript, and with some frameworks so that users can view 
           and interact with the websites. Learning about Internet and browser is the most underrated thing but it will 
           help you to know about how your website is working. As part of the course, You will get complete guide on HTML5, and CSS3 step by step.<br/><br/>

           Later you will learn how to use, integrate or add user interactivity with the help of JavaScript. 
           This roadmap also covers the latest JavaScript version which is ECMA Script learn the modern JavaScript techniques 
           with ECMA Script 6 or later. <br/><br/>

           The next big step would be to learn Bootstrap 5 which is the latest and the most popular CSS framework available. <br/><br/>
          
           Then with the help of React JS a JavaScript Framework,you will learn how to build a Scratch web App from 
           Beginner to Advanced level. After that you will learn about Create React App tool, used to build React applications. 
           With the help of Bootstrap 5, you will learn to build a Practical web application with React. <br/><br/>
          
           Structure of this is designed after research and you will get complete guide to become a frontend
           web development. After completion of the course, you will be able to design a web page in the 
           exact same design that is on your mind or you might have seen on some theme website. <br/><br/>
           
           Creating a web template of your own or edit the one, you will be a full skill ninja to do the job. </p>
           </div>
      </div>
   

      
        <div className='col-md-4 col-12'>
        <div className="shadow p-5  bg-body rounded">

      <h3 className='fw-semibold'>What you’ll learn</h3>
            <ul className="list-inline">
            <li className="list-item"><span><TbChecks style={{color:"#2ea44f"}}/></span><span className="me-2 ms-1 ">HTML5</span></li>
            <li className="list-item"><span><TbChecks style={{color:"#2ea44f"}}/></span><span className="me-2  ms-1">Lifetime access </span></li>
            <li className="list-item"><span><TbChecks style={{color:"#2ea44f"}}/></span><span className="me-2  ms-1">Free Community </span></li>
            <li className="list-item"><span><TbChecks style={{color:"#2ea44f"}}/></span><span className="me-2  ms-1">HTML5</span></li>
            <li className="list-item"><span><TbChecks style={{color:"#2ea44f"}}/></span><span className="me-2  ms-1">Lifetime access </span></li>
            <li className="list-item"><span><TbChecks style={{color:"#2ea44f"}}/></span><span className="me-2  ms-1">Free Community </span></li>
            </ul>
       
       

      </div>
      </div>
   

      

    </div>

    </div>

   
  
    <Footer/>
  </section>
  )
}

export default FrontendRoad