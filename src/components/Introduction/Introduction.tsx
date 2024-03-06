import { motion } from "framer-motion";
import { useParallax } from "react-scroll-parallax";
const Introduction = () => {
  const prlx = useParallax<HTMLDivElement>({
    scale: [1, 0.7, "easeInQuad"],
  });
  return (
    <motion.div initial={{ x: "-100vh", opacity: 0 }} ref={prlx.ref}>
      <div className="flex justify-between lg:mt-5 -mt-20">
        <div className="flex flex-col  gap-2 w-1/2 pl-10">
          <h2 className="font-mono text-5xl text-white font-thin">
            INTRODUCTION
          </h2>
          <div className=" flex gap-5 items-center">
            <p className="font-sans text-2xl text-white">
              TO HYDRA VR
            </p>
            <div className="lg:flex justify-center items-center hidden ">
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
        <div className="flex w-1/2 text-gray-300 blur-0 font-medium break-all pr-10">
          <h2 className="hidden lg:flex">
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
    </motion.div>
  );
};

export default Introduction;
