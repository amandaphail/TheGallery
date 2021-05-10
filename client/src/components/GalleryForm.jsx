import "./CSS/galleryform.css"
import {useState} from "react"

export default function GalleryForm() {

  const [gallery, setGallery] = useState({
    number_of_frames: 4,
    wall_color: ""
  })


  function handleChange(event) {
    let { id, value } = event.target
    setGallery((prevState) => ({
      ...prevState, [id]: value
    }))
  }

  function handleSubmit() {
    
  }

  return (
    <div>
      <form id="gsform">
        <div className="formdivs">
        <label>Number of frames: </label>
        <select id="number_of_frames" form="gsform" value = {gallery.number_of_frames} onChange={handleChange}>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
        </select>
        </div>

        <div className="formdivs">
        <label>Wall Color: </label>
          <input type="color" id="wall_color" value={gallery.wall_color} onChange={handleChange}/>
        </div>

        <div className="formdivs">
        <input type="submit"/>
        </div>
        
      </form>
    </div>
  )
}
