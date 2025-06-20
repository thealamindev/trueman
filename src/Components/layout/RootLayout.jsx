
import Header from '../layout/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../layout/Footer'

const RootLayout = () => {
  return (
    <>
       <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default RootLayout