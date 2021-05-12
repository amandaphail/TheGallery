import "./CSS/galleryform.css"
import {useState} from "react"
import { createGallery, updateGallery } from "../services/galleries"

export default function GalleryForm(props) {

  // let setFrameNumber = props.setFrameNumber
  let galleryID = props.galleryID
  let setGalleryID = props.setGalleryID

  const [gallery, setGallery] = useState({
    number_of_frames: 4,
    wall_color: "#000000"
  })


  function handleChange(event) {
    let { id, value } = event.target
    setGallery((prevState) => ({
      ...prevState, [id]: value
    }))
    
  }
  // console.log(gallery)
  async function handleSubmit(event) {
    event.preventDefault()
    const yourGallery = await createGallery(gallery)
    setGalleryID(yourGallery.id)
    // history push to gallery display page?
    
  }

// with conditional in handle submit function

  // async function update () {
  //   console.log(galleryID)
  //   await updateGallery(galleryID, gallery)
  //   console.log("update button works")
  //   console.log(galleryID)
  // }

  // async function create(){
  //   const yourGallery = await createGallery(gallery)
  //   setGalleryID(yourGallery.id)
  // }

  
  console.log(galleryID)
  
  const button = () => {
    // if (galleryID) {
    //   return (<button onclick={update()}>Update</button>)
    // } else {
    //   return (
      return  <input type="submit"/>
        // )
    
  }

  const update = () => {
    console.log(galleryID)
    updateGallery(galleryID, gallery)
    console.log("update button works")
    console.log(galleryID)
  }

  return (
    <div>
      <form id="gsform" onSubmit={handleSubmit}>
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
          {/* <input type="submit" /> */}
          {button()}
        </div>
        
      </form>
    </div>
  )
}
