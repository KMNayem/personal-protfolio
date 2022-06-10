import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icon from '../../Access/icon.png';
import './Nav.css';


function NavScrollExample() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0 text-white"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='text-white' href="#home">Home</Nav.Link>
            <Nav.Link className='text-white' href="#about">About</Nav.Link>
            <Nav.Link className='text-white' href="#project">Project</Nav.Link>
            <Nav.Link className='text-white' href="/blogs">Blogs</Nav.Link>
            <Nav.Link className='text-white' href="#contact">Contact</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;