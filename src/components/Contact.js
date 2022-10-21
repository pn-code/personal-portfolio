import emailIcon from '../img/email-icon.svg';
import profilePic from '../img/profile-picture.jpg';

export default function Contact() {
    const copyEmail = (e) => {
        navigator.clipboard.writeText(e.target.textContent);
        alert("Email has been copied.")
      }
    return (      
        <div id='contact--section'>
            <div className='contact--info'>
                <h2>Contact</h2>
                <p>Please take some time to look at my projects above.</p>
                <p>If you think that our work together could be mutually beneficial, please feel free
                    to reach out to me.</p>
                <div className='email--info'>
                    <img src={emailIcon} alt='email icon'/>
                    <button onClick={copyEmail} id='email-btn'>philipnguyen953@gmail.com</button>
                </div>
            </div>
            <img className='profile-picture' src={profilePic} alt='profile'/>
        </div>
    )
}