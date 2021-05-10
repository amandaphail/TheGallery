import "./CSS/imagesform.css"

export default function ImagesForm() {

// if gallery frame number set - this how many image inputs to have & which gallery template to use

  return (
    <div>
       <form>
        <div id="displayform">
        <label>1: </label>
        <input className="displayinput" type="text"/>

        <label> 2: </label>
        <input className="displayinput" type="text"/>

        <label> 3: </label>
        <input className="displayinput" type="text"/>

        <label> 4: </label>
        <input className="displayinput" type="text"/>
        
        <input className="displayinput" type="submit" />
        </div>


      </form>
    </div>
  )
}
