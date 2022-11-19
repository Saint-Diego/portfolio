import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MoreIcon from "@mui/icons-material/MoreHoriz";
import ProjectsIcon from "@mui/icons-material/AccountTree";
import "./NavBar.css";
import CustomizedSwitches from "../CustomizedSwitches/CustomizedSwitches.jsx";

const NavBar = () => {
  
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink to="/" className="link align-middle mx-3 p-2">
          <HomeIcon />
        </NavLink>
        <div className="col-5 d-flex justify-content-end">
          <NavLink to="/projects" className="link align-middle mx-3 p-2">
            <span className="fw-bold">Proyectos</span>
            <ProjectsIcon />
          </NavLink>
          <NavLink to="/detail" className="link align-middle mx-3 p-2">
            <span className="fw-bold">Resumen</span>
            <MoreIcon />
          </NavLink>
          <NavLink to="/about" className="link align-middle mx-3 p-2">
            <span className="fw-bold">Acerca de</span>
            <InfoIcon />
          </NavLink>
          <CustomizedSwitches />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
