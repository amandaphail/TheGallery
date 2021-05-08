import "./CSS/footer.css"
import image from "../images/GitHub-Mark-64px.png"
import {Link} from "react-router-dom"

export default function Footer() {
  return (
    <div id="footer">
      <Link to="https://github.com/amandaphail/TheGallery">
        {/* why not working? */}
      <img alt="Github Link" src={image} />
      </Link>
    </div>
  )
}
