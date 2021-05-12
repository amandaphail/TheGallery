import React from 'react'
import "./CSS/frames.css"

export default function FourFrames(props) {

  let gallery = props.gallery
  console.log(gallery)

  return (
    <div id="framescontainer">
      <div id ="one">
        1
      </div>
      <div id="two">
        2   
      </div>
      <div id="three">
        3 
      </div>
      <div id="four">
        4  
      </div>
      <div id="five">
        5  
      </div>

    </div>
  )
}
