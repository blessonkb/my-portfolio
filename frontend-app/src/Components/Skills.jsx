const Skills = () => {
  const skills = [
    {
      name: "React",
      level: 90,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "JavaScript",
      level: 85,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Node.js",
      level: 80,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      level: 85,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      level: 75,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Tailwind CSS",
      level: 90,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "CSS/Bootstrap",
      level: 90,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "HTML5",
      level: 95,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    
    {
      name: "Python",
      level: 65,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    
    
    {
      name: "Git",
      level: 85,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "Postman",
      level: 80,
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    },
    {
      name: "Docker",
      level: 75,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Kubernetes",
      level: 70,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    },
    {
      name: "Figma",
      level: 95,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
  ];

  return (
    <section
      id="skills"
      style={{
        backgroundColor: "#f9f9f9",
        padding: "5rem 0",
        minHeight: "100vh",
      }}
    >
      <div className="container text-center">
        <h2
          style={{
            fontSize: "2.3rem",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "3rem",
          }}
        >
          Skills & Technologies
        </h2>

        <div className="row justify-content-center gx-3 gy-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="col-6 col-md-4 col-lg-2 d-flex justify-content-center"
            >
              <div
                className="d-flex flex-column align-items-center justify-content-center"
                style={{
                  width: "130px",
                  height: "170px",
                  borderRadius: "40px",
                  background: "#fff",
                  boxShadow:
                    "3px 3px 8px rgba(0,0,0,0.07), -3px -3px 8px rgba(255,255,255,0.9)",
                  transition: "all 0.3s ease-in-out",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "6px 6px 12px rgba(0,0,0,0.1), -4px -4px 10px rgba(255,255,255,1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "3px 3px 8px rgba(0,0,0,0.07), -3px -3px 8px rgba(255,255,255,0.9)";
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: "#f4f4f4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                    boxShadow:
                      "inset 2px 2px 4px rgba(0,0,0,0.05), inset -2px -2px 4px rgba(255,255,255,0.8)",
                  }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    style={{
                      width: "35px",
                      height: "35px",
                      filter:
                        skill.name === "Express.js" ||
                        skill.name === "Git" ||
                        skill.name === "Git/GitHub"
                          ? "invert(1)"
                          : "none",
                    }}
                  />
                </div>

                {/* Percentage */}
                <h4
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: "600",
                    color: "#2b2b2b",
                    marginBottom: "5px",
                  }}
                >
                  {skill.level}%
                </h4>

                {/* Skill Name */}
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#555",
                    fontWeight: "500",
                    margin: "0",
                  }}
                >
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
