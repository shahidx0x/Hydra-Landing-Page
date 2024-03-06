import { motion } from "framer-motion";
import aboutHvr from "../../assets/abouthvr/abouthvr.jpeg";
import { useParallax } from "react-scroll-parallax";
const AboutHydraVR = () => {
  const prlx = useParallax<HTMLDivElement>({
    scale: [0.92, 0.7, "easeInQuad"],
  });
  return (
    <>
      <motion.div ref={prlx.ref} className="lg:flex flex-col-reverse lg:flex-row mt-28  ">
        <div className="w-1/2 flex justify-center items-center">
          <div className="ml-[12.7rem] lg:ml-0 -mt-36 lg:-mt-0 rounded-tl-[100px] rounded-bl-[250px] shadow-2xl shadow-indigo-700 rounded-tr-[300px] rounded-br-[100px] w-[350px] h-[400px]  lg:w-[554px] lg:h-[660px]">
            <div className="rounded-tl-[200px] rounded-bl-[100px] shadow-2xl shadow-indigo-700 rounded-tr-[100px] rounded-br-[200px] overflow-hidden w-[350px] h-[400px]  lg:w-[554px] lg:h-[660px] blur-0">
              <motion.img src={aboutHvr} />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div>
            <div className="flex flex-col gap-5">
              <h2 className="font-mono hidden lg:flex  text-5xl text-white font-thin">
                ABOUT
              </h2>
              <p className="font-sans hidden lg:flex text-2xl text-white ">
                HYDRA VR
              </p>
            </div>
            <div className="flex flex-col gap-20 mt-24">
              <p className="break-all text-gray-300 blur-0 font-medium font-sans pr-2 lg:pr-10 w-screen lg:w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur tempora ad nam modi ipsum ut perferendis excepturi
                vitae? Minima voluptates ipsam maxime officia perferendis
                temporibus hic quibusdam quasi odio quo! Molestias asperiores
                recusandae ad ducimus cumque, mollitia alias dolorum numquam
                nisi odio non iste nobis blanditiis facilis doloremque suscipit
                nam ex, fugiat quisquam quos odit beatae atque doloribus quod.
                Nam! Possimus, corrupti. Quaerat, voluptatem. Labore fuga dicta
                magni veniam dolor repellat ducimus possimus dolorum laborum et.
                Eum, veritatis accusamus iste et dolorum consequuntur
                repudiandae id incidunt rem, totam eius obcaecati? Doloribus
                architecto autem velit, provident labore distinctio aperiam
                excepturi libero dolorem, tempora sequi sint delectus
                consequatur eum porro sit est. Nostrum, praesentium. Minima est
                consequatur velit? Aut, quae eligendi. Illum? Qui architecto ad
                quam eum odio non deleniti est vel aliquam commodi eos labore
                vero esse molestiae, veniam provident dolorum! Exercitationem
                dolor unde, eligendi expedita commodi consequuntur minus eaque
                sequi.
              </p>
              <motion.button
                initial={{ x: "-100vh", color: "white" }}
                animate={{ x: 0 }}
                whileHover={{ color: "#fff" }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className="w-[254px] h-[48px] rounded-[40px] border-gray-500 text-gray-700 font-bold bg-gradient-to-r from-purple-400 to-purple-500"
              >
                LETS GET IN TOUCH
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutHydraVR;
