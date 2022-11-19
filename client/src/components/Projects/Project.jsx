import ViewIcon from "@mui/icons-material/VisibilityOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Project.scss";

const Project = ({ image, name, urlDeploy, urlRepo, status }) => {
  return (
    <>
      <div className="project card bg-transparent border-0 mx-3">
        <div className="card-header bg-transparent border-0">
          <img className="image-project border border-secondary border-2 rounded" src={image} alt="project"/>
        </div>
        <div className="card-body bg-transparent border-0">
          <span className="fw-bold fs-5">{name}</span>
        </div>
        <div className="card-footer bg-transparent border-0">
          <a className="mx-3 icon-gh" href={urlRepo} target="_blanck"><GitHubIcon /></a>
          <a className={`mx-3 icon-gh ${!status ? 'd-none' : ''}`} href={urlDeploy} target="_blanck"><ViewIcon /></a>
        </div>
      </div>
    </>
  )
}

export default Project;