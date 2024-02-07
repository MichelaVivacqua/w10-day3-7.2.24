import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = (props) => (
  <Navbar
    expand="lg"
    data-bs-theme="dark"
    style={{ backgroundColor: "#221f1f" }}
  >
    "
    <Container fluid>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
          alt="logo"
          style={{ width: "150px", height: "auto" }}
        />
      </Link>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="me-auto mb-2 mb-lg-0">
          <Nav.Link href="#" className="nav-link active fw-bold">
            Home
          </Nav.Link>
          <Nav.Link href="#" className="nav-link fw-bold">
            TV Shows
          </Nav.Link>
          <Nav.Link href="#" className="nav-link fw-bold">
            Movies
          </Nav.Link>
          <Nav.Link href="#" className="nav-link fw-bold">
            Recently Added
          </Nav.Link>
          <Nav.Link href="#" className="nav-link fw-bold">
            My List
          </Nav.Link>
          <Link className="nav-link" to="/Setting">
            SETTINGS
          </Link>
        </Nav>
        <div className="d-flex align-items-center text-white">
          <i className="bi bi-search ms-2"></i>
          <div id="kids" className="fw-bold ms-2">
            KIDS
          </div>
          <i className="bi bi-bell ms-2"></i>
          <Link to="/EditProfile">
            <i className="bi bi-person-circle ms-2"></i>
          </Link>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNavbar;
