import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Awards from "./pages/Awards";
import Figure from "./pages/Figure";
import "./assets/css/styles.css";
import Relief from "./pages/Relief";

const App = () => (
  <Router basename="/ganesh-portfolio">
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/figure" element={<Figure />} />
          <Route path="/relief" element={<Relief />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
