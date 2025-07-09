import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';


function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="/">The Fog Archives</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/survivors">Survivors</Nav.Link>
        <Nav.Link as={NavLink} to="/killers">Killers</Nav.Link>
        <Nav.Link as={NavLink} to="/builder">Builder</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default AppNavbar;