import React,{useState,useEffect} from 'react'
import myinitial from "../../assets/images/R1.svg";
import {Link} from "react-router-dom"
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders';


const Home = () => {
const [letterClass,setLetterClass] =useState('text-animate');
const nameArray=['e','s','h','m','a']
const jobArray=['w','e','b',' ','d','e','v','e','l','o','p','e','r']

useEffect(()=>{
const timeoutId  = setTimeout(() =>{
  setLetterClass('text-animate-hover')
},4000 );

return ()=>{
  clearTimeout(timeoutId);
};

}, []);

  return (
    <>
    <div className="container home-page">
    <div className="text-zone">
    <h1>

    <span className={letterClass}>H</span>
    <span className={`${letterClass} _12`}>i,</span> 

    <br /> 

    <span className={`${letterClass} _12`}>I</span> 
    <span className={`${letterClass} _12`}>'m</span>

    <img src={myinitial} alt="developer"/>
    <AnimatedLetters letterClass={letterClass}
      strArray={nameArray}
      idx={15}
    />
    <br/>
    <AnimatedLetters letterClass={letterClass}
      strArray={jobArray}
      idx={22}
    />
    </h1>
    <h2>Frontend Developer</h2>
    <Link to="/contact" className="flat-button">CONTACT ME</Link>
    </div>  
    <Logo />    
    </div>
    <Loader type="pacman" />
    </>
  )
};

export default Home
