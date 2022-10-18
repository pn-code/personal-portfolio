import React from 'react';
import { Helmet } from "react-helmet"
import './App.css';
import SocialMedia from './components/SocialMedia';
import Project from './components/Project';
import projectData from './projectData';
import profilePic from './img/profile-picture.jpg';
import emailIcon from './img/email-icon.svg';

function App() {

  const [projects, setProjects] = React.useState(projectData);

  React.useEffect(() => {
    setProjects(projectData)

  }, [])

  const projectElements = projects.map(project => 
    <Project 
      key={project.id}
      id={project.id} 
      imgSrc={project.imgSrc}
      title={project.title}
      description={project.description}
      codeLink={project.codeLink}
      livePreview={project.livePreview}
    />)

  const copyEmail = (e) => {
    navigator.clipboard.writeText(e.target.textContent);
    alert("Email has been copied.")
  }

  return (
    <div className="App">
      <Helmet>
        <title>Philip's Portfolio</title>
        <meta name='description' content="Philip Nguyen's Personal Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <header>
        <nav id='navbar'>
          <ul>
            <li><a href='#about--section'>About Me</a></li>
            <li><a href='#skills--section'>Skills</a></li>
            <li><a href='#project--section'>My Projects</a></li>
            <li><a href='#contact--section'>Contact</a></li>
          </ul>
        </nav>
      <div id="name--section">
        <h1>Philip Nguyen</h1>
      </div>
      </header>

      <div id='about--section'>
        <img class='profile-picture' src={profilePic} alt="Duck"/>
        <div className='about--info'>
          <h2>About Me</h2>
          <p>I am a Front-End Web Developer from Southern California. I love to learn and work
            on all sorts of projects. 
            <br/>
            <br/>
            In my free time, I love spend time with my family through
            consuming food, watching movies, and playing video games.
          </p>

          <SocialMedia />
        </div>
      </div>
      <div id="skills--section">
        <div className='skills--info'>
          <h2>Skills and Experience</h2>
          <p>Currently, I am able to utilize...</p>
        </div>
        <ul className='skill--list'>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Firebase</li>
        </ul>
        <h2>Furthermore...</h2>
        <p>I pride myself in being a fast and efficient learner, which means I can pick up 
          new skills and hit the ground running.
        </p>
      </div>
      <div id='project--section'>
        <h2>My Projects</h2>
        <div className='projects--container'>
          {projectElements}
        </div>
      </div>
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
          <SocialMedia />
        </div>
        <img className='profile-picture' src={profilePic} alt='profile'/>
      </div>
      <footer>
        <a 
          href='https://github.com/pn-code' 
          target="_blank" 
          rel="noreferrer">
          Created by Philip Nguyen
        </a>
      </footer>
    </div>
  );
}

export default App;
