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
    // let yourGallery = created
    // console.log(yourGallery)
    // console.log(yourGallery.number_of_frames)

    // setFrameNumber(yourGallery.number_of_frames)

    
    // console.log(typeof yourGallery.number_of_frames)
    // yourGalleryID(yourGallery.id)
    //setFrameNumber(yourGallery.number_of_frames) --> useState on higher level that frameNumber applies to images form = number of image inputs
  }

  

  // async function yourGalleryID(id) {
  //   console.log(`your gallery's id: ${id}`)
  //   let createdGallery = await getGallery(id)
  //   console.log(createdGallery)
  // }
  // console.log(galleryID)
  
  const button = () => {
    if (galleryID) {
      return (<button onclick={update()}>Update</button>)
    } else {
      return (
        <input type="submit"/>
        )
    }
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
