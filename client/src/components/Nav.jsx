import {Link} from "react-router-dom"
import "./CSS/nav.css"


export default function Nav() {
  return (
    <div id="nav">
      <div id="links">

      <Link to="">Home</Link>
      <Link to="">Getting Started</Link>
      <Link to="">Gallery View</Link>
      <a href="https://github.com/amandaphail/TheGallery">
        GitHub
      </a>
      </div>
    </div>
  )
}
