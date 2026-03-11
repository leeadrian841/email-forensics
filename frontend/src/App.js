import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Guide from "./pages/Guide";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/guide" element={<Guide />} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
