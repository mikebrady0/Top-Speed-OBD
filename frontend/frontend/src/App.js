import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Hero from "./components/hero-section"


function App() {
  return (
   <div className="App">
      <BrowserRouter>
        {/* Navigation Bar and Header */}
        <Navbar />
        {/* Page element with route path */}
        <div className="pages">
          <Routes>
            <Route path="/"/>
          </Routes>
          {/* Leading Hero section */}
          <Hero/>
        </div> 
      </BrowserRouter>
    </div>
  );
}

export default App;
