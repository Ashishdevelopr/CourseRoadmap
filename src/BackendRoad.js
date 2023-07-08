import React from 'react'
import "./Map.css"
import Backend from './Backend'
import {TbChecks} from 'react-icons/tb'
import Footer from "./Footer"
import logo from "./logo.png"
import { useLocation } from 'react-router-dom'

const BackendRoad = () => {
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
    <section id="backend">
  <nav className="navbar navbar-expand-md fixed-top bg-light shadow-sm">
  <div className="container-fluid py-2">

<div className='col-md-2'>
    <a className="navbar-brand" href="#">
      <img src={logo}  style={{width:"45px",height:"45px"}} />
    </a>
</div>
<div className="col-md-10 mx-auto text-center p-0 res-head">
    <h2 className="fw-bold p-0 m-0">Backend Development</h2>
</div>
</div>
</nav>
                        
    <div className='map-details'>
    <Backend/>
    </div>
  

    <div className="container-fluid py-5"style={{backgroundColor: "#2ea44f"}}>  
    <div className="row mx-auto">

        <div className='col-md-8 col-12 '>
        <div className="shadow p-5  bg-body rounded">
        <h3 className='fw-semibold'>Course Description</h3>
      <p> Web development activities that are done at the back end of programs are referred to as back end development. Back-end development covers server-side web application logic and integration and activities, like writing APIs, creating libraries, and working with system components instead of frontend development, which focuses on customer-facing services and programs. Backend developers build code that allows a database and an application to communicate with one another.<br/><br/>

      <b>Programming Languages and Frameworks</b><br/>

      Programming languages and frameworks are next on the list. An in-depth understanding of backend programming languages is one of the most important skills of a backend developer. This comprises the items listed below. <br/><br/>

      - NodeJS and ExpressJS are examples of JavaScript environments.<br/><br/>
      - Java, in particular, was designed from the start to be used on the server. Spring and Java Server Faces are two popular Java frameworks. <br/><br/>
      - Python is the most widely used programming language. It's adaptable and simple to use.
       Backend development is done with Python frameworks like Django and Flask.<br/><br/>
      - PHP, Perl, and Ruby are some of the other languages available. Because backend and frontend developers collaborate so closely, having a basic understanding of front-end web technologies like HTML and CSS is also beneficial.<br/><br/>


      <b>Database Management Systems</b><br/>
      A backend developer creates code that does relational mapping to retrieve data from a database. MySQL, SQL SERVER and PostgreSQL, MongoDB, and Oracle Database are some of the most widely used DBMS. It's crucial to have a good understanding of how they work.<br/><br/>

      <b>Web Hosting Platforms</b><br/>
           
      Web hosting solutions enable you to place your product on a cloud service provider and access it via the internet. Amazon Web Services(AWS), Google Cloud Platform(GCP), Microsoft Azure, and Heroku are all popular options.</p>
           </div>
      </div>
   

      
        <div className='col-md-4 col-12'>
        <div className="shadow p-5  bg-body rounded">

      <h3 className='fw-semibold'>What you’ll learn</h3>
            <ul className="list-inline">
            <li className="list-item"><span><TbChecks style={{color:"#2ea44f"}}/></span><span className="me-2 ms-1 ">Internet</span></li>
            <li className="list-item"><span><TbChecks style={{color:"#2ea44f"}}/></span><span className="me-2  ms-1">Backend Language </span></li>
            <li className="list-item"><span><TbChecks style={{color:"#2ea44f"}}/></span><span className="me-2  ms-1">Backend Frameworks </span></li>
            <li className="list-item"><span><TbChecks style={{color:"#2ea44f"}}/></span><span className="me-2  ms-1">Asynchronous Programming</span></li>
            <li className="list-item"><span><TbChecks style={{color:"#2ea44f"}}/></span><span className="me-2  ms-1">Package Managers </span></li>
            <li className="list-item"><span><TbChecks style={{color:"#2ea44f"}}/></span><span className="me-2  ms-1">Relational Databases</span></li>
            <li className="list-item"><span><TbChecks style={{color:"#2ea44f"}}/></span><span className="me-2  ms-1">NoSQL Databases</span></li>
            <li className="list-item"><span><TbChecks style={{color:"#2ea44f"}}/></span><span className="me-2  ms-1">Learn about APIs </span></li>
            <li className="list-item"><span><TbChecks style={{color:"#2ea44f"}}/></span><span className="me-2  ms-1">Caching </span></li>
            <li className="list-item"><span><TbChecks style={{color:"#2ea44f"}}/></span><span className="me-2  ms-1">Web Security </span></li>
            <li className="list-item"><span><TbChecks style={{color:"#2ea44f"}}/></span><span className="me-2  ms-1">Testing </span></li>
            <li className="list-item"><span><TbChecks style={{color:"#2ea44f"}}/></span><span className="me-2  ms-1"> Containerization vs Virtualization</span></li>
            </ul>
       
       

      </div>
      </div>
   

      

    </div>

    </div>

   
  
    <Footer/>
    </section>
  )
}

export default BackendRoad