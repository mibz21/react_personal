import NavBar from "../NavBar/NavBar";
import '../../App.css';
import {Helmet} from "react-helmet";
export default function Experience() {
    return(
        <main>
        <Helmet>
            <style>{'body { background-color: #4b5668; }'}</style>
        </Helmet>
        <fragment>
            <NavBar/>
        </fragment>
        </main>
        
        
        
        );
}