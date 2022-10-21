export default function Projects(props) {
    return (
        <div id='project--section'>
        <h2>My Projects</h2>
        <div className='projects--container'>
          {props.projectElements}
        </div>
        {/* <a className="see-all-projects" href="https://github.com/pn-code" target="_blank" rel="noreferrer">See All...</a> */}
      </div>
    )
}