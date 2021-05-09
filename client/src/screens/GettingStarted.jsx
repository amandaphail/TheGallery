import "./CSS/gettingstarted.css"
import GalleryForm from "../components/GalleryForm.jsx"

export default function GettingStarted() {
  return (
    <div id="gettingstarted">
      <h1>
        Getting Started
      </h1>
      
      <div id ="formcontainer">
      <h4>Let's talk about the space</h4>
      <GalleryForm />
      {/* <form id="gsform">
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
        
      </form> */}
      </div>
    </div>
  )
}
