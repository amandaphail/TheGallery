import "./CSS/gallerycontent.css"
import FourFrames from "./GalleryTemplates/FourFrames.jsx"
import desk from "../images/desk.png"

export default function GalleryContent() {
  return (
    <div id = "content">
      <div>
        <FourFrames />
        Template
        </div>
        <div>
        {/* desk image */}
        <img id ="desk" src={desk} />
        {/* <a href="https://lovepik.com/images/png-book.html">Book Png vectors by Lovepik.com</a> */}
        {/* Desk Image  */}
        </div>
    </div>
  )
}
