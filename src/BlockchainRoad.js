import React from 'react'
import "./Map.css"
import Blockchain from './Blockchain'
import { TbChecks } from 'react-icons/tb'
import Footer from "./Footer"
import logo from "./logo.png"
import { Bot } from "./Bot"

{ <Bot /> }

const BlockchainRoad = () => {
  return (

    <section id="blockchain">
      <nav className="navbar navbar-expand-md fixed-top shadow-sm">
        <div className="container-fluid py-2">

          {/* Navbar Logo */}

          <div className='col-md-2'>
            <a className="navbar-brand" href="#">
              <img src={logo} style={{ width: "45px", height: "45px" }} />
            </a>
          </div>
          <div className="col-md-10 mx-auto text-center p-0 res-head">
            <h2 className="fw-bold p-0 m-0">Blockchain Development</h2>
          </div>

        </div>
      </nav>

      <div className='map-details'>
        <Blockchain />
      </div>


      <div className="container-fluid py-5" style={{ backgroundColor: "#2ea44f " }}>
        <div className="row mx-auto">

          <div className='col-md-8 col-12 '>
            <div className="shadow p-5 mb-4  bg-body rounded">
              <h3 className='fw-semibold'>Course Description</h3>
              <p>Learn key Blockchain concepts, get to know how Blockchain affect industry where you are working and what you need to do right now to take advantage of it!<br /><br />

                Covering:<br></br>

                <b>Blockchain Fundamentals</b> - we'll start at the very beginning<br />

                <b>Blockchain Technology</b> - learn who cryptocurrencies world operates! <br />

                <b>Industry Applications</b> - learn how Blockchain affecting real world right now!<br /><br />

                Ethereum and Blockchain technology is the most disruptive force in years.  Companies cannot hire developers who understand blockchain technologies fast enough, but there are a tiny number of resources published to help you truly understand what blockchains are used for, let alone build apps with them.  That's the purpose of this course: to be the best resource online for learning about Ethereum, blockchains, and how to build apps with this new technology.<br /><br />

                Here is what you will get with this roadmap:<br />

                1. Learn Blockchain Fundamentals - Dive quickly into Blockchain world through our intuition tutorials<br />

                2. Understand how Cryptocurrencies working - Through Bitcoin examples understand main crypto contenps<br />

                3. Real-world applications: Learn how Blockchain affecting top industries right now and what you need to do to jump on this hype train! </p>
            </div>
          </div>



          <div className='col-md-4 col-12'>
            <div className="shadow p-5  bg-body rounded">

              <h3 className='fw-semibold'>What you’ll learn</h3>
              <ul className="list-inline">
                <li className="list-item"><span><TbChecks style={{ color: "#2ea44f" }} /></span><span className="me-2 ms-1 ">Introduction to Blockchain</span></li>
                <li className="list-item"><span><TbChecks style={{ color: "#2ea44f" }} /></span><span className="me-2  ms-1">Advance Blockchain </span></li>
                <li className="list-item"><span><TbChecks style={{ color: "#2ea44f" }} /></span><span className="me-2  ms-1">Smart Contracts </span></li>
                <li className="list-item"><span><TbChecks style={{ color: "#2ea44f" }} /></span><span className="me-2  ms-1">Testing</span></li>
                <li className="list-item"><span><TbChecks style={{ color: "#2ea44f" }} /></span><span className="me-2  ms-1">Smart Contract Frameworks </span></li>
                <li className="list-item"><span><TbChecks style={{ color: "#2ea44f" }} /></span><span className="me-2  ms-1">Security Practices </span></li>
                <li className="list-item"><span><TbChecks style={{ color: "#2ea44f" }} /></span><span className="me-2  ms-1">Decentralized Applications </span></li>
                <li className="list-item"><span><TbChecks style={{ color: "#2ea44f" }} /></span><span className="me-2  ms-1">Client Libraries </span></li>
                <li className="list-item"><span><TbChecks style={{ color: "#2ea44f" }} /></span><span className="me-2  ms-1">Scaling of dAPPs</span></li>

              </ul>



            </div>
          </div>




        </div>

      </div>



      <Footer />
    </section>
  )
}

export default BlockchainRoad