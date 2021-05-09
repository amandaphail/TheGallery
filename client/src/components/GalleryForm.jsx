import "./CSS/galleryform.css"

export default function GalleryForm() {
  return (
    <div>
      <form id="gsform">
        <div className="formdivs">
        <label>Number of frames: </label>
        <select>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
        </select>
        </div>

        <div className="formdivs">
        <label>Wall Color: </label>
        <input type="color" />
        </div>
        
      </form>
    </div>
  )
}
