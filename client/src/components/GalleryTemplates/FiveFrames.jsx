import React from 'react'
import "./CSS/frames.css"

export default function FourFrames(props) {

  let gallery = props.gallery
  // console.log(gallery.gallery_images[0].frame_color)
  // console.log(gallery)

  const templateDisplay = () => {
    if (gallery) {
      return gallery.gallery_images.map((item, index) => {

        let foundImage = gallery.images.find((image) => {
          return image.id === item.image_id
        })

        return (<div key={index} className={`_${index + 1 }`}>
          <img alt="Input in gallery" className={`img-${index + 1}`} src={foundImage.url} style={{ border: `3px solid ${item.frame_color}` }}/>
      </div>)
      }

      )

    }
  }


  // const templateOne = () => {
  //   if (gallery.images[0]) {
  //     // console.log("one")
  //       return <img id="img-one" src={gallery.images[0].url}  /> 
  //   }
  // }

  // const templateTwo = () => {
  //   if (gallery.images[1]) {
  //     // console.log("one")
  //       return <img id="img-two" src={gallery.images[1].url} /> 
  //   }
  // }

  // const templateThree = () => {
  //   if (gallery.images[2]) {
  //     // console.log("one")
  //       return <img id="img-three" src={gallery.images[2].url} /> 
  //   }
  // }

  // const templateFour = () => {
  //   if (gallery.images[3]) {
  //     // console.log("one")
  //       return <img id="img-four" src={gallery.images[3].url} /> 
  //   }
  // }

  // const templateFive = () => {
  //   if (gallery.images[4]) {
  //     // console.log("one")
  //       return <img id="img-four" src={gallery.images[4].url} /> 
  //   }
  // }

  return (
    <div id="framescontainer">
      {templateDisplay()}
    </div>
  )

}
