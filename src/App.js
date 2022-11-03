import React from 'react';
import { Helmet } from "react-helmet"
import './App.css';
import titleIcon from './img/web-icon.svg'
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Project from './components/Project';
import projectData from './projectData';
import Contact from './components/Contact';
import Footer from './components/Footer';

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

  return (
    <div className="App">
      <Helmet>
        <title>Philip Nguyen</title>
        <meta name='description' content="Philip Nguyen's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
        <link rel="icon" href={titleIcon} type="svg"/>
      </Helmet>
    <Navbar />
    <main className='main'>
      <About />
      <Skills />
      <Projects projectElements={projectElements}/>
      <Contact />
    </main>
    <Footer />
    </div>
  );
}

export default App;
