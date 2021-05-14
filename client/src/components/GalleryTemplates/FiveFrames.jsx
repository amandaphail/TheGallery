import React from 'react'
import "./CSS/frames.css"

export default function FourFrames(props) {

  let gallery = props.gallery
  // console.log(gallery.gallery_images[0].frame_color)
  // console.log(gallery)

  // const templateDisplay = () => {
  //   if (gallery) {
  //     return gallery.gallery_images.map((item, index) => {

  //       let foundImage = gallery.images.find((image) => {
  //         return image.id === item.image_id
  //       })

  //       return (<div key={index} className={`_${index + 1 }`}>
  //         <img alt="Input in gallery" className={`img-${index + 1}`} src={foundImage.url} style={{ border: `3px solid ${item.frame_color}` }}/>
  //     </div>)
  //     }

  //     )

  //   }
  // }


  const templateDisplay = () => {
    if (gallery) {
      // console.log("gallery")
      return (
        <>
          <div className="fiveleft">
          <div className="_5">
              {templateFive()}
            </div>
            <div className="_4">
              {templateFour()}
              </div>
          </div>
          <div id ="fivemiddle">
              <div className="_1">
                {templateOne()}
              </div>
          </div>
          <div id = "fiveright">
            <div className="_2">
              {templateTwo()}
            </div>
            <div className="_3">
              {templateThree()}
            </div>
        </div>
        </>
      )

    } 
  }

  const templateOne = () => {
    if (gallery.images[0]) {
        return <img alt="one" className="img-1" src={gallery.images[0].url} style={{ border: `3px solid ${gallery.gallery_images[0].frame_color}` }} /> 
    } else {
      return <div>1</div>
    }
  }

  const templateTwo = () => {
    if (gallery.images[1]) {
      // console.log("one")
        return <img alt="two" className="img-2" src={gallery.images[1].url} style={{ border: `3px solid ${gallery.gallery_images[1].frame_color}` }}/> 
    } else {
      return <div>2</div>
    }
  }

  const templateThree = () => {
    if (gallery.images[2]) {
      // console.log("one")
        return <img alt="three" className="img-3" src={gallery.images[2].url} style={{ border: `3px solid ${gallery.gallery_images[2].frame_color}` }}/> 
    } else {
      return <div>3</div>
    }
  }

  const templateFour = () => {
    if (gallery.images[3]) {
      // console.log("one")
        return <img alt="four" className="img-4" src={gallery.images[3].url} style={{ border: `3px solid ${gallery.gallery_images[3].frame_color}` }}/> 
    } else {
      return <div>4</div>
    }
  }

  const templateFive = () => {
    if (gallery.images[4]) {
      // console.log("one")
        return <img alt="four" className="img-5" src={gallery.images[4].url} style={{ border: `3px solid ${gallery.gallery_images[4].frame_color}` }}/> 
    } else {
      return <div>5</div>
    }
  }

  return (
    <div id="framescontainer">
      {templateDisplay()}
    </div>
  )

}
