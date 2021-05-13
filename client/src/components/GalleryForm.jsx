import "./CSS/galleryform.css"
import {useState, useEffect} from "react"
import { createGallery, updateGallery, getGallery, deleteGallery } from "../services/galleries"

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

  async function handleUpdate(event) {
    event.preventDefault()
    await updateGallery(galleryID, gallery)
    // setGalleryID(yourGallery.id)
    props.setToggle(prevState => !prevState)
    console.log(gallery)
    // history push to gallery display page?
    
  }



  //if !galleryID - then {create()} - this will have create form which calls handle submit
  //if galleryID - then {update()} - this will have update form which calls handle update - also have it populate with what the gallery already is

  // console.log(galleryID)

  useEffect(() => {
    getYourGallery()
     //eslint-disable-next-line
  }, [galleryID])
  //stops infinite loop
  //use this to reset galleryID - sent to ?

  const formDisplay = () => {
    
    if (!galleryID || galleryID === "null") {
      return createForm() 
    } else {
      console.log("You've already created a gallery!")
      return updateForm()
      
    }
  }
    

  const getYourGallery = async () => {
    const info = await getGallery(galleryID);
    await setGallery(info);
    // this is allowing it to populate with what you have already in your gallery?
    console.log(gallery)
  };

  

  const deleteYourGallery = async () => {
    console.log(galleryID)
    await deleteGallery(galleryID)
    console.log(`${galleryID} has been deleted`)
    // setGalleryID("null")
    window.location.reload()
  }

  const createForm = () => {
    return (
      <div>

      <h2>Create</h2>

      <form id="gsform" onSubmit={handleSubmit}>
        <div className="formdivs">
        <label>Number of frames: </label>
        <select id="number_of_frames" form="gsform" value = {gallery.number_of_frames} onChange={handleChange}>
          <option>4</option>
          <option>5</option>
        </select>
        </div>

        <div className="formdivs">
        <label>Wall Color: </label>
          <input type="color" id="wall_color" value={gallery.wall_color} onChange={handleChange}/>
        </div>

        <div className="formdivs">
          <input type="submit"/>
          {/* {button()} */}
        </div>
        
      </form>
      </div>
    )
  }


  const updateForm = () => {
    return (
      <div>
        <h2>Update</h2>
      <form id="gsform" onSubmit={handleUpdate}>
        <div className="formdivs">
        <label>Number of frames: </label>
        <select id="number_of_frames" form="gsform" value = {gallery.number_of_frames} onChange={handleChange}>
          <option>4</option>
          <option>5</option>
        </select>
        </div>

        <div className="formdivs">
        <label>Wall Color: </label>
          <input type="color" id="wall_color" value={gallery.wall_color} onChange={handleChange}/>
        </div>

        <div className="formdivs">
        <input type="submit" />
          {/* {button()} */}
        </div>
        
        </form>
        {/* {deleteButton()} */}
        <button onClick={deleteYourGallery}>Delete</button>
      </div>
    )
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

  
  // console.log(galleryID)
  
  // const button = () => {
  //   // if (galleryID) {
  //   //   return (<button onclick={update()}>Update</button>)
  //   // } else {
  //   //   return (
    
  //     return  <input type="submit"/>
  //       // )
    
  // }

  // const update = () => {
  //   console.log(galleryID)
  //   updateGallery(galleryID, gallery)
  //   console.log("update button works")
  //   console.log(galleryID)
  // }

  return (
    <div>
      {formDisplay()}
      {/* {createForm()} */}
      {/* {updateForm()} */}
      
    </div>
  )
}
