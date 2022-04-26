import React from "react"
import Image from "../Images/Images"

const Hero = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <Image
            className="d-block mx-lg-auto img-fluid shadow"
            style={{ borderRadius: "10px" }}
            filename="front.jpg"
            alt="hero"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="fat-text lh-1 mb-3">
            BRAINZONE
          </h1>
          <p className="lead">
            A quiz can teach anything to your students. From primary school to university 
            ,quizzes make education more engaging and fun.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary shadow px-4 me-md-2"
            >
              Let's begin
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
