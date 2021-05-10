import "./CSS/gallerydisplay.css"
import ImagesForm from "../components/ImagesForm.jsx"
import GalleryContent from "../components/GalleryContent.jsx"

export default function GalleryDisplay() {
  return (
    <div id="gallerydisplay">
      
      <div id="contentcontainer">
        <GalleryContent />
      </div>

      <ImagesForm />
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
