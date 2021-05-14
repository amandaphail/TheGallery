import "./CSS/galleryform.css"
import {useState, useEffect} from "react"
import { createGallery, updateGallery, getGallery, deleteGallery } from "../services/galleries"

export default function GalleryForm(props) {

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
  async function handleSubmit(event) {
    event.preventDefault()
    const yourGallery = await createGallery(gallery)
    setGalleryID(yourGallery.id)
    
  }

  async function handleUpdate(event) {
    event.preventDefault()
    await updateGallery(galleryID, gallery)
    props.setToggle(prevState => !prevState)
    
  }




  useEffect(() => {
    getYourGallery()
     //eslint-disable-next-line
  }, [galleryID])

  const formDisplay = () => {
    
    if (!galleryID || galleryID === "null") {
      return createForm() 
    } else {
      return updateForm()
      
    }
  }
    

  const getYourGallery = async () => {
    if (galleryID) {
      const info = await getGallery(galleryID);
      await setGallery(info);
    }
  };

  

  const deleteYourGallery = async () => {
    await deleteGallery(galleryID)
    window.location.reload()
  }

  const createForm = () => {
    return (
      <div>
      <form id="gsform" onSubmit={handleSubmit}>
        <div className="formdivs">
        <label id="label">Number of frames: </label>
        <select id="number_of_frames" form="gsform" value = {gallery.number_of_frames} onChange={handleChange}>
          <option>4</option>
          <option>5</option>
        </select>
        </div>

        <div className="formdivs">
        <label id="label">Wall Color: </label>
          <input type="color" id="wall_color" value={gallery.wall_color} onChange={handleChange}/>
        </div>

        <div className="formdivs">
          <input id="submit" type="submit"/>
          {/* {button()} */}
        </div>
        
      </form>
      </div>
    )
  }


  const updateForm = () => {
    return (
      <div>
      <form id="gsform" onSubmit={handleUpdate}>
        <div className="formdivs">
        <label id="label">Number of frames: </label>
        <select id="number_of_frames" form="gsform" value = {gallery.number_of_frames} onChange={handleChange}>
          <option>4</option>
          <option>5</option>
        </select>
        </div>

        <div className="formdivs">
        <label id="label">Wall Color: </label>
          <input type="color" id="wall_color" value={gallery.wall_color} onChange={handleChange}/>
        </div>

        <div className="formdivs">
        <input id = "submit"type="submit" />
          {/* {button()} */}
        </div>
        
      </form>
        {/* {deleteButton()} */}
        <div id="delete">
        <p id="label">You can delete your gallery here: </p>
        <button id="submit" onClick={deleteYourGallery}>Delete</button>
        </div>
      </div>
    )
  }


  return (
    <div>
      {formDisplay()}      
    </div>
  )
}
