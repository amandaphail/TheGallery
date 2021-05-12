import React from 'react'
import "./CSS/frames.css"

export default function FourFrames(props) {

  let gallery = props.gallery
  // console.log(gallery.images[0].url)

  const templateDisplay = () => {
    if (gallery) {
      console.log("gallery")
      return (
        <>
          <div id="one">
            {templateOne()}
      </div>
      <div id="two">
            {templateTwo()}
      </div>
      <div id="three">
            {templateThree()}
      </div>
      <div id="four">
             {templateFour()}
      </div>
          <div id="five">
             {templateFive()}
            </div>
          </>
      )

    } 
  }

  const templateOne = () => {
    if (gallery.images[0]) {
      // console.log("one")
        return <img id="img-one" src={gallery.images[0].url} /> 
    }
  }

  const templateTwo = () => {
    if (gallery.images[1]) {
      // console.log("one")
        return <img id="img-two" src={gallery.images[1].url} /> 
    }
  }

  const templateThree = () => {
    if (gallery.images[2]) {
      // console.log("one")
        return <img id="img-three" src={gallery.images[2].url} /> 
    }
  }

  const templateFour = () => {
    if (gallery.images[3]) {
      // console.log("one")
        return <img id="img-four" src={gallery.images[3].url} /> 
    }
  }

  const templateFive = () => {
    if (gallery.images[4]) {
      // console.log("one")
        return <img id="img-four" src={gallery.images[4].url} /> 
    }
  }

  return (
    <div id="framescontainer">
      {templateDisplay()}
    </div>
  )

}
