// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Card = ({ image, title, details, link }: any) => {
  return (
    <>
      <div className="card">
        <div className=" flex justify-center items-center mt-5">
          <div className=" w-[200px] h-[200px] bg-gray-900 rounded-full overflow-hidden flex justify-center items-center">
            <div className=" w-[190px] h-[190px] bg-gray-900 rounded-full overflow-hidden">
              <img src={image} alt={title} className="h-[20rem] w-[20rem]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col  justify-center items-center gap-2 mt-5">
          <h2 className="text-2xl font-bold text-gray-300">{title}</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="168"
            height="2"
            viewBox="0 0 168 2"
            fill="none"
          >
            <path
              d="M0.256592 0.931641H167.512"
              stroke="#C0B7E8"
              stroke-opacity="0.33"
            />
          </svg>
          <p className="break-all text-gray-300 font-medium text-sm p-10">
            {details}
          </p>
          <button
            onClick={() => window.open(link, "_blank")}
            className="w-[254px] h-[48px] rounded-[40px] border-gray-500 text-gray-700 font-bold bg-gradient-to-r hover:text-gray-300 from-[#8176AF] to-[#C0B7E8]"
          >
            TRY IT NOW
          </button>
        </div>
      </div>

      <style>
        {`
            .card{
                    width: 400.682px;
                    height: 535.265px;
                    border-radius: 40px;
                    background: radial-gradient(50% 50% at 50% 50%, #433D60 0%, #211E2E 100%);
                }
        `}
      </style>
    </>
  );
};

export default Card;
