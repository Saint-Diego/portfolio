import "./Detail.css";
import data from "../../detail-cv.json";

const Detail = () => {
  return (
    <div className="container contenedor-principal text-start">
      <div className="informacion-general">
        <div className="descripcion">
          <h2 className="descripcion-profesional">{data.proffesion}</h2>
          <h1>{`${data.firstName} ${data.lastName}`}</h1>
          <p className="descripcion-detalle">{data.description}</p>
        </div>
        <div className="proyectos">
          <h3 className="titulo-seccion-principal">Proyectos</h3>
          <ol className="lista-proyectos">
            {data.projects.map((p, idx) => (
              <li key={`project-${idx + 1}`}>
                <a href={p.url} target="_blank" rel="noreferrer">
                  {p.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
        <div className="experiencia-laboral">
          <h3 className="titulo-seccion-principal">Experiencia Laboral</h3>
          {data.workExperience.map((we, idx) => (
            <div key={`work-exp-${idx + 1}`}>
              <h4 className="cargo-laboral">
                {`${we.jobTitle} `}
                <span className="empresa">{we.company}</span>
              </h4>
              <p className="periodo-empresa">
                {`${we.date.start} - ${we.date.end}`}
                <span className="barra-separadora-periodo">{` | `}</span>
                {we.location.country}
              </p>
              <ul className="lista-experiencia">
                {we.functions.map((value, idx) => (
                  <li key={`function-${idx + 1}`}>{value}</li>
                ))}
                {we.achievements?.length > 0 &&
                  we.achievements.map((value, idx) => (
                    <li key={`achievement-${idx + 1}`}>{value}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="educacion">
          <h3 className="titulo-seccion-principal">Educación</h3>
          {data.education.map((e, idx) => (
            <div key={`education-${idx + 1}`}>
              <h4 className="empresa">{e.entity}</h4>
              <h5 className="carrera-educativa">{e.title}</h5>
              <p className="periodo-empresa">
                {`${e.date.start} - ${e.date.end}`}
                <span className="barra-separadora-periodo">{` | `}</span>
                {e.location.country}
              </p>
            </div>
          ))}
        </div>
      </div>
      <aside className="informacion-lateral">
        <img
          src={data.perfil.image}
          alt="Mi foto de perfil"
          width="370"
          height="354"
        />
        <div className="contactos">
          <h3 className="titulo-lateral">Contactos</h3>
          <div>
            <span className="tipo-contacto">C:</span>
            <a
              className="contacto-info"
              href={`tel:${data.perfil.contacts.phone}`}
            >
              {data.perfil.contacts.phone}
            </a>
          </div>
          <div>
            <span className="tipo-contacto">E:</span>
            <a className="contacto-info" href={`${data.perfil.contacts.email}`}>
              {data.perfil.contacts.email}
            </a>
          </div>
        </div>
        <div className="habilidades-tecnicas">
          <h3 className="titulo-lateral">Habilidades Técnicas</h3>
          <ul className="lista-lateral">
            {data.perfil.techSkill.map((ts, idx) => (
              <li>
                <span
                  key={`tech-skill-${idx + 1}`}
                  className="elemento-lista-lateral"
                >
                  {ts}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="habilidades-blandas">
          <h3 className="titulo-lateral">Habilidades Blandas</h3>
          <ul className="lista-lateral">
            {data.perfil.softSkill.map((ss, idx) => (
              <li>
                <span
                  key={`soft-skill-${idx + 1}`}
                  className="elemento-lista-lateral"
                >
                  {ss}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Detail;
