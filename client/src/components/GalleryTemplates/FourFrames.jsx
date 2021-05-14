import "./CSS/frames.css"
// import {useEffect} from "react"

export default function FourFrames(props) {

  let gallery = props.gallery
  // console.log(gallery.images[0].url)

  // useEffect(() => {
  //  templateDisplay() 
  // },[props.gallery.images])
  
  // const templateDisplay = () => {
    
  //   if (gallery) {
    
  //     // if (gallery.images = []) {
  //     //   return (
  //     //     <div id="template">
  //     //       <div className="_1">1</div>
  //     //       <div className="_2">2</div>
  //     //       <div className="_3">3</div>
  //     //       <div className="_4">4</div>
  //     //     </div>
  //     //   )
  //     // } else {

  //       return gallery.gallery_images.map((item, index) => {
  //         // console.log(item.frame_color)

  //         let foundImage = gallery.images.find((image) => {
  //           // console.log(image)
  //           return image.id === item.image_id
  //         })

       
  //         return (
  //           <div key={index} className={`_${index + 1}`}>
  //             <img alt="Input in gallery" className={`img-${index + 1}`} src={foundImage.url} style={{ border: `3px solid ${item.frame_color}` }} />
  //           </div>
  //         )
  //       })
  //     // }
  //   } 
  // }
  



  const templateDisplay = () => {
    if (gallery) {
      // console.log("gallery")
      return (
        <>
        <div id ="fourleft">
              <div className="_1">
                {templateOne()}
              </div>
          </div>
          <div id = "fourright">
          <div className="_2">
            {templateTwo()}
          </div>
            
          <div id ="foursmall">
            <div className="_3">
              {templateThree()}
            </div>
            <div className="_4">
              {templateFour()}
            </div>
          </div>
        </div>
        </>
      )

    } 
  }

  const templateOne = () => {
    if (gallery.images[0]) {
        return <img className="img-1" src={gallery.images[0].url} style={{ border: `3px solid ${gallery.gallery_images[0].frame_color}` }}/> 
    } else {
      return <div>1</div>
    }
  }

  const templateTwo = () => {
    if (gallery.images[1]) {
        return <img className="img-2" src={gallery.images[1].url} style={{ border: `3px solid ${gallery.gallery_images[1].frame_color}` }}/> 
    }else {
      return <div>2</div>
    }
  }

  const templateThree = () => {
    if (gallery.images[2]) {
        return <img className="img-3" src={gallery.images[2].url} style={{ border: `3px solid ${gallery.gallery_images[2].frame_color}` }}/> 
    } else {
      return <div>3</div>
    }
  }

  const templateFour = () => {
    if (gallery.images[3]) {
        return <img className="img-4" src={gallery.images[3].url} style={{ border: `3px solid ${gallery.gallery_images[3].frame_color}` }}/> 
    } else {
      return <div>4</div>
    }
  }










  return (
    
    <div id="framescontainer">
      {templateDisplay()}
    </div>
  )
}

