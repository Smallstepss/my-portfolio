import {useState,useEffect} from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular,faHtml5,faCss3,faReact,faSquareJs,faGitAlt } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
const[letterClass,setLetterClass] =useState('text-animate');

useEffect(()=>{
  const timeoutId=  setTimeout(()=>{
        setLetterClass('text-animate-hover')
    },3000)
    return ()=>{
        clearTimeout(timeoutId);
    }
},[])

  return (
    <>
    <div className='container about-page'>
      <div className='text-zone'>     
        <h1 className="about-page-head">
            <AnimatedLetters letterClass={letterClass}
                strArray={['A','b','o','u','t',
                ' ','m','e']}
                idx={15}
            />
        </h1>
        
        <p>I am a frontend web developer proficient in React.js, HTML, CSS, and JavaScript.</p>
        <p>My focus is on creating impactful web applications and projects. Through self-initiated React projects, I've gained hands-on experience in frontend development. I'm known for my commitment to learning, adaptability, and passion for web development, making me a valuable asset for any team looking for a dedicated frontend developer.</p>
      <p>I'm actively seeking opportunities to leverage my skills in professional settings.  As I continue to expand my skillset, I look forward to contributing to frontend development teams and further developing my expertise.</p>
      </div> 
      
      <div className='stage-cube-cont'>
      <div className='cubespinner'>
      <div className='face1'>
      <FontAwesomeIcon icon={faAngular} color="#DD0031" />
      </div>
      <div className='face2'>
      <FontAwesomeIcon icon={faHtml5} color="#f06529" />
      </div>
      <div className='face3'>
      <FontAwesomeIcon icon={faCss3} color="#264de4" />
      </div>
      <div className='face4'>
      <FontAwesomeIcon icon={faReact} color="#61dafb" />
      </div>
      <div className='face5'>
      <FontAwesomeIcon icon={faSquareJs} color="#F0DB4F" />
      </div>
      <div className='face6'>
      <FontAwesomeIcon icon={faGitAlt} color="#F1502F" />
      </div>

      </div>

      </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default About
