import "./CSS/frames.css"
import {useEffect} from "react"

export default function FourFrames(props) {

  let gallery = props.gallery
  // console.log(gallery.images[0].url)

  // useEffect(() => {
  //  templateDisplay() 
  // },[props.gallery.images])
  
  const templateDisplay = () => {
    
    if (gallery) {
    
      // if (gallery.images = []) {
      //   return (
      //     <div id="template">
      //       <div className="_1">1</div>
      //       <div className="_2">2</div>
      //       <div className="_3">3</div>
      //       <div className="_4">4</div>
      //     </div>
      //   )
      // } else {

        return gallery.gallery_images.map((item, index) => {
          // console.log(item.frame_color)

          let foundImage = gallery.images.find((image) => {
            // console.log(image)
            return image.id === item.image_id
          })

       
          return (
            <div key={index} className={`_${index + 1}`}>
              <img alt="Input in gallery" className={`img-${index + 1}`} src={foundImage.url} style={{ border: `3px solid ${item.frame_color}` }} />
            </div>
          )
        })
      // }
    } 
  }
  
  return (
    
    <div id="framescontainer">
      {templateDisplay()}
    </div>
  )
}

//   const templateDisplay = () => {
//     if (gallery) {
//       console.log("gallery")
//       return (
//         <>
//           <div id="one">
//             {templateOne()}
//       </div>
//       <div id="two">
//             {templateTwo()}
//       </div>
//       <div id="three">
//             {templateThree()}
//       </div>
//       <div id="four">
//              {templateFour()}
//       </div>
//           </>
//       )

//     } 
//   }

//   const templateOne = () => {
//     if (gallery.images[0]) {
//       // console.log("one")
//         return <img id="img-one" src={gallery.images[0].url} /> 
//     }
//   }

//   const templateTwo = () => {
//     if (gallery.images[1]) {
//       // console.log("one")
//         return <img id="img-two" src={gallery.images[1].url} /> 
//     }
//   }

//   const templateThree = () => {
//     if (gallery.images[2]) {
//       // console.log("one")
//         return <img id="img-three" src={gallery.images[2].url} /> 
//     }
//   }

//   const templateFour = () => {
//     if (gallery.images[3]) {
//       // console.log("one")
//         return <img id="img-four" src={gallery.images[3].url} /> 
//     }
//   }