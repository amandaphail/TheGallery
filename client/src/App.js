import './App.css';
import {Route} from "react-router-dom"
import Title from "./screens/Title.jsx"
import GettingStarted from "./screens/GettingStarted.jsx"
import GalleryDisplay from "./screens/GalleryDisplay.jsx"
import Footer from "./components/Footer.jsx"
import {useState} from "react"

function App() {
  const [galleryID, setGalleryID] = useState()
  const [toggle, setToggle] = useState(false)



  return (
    <div className="App">
      <Route>
        <Title />
      </Route>
      <Route>
        <GettingStarted setToggle={setToggle} setGalleryID={setGalleryID} galleryID={galleryID}/>
      </Route>
      <Route>
        <GalleryDisplay toggle={toggle} galleryID={galleryID}/>
      </Route>
      <Footer />
    </div>
  );
}

export default App;
