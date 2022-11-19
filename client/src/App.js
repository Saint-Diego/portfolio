import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Footer from "./components/Footer/Footer.jsx";
import FormPQRS from "./components/FormPQRS/FormPQRS.jsx";
import Home from "./components/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import Projects from "./components/Projects/Projects.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactme" element={<FormPQRS />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
