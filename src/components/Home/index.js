import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
/*import AnimatedLetters from '../AnimatedLetters'*/
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {

  return (
    <>
      <div className="container home-page">
      <div className="text-zone">
      <h1>
            <span >H</span>
            <span >i,</span>
            <br />
            <span >I</span>
            <span>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            hubham 
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            avarn
            <br/>
            web developer
      </h1>
      <h2>Front End Developer / JavaScript Expert </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
      </div>
      </div>
    </>
  )
}

export default Home