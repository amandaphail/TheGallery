import { Link } from "react-router-dom"
import {useState} from"react"
import "./CSS/nav.css"


export default function Nav() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);    
  const [visible, setVisible] = useState(true);
  // https://www.prwhite.io/blog/sticky-navbar-hides-scroll
  //maybe drop down instead
  // https://www.npmjs.com/package/react-navbar-dropdown

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
