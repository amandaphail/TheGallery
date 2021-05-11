import './App.css';
import {Route} from "react-router-dom"
import Title from "./screens/Title.jsx"
import GettingStarted from "./screens/GettingStarted.jsx"
import GalleryDisplay from "./screens/GalleryDisplay.jsx"
// import Nav from "./components/Nav.jsx"
import Footer from "./components/Footer.jsx"
import {useState} from "react"

function App() {
  // const [frameNumber, setFrameNumber] = useState(0)
  const [galleryID, setGalleryID] = useState(0)

  // console.log(galleryID)

  // console.log(`Frame number: ${frameNumber}`)


  return (
    <div className="App">
      {/* <Nav/> */}
      <Route>
        <Title />
      </Route>
      <Route>
        <GettingStarted setGalleryID={setGalleryID}/>
      </Route>
      <Route>
        <GalleryDisplay galleryID={galleryID}/>
      </Route>
      <Footer />
    </div>
  );
}

export default App;
