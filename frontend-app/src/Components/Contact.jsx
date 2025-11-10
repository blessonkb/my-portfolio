const Contact = () => {
  const contacts = [
    {
      icon: "fab fa-github",
      title: "GitHub",
      link: "https://github.com/blessonkb",
      text: "View my work",
    },
    {
      icon: "fab fa-linkedin-in",
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/blesson-kb-1b61862b3/",
      text: "Connect with me",
    },
    {
      icon: "fas fa-envelope",
      title: "Gmail",
      // ✅ Opens Gmail in compose mode, ready to send to your address
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=blesonkb1@gmail.com&su=Let's%20Connect&body=Hi%20Blesson%2C%0D%0A%0D%0AI'd%20love%20to%20connect%20with%20you%20regarding...",
      text: "Send an email",
    },
    {
      icon: "fab fa-instagram",
      title: "Instagram",
      link: "https://www.instagram.com/yourprofile",
      text: "Follow me",
    },
  ];

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#fff",
        padding: "6rem 0",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container text-center">
        <h2
          style={{
            fontSize: "2.8rem",
            fontWeight: "700",
            color: "#111",
            marginBottom: "1rem",
            letterSpacing: "0.5px",
          }}
        >
          Get in Touch
        </h2>

        <p
          style={{
            color: "#666",
            fontSize: "1.05rem",
            marginBottom: "4rem",
          }}
        >
          Let’s turn ideas into reality together.
        </p>

        <div className="row justify-content-center">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="col-6 col-md-3 mb-4 d-flex flex-column align-items-center"
            >
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#111",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    backgroundColor: "#fafafa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow:
                      "0 4px 10px rgba(0, 0, 0, 0.05), inset 0 0 0 2px rgba(245, 2, 2, 0.05)",
                    transition: "all 0.3s ease-in-out",
                    marginBottom: "1.2rem",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 20px rgba(245, 2, 2, 0.15), inset 0 0 0 2px rgba(245, 2, 2, 0.1)";
                    e.currentTarget.style.backgroundColor = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 10px rgba(0, 0, 0, 0.05), inset 0 0 0 2px rgba(245, 2, 2, 0.05)";
                    e.currentTarget.style.backgroundColor = "#fafafa";
                  }}
                >
                  <i
                    className={contact.icon}
                    style={{
                      fontSize: "2rem",
                      color: "#f50202",
                    }}
                  ></i>
                </div>

                <h5
                  style={{
                    fontSize: "0.95rem",
                    color: "#f50202",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBottom: "0.4rem",
                    fontWeight: "600",
                  }}
                >
                  {contact.title}
                </h5>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#333",
                    marginBottom: "0.3rem",
                  }}
                >
                  {contact.text}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
