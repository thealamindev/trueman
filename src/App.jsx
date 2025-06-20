
import './App.css'
import RootLayout from './components/layout/RootLayout';
import { Routes, Route } from 'react-router-dom';

import Portfolio from './Components/pages/Portfolio';
import Resume from './Components/pages/Resume';
import Contacts from './Components/pages/Contacts';
import Blog from './Components/pages/Blog';
import Home from './Components/pages/Home';

function App() {
  
  return (
   <>
   <Routes>
    <Route path="/" element={<RootLayout />}>
    <Route index element={<Home/>} />
    <Route path="/portfolio" element={<Portfolio/>}/>
    <Route path="/resume" element={<Resume/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path="/blog" element={<Blog/>}/>


    </Route>
   </Routes>
   
   </>
  )
}

export default App

