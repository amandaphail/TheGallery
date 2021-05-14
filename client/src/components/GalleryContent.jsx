import "./CSS/gallerycontent.css"
import FourFrames from "./GalleryTemplates/FourFrames.jsx"
import FiveFrames from "./GalleryTemplates/FiveFrames.jsx"
import desk from "../images/desk.png"
import { getGallery } from "../services/galleries.jsx"
import{useState, useEffect} from "react"

export default function GalleryContent(props) {
  let galleryID = props.galleryID
  let display = props.display

  

  const [gallery, setGallery] = useState({})
  
  async function yourGallery(id) {
    if (galleryID) {
      let galleryInfo = await getGallery(id)
      await setGallery(galleryInfo)
    } 
  }

  useEffect(() => {
    yourGallery(galleryID)
     //eslint-disable-next-line
  }, [props.galleryID, props.toggle])

  useEffect(() => {
    yourGallery(display)
     //eslint-disable-next-line
  }, [props.display])


  const displayTemplate = () => {
   
    if (gallery.number_of_frames === 4) {
      return <FourFrames gallery={gallery}/>

    } else if (gallery.number_of_frames === 5) {
      return <FiveFrames gallery={gallery}/>
    } 
  }



  const style = {
    background: `${gallery.wall_color}`,
  }

  return (
    <div id="content" style={style}>
      <div id ="frames">
        {displayTemplate()}
        </div>
        <div>
          <img id ="desk" src={desk} alt="desk"/>       
        </div>
    </div>
  )
}
