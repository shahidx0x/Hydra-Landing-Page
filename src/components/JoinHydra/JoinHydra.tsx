import { useParallax } from "react-scroll-parallax";

const JoinHydra = () => {
  const prlx = useParallax<HTMLDivElement>({
    scale: [1, 0.7, "easeInQuad"],
  });
  return (
    <div ref={prlx.ref} className="h-[1030px] rounded-[90px] joinHydraBg mt-40 ">
      <div className="">
        <div className="flex flex-wrap justify-center items-center flex-col gap-5">
          <h2 className="text-gray-300 font-bold mt-10 text-3xl lg:text-5xl">JOIN HYDRA</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="421"
            height="2"
            viewBox="0 0 421 2"
            fill="none"
          >
            <path
              d="M0.376373 1.43115H420.53"
              stroke="url(#paint0_linear_13_46)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_13_46"
                x1="420.53"
                y1="1.43353"
                x2="0.376373"
                y2="1.43108"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#343045" />
                <stop offset="0.348958" stop-color="#C0B7E8" />
                <stop offset="0.6875" stop-color="#8176AF" />
                <stop offset="1" stop-color="#343045" />
              </linearGradient>
            </defs>
          </svg>
          <p className="text-white text-xl lg:text-2xl font-sans ">
            Lets Build Your VR Experiences
          </p>
        </div>
        <div className="mt-20 flex flex-col gap-10 ">
          <div className="flex flex-col lg:flex-row justify-center gap-10 ">
            <input
              className="lg:!w-[531px] lg:h-[73px] w-[400px] rounded-[40px] bg-transparent border text-white p-6 lg:p-10 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="First Name"
              type="text"
            />
            <input
               className="lg:!w-[531px] lg:h-[73px] w-[400px] rounded-[40px] bg-transparent border text-white p-6 lg:p-10 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Last Name"
              type="text"
            />
          </div>
          <div className="flex flex-col lg:flex-row justify-center gap-10  ">
            <input
             className="lg:!w-[531px] lg:h-[73px] w-[400px] rounded-[40px] bg-transparent border text-white p-6 lg:p-10 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Email"
              type="email"
            />
            <input
              className="lg:!w-[531px] lg:h-[73px] w-[400px] rounded-[40px] bg-transparent border text-white p-6 lg:p-10 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Phone Number"
              type="text"
            />
          </div>
          <div className="flex justify-center gap-10  ">
            <input
              className=" w-[400px] lg:!w-[1115px] h-[73px] rounded-[40px] bg-transparent border text-white p-6 lg:p-10 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Subject"
              type="text"
            />
          </div>
          <div className="flex justify-center gap-10  ">
            <textarea
              className="!w-[1115px] h-[215px] rounded-[40px] bg-transparent border text-white p-10 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Tell us Something ...."
            />
          </div>
          <div className="flex justify-center gap-10  ">
            <button className="w-[250px] h-[48px] rounded-[40px] border-gray-500 text-gray-700 font-bold bg-gradient-to-r hover:text-gray-300 from-[#8176AF] to-[#C0B7E8]">
              SEND TO HYDRA
            </button>
          </div>
        </div>
      </div>
      <style>
        {`
                  .joinHydraBg {
                    border-radius: 53px 50px 46px 44px;
                    background: radial-gradient(50% 50% at 50% 50%, #403A5F 0%, #211E2E 100%);
                    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
                  }
                  `}
      </style>
    </div>
  );
};

export default JoinHydra;
