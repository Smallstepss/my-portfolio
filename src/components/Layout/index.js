import './index.scss';
import Sidebar from '../Sidebar/index.js'
//import {Outlet} from "react-router-dom"


const Layout = ({children,isMyWorks}) => {
  return (
    <div >
     <h1> <Sidebar  className={isMyWorks? 'myworks-layout' : ''} /> </h1>
     <div className='page'>
        <span className='tags top-tags'>&lt;body&gt;</span> {/*&lt;body&gt; means body tag */} 
     {children}
     <span className='tags bottom-tags'> &lt;/body&gt;</span>
     <br />
     <span className='tags bottom-tag-html'>&lt;/html&gt;</span>
     </div>
    </div>
  )
}

export default Layout





