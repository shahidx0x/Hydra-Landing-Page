// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Circle = ({ count }: any) => {
  return (
    <div className="w-[220px] h-[220px] flex justify-center items-center shadow shadow-indigo-500 rounded-full  ">
      <div className="w-[200px] h-[200px]  rounded-full bg-gradient-to-r shadow-indigo-500  shadow-md from-[#8176AF] to-[#C0B7E8 ]">
        <div className="flex justify-center items-center h-full">
          <p className="text-gray-200 font-bold text-7xl">0{count}</p>
        </div>
      </div>
    </div>
  );
};

export default Circle;
