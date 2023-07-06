import React from 'react'
import "./Review.css"
import img1 from "./author-2.jpg"
import img2 from "./author-1.jpg"
import img3 from "./author-3.jpg"

const Review = () => {
  return (
<>
    
            <div className="lg-container px-5 py-5 mx-auto containerreview">
                <div className="row">
                    <div className="col-md-10 mx-auto text-center">
                        <h2 className="display-6 fw-bold">Don’t just take our word for it.</h2>
                        <div className="col-lg-6 mx-auto">

                        <p>Hear from teachers, trainers, and leaders in the learning space about how we empowers them to provide quality online learning experiences.</p>
                        </div>
                    </div>

                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block " alt="..."/>

      <div className="row">
      <div className="col md-6">
      <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
      <div className="col md-6">
      <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      
      </div>
      </div>

    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block " alt="..."/>
      
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block " alt="..."/>
     
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>  

</div>
    </div>
		
</>
  )}

export default Review