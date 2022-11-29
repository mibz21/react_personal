import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
    return(
        <footer className="foot">
            <div className="socials d-flex justify-content-evenly" >
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/mibz21">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/zhmz21">
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mzhang4/">
                    <FontAwesomeIcon icon={faLinkedin}/>
                </a>
            </div>
            <div className="copyright">
                <h3>© 2020 Michael Zhang Github Repo</h3>
            </div>
            
            
        </footer>
    )
}