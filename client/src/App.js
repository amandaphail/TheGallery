import './App.css';
import {Route} from "react-router-dom"
import Title from "./screens/Title.jsx"
import GettingStarted from "./screens/GettingStarted.jsx"
import GalleryDisplay from "./screens/GalleryDisplay.jsx"
import Nav from "./components/Nav.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      <Route>
        <Title />
      </Route>
      <Route>
        <GettingStarted />
      </Route>
      <Route>
        <GalleryDisplay />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
