// Styles
import './App.css'

// Authentication and Authorization -
// https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/

import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>

        {/* common */}
        <Route path="/" element={<Home/>} />

      </Routes>
    </div>
  );
}

export default App;