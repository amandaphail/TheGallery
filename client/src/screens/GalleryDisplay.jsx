import "./CSS/gallerydisplay.css"

export default function GalleryDisplay() {
  return (
    <div id="gallerydisplay">
      Gallery Display
       
      <div id="contentcontainer">
        <div>
          look
          {/* <GalleryContent /> */}
        </div>
        <div>
          {/* desk image */}
        </div>
      </div>

      <form>
        <div id="displayform">
        <label>Image 1: </label>
        <input className="displayinput" type="text"/>

        <label>Image 2: </label>
        <input className="displayinput" type="text"/>

        <label>Image 3: </label>
        <input className="displayinput" type="text"/>

        <label>Image 4: </label>
        <input className="displayinput" type="text"/>
        </div>
      </form>
    </div>
  )
}
