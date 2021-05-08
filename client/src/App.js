import './App.css';
import {Route} from "react-router-dom"
import Title from "./screens/Title.jsx"

function App() {
  return (
    <div className="App">
      <Route>
        <Title />
      </Route>
    </div>
  );
}

export default App;
