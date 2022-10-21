import React from 'react';
import profilePic from '../img/profile-picture.jpg';

export default function About() {
    return (
        <div id='about--section'>
        <div className='about--info'>
          <h2>About Me</h2>
          <p>I am a Front-End Web Developer from Southern California. I am a hard worker who enjoys working
            on a variety of projects.
            <br/>
            <br/>
            In my free time, I love spend time with my family through
            consuming food, watching movies, and playing video games.
          </p>
          <a 
            id='resume' 
            rel="noreferrer" 
            href='https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md' 
            target='_blank'>
            View Resume
          </a>
        </div>
        <img class='profile-picture' src={profilePic} alt="Duck"/>
      </div>
    )
}