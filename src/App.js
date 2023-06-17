// import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom"

// import About from "./components/About/About";
// import NavBar from "./components/NavBar/NavBar";
// import Experience from "./components/Experience/Experience";
// import ContactForm from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";
// import Skills from "./components/Skills/Skills";
// import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";


function App() {
  return (
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/projects" Component={Projects}/>
      <Route path="/experience" Component={Experience}/>

    </Routes>
    
    
    

  )
}

export default App;
