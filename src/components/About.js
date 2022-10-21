import React from 'react';
import profilePic from '../img/profile-picture.jpg';

export default function About() {
    return (
        <div id='about--section'>
          <div className='about--info'>
            <h2>About</h2>
            <p>I am a self-taught Front-End Web Developer from Southern California. I am a life-long learner who loves to work hard.
              <br/>
              <br/>
              Outside of development, I enjoy spending time with my family, exercising, and reading.
            </p>
            <a 
              id='resume' 
              rel="noreferrer" 
              href='https://docs.google.com/document/d/1ZlQVLzFa9W15Wjag3j6H95UThhCNS5dcfkvDOqQ5o9s/edit?usp=sharing' 
              target='_blank'>
              View Resume
            </a>
          </div>

            <img class='profile-picture' src={profilePic} alt="Duck"/>

      </div>
    )
}