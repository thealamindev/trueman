import React from "react";
import { SiComma } from "react-icons/si";

import Images from "../Images";
import video from "../../assets/video.jpg";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
import { FaArrowRightLong } from "react-icons/fa6";
import { BsBuildingsFill } from "react-icons/bs";
import { GrCloudlinux } from "react-icons/gr";
import { SiAffinitydesigner } from "react-icons/si";
import { GrGamepad } from "react-icons/gr";
import t1 from "../../assets/t1.jpg";
import t2 from "../../assets/t2.jpg";
import t3 from "../../assets/t3.jpg";
import lw1 from "../../assets/lw1.jpg";
import lw2 from "../../assets/lw2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Flex from "../Flex";

const Story = () => {
  // slider

  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centercenterMode: true,
    centerPadding: "0",
  };
  return (
    <>
      <div className="py-[100px]">
        <div className="max-w-sContainer mx-auto justify-end flex">
          <div className="flex justify-between gap-10 mt-[-180px] absolute ">
            <div
              data-aos="fade-up"
              className="h-[177px] w-[210px] bg-bgColor rounded-[20px] transition delay-150 duration-300 ease-in-out"
            >
              <h3 className="font-bold font-roboto text-[35px] text-[#ffff] text-center pt-5">
                74 <span className="text-btnColor">+</span>
              </h3>
              <p className="text-gray-600 text-center pb-2">
                ..............................................
              </p>
              <h6 className="text-[#dedee0] font-semibold text-center  font-poppin text-[20px]">
                COMPLETED PROJECTS
              </h6>
            </div>
            <div
              data-aos="fade-up"
              className="h-[177px] w-[210px] bg-bgColor rounded-[20px] transition delay-150 duration-300 ease-in-out"
            >
              <h3 className="font-bold font-roboto text-[35px] text-[#ffff] text-center pt-5">
                50 <span className="text-btnColor">+</span>
              </h3>
              <p className="text-gray-600 text-center pb-2">
                ..............................................
              </p>
              <h6 className="text-[#dedee0] font-semibold text-center  font-poppin text-[20px] px-4 ">
                HAPPY CUSTOMERS
              </h6>
            </div>
            <div
              data-aos="fade-up"
              className="h-[177px] w-[210px] bg-bgColor rounded-[20px] mr-[-140px] transition delay-150 duration-300 ease-in-out"
            >
              <h3 className="font-bold font-roboto text-[35px] text-[#ffff] text-center pt-5">
                14 <span className="text-btnColor">+</span>
              </h3>
              <p className="text-gray-600 text-center pb-2">
                ..............................................
              </p>
              <h6 className="text-[#dedee0] font-semibold text-center  font-poppin text-[20px]">
                HONORS AND AWARDS
              </h6>
            </div>
          </div>
        </div>
        <section>
          <div className="max-w-sContainer mx-auto justify-center gap-7 flex mt-20">
            <h3 className="text-[#dedee0] text-[24px] font-poppin font-semibold pl-[230px]">
              My Story
            </h3>
            <p className="text-[#545454] ">
              ...........................................................................................................
            </p>
            <h6 className="text-[#545454] font-poppin ">01</h6>
          </div>
          <div className="max-w-sContainer  mx-auto bg-bgColor h-[130px] w-[700px] rounded-[20px] ml-[500px] mt-7">
            <Flex className={"justify-start pl-2 pt-5"}>
              <div className="text-btnColor rotate-180">
                <SiComma />{" "}
              </div>
              <div className="text-btnColor rotate-180">
                <SiComma />{" "}
              </div>
            </Flex>
            <h3 className="px-15 font-medium font-poppin text-[#dedee0] ">
              <i>
                Consectetur adipisicing elit. Rem minima maiores, praesentium,
                aperiam eveniet tenetur consequatur beatae id est.
              </i>
            </h3>
            <Flex className={"justify-end pr-7 pb-2"}>
              <div className="text-btnColor">
                <SiComma />{" "}
              </div>
              <div className="text-btnColor">
                <SiComma />{" "}
              </div>
            </Flex>
          </div>
          <div className="max-w-sContainer mx-auto justify-center  mt-20">
            <div className="flex gap-7 ">
              <h3 className="text-[#dedee0] text-[24px] font-poppin font-semibold pl-[235px]">
                Video Resume
              </h3>
              <p className="text-[#545454] ">
                ......................................................................................
              </p>
              <h6 className="text-[#545454] font-poppin ">02</h6>
            </div>
            <div className="ml-[235px] relative rounded-[10px] overflow-hidden mt-7 w-[700px]">
              <Images imgSrc={video} imgAlt={video} className={"w-full  "} />
              <div class="absolute inset-0 bg-transparent bg-opacity-0 flex items-center justify-center">
                <div class="text-btnColor text-[80px]">
                  <a href="https://www.youtube.com/watch?v=kHXsAf-Qsnc&pp=ygUQcmVudGFsIGNhciB2aWRlbw%3D%3D">
                    <MdOutlinePlayCircleFilled />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-5 mt-10">
              <h3 className="text-[#dedee0] text-[24px] font-poppin font-semibold pl-[235px]">
                My Service
              </h3>
              <p className="text-[#545454] ">
                ...........................................................................................................
              </p>
              <h6 className="text-[#545454] font-poppin ">03</h6>
            </div>
            <div className="flex ml-[235px] gap-10 mt-7 w-[700px] ">
              <div className="py-[40px] w-[350px] bg-bgColor rounded-[10px] group hover:bg-btnColor  transition-all duration-300 ease-in-out ">
                <h3 className="text-btnColor text-[30px] px-10 group-hover:text-bgColor">
                  <BsBuildingsFill />
                </h3>
                <h3 className="text-textColor px-10 mt-7 font-poppin font-semibold text-[20px] group-hover:text-bgColor">
                  Architecture
                </h3>
                <p className="px-10 mt-7 font-semibold text-textColor font-poppin text-[14px] group-hover:text-bgColor">
                  Dolor sit amet, consectetur adipisicing elit. Delectus esse
                  commodi.
                </p>
                <div className="flex gap-2  px-10 py-4">
                  <h6 className="text-btnColor font-poppin font-medium text-[18px] group-hover:text-bgColor ">
                    Order Now{" "}
                  </h6>
                  <div className="text-btnColor font-medium text-[18px] mt-1  group-hover:text-bgColor">
                    <FaArrowRightLong />
                  </div>
                </div>
              </div>
              <div className="py-[40px] w-[350px] bg-bgColor rounded-[10px] group hover:bg-btnColor  transition-all duration-300 ease-in-out">
                <h3 className="text-btnColor text-[30px] px-10 group-hover:text-bgColor">
                  <GrCloudlinux />
                </h3>
                <h3 className="text-textColor mt-7 px-10 font-poppin font-semibold text-[20px] group-hover:text-bgColor">
                  UI/UX Design
                </h3>
                <p className="px-10 mt-7 font-semibold text-textColor font-poppin text-[14px] group-hover:text-bgColor">
                  Dolor sit amet, consectetur adipisicing elit. Delectus esse
                  commodi.
                </p>
                <div className="flex gap-2 px-10 py-4">
                  <h6 className="text-btnColor font-poppin font-medium text-[18px] group-hover:text-bgColor">
                    Order Now{" "}
                  </h6>
                  <div className="text-btnColor font-medium text-[18px] mt-1 group-hover:text-bgColor">
                    <FaArrowRightLong />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex ml-[235px] gap-10 mt-7 w-[700px]">
              <div className="py-[40px] w-[350px] bg-bgColor rounded-[10px] group hover:bg-btnColor  transition-all duration-300 ease-in-out">
                <h3 className="text-btnColor text-[30px] px-10 group-hover:text-bgColor">
                  <SiAffinitydesigner />
                </h3>

                <h3 className="text-textColor px-10 font-poppin font-semibold mt-7 text-[20px] group-hover:text-bgColor">
                  Interior Design
                </h3>
                <p className="px-10 mt-7 font-semibold text-textColor font-poppin text-[14px] group-hover:text-bgColor">
                  Dolor sit amet, consectetur adipisicing elit. Delectus esse
                  commodi.
                </p>
                <div className="flex gap-2 px-10 py-4">
                  <h6 className="text-btnColor font-poppin font-medium text-[18px] group-hover:text-bgColor">
                    Order Now{" "}
                  </h6>
                  <div className="text-btnColor font-medium text-[18px] mt-1 group-hover:text-bgColor">
                    <FaArrowRightLong />
                  </div>
                </div>
              </div>
              <div className="py-[40px] w-[350px] bg-bgColor rounded-[10px] group hover:bg-btnColor  transition-all duration-300 ease-in-out">
                <h3 className="text-btnColor text-[30px] px-10 group-hover:text-bgColor">
                  <GrGamepad />
                </h3>

                <h3 className="text-textColor px-10 mt-7 font-poppin font-semibold text-[20px] group-hover:text-bgColor">
                  Game design
                </h3>
                <p className="px-10 font-semibold text-textColor font-poppin text-[14px] mt-7 group-hover:text-bgColor">
                  Dolor sit amet, consectetur adipisicing elit. Delectus esse
                  commodi.
                </p>
                <div className="flex gap-2 px-10 py-4">
                  <h6 className="text-btnColor font-poppin font-medium text-[18px] group-hover:text-bgColor ">
                    Order Now{" "}
                  </h6>
                  <div className="text-btnColor font-medium text-[18px] mt-1  group-hover:text-bgColor">
                    <FaArrowRightLong />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-7 mt-20 pl-[17px]">
              <h3 className="text-[#dedee0] text-[24px] font-poppin font-semibold pl-[230px]">
                Price Plans
              </h3>
              <p className="text-[#545454] ">
                .............................................................................................
              </p>
              <h6 className="text-[#545454] font-poppin ">04</h6>
            </div>
            <div className="flex mt-10 ml-[235px] gap-10 w-[700px]">
              <div
                data-aos="fade-up"
                className="bg-bgColor  w-[335px] py-[40px] rounded-[10px] transition delay-150 duration-300 ease-in-out"
              >
                <h3 className="text-textColor text-[24px] font-bold font-poppin text-center pb-5 pt-5">
                  Hourly Payment
                </h3>
                <h3 className="text-textColor text-[30px] font-bold font-poppin text-center gap-5">
                  <span className="text-textColor font-medium text-[14px]">
                    $
                  </span>
                  29
                  <span className="text-textColor font-medium text-[14px]">
                    h
                  </span>
                </h3>
                <p className="text-[#545454]  text-center">
                  .....................................................................
                </p>
                <p className="font-poppin font-medium text-[14px] text-center text-textColor mt-4">
                  Amet lorem.
                </p>
                <p className="font-poppin font-medium text-[14px] text-center text-textColor  mt-4 mb-4">
                  Dolor ipsum
                </p>

                <del className="font-poppin font-medium text-[14px] pl-[135px]  text-[#cfc7c7e3]  ">
                  Sit amet
                </del>
                <div className="flex justify-center mt-4">
                  <button className=" flex gap-2 text-textColor mt-5 bg-btnColor font-bold font-poppin py-3 px-10 rounded-[20px]">
                    Order Now <FaArrowRightLong className="mt-1" />
                  </button>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="bg-bgColor  w-[335px] py-[40px] rounded-[10px] transition delay-150 duration-300 ease-in-out"
              >
                <h3 className="text-textColor text-[24px] font-bold font-poppin text-center pb-5 pt-5">
                  Full Time
                </h3>
                <h3 className="text-textColor text-[30px] font-bold font-poppin text-center gap-5">
                  {" "}
                  <span className="text-textColor font-medium text-[14px]">
                    $
                  </span>
                  2500
                  <span className="text-textColor font-medium text-[14px]">
                    h
                  </span>
                </h3>
                <p className="text-[#545454]  text-center">
                  .....................................................................
                </p>
                <p className="font-poppin font-medium text-[14px] text-center text-textColor mt-4">
                  Amet lorem.
                </p>
                <p className="font-poppin font-medium text-[14px] text-center text-textColor  mt-4 mb-4">
                  Dolor ipsum
                </p>

                <p className="font-poppin font-medium text-[14px] text-center text-textColor  mt-4 mb-4">
                  Sit ipsum
                </p>

                <div className="flex justify-center mt-4">
                  <button className=" flex gap-2 text-textColor mt-5 bg-btnColor font-bold font-poppin py-3 px-10 rounded-[20px]">
                    Order Now <FaArrowRightLong className="mt-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* testimonials */}
            <div className="flex gap-7 mt-20 pl-[17px]">
              <h3 className="text-[#dedee0] text-[24px] font-poppin font-semibold pl-[230px]">
                Testimonials
              </h3>
              <p className="text-[#545454] ">
                .............................................................................................
              </p>
              <h6 className="text-[#545454] font-poppin ">05</h6>
            </div>
            <div className="ml-[235px] w-full">
              <Slider {...settings}>
                <div className="relative">
                  <div className=" mt-10 pl-[10px]">
                    <div className="bg-bgColor w-[700px] py-[50px]  rounded-[10px]">
                      <div className="w-[100px] h-[100px] rounded-full overflow-hidden mx-auto">
                        <Images
                          imgSrc={t1}
                          imgAlt={t1}
                          className={"h-full object-cover w-full"}
                        />
                      </div>
                      <div className="">
                        <h3 className="font-poppin font-semibold text-[25px] text-textColor mt-5 text-center">
                          Paul Freeman
                        </h3>
                        <h6 className="font-poppin font-semibold text-[18px] text-btnColor mt-5 text-center">
                          <i>Interior Designer</i>
                        </h6>
                        <p className="font-poppin font-medium text-[14px] p-5 text-textColor mt-5 text-center">
                          lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Doloribus, cumque.lorem ipsum dolor sit amet,
                          consectetur adipisicing elit. Doloribus, cumque.lorem
                          ipsum dolor sit amet, consectetur adipisicing elit.
                          Doloribus, cumque.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className=" mt-10 pl-[10px]">
                    <div className="bg-bgColor w-[700px] py-[50px] rounded-[10px]">
                      <div className="w-[100px] h-[100px] rounded-full overflow-hidden mx-auto">
                        <Images
                          imgSrc={t2}
                          imgAlt={t2}
                          className={"h-full object-cover w-full"}
                        />
                      </div>
                      <div className="">
                        <h3 className="font-poppin font-semibold text-[25px] text-textColor mt-5 text-center">
                          Paul Freeman
                        </h3>
                        <h6 className="font-poppin font-semibold text-[18px] text-btnColor mt-5 text-center">
                          <i>Interior Designer</i>
                        </h6>
                        <p className="font-poppin font-medium text-[14px] p-5 text-textColor mt-5 text-center">
                          lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Doloribus, cumque.lorem ipsum dolor sit amet,
                          consectetur adipisicing elit. Doloribus, cumque.lorem
                          ipsum dolor sit amet, consectetur adipisicing elit.
                          Doloribus, cumque.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className=" mt-10 pl-[10px]">
                    <div className="bg-bgColor w-[700px] py-[50px] rounded-[10px]">
                      <div className="w-[100px] h-[100px] rounded-full overflow-hidden mx-auto">
                        <Images
                          imgSrc={t3}
                          imgAlt={t3}
                          className={"h-full object-cover w-full"}
                        />
                      </div>
                      <div className="">
                        <h3 className="font-poppin font-semibold text-[25px] text-textColor mt-5 text-center">
                          Paul Freeman
                        </h3>
                        <h6 className="font-poppin font-semibold text-[18px] text-btnColor mt-5 text-center">
                          <i>Interior Designer</i>
                        </h6>
                        <p className="font-poppin font-medium text-[14px] p-5 text-textColor mt-5 text-center">
                          lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Doloribus, cumque.lorem ipsum dolor sit amet,
                          consectetur adipisicing elit. Doloribus, cumque.lorem
                          ipsum dolor sit amet, consectetur adipisicing elit.
                          Doloribus, cumque.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-sContainer mx-auto justify-center ">
            <div className="flex gap-7 mt-20 pl-[17px]">
              <h3 className="text-[#dedee0] text-[24px] font-poppin font-semibold pl-[230px]">
                Latest Publications
              </h3>
              <p className="text-[#545454] ">
                ...................................................................
              </p>
              <h6 className="text-[#545454] font-poppin ">06</h6>
            </div>
            <div className="w-[700px] flex mt-10 ml-[235px] gap-10">
              <div className="bg-bgColor  w-[335px] h-[485px] rounded-[10px] relative">
                <div className="absolute top-0 left-0 w-full h-full rounded-t-lg">
                  <Images imgSrc={lw1} imgAlt={lw1} />
                </div>
                <div className="absolute top-[230px] text-center">
                  <h6 className="text-[#bebbbb] font-medium  font-poppin text-[18px] pt-5">
                    Life Style
                  </h6>
                  <h3 className="text-textColor font-medium font-poppin text-[20px] p-5">
                    Create your own beauty blog with trueman
                  </h3>
                  <p className="text-[#545454] ">
                    ....................................................
                  </p>
                  <div className="flex gap-3 pt-5  px-[75px] text-center absolute">
                    <p className="text-[#545454] font-medium  font-poppin text-[14px]">
                      14 July .
                    </p>
                    <p className="text-[#545454] font-medium font-poppin text-[14px]">
                      14:30 .
                    </p>
                    <p className="text-[#545454] font-medium font-poppin text-[14px]">
                      Emma.T
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-bgColor  w-[335px] h-[485px] rounded-[10px] relative">
                <div className="absolute top-0 left-0 w-full h-full ">
                  <Images imgSrc={lw2} imgAlt={lw2} w-full h-full />
                </div>
                <div className="absolute top-[230px] text-center">
                  <h6 className="text-[#bebbbb] font-medium  font-poppin text-[18px] pt-5">
                    Life Style
                  </h6>
                  <h3 className="text-textColor font-medium font-poppin text-[20px] p-5">
                    Create your own beauty blog with trueman
                  </h3>
                  <p className="text-[#545454] ">
                    ....................................................
                  </p>
                  <div className="flex  gap-3 pt-5 px-[75px] text-center absolute">
                    <p className="text-[#545454] font-medium  font-poppin text-[14px]">
                      14 July .
                    </p>
                    <p className="text-[#545454] font-medium font-poppin text-[14px]">
                      14:30 .
                    </p>
                    <p className="text-[#545454] font-medium font-poppin text-[14px]">
                      Emma.T
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Story;
