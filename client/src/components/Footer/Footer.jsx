import { Link } from "react-router-dom";
import FaceBookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CommentIcon from "@mui/icons-material/Comment";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-dark bg-gradient py-4">
        <section className="row">
          <div className="col-4 d-block">
            <h4 className="text-decoration-underline">Redes Sociales</h4>
            <a
              className="mx-3 icon-lk"
              href="https://www.linkedin.com/in/ingdiegolopezb89/"
              target="_blanck"
            >
              <LinkedInIcon />
            </a>
            <a
              className="mx-3 icon-gh"
              href="https://github.com/Saint-Diego"
              target="_blanck"
            >
              <GitHubIcon />
            </a>
            <a
              className="mx-3 icon-fb"
              href="https://www.facebook.com/diego.lopezb1989/"
              target="_blanck"
            >
              <FaceBookIcon />
            </a>
            <a
              className="mx-3 icon-yt"
              href="https://www.youtube.com/channel/UC5ob1CnooXaXfRyhl534aNw"
              target="_blanck"
            >
              <YouTubeIcon />
            </a>
          </div>
          <div className="col-4 d-block">
            <h4 className="text-decoration-underline">Contacto</h4>
            <div className="d-block">
              <PhoneIcon className="me-1" htmlColor="#fff" />
              <a className="link-contactme" href="to:+57 3122878866">
                +57 3122878866
              </a>
            </div>
            <div className="d-block">
              <EmailIcon className="me-1" htmlColor="#fff" />
              <a
                className="link-contactme"
                href="mailto:ing.diegolopezb@gmail.com"
              >
                ing.diegolopezb@gmail.com
              </a>
            </div>
          </div>
          <div className="col-4 d-block">
            <h4 className="text-decoration-underline">Asistencia</h4>
            <CommentIcon className="me-1" htmlColor="#fff" />
            <Link className="link-contactme" to="/contactme">
              Escríbeme
            </Link>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
