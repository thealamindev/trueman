


import { Link } from "react-router-dom";
import Container from "../Container.jsx";


const Header = () => {
  return (
   <>
 <div className="bg-[#00283A] fixed top-0 left-0 w-full z-50">

    <Container>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">

<Link to="/">
          <li className="text-[14px] font-roboto font-medium hover:text-btnColor text-bgColor">HOME</li>
          </Link>
           <Link to="/shop">
           <li className="text-[14px] font-roboto font-medium hover:text-btnColor text-bgColor">PORTFOLIO</li>
           </Link>
           <Link to="/about">
           <li className="text-[14px] font-roboto font-medium hover:text-btnColor text-bgColor">RESUME</li>
           </Link>
           <Link to="/contact">
           <li className="text-[14px] font-roboto font-medium hover:text-btnColor text-bgColor">CONTACTS</li>
           </Link>
           <Link to="/journal">
           <li className="text-[14px] font-roboto font-medium hover:text-btnColor text-bgColor">BLOG</li>
           </Link>
              
             
            </ul>
          </div>
         <Link to="/">
        <h2 className='text-[#ffff] font-bold font-roboto text-[30px]'>NAZ<span className="text-btnColor">NEEN</span></h2>

         </Link>
          
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-x-12">
          <Link to="/">
          <li className="text-[14px] font-roboto text-[#ffff] font-medium hover:text-btnColor">HOME</li>
          </Link>
           <Link to="/shop">
           <li className="text-[14px] font-roboto text-[#ffff] font-medium hover:text-btnColor">PORTFOLIO</li>
           </Link>
           <Link to="/about">
           <li className="text-[14px] font-roboto text-[#ffff] font-medium hover:text-btnColor">RESUME</li>
           </Link>
           <Link to="/contact">
           <li className="text-[14px] font-roboto text-[#ffff] font-medium hover:text-btnColor">CONTACTS</li>
           </Link>
           <Link to="/journal">
           <li className="text-[14px] font-roboto text-[#ffff] font-medium hover:text-btnColor">BLOG</li>
           </Link>
            
             
              
             
              
            
          </ul>
        </div>
         <div className="navbar-end">
   <button className='bg-btnColor font-roboto font-medium rounded-3xl py-3 px-10 round text-[#ffff]'>Download Cv</button>
  </div>
       
       
        
      </div>
      </Container>
    </div>

   </>
  )
}

export default Header