import "./CSS/gallerycontent.css"
import FourFrames from "./GalleryTemplates/FourFrames.jsx"
import desk from "../images/desk.png"

export default function GalleryContent(props) {
  
  // let frameNumber = props.frameNumber
  let galleryID = props.galleryID

  // console.log(`Content: ${frameNumber}`)
  // console.log(`Content GalleryID: ${galleryID}`)
  
//extract number of frames from galleryID
  //extract wall color from galleryID

  return (
    <div id = "content">
      <div>
        <FourFrames />
        </div>
        <div>
        {/* desk image */}
        <img id ="desk" src={desk} alt="desk"/>
        {/* <a href="https://lovepik.com/images/png-book.html">Book Png vectors by Lovepik.com</a> */}
        {/* Desk Image  */}
        </div>
    </div>
  )
}
