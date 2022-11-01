import { Link } from "react-router-dom";
import fotoPerfil from "../../assests/foto-perfil.jpg";
const Home = () => {
  return (
    <div className="container">
      <div className="card m-3" style={{boxShadow: "#00000066 5px 0px 20px"}}>
        <div className="card-header">
          <img style={{borderRadius: "50%", border: "1px groove #000000", boxShadow: "#00000042 5px 0px 20px"}} src={fotoPerfil} alt="Mi foto de perfil" width={300} height={300} />
        </div>
        <div className="card-body">
          <div>
            <h3>Diego López Beltrán</h3>
            <h4>Full Stack Web Developer</h4>
            <div>
              <h5>Habilidades Técnicas</h5>
              <p>
                JavaScript | Node | Express | Sequelize | MySQL | PostgreSQL | React | Redux | HTML | CSS | Java (8, 11) | Maven | Spring Boot | MongoDB
              </p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <Link to="detail" className="btn btn-primary">Más Información</Link>
        </div>
      </div>
    </div>
  )
}

export default Home;