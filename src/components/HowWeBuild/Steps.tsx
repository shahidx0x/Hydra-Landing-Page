// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Steps = ({ details }:any) => {
  return (
    <div className="flex gap-5 justify-center items-center ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="78"
        height="77"
        viewBox="0 0 78 77"
        fill="none"
      >
        <path
          d="M54.9146 38.9263L22.9597 38.9263M54.9146 38.9263L42.1327 51.6067M54.9146 38.9263L42.1327 26.2458"
          stroke="#C0B7E8"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p className="text-2xl  text-gray-200 font-bold ">{details}</p>
    </div>
  );
};

export default Steps;
