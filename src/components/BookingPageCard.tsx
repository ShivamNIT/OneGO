import { FaTrainSubway } from "react-icons/fa6";
import { FaArrowCircleRight, FaCarAlt } from "react-icons/fa";
import { mmtTrain } from "../dummy";


const BookingPageCard = () => {
  const data= mmtTrain[0]
  return (
    <>
      <div className="border-[#e3dada83] border-0 rounded-lg w-auto mt-3 border-t-2 m-auto shadow-lg flex-col justify-center pt-3 overflow-scroll">
        <div className="m-auto flex justify-center">
          <div className="flex gap-4 justify-center">
            <FaTrainSubway
              className="w-8 h-10 relative top-8"
              color="#1656B7"     
            />
            <div className="flex-col ">
              <div className="font-bold text-lg">
                {data.trainNo} - {data.name}
              </div>
              <div className="flex gap-2 text-l justify-center mt-1">
                <div>
                  <div className="h-6 text-center font-semibold text-[#1656B7]">
                    {data.from}
                  </div>
                  <div className="text-lg text-center h-5 overflow-hidden">
                   {data.dTime}
                  </div>
                  <div className="text-lg text-center">{data.dDate}</div>
                </div>
                <FaArrowCircleRight
                  className="mt-1 h-6 w-6 relative top-3"
                  color="#1656B7"
                />
                <div>
                  <div className="h-6 text-center font-semibold text-[#1656B7]">
                    {data.to}
                  </div>
                  <div className="text-lg text-center h-5 overflow-hidden">
                
                {data.aTime}          
                        </div>
                  <div className="text-lg text-center">{data.aDate}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="font-bold text-xl text-center">Rs. {data.fare}</div>
          <div className="text-center relative bottom-2 font-light">
            Train Fare
          </div>
        </div>
        <h1 className="text-red-600 text-sm underline font-semibold text-center">Predicted Delay : 02.55 Hours</h1>
      </div>

      <div className="border-[#e3dada83] border-0 rounded-lg w-[93vw] border-t-2 m-auto shadow-lg flex-col justify-center pt-3 mt-4">
        <div className="m-auto flex justify-center">
          <div className="flex gap-4 justify-center">
            <FaCarAlt className="w-10 h-10 relative top-8" color="#1656B7" />
            <div className="flex-col ">
              <div className="font-bold text-xl">
                Kartik Travels - Tata Tiago EV
              </div>
              <div className="flex gap-2 text-xl justify-center mt-1">
                <div>
                  <div className="text-lg text-center font-semibold text-[#1656B7]">
                    New Delhi
                  </div>
                  <div className="text-lg text-center h-5 overflow-hidden">
                    10:25
                  </div>
                  <div className="text-lg text-center">1th March</div>
                </div>
                <FaArrowCircleRight
                  className="mt-1 h-6 w-6 relative top-3"
                  color="#1656B7"
                />
                <div>
                  <div className="h-6 text-center font-semibold text-[#1656B7]">
                    Manali
                  </div>
                  <div className="text-lg text-center h-5 overflow-hidden">
                    20.00
                  </div>
                  <div className="text-lg text-center">17th March</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="max-h-[0vh]">
            <div className="font-bold text-lg text-center">Rs. 3170</div>
            <div className="text-center relative bottom-2 font-light">
              Train Fare
            </div>
          </div>
          <div className="bg-green-500 w-10 rounded-lg flex justify-center items-center relative bottom-5 left-2 pb-0">
            <div className="text-white font-extrabold text-center pb-0">EV</div>
          </div>
          <div className=" w-12 rounded-lg flex justify-center items-center relative bottom-4 left-2 pb-0">
            <div className="text-green-600 font-bold text-center pb-0">
              43g/km CO2 
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="text-center text-xl font-bold">Rs. 4800</div>
        <div className="text-center text-xl relative bottom-2">Total Fare</div>
      </div>
      <div className="flex justify-center w-screen ">
       
      </div>
    </>
  );
};

export default BookingPageCard;
