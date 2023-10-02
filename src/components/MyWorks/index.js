import React,{useReducer} from 'react'
//import {slides} from './../../data.js'
import './index.scss'
import Slide from './Slide/index.js'
import Aboutus from '../../assets/images/AboutusN.png';
import Homepage from '../../assets/images/HomepageN.png';
import Contact from '../../assets/images/ContactN.png';
import FAQ from '../../assets/images/FAQ-N.png';

//slideIndex:Index of currently active slide

//offset: determines how far each slide should be from active ide,both to left & right,to create visual effect of a continous loop.

//i: index of currently mapped slide.

const MyWorks = () => {
  const slides=[
    {   
        title:'Homepage',
        image:Homepage
    },
    {  
        title:'Aboutus',
        image:Aboutus
    },
    {   
        title:'contact',
        image:Contact
    },
    {   
        title:'FAQ',
        image:FAQ
    },
    
]

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
    <div className="slides myWorks-page">
    
    <div className="slideBackground" style={{ 
  backgroundImage: `url(${slides[state.slideIndex].image})` 
}}></div>




   
    {[...slides,...slides,...slides].map((slide,i)=>{

      let offset =slides.length+(state.slideIndex-i) ;
      
      return <Slide slide={slide} offset={offset} key={i} />
    })}

   <div className="button-container">
   <div className="button-placer">
    <button onClick={()=>{dispatch({type:"PREV"})}}> &lt; </button>
    <button onClick={()=>{dispatch({type:"NEXT"})}}> &gt; </button>
    </div>
    </div>
    </div>
  )
}

export default MyWorks;

