import linkIcon from "../img/link-icon.svg";
import webIcon from "../img/web-icon.svg";

const Project = (props) => {
    return (
        <div className="project">
            <div className="project-img--container">
                <img className="project-img" src={props.imgSrc} alt={props.title}/>
            </div>
            <div className="project--info">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <div className="project--links">
                    <a target="_blank" rel="noreferrer" href={props.codeLink}><img src={linkIcon} alt="link icon"/></a>
                    <a target="_blank" rel="noreferrer" href={props.livePreview}><img src={webIcon} alt="web application icon"/></a>
                </div>
            </div>
        </div>
    )
} 

export default Project;