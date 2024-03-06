import { useParallax } from "react-scroll-parallax";
import company_one from "../../assets/company/unreal.png";
import company_two from "../../assets/company/unity.png";
import company_three from "../../assets/company/oculas.png";
import company_four from "../../assets/company/valve.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
const UsedByCompany = () => {
  const prlx = useParallax<HTMLDivElement>({
    scale: [1, 0.7, "easeInQuad"],
  });
  return (
    <div ref={prlx.ref}>
      <div className="base w-full h-[200px] lg:h-[400px] rounded-[150px]">
        <div className="w-full h-full  flex justify-center items-center">
          <div className="flex flex-col gap-5">
            <h2 className="text-xl lg:text-7xl text-gray-300 font-bold">
              TECHNOLOGIES & HARDWARE
            </h2>
            <p className=" opacity-80 text-center text-md lg:text-4xl font-mono text-white font-thin">
              USED BY HUDRA VR.
            </p>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden justify-center items-center">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper flex"
        >
          <SwiperSlide className="flex justify-center">
            <img width={300} className="opacity-50" src={company_one} alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img width={300} className="opacity-50" src={company_two} alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img
              width={300}
              className="opacity-50"
              src={company_three}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img width={300} className="opacity-50" src={company_four} alt="" />
          </SwiperSlide>
        </Swiper>
       
      </div>
      <div className="lg:flex flex-wrap gap-28 mt-5 justify-center hidden">
          <img width={300} className="opacity-50" src={company_one} alt="" />
          <img width={300} className="opacity-50" src={company_two} alt="" />
          <img width={300} className="opacity-50" src={company_three} alt="" />
          <img width={300} className="opacity-50" src={company_four} alt="" />
        </div>

      <style>
        {`
                    .base {
                        background: linear-gradient(0deg, rgba(48, 44, 66, 0.79) 0%, rgba(48, 44, 66, 0.79) 100%), url('https://www.slashgear.com/img/gallery/facebooks-big-bet-on-ar-smart-glasses-displays-may-have-backfired/l-intro-1689790881.jpg') lightgray 10% / cover;
                    }
                    
                    
                  `}
      </style>
    </div>
  );
};

export default UsedByCompany;
