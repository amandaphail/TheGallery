import "./CSS/imagesform.css"
import { useState, useEffect } from "react"
import { postImage } from "../services/images.jsx"
import { getGallery } from "../services/galleries.jsx"

export default function ImagesForm(props) {
  let galleryID = props.galleryID
  let setDisplay = props.setDisplay
  const [gallery, setGallery] = useState({})
  
  //extract number of frames from gallery ID
  async function yourGallery(id) {
      let galleryInfo = await getGallery(id)
      // console.log(galleryInfo)
    await setGallery(galleryInfo)
    // await setDisplay(galleryInfo)
    
  }

  useEffect(() => {
    yourGallery(galleryID)
     //eslint-disable-next-line
  }, [props])
  
  //attach images to gallery and display
  const [images, setImages] = useState([])
  

  useEffect(() => {
    let sampleData = []
    for (let i = 1; i <= gallery.number_of_frames; i++){
      sampleData.push({
           url: "",
           position: i,
           frame_color: "#000000"
      })
    }
    setImages(sampleData)
  }, [gallery])
  
  useEffect(() => {
    setDisplay("null")
     //eslint-disable-next-line
  },[galleryID])
  
  function handleChange(event) {
    let { id, value, type } = event.target
    let foundImage = images.find((image) => {
      return image.position === Number(id)
    })
    let copy = foundImage
  
    if (type === "text"){
      copy.url = value
    } else if (type === "color") {
      copy.frame_color = value
    }    
    
    setImages((prevState) => {
      return prevState.map((item) => {
        if (item.position === copy.position) {
          return copy
        } else {
          return item
        }
      })
    })

  }

  // console.log(images)

  async function handleSubmit(event) {
    event.preventDefault()
    await Promise.all(images.map( async (img) => {
      await postImage(galleryID, img)
      return img
    }))
    yourGallery(galleryID)
    setDisplay(galleryID)
  }
  
  

  // console.log(gallery)
  // console.log(gallery.gallery_images[1].position)


  


// input loop
  const displayInput = () => {
    if (galleryID) {
      return [...Array(gallery.number_of_frames)].map((item, i) => {
        // console.log(i)
        return (
          <div id="infoinput">
            <label>{i + 1}</label>
            <input id={i + 1} className="displayinput" type="text" onChange={handleChange} />
            <input id={i + 1} className="displayinput" type="color" onChange={handleChange} />
          </div>
        
        )
      })
    }
  }

 


  return (
    <div id = "imagesform">
       <form id="form" onSubmit={handleSubmit}>
        <div id="displayform">
        
          <div id ="inputs">
            {displayInput()}
          </div>
        
          <div>
            <input className="displayinput" type="submit" />
          </div>
        </div>


      </form>
    </div>
  )
}
