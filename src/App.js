import './App.css';
import {Helmet} from "react-helmet";

import About from "./components/About/About";
import NavBar from "./components/NavBar/NavBar";
import Experience from "./components/Experience/Experience";
import ContactForm from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";


function App() {
  return (
    <main>
      <Helmet>
          <style>{'body { background-color: #4b5668; }'}</style>
      </Helmet>
      <fragment>
        <NavBar/>
      </fragment>
      <About />
      <Experience />
      <Skills />
      <ContactForm />
      <Footer />
    </main>

  );
}

export default App;
