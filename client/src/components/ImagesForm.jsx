import "./CSS/imagesform.css"
import { useState, useEffect } from "react"
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
    // if (id !== 0) {
      let galleryInfo = await getGallery(galleryID)
      // console.log(galleryInfo)
      await setGallery(galleryInfo)
    // }
  }

  useEffect(() => {
    yourGallery(galleryID)

  }, [props])
  
  

  console.log(gallery)
  


  // galleryID!==0 ? console.log(gallery.number_of_frames) :  console.log("No gallery ID yet")  
  



  //attach images to gallery and display
  const [images, setImages] = useState([])
  // {
  //   url: "",
  //   position: id,
  //   frame_color: ""
  // }

  useEffect(() => {
    let sampleData = []
    for (let i = 1; i <= gallery.number_of_frames; i++){
      sampleData.push({
           url: "",
           position: i,
           frame_color: ""
      })
    }
    setImages(sampleData)
  },[gallery])
  
  function handleChange(event) {
    // console.log(images)
    console.dir(event.target.type)
  
    let { id, value } = event.target
    let foundImage = images.find((image) => {
      // console.log(image.position === Number(id))
      return image.position === Number(id)
    })
    let copy = foundImage
    //if text - url, if color - frame color
    copy.url = value
    // console.log(foundImage)
    // let index = images.findIndex((image) => {
    //   return image.position === Number(id)
    // })
    // console.log(index)
    setImages((prevState) => {
      // console.log(images.indexOf(copy))

      // prevState.splice(index, 1)
      return prevState.map((item) => {
        if (item.position === copy.position) {
          return copy
        } else {
          return item
        }
      })
        
    }
    )

  }

  console.log(images)

  async function handleSubmit(event) {
    event.preventDefault()
    await images.map((img) => {
      postImage(galleryID, img)
      return img
    })
    //loop here?
    //image.map
  }


  
// input loop
  const displayInput = () => {
    return [...Array(gallery.number_of_frames)].map((item, i) => {
      // console.log(i)
      return (
        <div>
          <input id={i + 1} className="displayinput" type="text" onChange={handleChange} />
          <input id={i + 1} className="displayinput" type="color" onChange={handleChange} />
      </div>
    )
  })}

 


  return (
    <div>
       <form onSubmit={handleSubmit}>
        <div id="displayform">
        {/* <label>1: </label> */}
          {/* <input id="1" className="displayinput" type="text" onChange={handleChange} />
          id = i --> once loop over

        <label> 2: </label>
        <input id ="2" className="displayinput" type="text" onChange={handleChange}/>

        <label> 3: </label>
        <input id="3" className="displayinput" type="text" onChange={handleChange}/>

        <label> 4: </label>
          <input id="4" className="displayinput" type="text" onChange={handleChange} /> */}
          
          {displayInput()}
        
        <input className="displayinput" type="submit" />
        </div>


      </form>
    </div>
  )
}
