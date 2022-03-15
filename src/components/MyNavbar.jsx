import { Navbar, Nav,Container} from "react-bootstrap";





const myNavbar = ()=>(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
 <a href="google.com"> <Navbar.Brand href="#home">Home</Navbar.Brand></a>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
     <a href="google.com"> <Nav.Link href="#features">About</Nav.Link></a>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
     
    </Nav>
    <Nav className="ml-auto">
      <Nav.Link href="#deets">Browser</Nav.Link>
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
)
export default myNavbar