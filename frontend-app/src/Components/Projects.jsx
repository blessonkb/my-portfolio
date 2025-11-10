import { Card } from "react-bootstrap";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Doc-Onroad",
      description:
        "Developed DOCONROAD, a PHP-based web application that provides real-time vehicle breakdown assistance with integrated location tracking and secure user authentication.",
      image: "/project1.png",
      liveUrl: "https://example.com",
      tech: ["HTML", "JavaScript", "PHP", "SQL"],
    },
    {
      id: 2,
      title: "Heart Disease Prediction System",
      description:
        "Developed a Python Django web app for cardiovascular disease prediction using a Decision Tree model with 78% accuracy.",
      image: "/project2.jpeg",
      liveUrl: "https://example.com",
      tech: ["HTML", "JavaScript", "Python", "Django", "ML"],
    },
  ];

  return (
    <section
      id="projects"
      style={{
        backgroundColor: "#f50202",
        padding: "5rem 0",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 🩸 Elegant Textured Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(135deg, rgba(255,255,255,0.12), rgba(0,0,0,0.15)),
            repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 10px)
          `,
          zIndex: 0,
        }}
      ></div>

      {/* 💡 Subtle Radial Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "900px",
          height: "900px",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }}
      ></div>

      {/* 🎯 Diagonal Overlay for Structure */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.08) 0%, transparent 70%)",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 85%)",
          zIndex: 1,
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <h2
          className="text-center mb-5"
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "white",
            marginBottom: "4rem",
            letterSpacing: "2px",
            textShadow: "0 2px 6px rgba(0,0,0,0.3)",
          }}
        >
          PROJECTS
        </h2>

        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6 col-sm-12">
              <Card
                style={{
                  backgroundColor: "#ffffff",
                  border: "none",
                  borderRadius: "14px",
                  height: "100%",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease-in-out",
                  cursor: "pointer",
                  maxWidth: "95%",
                  margin: "0 auto",
                }}
                className="project-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0, 0, 0, 0.1)";
                }}
              >
                {/* 🖼️ Image Section */}
                <div
                  style={{
                    width: "100%",
                    height: "160px",
                    overflow: "hidden",
                    borderTopLeftRadius: "14px",
                    borderTopRightRadius: "14px",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                    }}
                  />
                </div>

                {/* 📄 Card Content */}
                <Card.Body style={{ padding: "1.2rem 1.3rem" }}>
                  <Card.Title
                    style={{
                      color: "#222",
                      fontSize: "1.25rem",
                      fontWeight: "700",
                      marginBottom: "0.7rem",
                    }}
                  >
                    {project.title}
                  </Card.Title>
                  <Card.Text
                    style={{
                      color: "#555",
                      fontSize: "0.88rem",
                      lineHeight: "1.5",
                      marginBottom: "1rem",
                    }}
                  >
                    {project.description}
                  </Card.Text>

                  {/* 🏷️ Tech Stack */}
                  <div style={{ marginBottom: "1rem" }}>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: "600",
                        color: "#333",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Tech Stack:
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          style={{
                            backgroundColor: "#f3f3f3",
                            color: "#333",
                            padding: "0.25rem 0.6rem",
                            borderRadius: "5px",
                            fontSize: "0.75rem",
                            fontWeight: "500",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 🔗 Live Button */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#d63031",
                      fontWeight: "600",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#b12727";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#d63031";
                    }}
                  >
                    Go Live →
                  </a>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
