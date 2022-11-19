import { Link } from "react-router-dom";
import NetWork from "@mui/icons-material/LanguageOutlined";
import "./Home.css";

const fotoPerfil = "https://res.cloudinary.com/dah19wrh1/image/upload/v1668044805/dev/assets/perfil/foto-perfil.png";

const Home = () => {
  return (
    <div className="container container-height">
      <div className="card border-0 m-3 bg-transparent">
        <div className="card-header border-0 bg-transparent">
          <img
            className="image-perfil"
            src={fotoPerfil}
            alt="Mi foto de perfil"
          />
        </div>
        <div className="card-body border-0 bg-transparent text-white">
          <div className="info">
            <h1 className="fw-bolder">Diego López Beltrán</h1>
            <div className="d-flex justify-content-center align-middle">
              <NetWork className="bg-info rounded-circle me-1" />
              <h4 className="fw-semibold me-1">Full Stack Web Developer</h4>
              <NetWork className="bg-info rounded-circle me-1"  />
            </div>
            <div>
              <h5 className="fw-semibold">~ Habilidades Técnicas ~</h5>
              <p>
                JavaScript | Node | Express | Sequelize | MySQL | PostgreSQL |
                React | Redux | HTML | CSS | Java (8, 11) | Maven | Spring Boot
                | MongoDB
              </p>
            </div>
          </div>
        </div>
        <div className="card-footer border-0 bg-transparent">
          <Link to="detail" className="btn button-flame">
            Más Información
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
