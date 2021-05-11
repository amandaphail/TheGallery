import "./CSS/gallerydisplay.css"
import ImagesForm from "../components/ImagesForm.jsx"
import GalleryContent from "../components/GalleryContent.jsx"

export default function GalleryDisplay(props) {
  // let frameNumber = props.frameNumber

  return (
    <div id="gallerydisplay">
      
      <div id="contentcontainer">
        <GalleryContent galleryID={props.galleryID}/>
      </div>

      <ImagesForm galleryID={props.galleryID}/>
      
    </div>
  )
}
