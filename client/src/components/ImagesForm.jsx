import "./CSS/imagesform.css"
import { useState } from "react"
import {postImage} from "../services/images.jsx"

export default function ImagesForm(props) {

  let frameNumber = props.frameNumber

  console.log(`Image Form: ${frameNumber}`)
// if gallery frame number set - this how many image inputs to have & which gallery template to use
  
  const [image, setImage] = useState([])
  // {
  //   url: ""
  // }
  
  function handleChange(event) {
    let { id, value } = event.target
    setImage((prevState) => ({
      ...prevState, [id]: value
    }))

  }

  console.log(image)
  
  async function handleSubmit(event) {
    event.preventDefault()
    await postImage(image)
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
