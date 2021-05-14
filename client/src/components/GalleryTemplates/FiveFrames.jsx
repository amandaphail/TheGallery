import React from 'react'
import "./CSS/frames.css"

export default function FourFrames(props) {

  let gallery = props.gallery

  const templateDisplay = () => {
    if (gallery) {
      return (
        <>
          <div id="fiveleft">
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
        return <img alt="two" className="img-2" src={gallery.images[1].url} style={{ border: `3px solid ${gallery.gallery_images[1].frame_color}` }}/> 
    } else {
      return <div>2</div>
    }
  }

  const templateThree = () => {
    if (gallery.images[2]) {
        return <img alt="three" className="img-3" src={gallery.images[2].url} style={{ border: `3px solid ${gallery.gallery_images[2].frame_color}` }}/> 
    } else {
      return <div>3</div>
    }
  }

  const templateFour = () => {
    if (gallery.images[3]) {
        return <img alt="four" className="img-4" src={gallery.images[3].url} style={{ border: `3px solid ${gallery.gallery_images[3].frame_color}` }}/> 
    } else {
      return <div>4</div>
    }
  }

  const templateFive = () => {
    if (gallery.images[4]) {
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
