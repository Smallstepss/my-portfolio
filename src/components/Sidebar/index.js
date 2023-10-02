import './index.scss'
import {Link,NavLink} from 'react-router-dom'
import myinitial from "../../assets/images/R1.svg";
import logoSub from  '../../assets/images/logo-Sub2.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome,faUser,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,faSquareTwitter,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
  return (
    <div className='nav-bar'>
    <Link className='logo' to='/'>
    <img src={myinitial} alt="Logo"></img>
    <img className="sub-logo" src={logoSub} alt="logo title"></img>
    </Link>
    <nav>
<NavLink activeclassname="active" to="/">

<FontAwesomeIcon icon={faHome} color="#4d4d4e" />
</NavLink>
<NavLink activeclassname="active" to="/about" className="about-link">

<FontAwesomeIcon icon={faUser} color="#4d4d4e" />
</NavLink>
<NavLink activeclassname="active" to="/contact" className="contact-link">

<FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
</NavLink>

<NavLink activeclassname="active" to="/myworks" className="myworks-link">
<FontAwesomeIcon icon={faBriefcase} color="#4d4d4e"/>

</NavLink>

    </nav>
    <ul>
      <li>
        <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/reshma-jain-235780223/'>
        
        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel='noreferrer' href='https://github.com/Smallstepss/'>
        
        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel='noreferrer' href='https://twitter.com/Reshmajaine'>
        
        <FontAwesomeIcon icon={faSquareTwitter} color="#4d4d4e" />
        </a>
      </li>
    </ul>
     
    </div>
  )
}

export default Sidebar
