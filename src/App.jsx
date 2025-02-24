import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Awards from "./pages/Awards";
import "./assets/css/styles.css";

const App = () => (
  <Router basename="/ganesh-portfolio">
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/awards" element={<Awards />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
