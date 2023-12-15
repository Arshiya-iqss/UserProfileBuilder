import { Routes, Route, BrowserRouter } from "react-router-dom";
import MakeCard from "./pages/MakeCard/MakeCard";
import Navbar from "./pages/Navbar/Navbar";
import GeneratedCard from "./pages/generatedCard/GeneratedCard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="coreContainer">
        <Routes>
          <Route path="/" element={<MakeCard />} />
          <Route path="/card" element={<GeneratedCard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
