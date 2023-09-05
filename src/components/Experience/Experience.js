import NavBar from "../NavBar/NavBar";
import '../../App.css';
import "../everything.css";
import "./Experience.css"
import {Helmet} from "react-helmet";
import Footer from "../Footer/Footer";
export default function Experience() {
    return(
        <main>
        <Helmet>
            <style>{'body { background-color: #4b5668; }'}</style>
        </Helmet>
        <fragment>
            <NavBar/>
        </fragment>
        <div className="homeContainer">
            <div className="Container">
                <div className="description_what">
                    <h1>Packaging Corporation of America</h1>
                    <h2>Data Science Intern</h2>
                </div>
                <div className="description_what">
                    <h1>Disruption Lab</h1>
                    <h2>Software Development Engineer</h2>
                </div>
                <div className="description_what">
                    <h1>Sagence Inc</h1>
                    <h2>Data Engineering Intern</h2>
                </div>
            </div>
        </div>
        <Footer />
        </main>
        
        
        
        );
}