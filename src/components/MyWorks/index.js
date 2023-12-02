import React,{useReducer,useState,useEffect} from 'react';
import './index.scss'
import Slide from './Slide/index.js';
import Loader from 'react-loaders';
import Aboutus from '../../assets/images/AboutusN.png';
import Homepage from '../../assets/images/HomepageN.png';
import Contact from '../../assets/images/ContactN.png';
import FAQ from '../../assets/images/FAQ-N.png';

//slideIndex:Index of currently active slide
//offset: determines how far each slide should be from active ide,both to left & right,to create visual effect of a continous loop.
//i: index of currently mapped slide.

const slides=[
  {   
      title:'Homepage',
      image:Homepage,
      url:"https://fastpay-easypay.netlify.app/"

  },
  {  
      title:'Aboutus',
      image:Aboutus,
      url:"https://fastpay-easypay.netlify.app/"
  },
  {   
      title:'contact',
      image:Contact,
      url:"https://fastpay-easypay.netlify.app/"
  },
  {   
      title:'FAQ',
      image:FAQ,
      url:"https://fastpay-easypay.netlify.app/"
  },
  
]

const MyWorks = () => { 

const[loading,setLoading]=useState(false);

useEffect( ()=>{
  //simulateLoading delay
setLoading(true);
const timing=setTimeout(
  ()=>{
setLoading(false);
  },1000);
return () => clearTimeout(timing);
} , []);


const initialState={
  slideIndex:0
  
};

const slidesReducer=(state,event)=>{
 if( event.type==='NEXT'){
  return{
    ...state,
   slideIndex: (state.slideIndex+1) % slides.length
  };
 }
 if(event.type==='PREV'){
  return{
    ...state,
    
     slideIndex: state.slideIndex===0 ? slides.length-1:state.slideIndex-1 
  };
 }
};

const[state,dispatch]=useReducer(slidesReducer,initialState);

  return (
    <>

    <div className="slides myWorks-page">
    
    <div className="slideBackground" style={{ 

  backgroundImage: `url(${slides[state.slideIndex].image})` }}></div>   
    
    {[...slides,...slides,...slides].map((slide,i) => {

      let offset =slides.length+(state.slideIndex-i) ;
      
      return loading? (<Loader type="pacman" />) :
      
      (<Slide slide={slide} offset={offset} key={i} />);
     
    })}
   <div className="button-container">
   <div className="button-placer">
    <button className="desktop-button" onClick={()=>{dispatch({type:"PREV"})}}> &lt; </button>
    <button className="desktop-button" onClick={()=>{dispatch({type:"NEXT"})}}> &gt; </button>
       
    </div>
    </div>
    </div>
 
    </>
  )
}

export default MyWorks;

