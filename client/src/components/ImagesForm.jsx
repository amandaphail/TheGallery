import "./CSS/imagesform.css"
import { useState } from "react"
import { postImage } from "../services/images.jsx"
import { getGallery } from "../services/galleries.jsx"

export default function ImagesForm(props) {

  // let frameNumber = props.frameNumber
  let galleryID = props.galleryID

  // console.log(`Image Form: ${frameNumber}`)
  console.log(`Image Form GalleryID: ${galleryID}`)
// if gallery frame number set - this how many image inputs to have & which gallery template to use
  
  const [gallery, setGallery] = useState({})
  
  //extract number of frames from gallery ID
  async function yourGallery(id) {
    if (id !== 0) {
      let galleryInfo = await getGallery(galleryID)
      // console.log(galleryInfo)
      setGallery(galleryInfo)
    }
  }

  yourGallery(galleryID)
  

  console.log(gallery)
  // galleryID!==0 ? console.log(gallery.number_of_frames) :  console.log("No gallery ID yet")  
  



  //attach images to gallery and display
  const [image, setImage] = useState({})
  // {
  //   url: "",
  //   position: id,
  //   frame_color: ""
  // }
  
  function handleChange(event) {
    let { id, value } = event.target
    setImage((prevState) => ({
      ...prevState, position:id, url: value
    }))

  }

  console.log(image)

  async function handleSubmit(event) {
    event.preventDefault()
    await image.map((img) => {
      postImage(galleryID, img)
      return img
    })
    //loop here?
    //image.map
  }


  




  return (
    <div>
       <form onSubmit={handleSubmit}>
        <div id="displayform">
        <label>1: </label>
          <input id="1" className="displayinput" type="text" onChange={handleChange} />
          {/* id = i --> once loop over */}

        <label> 2: </label>
        <input id ="2" className="displayinput" type="text" onChange={handleChange}/>

        <label> 3: </label>
        <input id="3" className="displayinput" type="text" onChange={handleChange}/>

        <label> 4: </label>
        <input id="4" className="displayinput" type="text" onChange={handleChange}/>
        
        <input className="displayinput" type="submit" />
        </div>


      </form>
    </div>
  )
}
