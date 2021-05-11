import "./CSS/gallerycontent.css"
import FourFrames from "./GalleryTemplates/FourFrames.jsx"
import desk from "../images/desk.png"
import { getGallery } from "../services/galleries.jsx"
import{useState, useEffect} from "react"

export default function GalleryContent(props) {
  
  // let frameNumber = props.frameNumber
  let galleryID = props.galleryID

  // console.log(`Content: ${frameNumber}`)
  // console.log(`Content GalleryID: ${galleryID}`)
  
  //extract number of frames from galleryID
  //extract wall color from galleryID
  

  // async function yourGallery(id) {
  //   if (id !== 0) {
  //     let galleryInfo = await getGallery(galleryID)
  //     // console.log(galleryInfo)
  //   }
  // }

  // yourGallery(galleryID)

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


  console.log(gallery.wall_color)
  const style = {
    background: `${gallery.wall_color}`,
    //going to make this galler.wall_color
  }

  return (
    <div id="content" style={style}>
      <div>
        <FourFrames />
        </div>
        <div>
       
        <img id ="desk" src={desk} alt="desk"/>
        {/* <a href="https://lovepik.com/images/png-book.html">Book Png vectors by Lovepik.com</a> */}
        </div>
    </div>
  )
}
