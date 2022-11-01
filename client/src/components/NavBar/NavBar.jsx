import { NavLink } from "react-router-dom";

const NavBar = () => {
  
  return (
    <nav className="navbar navbar-expand-lg" style={{background: "#000000b3!important"}}>
      <div className="container-fluid">
        <NavLink to="/" className="btn btn-success navbar-brand">
          <span className="fw-bold">Inicio</span>
        </NavLink>
        <div className="col-5 d-flex justify-content-end">
          <NavLink to="/projects" className="btn btn-outline-success m-2">
            <span className="fw-bold">Proyectos</span>
          </NavLink>
          <NavLink to="/detail" className="btn btn-outline-success m-2">
            <span className="fw-bold">Resumen</span>
          </NavLink>
          <NavLink to="/about" className="btn btn-outline-success m-2">
            <span className="fw-bold">Acerca de</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
