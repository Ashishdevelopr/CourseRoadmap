import React from 'react'
import "./Card.css"
import back from "./back.png"
import front from "./front.png"
import digi from "./digi.png"
import block from "./block.png"

const Card = () => {
    return (
        <>
            <div className="lg-container px-5 py-5 mx-auto pb-5 cardback">
                <div className="row mb-4">
                    <div className="col-md-10 mx-auto text-center">
                        <h2 className="display-6 fw-bold"> Course Roadmaps</h2>
                        <p>Choose from various courses designed with complete research and planning</p>
                    </div>
                </div>
                {/* selection */}
            </div>

            <div className='container'>
                <div className='row'>

                    <div className="card p-0" style={{ width: "17rem", border: "none" }}>
                        <img src={back} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><b>Backend Developer</b></h5><br />
                            <p className="card-text">Become an in-demand, Backend developer driving customer strategies and business growth .</p>
                            <a href="/backend" className="btn buttonprimaryout">Explore Now</a>
                        </div>
                    </div>

                    <div className="card p-0" style={{ width: "17rem", border: "none" }}>
                        <img src={front} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><b>Frontend Developer</b></h5><br />
                            <p className="card-text">Become an in-demand, Frontend developer driving customer strategies and business growth .</p>
                            <a href="/frontend" className="btn buttonprimaryout">Explore Now</a>
                        </div>
                    </div>

                    <div className="card p-0" style={{ width: "17rem", border: "none" }}>
                        <img src={block} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><b>Learn Blockchain</b></h5><br />
                            <p className="card-text">Learn the Blockchain driving and customer strategies and business growth .</p>
                            <a href="/blockchain" className="btn buttonprimaryout">Explore Now</a>
                        </div>
                    </div>
                    <div className="card p-0" style={{ width: "17rem", border: "none" }}>
                        <img src={digi} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><b>Digital Marketing</b></h5><br />
                            <p className="card-text">Become an in-demand, digital marketer driving customer strategies and business growth .</p>
                            <a href="/frontend" className="btn buttonprimaryout">Explore Now</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Card;

