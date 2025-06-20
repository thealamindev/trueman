import React from "react";
import Container from "../Container";

import Images from "../Images";
import profile from "../../assets/profile.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import TypewriterComponent from "../TypewriterComponent";



const Banner = () => {

  // export default TypingText;
  return (
    
    <>
      <div className="bg-[url('./banner.jpg')]  bg-center bg-cover bg-no-repeat  py-[200px] w-[95%] mx-auto rounded-[30px] relative ">
        <Container>
          <div className="bg-bgColor  w-[340px] h-[780px] fixed  pt-[20px] rounded-[20px] ">
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden mx-auto">
              <Images
                imgSrc={profile}
                imgAlt={profile}
                className={"h-full object-cover w-full"}
              />
            </div>
            <div className="">
              <h3 className="text-white font-bold font-roboto text-[20px] text-center pb-2 pt-5">
                Nazneen Akter
              </h3>

               <TypewriterComponent/>
             
              <p className="text-center text-[#585858] mt-7">
                ...........................................................
              </p>
              <div className="flex justify-center mt-7 gap-5 text-textColor">
                <FaLinkedinIn />
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
              </div>
              <p className="text-center text-[#585858] mt-7">
                ...........................................................
              </p>
              <div className="flex px-[75px] gap-7 mt-7">
                <h6 className="text-textColor font-poppin font-medium text-[14px] ">
                  RESIDENCE:
                </h6>
                <h6 className="text-[#969292] font-poppin font-medium text-[14px] ">
                  BANGLADESH
                </h6>
              </div>
              <div className="flex px-[74px] gap-[72px] mt-4">
                <h6 className="text-textColor font-poppin font-medium text-[14px] ">
                  CITY:
                </h6>
                <h6 className="text-[#969292] font-poppin font-medium text-[14px] ">
                  DHAKA
                </h6>
              </div>
              <div className="flex px-[74px] gap-[72px] mt-4">
                <h6 className="text-textColor font-poppin font-medium text-[14px] ">
                  AGE:
                </h6>
                <h6 className="text-[#969292] font-poppin font-medium text-[14px] ">
                  27
                </h6>
              </div>
            </div>
          </div>

          <div className="max-w-sContainer flex justify-end">
            <div className="">
              <h3 className="font-roboto text-[#ffff] text-[18px] mt-7 ">
                Hello My New <span className="text-bgColor">Friend!</span>
              </h3>
              <h1 className="font-roboto text-[#ffff] font-bold text-[65px] ">
                Discover my
              </h1>
              <h1 className="font-roboto text-[#ffff] text-[65px] font-bold ">
                art space!
              </h1>
              <button className=" bg-transparent border-[2px] border-white text-[16px] text-white font-roboto font-bold py-2 px-6 rounded-[30px] mt-5">
                Video Resume
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;
