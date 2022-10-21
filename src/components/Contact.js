
import profilePic from '../img/profile-picture.jpg';
import SocialMedia from './SocialMedia';

export default function Contact() {

    return (      
        <div id='contact--section'>
            <div className='contact--info'>
                <h2>Contact</h2>
                <SocialMedia />
            </div>
            <img className="contact-img" src={profilePic} alt='contact'/>
        </div>
    )
}