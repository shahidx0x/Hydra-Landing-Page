import { useParallax } from "react-scroll-parallax";
import headerImage from "../../assets/header/header_girl.jpg";
import arrow from "../../assets/header/arrow-small-right.svg";
import { motion } from "framer-motion";
import States from "../States/States";

const Header = () => {
  const prlx_header = useParallax<HTMLDivElement>({
    scale: [1, 0.7, "easeInQuad"],
  });
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 0.9 }}
      transition={{ duration: 1 }}
      ref={prlx_header.ref}
      // className="border"
    >
      <div className="w-full h-[911px] ">
        <nav className="lg:flex justify-around items-center flex-col lg:flex-row hidden">
          <div className="flex gap-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: "-100vh" }}
              animate={{ opacity: 1, x: 0, rotate: [0, 180] }}
              transition={{ duration: 1 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="114"
                height="119"
                viewBox="0 0 114 119"
                fill="none"
              >
                <g clip-path="url(#clip0_1_5)" filter="url(#filter0_d_1_5)">
                  <path
                    d="M106.772 41.2578C108.108 48.9756 99.9123 46.9199 99.9123 46.9199C96.4822 37.2546 90.9941 38.1563 90.9941 38.1563C95.2907 41.2939 95.6157 43.9626 95.6157 43.9626C84.17 35.8481 68.6082 42.3758 62.6868 45.4413C59.365 40.7529 52.6493 30.2581 55.0323 25.4976C58.1735 19.2585 64.5643 22.8289 64.5643 22.8289C77.4904 22.6125 76.7682 17.9962 76.7682 17.9962C73.3382 20.665 63.2284 17.9962 63.2284 17.9962C72.0022 17.9962 75.7212 14.4259 75.7212 14.4259C69.1859 16.0488 61.8925 9.08833 61.8925 9.08833C59.2206 -4.58009 46.8723 1.22629 46.8723 1.22629C54.599 -0.108098 52.541 8.07853 52.541 8.07853C42.8645 11.5046 43.7672 16.9864 43.7672 16.9864C46.9084 12.6948 49.5803 12.3702 49.5803 12.3702C40.7343 24.8124 49.2553 42.1233 51.7828 46.6314C47.1612 49.8411 36.3293 56.9098 31.455 54.4574C25.2086 51.3198 28.7831 44.9364 28.7831 44.9364C28.6387 32.0253 24.0171 32.7466 24.0171 32.7466C26.6889 36.1727 24.0171 46.2708 24.0171 46.2708C24.0171 37.5071 20.4426 33.7925 20.4426 33.7925C22.0674 40.3201 15.0989 47.6051 15.0989 47.6051C1.41461 50.2739 7.2277 62.6079 7.2277 62.6079C5.89178 54.8901 14.0879 56.9458 14.0879 56.9458C17.518 66.6111 23.0061 65.7095 23.0061 65.7095C18.7095 62.5719 18.3845 59.9031 18.3845 59.9031C30.4801 68.4864 47.1973 60.6965 52.2521 57.9556C55.6461 62.8243 61.9647 72.8502 59.6178 77.5025C56.4766 83.7417 50.0858 80.1713 50.0858 80.1713C37.1597 80.3156 37.8819 84.9318 37.8819 84.9318C41.312 82.263 51.4217 84.9318 51.4217 84.9318C42.6479 84.9318 38.9289 88.5022 38.9289 88.5022C45.4642 86.8793 52.7576 93.8397 52.7576 93.8397C55.4295 107.508 67.7778 101.702 67.7778 101.702C60.0511 103.036 62.1091 94.8495 62.1091 94.8495C71.7856 91.4234 70.8829 85.9416 70.8829 85.9416C67.7417 90.2333 65.0698 90.5579 65.0698 90.5579C73.7353 78.4042 65.7558 61.5621 63.0479 56.6212C67.9583 53.1951 77.8875 47.0642 82.473 49.3723C88.7194 52.5099 85.1449 58.8933 85.1449 58.8933C85.2893 71.8044 89.9109 71.0831 89.9109 71.0831C87.239 67.657 89.9109 57.5589 89.9109 57.5589C89.9109 66.3226 93.4854 70.0372 93.4854 70.0372C91.8606 63.5095 98.8291 56.2245 98.8291 56.2245C112.586 53.5918 106.772 41.2578 106.772 41.2578Z"
                    fill="url(#paint0_linear_1_5)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1_5"
                    x="0"
                    y="0"
                    width="114"
                    height="119"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="10" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_5"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_5"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1_5"
                    x1="56.9966"
                    y1="0.00115967"
                    x2="56.9966"
                    y2="102.927"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C0B7E8" />
                    <stop offset="1" stop-color="#8176AF" />
                  </linearGradient>
                  <clipPath id="clip0_1_5">
                    <rect
                      width="102"
                      height="103"
                      fill="white"
                      transform="translate(6)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "-100vh" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="76"
                height="46"
                viewBox="0 0 76 46"
                fill="none"
              >
                <g clip-path="url(#clip0_1_9)">
                  <path
                    d="M0 0H2.32086V27.4049H9.25075V0H11.5716V46H9.25075V29.7131H2.32086V46H0V0Z"
                    fill="url(#paint0_linear_1_9)"
                  />
                  <path
                    d="M28.7329 0L22.9798 29.7131V46H20.6589V29.7131L14.8731 0H16.9978L21.8357 24.7717L26.6408 0H28.7329Z"
                    fill="url(#paint1_linear_1_9)"
                  />
                  <path
                    d="M38.997 46H32.0344V0H38.9643C41.5467 0 43.5733 2.04806 43.5733 4.58375V41.3837C43.606 43.8869 41.5467 46 38.997 46ZM34.3553 2.30813V43.6919H38.9643C40.2065 43.6919 41.2852 42.6516 41.2852 41.3837V4.58375C41.2852 3.34841 40.2392 2.27562 38.9643 2.27562H34.3553V2.30813Z"
                    fill="url(#paint2_linear_1_9)"
                  />
                  <path
                    d="M58.806 46H56.4198L52.3338 29.7131H49.5553V46H47.2344V0H54.1643C56.7467 0 58.7733 2.04806 58.7733 4.58375V25.0968C58.7733 27.4049 56.9755 29.3555 54.6873 29.6155L58.806 46ZM49.5553 27.4049H54.1643C55.4064 27.4049 56.4852 26.3647 56.4852 25.0968V4.58375C56.4852 3.34841 55.4391 2.27562 54.1643 2.27562H49.5553V27.4049Z"
                    fill="url(#paint3_linear_1_9)"
                  />
                  <path
                    d="M65.8013 29.7131L64.1996 46H62.1075L66.7492 0H71.3583L75.9673 46H73.8753L72.2735 29.7131H65.8013ZM69.495 2.30813H68.5798L66.0628 27.4049H72.012L69.495 2.30813Z"
                    fill="url(#paint4_linear_1_9)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_1_9"
                    x1="5.78581"
                    y1="0"
                    x2="5.78581"
                    y2="46"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C0B7E8" />
                    <stop offset="1" stop-color="#8176AF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1_9"
                    x1="21.803"
                    y1="0"
                    x2="21.803"
                    y2="46"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C0B7E8" />
                    <stop offset="1" stop-color="#8176AF" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_1_9"
                    x1="37.8041"
                    y1="0"
                    x2="37.8041"
                    y2="46"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C0B7E8" />
                    <stop offset="1" stop-color="#8176AF" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_1_9"
                    x1="53.0202"
                    y1="0"
                    x2="53.0202"
                    y2="46"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C0B7E8" />
                    <stop offset="1" stop-color="#8176AF" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_1_9"
                    x1="69.0374"
                    y1="0"
                    x2="69.0374"
                    y2="46"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C0B7E8" />
                    <stop offset="1" stop-color="#8176AF" />
                  </linearGradient>
                  <clipPath id="clip0_1_9">
                    <rect width="76" height="46" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </motion.div>
          </div>
          <div>
            <ul className="flex flex-col lg:flex-row gap-10 text-white font-bold ">
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{
                  scale: 1.1,
                  transition: { delay: 0, duration: 0 },
                }}
                transition={{ delay: 1, duration: 0.5 }}
                className="cursor-pointer"
              >
                ABOUT
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{
                  scale: 1.1,
                  transition: { delay: 0, duration: 0 },
                }}
                transition={{ delay: 1.1, duration: 0.4 }}
                className="cursor-pointer"
              >
                SERVICES
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{
                  scale: 1.1,
                  transition: { delay: 0, duration: 0 },
                }}
                transition={{ delay: 1.2, duration: 0.3 }}
                className="cursor-pointer"
              >
                TECHNOLOGIES
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{
                  scale: 1.1,
                  transition: { delay: 0, duration: 0 },
                }}
                transition={{ delay: 1.3, duration: 0.2 }}
                className="cursor-pointer"
              >
                HOW TO
              </motion.li>
            </ul>
          </div>
          <div className="flex gap-5">
            <motion.button
              initial={{ x: "100vh" }}
              animate={{ x: 0 }}
              whileHover={{
                color: "#fff",
                background:
                  "linear-gradient(92deg, #C0B7E8 -1.02%, #8176AF 36.25%)",
              }}
              transition={{ delay: 0.2, duration: 0.2 }}
              className="w-[154px] h-[48px] font-bold rounded-[40px] border-2 text-white"
            >
              CONTACT US
            </motion.button>
            <motion.button
              initial={{ x: "-100vh" }}
              animate={{ x: 0 }}
              whileHover={{ color: "#fff" }}
              transition={{ delay: 0.2, duration: 0.2 }}
              className="w-[154px] h-[48px] rounded-[40px] border-gray-500 text-gray-700 font-bold bg-gradient-to-r from-purple-400 to-purple-500"
            >
              JOIN HYDRA
            </motion.button>
          </div>
        </nav>
        <section className="flex flex-col-reverse lg:flex-row justify-around mt-[150px] ml-36">
          <div className="flex flex-col gap-10 text-white">
            <motion.h2
              initial={{ opacity: 0, y: "-100vh" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="-ml-[9rem] lg:-ml-0 font-bold text-[35px] lg:text-[46px] w-[29rem]"
            >
              <span className="text-gradient">Dive</span> into the depths of{" "}
              <span className="text-gradient">Virtual Reality</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: "100vh" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="hidden lg:flex break-all w-[42rem] "
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              recusandae voluptatem. Fugiat vitae voluptatibus numquam impedit,
              maxime vel voluptate laborum, perspiciatis eum praesentium quia
              exercitationem, consequuntur et veritatis. Dicta, numquam.
            </motion.p>
            <div className="flex gap-5 items-center">
              <motion.button
                initial={{ opacity: 0, x: "-100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="-ml-[9rem] lg:-ml-0 w-[254px] h-[48px] rounded-[40px] border-gray-500 text-gray-700 font-bold bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]"
              >
                BUILD YOUR WORLD
              </motion.button>
              <motion.img
                initial={{ opacity: 0, x: "100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                src={arrow}
                alt=""
                className="hidden lg:flex"
              />
            </div>
          </div>
          <motion.div
            className="-ml-[9rem] lg:mt-0 lg:-ml-0 w-[400px] h-[380px] lg:w-[524px] lg:h-[460px]  overflow-hidden shadow-2xl shadow-indigo-700"
            style={{
              borderRadius: "70px 70px 70px 180px",
              background: "rgba(0, 0, 0, 0.13)",
            }}
          >
            <div
              className=" w-[400px] h-[380px] lg:w-[524px] lg:h-[455px] overflow-hidden shadow-2xl shadow-indigo-700"
              style={{
                borderRadius: "100px 100px 100px 240px",
                background: "rgba(0, 0, 0, 0.13)",
              }}
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
                src={headerImage}
                alt=""
                className="shadow-2xl "
              />
            </div>
          </motion.div>
       
        </section>
        <States/>
      </div>
   
      <style>
        {`.text-gradient{
             background: linear-gradient(92deg, #C0B7E8 -1.02%, #8176AF 36.25%);
             background-clip: text;
             -webkit-background-clip: text;
             -webkit-text-fill-color: transparent;
        }`}
      </style>
    </motion.div>
  );
};

export default Header;
