import '../../App.css';
import {Helmet} from "react-helmet";

import About from "../About/About";
import NavBar from "../NavBar/NavBar";
import Experience from "../Experience/Experience";
import ContactForm from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Skills from "../Skills/Skills";

export default function Home()
{
    return(
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
    )
        
    
}