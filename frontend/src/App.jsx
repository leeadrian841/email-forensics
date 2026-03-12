// -----------------------------------------------------------------------------
// App.jsx — Main router setup
//
// Defines all page routes using BrowserRouter with clean URLs.
// GitHub Pages SPA support is handled by public/404.html + a redirect script
// in index.html. To add a new page: import the component and add a <Route>.
// Navigation links are managed separately in Navbar.jsx and Footer.jsx.
//
// IMPORTANT: The basename must match your GitHub Pages repo name.
// If your site is at https://username.github.io/my-repo/, set basename to "/my-repo".
// For local dev or custom domains, leave it as "/".
// -----------------------------------------------------------------------------
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Guide from "./pages/Guide";

// Use /email-forensics in production (GitHub Pages), "/" in dev
const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={basename}>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
