export default function Projects(props) {
    return (
        <div id='project--section'>
        <h2>My Projects</h2>
        <div className='projects--container'>
          {props.projectElements}
        </div>
      </div>
    )
}