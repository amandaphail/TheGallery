import "./CSS/gallerycontent.css"
import FourFrames from "./GalleryTemplates/FourFrames.jsx"
import desk from "../images/desk.png"

export default function GalleryContent(props) {
  
  let frameNumber = props.frameNumber

  console.log(`Content: ${frameNumber}`)

  return (
    <div id = "content">
      <div>
        <FourFrames />
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
