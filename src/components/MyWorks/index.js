import React,{useReducer,Suspense,lazy} from 'react';
//import {slides} from './../../data.js'
import './index.scss'

//import Loader from 'react-loaders';
import SkeletonSlide from './SkeletonSlide';


import Aboutus from '../../assets/images/AboutusN.png';
import Homepage from '../../assets/images/HomepageN.png';
import Contact from '../../assets/images/ContactN.png';
import FAQ from '../../assets/images/FAQ-N.png';

//slideIndex:Index of currently active slide
//offset: determines how far each slide should be from active ide,both to left & right,to create visual effect of a continous loop.
//i: index of currently mapped slide.

const Slide = lazy(()=> import('./Slide/index.js'))

const slides=[
  {   
      title:'Homepage',
      image:Homepage,
      url:"https://main--dapper-raindrop-4cb838.netlify.app/"

  },
  {  
      title:'Aboutus',
      image:Aboutus,
      url:"https://main--dapper-raindrop-4cb838.netlify.app/"
  },
  {   
      title:'contact',
      image:Contact,
      url:"https://main--dapper-raindrop-4cb838.netlify.app/"
  },
  {   
      title:'FAQ',
      image:FAQ,
      url:"https://main--dapper-raindrop-4cb838.netlify.app/"
  },
  
]


const MyWorks = () => {
 

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
  backgroundImage: `url(${slides[state.slideIndex].image})` 
}}></div>   
    {[...slides,...slides,...slides].map((slide,i)=>{

      let offset =slides.length+(state.slideIndex-i) ;
      
      return (

        
      <Suspense fallback={<SkeletonSlide />}>
      
      <Slide slide={slide} offset={offset} key={i} />
   
   </Suspense>
      );
   
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

