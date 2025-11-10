
const Hero = () => {
  return (
    <section 
      id="home" 
      className="position-relative"
      style={{ 
        minHeight: '100vh',
        overflow: 'hidden'
      }}
    >
      {/* Grey background section (left ~40%) */}
      <div 
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '30%',
          height: '100%',
          background: '#3b3939',
          zIndex: 1
        }}
      >
        
      </div>

      {/* Red background section (right ~60%) */}
      <div 
        className="d-flex flex-column justify-content-center p-5"
        style={{ 
          position: 'absolute',
          right: 0,
          top: 0,
          width: '70%',
          height: '100%',
          backgroundColor: '#f50202',
          zIndex: 2
        }}
      >
        <div className="ms-5">
          {/* Navigation links */}
          <div 
            className="d-flex gap-4 flex-wrap mb-5"
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              zIndex: 1000
            }}
          >
            <a
              href="#home" 
              className="text-white text-decoration-none nav-link-custom"
              style={{ 
                fontSize: '0.9rem', 
                fontWeight: '500',
                padding: '0.5rem 0',
                position: 'relative',
                cursor: 'pointer'
              }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white text-decoration-none nav-link-custom"
              style={{ 
                fontSize: '0.9rem', 
                fontWeight: '500',
                padding: '0.5rem 0',
                position: 'relative',
                cursor: 'pointer'
              }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About
            </a>
            <a
              href="#skills"
              className="text-white text-decoration-none nav-link-custom"
              style={{ 
                fontSize: '0.9rem', 
                fontWeight: '500',
                padding: '0.5rem 0',
                position: 'relative',
                cursor: 'pointer'
              }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-white text-decoration-none nav-link-custom"
              style={{ 
                fontSize: '0.9rem', 
                fontWeight: '500',
                padding: '0.5rem 0',
                position: 'relative',
                cursor: 'pointer'
              }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Projects
            </a>
            <a 
              href="#contact"
              className="text-white text-decoration-none nav-link-custom"
              style={{ 
                fontSize: '0.9rem', 
                fontWeight: '500',
                padding: '0.5rem 0',
                position: 'relative',
                cursor: 'pointer'
              }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </a>
          </div>

          {/* Quote, Description, and CTA - moved to the right */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              minHeight: '80vh',
              position: 'absolute',
              left: '6rem',
              bottom: '3rem',
              top: 0,
              zIndex: 3,
              width: '80%',
              // Ensure elements do not overlap nav links
              paddingTop: '6rem',
              paddingBottom: '3rem'
            }}
          >
            <h2 
              className="text-white mb-4"
              style={{ 
                fontSize: '1.5rem',
                fontWeight: 'bold',
                fontStyle: 'italic',
                lineHeight: '1.2',
                maxWidth: '800px',
                textAlign: 'left',
                marginRight:'2rem'
              }}
            >
              Building digital experiences that matter.
            </h2>

            <p 
              className="text-white mb-4"
              style={{ 
                fontSize: '1rem',
                lineHeight: '1.6',
                maxWidth: '450px',
                textAlign: 'left',
                marginRight:'2rem'
              }}
            >
              I'm a Full Stack Web Developer passionate about creating modern, 
              responsive, and user-friendly web applications that blend creativity 
              and functionality.
            </p>

            <div className="d-flex gap-3 flex-wrap justify-content-end " style={{ marginRight: '7rem' }}  >
              <a
                href="/resume.pdf"
                download
                className="btn text-white"
                style={{
                  backgroundColor: 'transparent',
                  border: '2px solid white',
                  padding: '0.5rem 2rem',
                  borderRadius: '3',
                  fontWeight: '500',
                  transition: 'all 0.3s',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = '#dc3545';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';
                }}
              >
                Download CV
              </a>
              <a
                href="#projects"
                className="btn text-white"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  backgroundColor: 'transparent',
                  border: '2px solid white',
                  padding: '0.5rem 2rem',
                  borderRadius: '3',
                  fontWeight: '500',
                  transition: 'all 0.3s',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = '#dc3545';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';
                }}
              >
                View Projects →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Large name overlay - spans across both sections */}
      <div 
        style={{
          
          position: "absolute",
          top: "30%", // moved upward from center
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "8rem",
          fontWeight: "800",
          color: "rgba(255, 255, 255, 0.2)", // darker overlay
          zIndex: 10,
          width:'100%',
          whiteSpace: "nowrap",
          letterSpacing: "-0.02em",
          textTransform: "uppercase",
          pointerEvents: "none",
          textAlign:'center'
        }}
      >
        <h1 
          className="m-0"
          style={{
            fontFamily: " BBH Sans Bartle,sans-serif",
            fontSize: '6rem',
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            letterSpacing: '0.02em'
          }}
        >
          <span style={{ color: 'rgba(255, 255, 255, 0.51)', textShadow: '2px 2px 4px rgba(43, 42, 42, 0.5)' }}>Blesson KB</span>
          
        </h1>
      </div>

      {/* Author photo - overlays everything */}
      <div 
        style={{
          position: 'absolute',
          left: '27%',
          top: '65%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '750px',
          zIndex: 100,
          pointerEvents: 'none'
        }}
      >
        <img
          src="/blesson2.png"
          alt="Blesson KB"
          style={{
            width: '110%',
            height: '110%',
            objectFit: 'cover',
            filter: 'grayscale(40%)',
            opacity: 0.95
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
