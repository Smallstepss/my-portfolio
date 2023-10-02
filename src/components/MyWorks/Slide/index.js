import {useEffect,useRef} from 'react'

const Slide = ({slide,offset}) => {


  function useTilt(active)  {
 

    const ref=useRef(null);
      
      useEffect(()=>{
    
        if( !ref.current ||!active){
          return;
        }
        const state={
          rect:undefined,
          mouseX:undefined,
          mouseY:undefined       
       };     
    
        let el=ref.current;    
    
      const handleMouseMove=(e)=>{        
    
    if(!el){
      return;
    }
    if(!state.rect){
      state.rect=el.getBoundingClientRect();
    
    }
    console.log(state.rect);

    state.mouseX=e.clientX;
    state.mouseY=e.clientY;
   
    console.log('Mouse moved!', e.clientX, e.clientY);
    
     const px=Math.min(Math.max((state.mouseX-state.rect.left)/state.rect.width,0),1);
    console.log('px:',px);
     const py=Math.min(Math.max((state.mouseY-state.rect.top)/state.rect.height,0),1);
     console.log('py:', py); 

   
    el.style.setProperty('--px',px);
    
    el.style.setProperty('--py',py);
    };
  
    
    el.addEventListener('mousemove',handleMouseMove);
    
    return()=>{
     
    el.removeEventListener('mousemove',handleMouseMove);
    };
    
    
      },[active]);
    
    return ref;         
    
      
    }
    
    
  const active= offset===0 ? true:null;

const ref=useTilt(active);



  const divStyle={
    "--offset":offset,  
  '--dir':offset===0?0:(offset>0?'1':'-1'),
 }
  
  return (
  
    <div ref={ref} className="slide" data-active={active}    
        style={divStyle}>     

              <div className="slideContent" 
              style={{ 
                  backgroundImage:`url('${slide.image}')`  }}>

                <div className="slideContentInner">
      
                    <h1 className="slideTitle">{slide.title} </h1>      
      
                      
                </div>   
           
              </div>
    </div>
    
  )
}

export default Slide

