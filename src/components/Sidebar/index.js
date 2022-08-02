import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import codechef from '../../assets/images/codechef.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from '@iconify/react';
import {
  faLinkedin,
  faGithub,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faSuitcase,faCog, faEye } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="Logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="skills-link" to="/skills">
          <FontAwesomeIcon icon={faCog} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="work-link" to="/mywork">
          <FontAwesomeIcon icon={faEye} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/shubham-savarn/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/shubhamsavarn"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://www.codechef.com/users/shubhamsavarn"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="simple-icons:codechef" />
          </a>
        </li>
        <li>
          <a
            href="https://www.codechef.com/users/shubhamsavarn"
            target="_blank"
            rel="noreferrer"
          >
            <li>
          <a
            href="https://www.codechef.com/users/shubhamsavarn"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="simple-icons:codeforces" />
          </a>
        </li>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar