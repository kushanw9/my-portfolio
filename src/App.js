

import './App.css';
import Contact from './Pages/Contact/Contact';
import Works from './Pages/Works/Works';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <div>

          <Routes>

            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/works" element={<Works/>}/>
            <Route exact path="/contact" element={<Contact/>}/>

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
