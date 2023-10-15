import {useState,useEffect,useRef} from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import * as emailjs from "emailjs-com";
import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet'

const Contact = () => {
const[letterClass,setLetterClass]=useState('text-animate');
const refForm=useRef();

useEffect( ()=>{   const timeoutId= setTimeout(()=>
   { setLetterClass('text-animate-hover')
        },3000    ) ;
        return ()=>{
        clearTimeout(timeoutId); };
        }, [] );

    const sendEmail=(e) =>{
            e.preventDefault()

            emailjs
            .sendForm('contact_service',
                'contact_form',
                refForm.current,
                '2lRfC8cuqPqa4PJP6')
                .then(
                ()=>{
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message,please try again')
                }
            )
    }
        return (
    <>
    <div className='container contact-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','m','e']} idx={15} />
            </h1>
            <p>
            I am seeking exciting job opportunities and am open to collaborating on projects that align with my skills.
            Whether you're interested in discussing job opportunities or simply want to connect and discuss my portfolio, don't hesitate to use the form below.
            </p>
            <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                    <li className='half'>
                        <input 
                        type="text" 
                        name="name" 
                        placeHolder="Name" required />
                    </li>
                    <li className='half'>
                        <input 
                        type="email" 
                        name="email" 
                        placeHolder="Email" required />
                    </li>
                    <li>
                       <input 
                       type="text" 
                       name="subject" 
                       placeHolder="Subject" required/> 
                    </li>
                    <li>
                    <textarea 
                    placeHolder="Message" 
                    name="message" required></textarea>
                    </li>
                    <li>
                        <input 
                        type="submit" 
                        className="flat-button"
                        value="SEND" />                       
                    </li>
                </ul>
            </form>

            </div>
        </div>
        <div className='info-map'>
        Reshma 
        Jain <br/>
        Karnataka <br/>
        Bangalore <br/>
        <span>jainreshmaesha@gmail.com</span>

        </div>
        <div className='map-wrap'>
        <MapContainer center={[12.975899,77.615378]} zoom={13}>
            <TileLayer    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={[12.975899,77.615378]} >
                    <Popup>Reshma lives here :)</Popup>
                </Marker>
        </MapContainer>

        </div>

    </div>
    <Loader type="pacman" />      
    </>
  )
}

export default Contact
