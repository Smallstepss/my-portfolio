import './App.scss';
import {Routes,Route} from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import MyWorks from './components/MyWorks'


function App() {
  return (
<>
<Routes>

<Route path="/" element={<Layout><Home /></Layout>} />
<Route path="/About" element={<Layout><About /></Layout>} />
<Route path="/Contact" element={<Layout><Contact /></Layout>} />
<Route path="/MyWorks" element={<Layout isMyWorks><MyWorks /></Layout>} />


</Routes>
</>

  )  
  
}

export default App;
