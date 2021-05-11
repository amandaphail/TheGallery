import "./CSS/gallerydisplay.css"
import ImagesForm from "../components/ImagesForm.jsx"
import GalleryContent from "../components/GalleryContent.jsx"

export default function GalleryDisplay(props) {
  let frameNumber = props.frameNumber

  return (
    <div id="gallerydisplay">
      
      <div id="contentcontainer">
        <GalleryContent frameNumber={frameNumber} galleryID={props.galleryID}/>
      </div>

      <ImagesForm frameNumber={frameNumber} galleryID={props.galleryID}/>
      {/* <form>
        <div id="displayform">
        <label>1: </label>
        <input className="displayinput" type="text"/>

        <label> 2: </label>
        <input className="displayinput" type="text"/>

        <label> 3: </label>
        <input className="displayinput" type="text"/>

        <label> 4: </label>
        <input className="displayinput" type="text"/>
        </div>
      </form> */}
    </div>
  )
}
