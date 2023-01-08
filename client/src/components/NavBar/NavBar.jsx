import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import "./NavBar.css";
import CustomizedSwitches from "../CustomizedSwitches/CustomizedSwitches.jsx";

const NavBar = () => {
  
  return (
    // <nav className="navbar navbar-expand-lg">
    //   <div className="container-fluid">
    //     <NavLink to="/" className="link align-middle mx-3 p-2">
    //       <HomeIcon />
    //     </NavLink>
    //     <div className="col-5 d-flex justify-content-end">
    //       <NavLink to="/projects" className="link align-middle mx-3 p-2">
    //         <span className="fw-bold">Proyectos</span>
    //         <ProjectsIcon />
    //       </NavLink>
    //       <NavLink to="/detail" className="link align-middle mx-3 p-2">
    //         <span className="fw-bold">Resumen</span>
    //         <MoreIcon />
    //       </NavLink>
    //       <NavLink to="/about" className="link align-middle mx-3 p-2">
    //         <span className="fw-bold">Acerca de</span>
    //         <InfoIcon />
    //       </NavLink>
    //       <CustomizedSwitches />
    //     </div>
    //   </div>
    // </nav>
    <Navbar className="d-flex align-items-start" expand="lg">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="link align-middle mx-3 p-2">
            <HomeIcon />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link>
              <NavLink to="/" className="link align-middle mx-3 p-2">
                <span className="fw-bold">Home</span>
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/projects" className="link align-middle mx-3 p-2">
                <span className="fw-bold">Proyectos</span>
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/detail" className="link align-middle mx-3 p-2">
                <span className="fw-bold">Resumen</span>
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/about" className="link align-middle mx-3 p-2">
                <span className="fw-bold">Acerca de</span>
              </NavLink>
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Navbar.Brand>
        <CustomizedSwitches />
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
