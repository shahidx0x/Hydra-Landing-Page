import { motion } from "framer-motion";
import Card from "../Card/Card";
import person_1 from "../../assets/bwh/card1.jpeg";
import person_2 from "../../assets/bwh/card2.jpeg";
import person_3 from "../../assets/bwh/card3.jpeg";
import person_4 from "../../assets/bwh/card4.jpeg";
import { useParallax } from "react-scroll-parallax";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const card_info = [
  {
    image: person_1,
    title: "SIMULATION",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam mollitia ab expedita fuga! Saepe voluptates molestiae repellendus asperiore consequuntur",
    link: "/simulation",
  },
  {
    image: person_2,
    title: "EDUCATION",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam mollitia ab expedita fuga! Saepe voluptates molestiae repellendus asperiore consequuntur",
    link: "/simulation",
  },
  {
    image: person_3,
    title: "SELF-CARE",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam mollitia ab expedita fuga! Saepe voluptates molestiae repellendus asperiore consequuntur",
    link: "/simulation",
  },
  {
    image: person_4,
    title: "OUTDOOR",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam mollitia ab expedita fuga! Saepe voluptates molestiae repellendus asperiore consequuntur",
    link: "/simulation",
  },
];

const BuildWithHydra = () => {
  const prlx = useParallax<HTMLDivElement>({
    scale: [0.82, 0.7, "easeInQuad"],
  });
  return (
    <motion.div ref={prlx.ref} className="">
      <div className="flex justify-between -mt-20 lg:mt-5">
        <div className="flex flex-col  gap-2 w-1/2 pl-10">
          <h2 className="font-mono text-5xl text-white font-thin">WHY</h2>
          <div className=" flex gap-5 items-center">
            <p className="font-sans text-2xl text-white">BUILD WITH HYDRA</p>
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="165"
                height="4"
                viewBox="0 0 100 4"
                fill="none"
              >
                <path
                  d="M164.392 2.39142H0.824768"
                  stroke="#C0B7E8"
                  stroke-width="3"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="105"
                height="119"
                viewBox="0 0 100 119"
                fill="none"
              >
                <path
                  d="M74.3176 59.3914L31.0458 59.3914M74.3176 59.3914L57.0089 79.0563M74.3176 59.3914L57.0089 39.7265"
                  stroke="#C0B7E8"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex w-1/2 text-gray-300 blur-0 font-medium break-all pr-10">
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            mollitia ab expedita fuga! Saepe voluptates molestiae repellendus
            asperiores consequuntur, sapiente quasi doloribus odit tempora sunt
            dolores modi id animi veniam! Dolores tenetur exercitationem sed
            unde pariatur cupiditate in voluptatibus facere accusantium, aliquid
            fugit officiis harum beatae doloremque voluptates vitae suscipit
            perferendis minima vel eveniet. Quasi dolorum rerum ab aliquid modi?
            Itaque aliquam atque in voluptates quo magnam corrupti repellendus
            cupiditate natus cumque autem dolorum ullam deserunt repudiandae
            unde, sapiente alias placeat laudantium ipsam aspernatur. Tempore
            totam quam praesentium saepe optio.
          </h2>
        </div>
      </div>
      <motion.div
        animate={{ scale: 1.2 }}
        className=""
      >
        <div className="flex-wrap justify-center mt-60 lg:mt-24 gap-12 hidden lg:flex">
        {card_info.map((info, index) => (
          <Card
            key={index}
            title={info.title}
            details={info.details}
            image={info.image}
            link={info.link}
          />
        ))}

        </div>
      
        <div className="w-full flex justify-center items-center lg:hidden mt-12">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper flex"
          >
            {card_info.map((info, index) => (
              <SwiperSlide>
                <Card
                  key={index}
                  title={info.title}
                  details={info.details}
                  image={info.image}
                  link={info.link}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BuildWithHydra;
