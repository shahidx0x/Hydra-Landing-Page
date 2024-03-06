import { motion } from "framer-motion";
import StatesMobile from "./StatesMobile";

const States = () => {
  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="lg:flex justify-center  mt-16 hidden  "
        >
          <div className="status">
            <div className="flex justify-center h-full items-center">
              <motion.div className="w-full h-36 border-r">
                <div className="flex justify-center items-center w-full h-full">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="74"
                      height="70"
                      viewBox="0 0 74 70"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M36.8507 6.54208C48.5609 6.54208 58.0538 15.4622 58.0538 26.4657C58.0538 29.7927 57.1885 32.9275 55.652 35.6859L36.8507 66.3129L18.4848 36.4287C16.6774 33.4959 15.6475 30.0951 15.6475 26.4657C15.6475 15.4622 25.1405 6.54208 36.8507 6.54208ZM36.8507 12.2345C28.4863 12.2345 21.7056 18.6061 21.7056 26.4657C21.7056 28.7258 22.2604 30.8943 23.3104 32.852L23.8193 33.7253L36.8507 54.928L49.9741 33.576C51.2935 31.435 51.9958 29.0083 51.9958 26.4657C51.9958 18.6061 45.2151 12.2345 36.8507 12.2345ZM36.8507 17.927C41.8693 17.927 45.9377 21.7499 45.9377 26.4657C45.9377 31.1815 41.8693 35.0044 36.8507 35.0044C31.832 35.0044 27.7636 31.1815 27.7636 26.4657C27.7636 21.7499 31.832 17.927 36.8507 17.927ZM36.8507 23.6195C35.1778 23.6195 33.8217 24.8938 33.8217 26.4657C33.8217 28.0376 35.1778 29.3119 36.8507 29.3119C38.5236 29.3119 39.8797 28.0376 39.8797 26.4657C39.8797 24.8938 38.5236 23.6195 36.8507 23.6195Z"
                        fill="#C0B7E8"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-3xl text-white">
                      Pay Us a Visit
                    </h2>
                    <p className="text-white">
                      Union st, Seattle , WA9089 United States
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div className="w-full h-36 ">
                <div className="flex justify-center items-center w-full h-full gap-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="63"
                      height="59"
                      viewBox="0 0 63 59"
                      fill="none"
                    >
                      <path
                        d="M37.8563 16.2738C39.7383 16.6188 41.6065 17.3988 42.9623 18.6728C44.3182 19.9468 45.1482 21.7023 45.5154 23.4707M39.1328 7.87744C43.0428 8.2856 46.5613 10.0631 49.3449 12.6754C52.1285 15.2877 54.0117 18.5977 54.451 22.2712M54.4496 40.2075V46.7082C54.4603 49.1931 52.0825 51.2682 49.4124 51.0419C26.3678 51.0588 8.49654 34.1101 8.51457 12.6015C8.2741 10.106 10.4715 7.87998 13.1127 7.87765H20.0445C21.1659 7.8673 22.253 8.23969 23.1032 8.92541C25.5205 10.8749 27.0753 17.492 26.4771 20.1224C26.01 22.1762 23.8068 23.613 22.3089 25.0177C25.5982 30.4426 30.3879 34.9343 36.1726 38.019C37.6705 36.6142 39.2026 34.5481 41.3926 34.1101C44.2019 33.5482 51.2892 35.0113 53.3556 37.2985C54.0884 38.1095 54.4777 39.1448 54.4496 40.2075Z"
                        stroke="#C0B7E8"
                        stroke-width="6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-3xl text-white">
                      Give Us a Call
                    </h2>
                    <p className="text-white">(880) 018-1121-8207</p>
                  </div>
                </div>
              </motion.div>
              <motion.div className="w-full h-36 border-l">
                <div className="flex justify-center items-center w-full h-full gap-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="68"
                      height="65"
                      viewBox="0 0 68 65"
                      fill="none"
                    >
                      <path
                        d="M9.46785 14.8142C9.97685 14.3359 10.68 14.0401 11.4567 14.0401H56.4593C57.236 14.0401 57.9392 14.3359 58.4482 14.8142M9.46785 14.8142C8.95886 15.2925 8.64404 15.9532 8.64404 16.683V48.3982C8.64404 49.8578 9.90332 51.0411 11.4567 51.0411H56.4593C58.0127 51.0411 59.272 49.8578 59.272 48.3982V16.683C59.272 15.9532 58.9572 15.2925 58.4482 14.8142M9.46785 14.8142L29.9803 34.0887C32.1771 36.1529 35.7389 36.1529 37.9357 34.0887L58.4482 14.8142"
                        stroke="#C0B7E8"
                        stroke-width="6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-3xl text-white">
                      Send Us a Message
                    </h2>
                    <p className="text-white">contact@hydra-vTech.net</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <style>
            {`
          .status {
            width: 1321px;
            height: 162.967px;
            flex-shrink: 0;
            border-radius: 90px;
            background: radial-gradient(2900.76% 50.13% at 50% 53.89%, rgba(58, 52, 86, 0.95) 0%, #211E2E 100%);
          
          }
        `}
          </style>
        </motion.div>
        <StatesMobile/>
      </div>
    </>
  );
};

export default States;
