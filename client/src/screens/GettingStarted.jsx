import "./CSS/gettingstarted.css"
import GalleryForm from "../components/GalleryForm.jsx"

export default function GettingStarted(props) {

  return (
    <div id="gettingstarted">
      <h1 id="h1">
        Getting Started
      </h1>
      
      <div id ="formcontainer">
      <h2 id="h2">Let's talk about the space</h2>
        <GalleryForm setToggle={props.setToggle} setGalleryID={props.setGalleryID} galleryID={props.galleryID}/>
      </div>
    </div>
  )
}
