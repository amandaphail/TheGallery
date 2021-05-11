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
  
  
  async function yourGallery(id) {
    if (id !== 0) {
      let galleryInfo = await getGallery(galleryID)
      console.log(galleryInfo)
    }
  }

  yourGallery(galleryID)
  
  
  const [image, setImage] = useState({})
  // {
  //   url: "",
  //   position: id,
  //   frame_color: ""
  // }
  
  function handleChange(event) {
    let { value } = event.target
    setImage((prevState) => ({
      ...prevState, url: value
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


  //extract number of frames from gallery ID




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
