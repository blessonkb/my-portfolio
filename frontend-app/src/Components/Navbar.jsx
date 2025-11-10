import { Nav, Navbar, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar 
      expand="lg" 
      className="fixed-top" 
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000
      }}
    >
      <Container>
        <Navbar.Brand 
          href="#home" 
          style={{ 
            color: 'white', 
            fontSize: '1.5rem', 
            fontWeight: 'bold',
            fontFamily: "'Asimovian', sans-serif"
          }}
        >
          BK.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              href="#home" 
              style={{ color: 'white', marginLeft: '1.5rem' }}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              href="#about" 
              style={{ color: 'white', marginLeft: '1.5rem' }}
            >
              About
            </Nav.Link>
            <Nav.Link 
              href="#skills" 
              style={{ color: 'white', marginLeft: '1.5rem' }}
            >
              Skills
            </Nav.Link>
            <Nav.Link 
              href="#projects" 
              style={{ color: 'white', marginLeft: '1.5rem' }}
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              href="#contact" 
              style={{ color: 'white', marginLeft: '1.5rem' }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

