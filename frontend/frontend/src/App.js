import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";


function App() {
  return (
   <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/"/>
          </Routes>
        </div> 
      </BrowserRouter>
    </div>
  );
}

export default App;
