import React from "react";

const About = () => {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "white",
        position: "relative",
        overflow: "visible", // allows overlap with home section
      }}
    >
      <div className="container" style={{ padding: "3rem 2rem" }}>
        <div className="row align-items-center">
          {/* Left Side - Text */}
          <div
            className="col-lg-6 col-md-12 mb-5 mb-lg-0 position-relative"
            style={{
              marginTop: "-6rem", // raise text section upwards
              zIndex: 2,
            }}
          >
            {/* Vertical Name */}
            <div
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                fontSize: "0.9rem",
                fontWeight: "600",
                letterSpacing: "0.2rem",
                color: "#333",
                position: "absolute",
                left: "-100px",
                top: 0,
                height: "200px",
              }}
            >
              <span>BLESSON KB</span>
            </div>

            {/* Text Content */}
            <div>
              <h2
                className="mb-4"
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  color: "#3b3939",
                 
                }}
              >
                ABOUT BLESSON
              </h2>

              <div style={{ maxWidth: "520px" }}>
                <p
                  className="mb-3"
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.8",
                    color: "#555",
                  }}
                >
                  Hi, I'm{" "}
                  <span style={{ color: "#dc3545", fontWeight: "600" }}>
                    Blesson KB
                  </span>
                  , a passionate Full Stack Web Developer. I love building modern,
                  responsive, and user-friendly web applications that blend
                  creativity and functionality.
                </p>
                <p
                  className="mb-3"
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.8",
                    color: "#555",
                  }}
                >
                  With experience in frontend and backend development, I enjoy
                  solving complex problems and delivering high-quality solutions.
                  My journey in web development is fueled by curiosity,
                  continuous learning, and the desire to create meaningful digital
                  experiences.
                </p>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.8",
                    color: "#555",
                  }}
                >
                  I specialize in creating scalable web applications using modern
                  technologies like React, Node.js, and Express. My work focuses
                  on clean code, user-centric design, and optimal performance.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image + Dots */}
          <div
            className="col-lg-6 col-md-12 position-relative"
            style={{ zIndex: 1 }}
          >
            <div
              style={{
                position: "relative",
                display: "inline-block",
                top: "-180px", // pushes image into the home page section
              }}
            >
              {/* Dot Pattern */}
              <div
                style={{
                  position: "absolute",
                  right: "-200px",
                  bottom: "-120px",
                  width: "380px",
                  height: "500px",
                  backgroundImage:
                    "radial-gradient(#ccc 2.5px, transparent 2px)",
                    
                  backgroundSize: "30px 30px",
                  zIndex: "0",
                }}
              ></div>

              {/* Profile Image */}
              <img
                src="/blessonk.png"
                alt="About Blesson"
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "700px",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                  position: "relative",
                  left: "90px",
                  zIndex: "1",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
