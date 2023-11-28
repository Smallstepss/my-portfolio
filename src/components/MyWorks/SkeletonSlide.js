import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonSlide= () => {
return(
   <div className="container" style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
   <div >
    <Skeleton height="25vw" width="25vw" className="leftSlide" style={{transform:` perspective(1000px) translateX(100%) rotateY(45deg) scale(1)`,marginRight:'300px'}}/>
   </div>
   <div>
   <Skeleton height="25vw" width="25vw"  className="activeSlide" style={{ }}/>
   </div>
   <div >
   <Skeleton height="25vw" width="25vw" className="rightSlide" style={{transform:` perspective(1000px) translateX(-100%) rotateY(-45deg) scale(1)`,marginLeft:'300px'}}/>
   </div>
   
   
   </div>


)

}



export default SkeletonSlide;
