import { NavLink } from "react-router-dom";
import Container from "@mui/material/Container";
import Header from "../Header/Header";

const NavBar = () => {
  const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
  ];
  
  return (
    <Container>
      <Header title="Portafolio" sections={sections} />
      <nav className="navbar">
        <NavLink to="/">Inicio</NavLink>
        <div>
          <NavLink to="/projects">Proyectos</NavLink>
          <NavLink to="/resume">Resumen</NavLink>
          <NavLink to="/about">Acerca de</NavLink>
        </div>
      </nav>
    </Container>
  );
};

export default NavBar;
