import "./CSS/gallerydisplay.css"
import ImagesForm from "../components/ImagesForm.jsx"
import GalleryContent from "../components/GalleryContent.jsx"
import {useState} from "react"

export default function GalleryDisplay(props) {
  const [display, setDisplay] = useState({})

  console.log(display)

  return (
    <div id="gallerydisplay">
      
      <div id="contentcontainer">
        <GalleryContent galleryID={props.galleryID}/>
      </div>

      <ImagesForm galleryID={props.galleryID} setDisplay={setDisplay}/>
      
    </div>
  )
}
