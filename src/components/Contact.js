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
                <p>Please feel free to reach out to me if you have any questions.</p>
                <div className='email--info'>
                    <img src={emailIcon} alt='email icon'/>
                    <button onClick={copyEmail} id='email-btn'>philipnguyen953@gmail.com</button>
                </div>
            </div>
            <img className="contact-img" src={profilePic} alt='contact'/>
        </div>
    )
}