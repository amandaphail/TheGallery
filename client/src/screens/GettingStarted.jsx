import "./CSS/gettingstarted.css"
import GalleryForm from "../components/GalleryForm.jsx"

export default function GettingStarted(props) {

  return (
    <div id="gettingstarted">
      <h1>
        Getting Started
      </h1>
      
      <div id ="formcontainer">
      <h4>Let's talk about the space</h4>
        <GalleryForm setToggle={props.setToggle} setGalleryID={props.setGalleryID} galleryID={props.galleryID}/>
      </div>
    </div>
  )
}
