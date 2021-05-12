import React from 'react'
import "./CSS/frames.css"

export default function FourFrames(props) {

  let gallery = props.gallery
  // console.log(gallery.gallery_images[0].frame_color)
  console.log(gallery)

  const templateDisplay = () => {
    if (gallery) {
      return gallery.gallery_images.map((item, index) => {
        let foundImage = gallery.images.find((image) => {
          return image.id === item.image_id
        })
        return (<div className={`_${index + 1 }`}>
          <img className={`img-${index + 1}`}src = {foundImage.url}/>
      </div>)
      }

      )

    }
  }

  // const templateDisplay = () => {
  //   if (gallery) {
  //     console.log("gallery")
  //     return (
  //       <>
  //         <div id="one">
  //           {templateOne()}
  //     </div>
  //     <div id="two">
  //           {templateTwo()}
  //     </div>
  //     <div id="three">
  //           {templateThree()}
  //     </div>
  //     <div id="four">
  //            {templateFour()}
  //     </div>
  //         <div id="five">
  //            {templateFive()}
  //           </div>
  //         </>
  //     )

  //   } 
  // }
  // let one = () =>{
  // if (gallery.gallery_images) {
    // let one = gallery.gallery_images[0].frame_color
//     return one
//   // }
// }

  // const styleOne = {
  //   border: `5px solid ${one}`,
  // }

    
  

  const templateOne = () => {
    if (gallery.images[0]) {
      // console.log("one")
        return <img id="img-one" src={gallery.images[0].url}  /> 
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
