import githubIcon from '../img/github-icon.svg';
import linkedinIcon from '../img/linkedin-icon.svg';

const SocialMedia = () => {
    return (
        <div className="social-media--container">
                <a href="https://github.com/pn-code" target="_blank" rel="noreferrer" >
                    <img src={githubIcon} alt="Philip's GitHub"/>
                </a>
                <a href="https://www.linkedin.com/in/philip-nguyen-92b6671b0/" target="_blank" rel="noreferrer" >
                    <img src={linkedinIcon} alt="Philip's LinkedIn"/>
                </a>
        </div>
    )
}

export default SocialMedia;