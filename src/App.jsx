import About from './components/About';
import Resume from './components/Resume';
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
        <Route path="/" element={<About/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App
