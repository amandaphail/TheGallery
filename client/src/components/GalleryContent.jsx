import "./CSS/gallerycontent.css"
import FourFrames from "./GalleryTemplates/FourFrames.jsx"
import FiveFrames from "./GalleryTemplates/FiveFrames.jsx"
import desk from "../images/desk.png"
import { getGallery } from "../services/galleries.jsx"
import{useState, useEffect} from "react"

export default function GalleryContent(props) {
  let galleryID = props.galleryID
  let display = props.display

  console.log(galleryID, display)
  

  const [gallery, setGallery] = useState({})
  
  //extract number of frames from ID
  async function yourGallery(id) {
    let galleryInfo = await getGallery(id)
    await setGallery(galleryInfo)
  }

  useEffect(() => {
    yourGallery(galleryID)
  }, [props.galleryID])

  useEffect(() => {
    yourGallery(display)
  },[props.display])


  const displayTemplate = () => {
    if (gallery.number_of_frames === 4) {
      return <FourFrames />

    } else if (gallery.number_of_frames === 5) {
      return <FiveFrames />
    }
  }


  console.log(gallery)

  const style = {
    background: `${gallery.wall_color}`,
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
