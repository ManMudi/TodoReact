import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <>
      <Navbar style={{backgroundColor:'#3baaea'}} data-bs-theme="dark">
      <Container>
      <Navbar.Brand href="/">ZanTechnologies</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href='/'>Home</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/">Mohamed</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       </>
    );
};

export default Header;