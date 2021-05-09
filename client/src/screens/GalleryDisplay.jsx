import "./CSS/gallerydisplay.css"

export default function GalleryDisplay() {
  return (
    <div id="gallerydisplay">
      
       
      <div id="contentcontainer">
        <div>
          {/* <GalleryContent /> */}
        </div>
        <div>
          {/* desk image */}
        </div>
      </div>

      <form>
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
      </form>
    </div>
  )
}
