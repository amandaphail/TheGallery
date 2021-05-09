import "./CSS/gettingstarted.css"

export default function GettingStarted() {
  return (
    <div id="gettingstarted">
      <h2>
        Getting Started
      </h2>
      
      <p>Let's talk about the space</p>

      <form id="gsform">
        <div>
        <label>Number of frames: </label>
        <select>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
        </select>
        </div>

        <div>
        <label>Wall Color: </label>
        <input type="color" />
        </div>
        
      </form>
    </div>
  )
}
