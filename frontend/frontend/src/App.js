import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Hero from "./components/hero-section";
import CodeContainer from "./components/codeContainer";
import SavedLookups from "./components/savedLookups";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Navigation Bar */}
        <Navbar />
        {/* Page with route-based component rendering */}
        <div className="pages">
          <Routes>
            {/* Hero and CodeContainer only render here */}
            <Route path="/" element={
              <>
                <Hero />
                <CodeContainer />
              </>
            } />
            {/* SavedLookups component only here */}
            <Route path="/saved-lookups" element={<SavedLookups />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
