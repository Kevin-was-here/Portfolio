import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home'

//This part acts as our navigation (navbar and paths)
function App() {
  return ( 
    <div className="App">
        <Router>
            <div>
                <Routes>
                    {/* If you want separate pages you would add them here */}
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="*" element={<div>404 Not Found</div>}></Route>
                </Routes>
            </div>
        </Router>
    </div>
  );
}

export default App;
