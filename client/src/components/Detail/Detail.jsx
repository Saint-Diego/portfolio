import "./Detail.css";
import fotoPerfil from "../../assests/foto-perfil.jpg";

const Detail = () => {
  return (
    <div className="container contenedor-principal text-start">
      <div className="informacion-general">
        <div className="descripcion">
          <h2 className="descripcion-profesional">Full Stack Web Developer</h2>
          <h1>Diego López Beltrán</h1>
          <p className="descripcion-detalle">
            Estudié 8 semestres de Ingeniería de Sistemas, efectué seminarios de tecnología bajo una fundación para estudiantes de educación media, también hice labores de mantenimiento correctivo y preventivo para equipos de oficina. Finalicé diplomados con respecto al desarrollo de aplicaciones web.
            Me gusta participar en la realización de actividades, tareas y requerimientos en el desarrollo del software.
            Poder aportar y apoyar con soluciones al equipo de trabajo.
            Mi gran habilidad es la capacidad de aprender, entender y adaptarme muy rápido a las nuevas tecnologías y a los diferentes tipos de ambientes que están relacionas con el mercado tech.
          </p>
        </div>
        <div className="proyectos">
          <h3 className="titulo-seccion-principal">Proyectos</h3>
          <ol className="lista-proyectos">
            <li>
              <a
                href="https://barbershop.goit.global/"
                target="_blank"
                rel="noreferrer"
              >
                https://barbershop.goit.global/
              </a>
              <span className="puntos-suspensivos-proyecto">.....</span>
              <span>[ HTML5, CSS3 ]</span>
            </li>
            <li>
              <a
                href="https://cryptohub.goit.global/"
                target="_blank"
                rel="noreferrer"
              >
                https://cryptohub.goit.global/
              </a>
              <span className="puntos-suspensivos-proyecto">.......</span>
              <span>[ JavaScript ]</span>
            </li>
            <li>
              <a
                href="https://kidslike.goit.global/"
                target="_blank"
                rel="noreferrer"
              >
                https://kidslike.goit.global/
              </a>
              <span className="puntos-suspensivos-proyecto">...........</span>
              <span>[ React.js, Node.js ]</span>
            </li>
          </ol>
        </div>
        <div className="experiencia-laboral">
          <h3 className="titulo-seccion-principal">Experiencia Laboral</h3>
          <div>
            <h4 className="cargo-laboral">
              Front-End Developer <span class="empresa">Freelance</span>
            </h4>
            <p class="periodo-empresa">
              September 2019 - up to now
              <span class="barra-separadora-periodo">{` | `}</span>Country
            </p>
            <ul className="lista-experiencia">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Risus commodo viverra maecenas.</li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </li>
            </ul>
          </div>
          <div>
            <h4 class="cargo-laboral">
              Manager <span class="empresa">Glory New</span>
            </h4>
            <p class="periodo-empresa">
              March 2015 - October 2018
              <span class="barra-separadora-periodo">{` | `}</span>Country
            </p>
            <ul class="lista-experiencia">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod labore et dolore magna aliqua.
              </li>
              <li>Quis ipsum suspendisse ultrices gravida.</li>
              <li>Risus commodo viverra maecenas.</li>
            </ul>
          </div>
          <div>
            <h4 class="cargo-laboral">
              Manager <span class="empresa">Glory LLC</span>
            </h4>
            <p class="periodo-empresa">
              June 2014 - February 2015
              <span class="barra-separadora-periodo">{` | `}</span>Country
            </p>
            <ul class="lista-experiencia">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Quis ipsum suspendisse ultrices gravida.</li>
              <li>Risus commodo viverra maecenas.</li>
            </ul>
          </div>
        </div>
        <div className="educacion">
          <h3 class="titulo-seccion-principal">Educación</h3>
          <div>
            <h4 class="empresa">National University</h4>
            <h5 class="carrera-educativa">Management</h5>
            <p class="periodo-empresa">
              September 2009 - June 2014
              <span class="barra-separadora-periodo">{` | `}</span>Country
            </p>
          </div>
        </div>
      </div>
      <aside className="informacion-lateral">
        <img
          src={fotoPerfil}
          alt="Mi foto de perfil"
          width="370"
          height="354"
        />
        {/* Contactos */}
        <div className="contactos">
          <h3 className="titulo-lateral">Contactos</h3>
          <div>
            <span className="tipo-contacto">C:</span>
            <a className="contacto-info" href="tel:+57 3122878866">
              +57 3122878866
            </a>
          </div>
          <div>
            <span className="tipo-contacto">E:</span>
            <a
              className="contacto-info"
              href="mailto:ing.diegolopezb@gmail.com"
            >
              ing.diegolopezb@gmail.com
            </a>
          </div>
        </div>
        {/* Habilidades técnicas */}
        <div className="habilidades-tecnicas">
          <h3 className="titulo-lateral">Habilidades Técnicas</h3>
          <ul className="lista-lateral">
            <li>
              <span className="elemento-lista-lateral">HTML5</span>
            </li>
            <li>
              <span className="elemento-lista-lateral">CSS3</span>
            </li>
            <li>
              <span className="elemento-lista-lateral">GIT</span>
            </li>
            <li>
              <span className="elemento-lista-lateral">WebPack</span>
            </li>
            <li>
              <span className="elemento-lista-lateral">JavaScript</span>
            </li>
            <li>
              <span className="elemento-lista-lateral">React.js</span>
            </li>
            <li>
              <span className="elemento-lista-lateral">Node.js</span>
            </li>
          </ul>
        </div>
        {/* Habilidades blandas */}
        <div className="habilidades-blandas">
          <h3 className="titulo-lateral">Habilidades Blandas</h3>
          <ul className="lista-lateral">
            <li>
              <span className="elemento-lista-lateral">Scrum</span>
            </li>
            <li>
              <span className="elemento-lista-lateral">Agile</span>
            </li>
            <li>
              <span className="elemento-lista-lateral">GTD</span>
            </li>
            <li>
              <span className="elemento-lista-lateral">Teamwork</span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Detail;
