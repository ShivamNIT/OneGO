import { FaTrain } from "react-icons/fa6";
import { FaArrowRight , FaBus , FaCarAlt } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import React from "react";
import { SiElixir } from "react-icons/si";


const Card : React.FC<{data:any}>=({data}) => {
  return (
    <div className="w-[95vw] m-auto my-2 mb-5 h-auto shadow-lg rounded-lg border-2 p-3" onClick={()=>{
      window.location.href="/booking-page"
    }}>
      <div className="flex items-center p-2 border-b-4 border-[#1656B7]">
        <FaTrain color="green" className="w-10 h-6" />
        <FaArrowRight color="#1656B7" className="w-6 h-5" />
        <FaBus color="green" className="w-10 h-6" />
        <FaArrowRight color="#1656B7" className="w-6 h-5" />
        <FaCarAlt color="green" className="w-10 h-7" />
      </div>
      <div className="flex">
        {/* mumbai/jaipur */}
        <div className="w-[130vw] pt-1">
          <div className="h-[10vh] flex justify-center">
            <div className="text-black w-[45%] flex-col justify-center items-center gap-0">
              <div className="text-center text-lg text-[#1656B7] font-semibold">
                {/* {src} */}
                {data.from}
              </div>
              <div className="text-center font-semibold ">{data.dTime}</div>
              <div className="text-center">{data.dDate}</div>
            </div>
            <FaArrowRight color="#1656B7" className="mt-2 h-4 w-[15%] pt-" />
            <div className="text-black w-[45%] flex-col justify-center items-center gap-0">
              <div className="text-center text-lg text-[#1656B7] font-semibold">
                {data.to}
              </div>
              <div className="text-center font-semibold ">{data.aTime}</div>
              <div className="text-center">{data.aDate}</div>
            </div>
          </div>
        </div>
        <div className="text-black w-full h-full flex-col justify-center items-center pt-2">
          <div className="font-semibold text-xl text-center text-[#1656B7]">
            {" "}
          {data.fare}
          </div>
          <div className="text-center text-lg font-medium">Total Fare</div>
          {data.greenRide ?
           <div className="flex flex-col space-y-2 mt-2 w-full">
           <div className=" text-black text-sm flex flex-row space-x-2 justify-center border-2 border-solid border-green-500 items-center rounded-lg h-8 w-full">
             <FaLeaf color="green"/>
             <h1 className="text-sm font-semibold text-green-500">Green Ride</h1>
           </div>
           <div className=" text-black text-sm flex flex-row space-x-2 justify-center border-2 border-solid border-green-500 items-center rounded-lg h-8 w-full">
             <SiElixir color="green"/>
             <h1 className="text-sm font-semibold text-green-500">250 Points</h1>
           </div>
          
         </div>
          :
          ''
          }
          <h1 className="text-primaryBlue text-sm font-semibold">Duration: {data.duration}</h1>
        </div>
      </div>
     
      {/* <SiElixir color="green"/> */}

  
    </div>
  );
}

export default Card