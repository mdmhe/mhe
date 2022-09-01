import './CSS/App.css';
import './CSS/nav.css';
import './CSS/Home.css';
import Home from './Comp/Home.jsx';
import {About} from './Comp/About.jsx';
import { Routes,Route, Link } from "react-router-dom";


function App() {
  return (
     <div className="container">
     <nav>
     <div id="mhemon">MHEmon</div>
     <Link className="link" to="/mhe">Home</Link>
     <Link className="link" to="/about">About</Link>
     </nav>
     <div className="App">
    <Routes>
        <Route path="/mhe" element={<Home/>} />
        <Route path="/about" element={<About/>} />
    </Routes>
    </div>
    </div>
  );
}

export default App;
