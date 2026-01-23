import About from './components/About';
import Myinfo from './components/Myinfo';
import Navbar from './components/Navbar';
import Skills from "./components/Skills";
import Projects from './components/Projects';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router,Link } from "react-router-dom";


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Myinfo />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App
