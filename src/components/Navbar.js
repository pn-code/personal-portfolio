import SocialMedia from "./SocialMedia"

export default function Navbar() {
    return (
        <nav id='navbar'>
            <div id="name--section">
                <h1>Philip Nguyen</h1>  
            </div>
            <ul>
                <li><a href='#about--section'>About</a></li>
                <li><a href='#project--section'>Projects</a></li>
                <li><a href='#contact--section'>Contact</a></li>
                <li><SocialMedia /></li>
            </ul>
        </nav>
    )
} 