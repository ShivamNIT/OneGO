import { IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { FaArrowAltCircleDown, FaArrowCircleDown } from "react-icons/fa";
import TrainCard from "../../components/TrainCard";
import supabase from "../../utils/supabase";
import { trainDummy } from "../../dummy";
import { key } from "ionicons/icons";
import { useAppDispatch } from "../../redux/store";
import { updateJourney } from "../../redux/states/User";
import Card from "../../components/Card";
import logo from '../../../images/One.png'
import { mmData } from "../../dummy";
import ClipLoader from "react-spinners/ClipLoader";


const Booking: React.FC = () => {
  const [startingMode, setStartingMode] = useState("Train");
  const [trainFrom, setTrainFrom] = useState("");
  const [trainTo, setTrainTo] = useState("");
  const [trainDOJ, setTrainDOJ] = useState<any>();
  const dispatch = useAppDispatch();
  const [details,showDetails]=useState(false)
  const [filter, setFilter]= useState<string>("")
  const [loading, setLoading]=useState(false)

  useEffect(() => {
    dispatch(updateJourney("rail2"));
  }, []);

  if(loading){
    setTimeout(()=>{
      setLoading(false)
    }, 3000)
  }


  return (
    <IonPage className="bg-white overflow-scroll">
      <div className="flex flex-col overflow-scroll bg-white">
       <div className="flex flex-col bg-white h-auto p-2 items-center justify-center" >
                        <img src={logo} className="h-auto w-auto"/>
                   
                </div>
                <div className="flex bg-primaryBlue w-full text-white text-s font-semibold items-center justify-center h-14 -mt-4">Smart Scheduling</div>
        <form className="w-full h-full" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col bg-white rounded-t-xl p-2 space-y-2">
            <input
              className="w-full h-auto p-2 border-primaryBlue border-[1px] rounded-lg bg-white text-gray-600"
              title="From"
              placeholder="From"
              onChange={(e) => setTrainFrom(e.target.value)}
              value={trainFrom}
            ></input>
            <FaArrowAltCircleDown
              className="self-center"
              color="#1656B7"
              size={20}
            />
            <input
              className="w-full h-auto p-2 border-primaryBlue border-[1px] rounded-lg bg-white text-gray-600"
              title="To"
              placeholder="To"
              onChange={(e) => setTrainTo(e.target.value)}
              value={trainTo}
            ></input>
            <input
              className="w-full h-auto p-2 border-primaryBlue border-[1px] rounded-lg  bg-white text-gray-600"
              placeholder="Date Of Journey"
              type=""
              onFocus={(e) => (e.target.type = "date")}
              onChange={(e) => setTrainDOJ(e.target.value)}
              value={trainDOJ}
            ></input>
            <button
              className="w-32 h-10 bg-primaryBlue border-2 text-white rounded-lg p-1 self-center font-semibold"
              onClick={(e) => {
                e.preventDefault()
                setLoading(true)
                showDetails(true)}}
            >
              Show Options
            </button>
          </div>
        </form>
        {loading ? <div className="h-full w-full items-center justify-center flex">
          
          <ClipLoader/> 
          
          </div>: ''}
        <div className="flex-col items-center gap-4 mt-4">
          {details && !loading ?
         <>
         <div className="flex flex-row justify-evenly">
            <button className={`${filter==="price" ?'bg-primaryBlue text-white': 'bg-gray-200 text-black' } font-semibold p-1 rounded-md text-sm`} onClick={()=>{setFilter("price")}}>Sort By Price</button>
            <button className={`${filter==="duration" ?'bg-primaryBlue text-white': 'bg-gray-200 text-black' } font-semibold p-1 rounded-md text-sm`} onClick={()=>{setFilter("duration")}}>Sort By Duration</button>
         </div>
        {filter==="price" ?
          <Card data={mmData[1]}/>
        : 
        
        filter==="duration" ? 
        <Card data={mmData[0]}/>
        :
        filter==="" ?
        mmData.map((data:any)=>{
          return <Card data={data}/>
        })
        :''
        }
         </>
         :''
}
        </div>
      </div>
    </IonPage>
  );
};

export default Booking;
