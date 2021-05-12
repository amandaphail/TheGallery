import "./CSS/gallerycontent.css"
import FourFrames from "./GalleryTemplates/FourFrames.jsx"
import FiveFrames from "./GalleryTemplates/FiveFrames.jsx"
import desk from "../images/desk.png"
import { getGallery } from "../services/galleries.jsx"
import{useState, useEffect} from "react"

export default function GalleryContent(props) {
  
  // let frameNumber = props.frameNumber
  let galleryID = props.galleryID

  // console.log(`Content GalleryID: ${galleryID}`)
  
  //extract number of frames from galleryID
  //extract wall color from galleryID
  

  const [gallery, setGallery] = useState({})
  
  //extract number of frames from ID
  async function yourGallery(id) {
  
    let galleryInfo = await getGallery(id)
    // console.log(galleryInfo)
    await setGallery(galleryInfo)
  }

  useEffect(() => {
    yourGallery(galleryID)
  }, [props])

  // console.log(gallery.sumber_of_frames)
  // console.log(gallery.number_of_frames)

  const displayTemplate = () => {
    if (gallery.number_of_frames === 4) {
      return <FourFrames />

    } else if (gallery.number_of_frames === 5) {
      return <FiveFrames />
    }
  }


  const style = {
    background: `${gallery.wall_color}`,
    //going to make this galler.wall_color
  }

  return (
    <div id="content" style={style}>
      <div>
        {displayTemplate()}
        </div>
        <div>
       
        <img id ="desk" src={desk} alt="desk"/>
        
        </div>
    </div>
  )
}
