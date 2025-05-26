import { IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { FaArrowAltCircleDown, FaArrowCircleDown } from "react-icons/fa";
import TrainCard from "../../components/TrainCard";
import supabase from "../../utils/supabase";
import { trainDummy } from "../../dummy";
import { key } from "ionicons/icons";
import { useAppDispatch } from "../../redux/store";
import { updateJourney } from "../../redux/states/User";
import logo from '../../../images/One.png'
import { ClipLoader } from "react-spinners";

const Home: React.FC=()=>{
    const [startingMode, setStartingMode]= useState("Train")
    const [trainFrom, setTrainFrom]= useState("")
    const [trainTo, setTrainTo]= useState("")
    const [trainDOJ, setTrainDOJ]= useState<any>()
    const [details,showDetails]=useState(false)
    const [loading, setLoading]= useState(false)
    const dispatch=useAppDispatch()
    useEffect(() => {
        dispatch(updateJourney("rail2"))
      }, [])

      if(loading){
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
      }
    return (
        <IonPage>
            <div className="flex flex-col overflow-scroll">
                <div className="flex flex-col bg-white h-auto p-2 items-center justify-center" >
                        <img src={logo} className="h-auto w-auto"/>
                   
                </div>
                <div className="flex bg-primaryBlue w-full text-white text-s font-semibold items-center justify-center h-14">Customised Booking</div>
                <form className='w-full h-full' onSubmit={(e)=>e.preventDefault()} >
          <div className='flex flex-col bg-white rounded-t-xl p-2 space-y-2'>
          <input className='w-full h-auto p-2 border-primaryBlue border-[1px] rounded-lg' title='From' placeholder='From' onChange={(e)=>setTrainFrom(e.target.value)} value={trainFrom}></input>
          <FaArrowAltCircleDown className='self-center' color='#1656B7' size={20}/>
          <input className='w-full h-auto p-2 border-primaryBlue border-[1px] rounded-lg' title='To' placeholder='To' onChange={(e)=>setTrainTo(e.target.value)} value={trainTo}></input>
          <input className='w-full h-auto p-2 border-primaryBlue border-[1px] rounded-lg text-primaryBlue' placeholder='Date Of Journey' type='' onFocus={(e)=>(e.target.type="date")} onChange={(e)=>setTrainDOJ(e.target.value)} value={trainDOJ}></input>
          <button className='w-32 h-10 bg-primaryBlue border-2 text-white rounded-lg p-1 self-center font-semibold' onClick={ ()=>{showDetails(true); setLoading(true)} }>Show Options</button>
          </div>
         </form>
        {loading? <div className="h-full w-full flex justify-center items-center">

            <ClipLoader/>
        </div>:''}
        {
            details && !loading ?
            <div className='p-2 bg-white space-y-2'>
         <div className="flex flex-row justify-between">
                    <h1 className={`text-[15px] ${startingMode=="Train" ? 'text-black underline font-semibold': 'text-gray-600 font-semibold'}`} onClick={()=>{setStartingMode("Train")}} >TRAIN</h1>    
                    <h1 className={`text-[15px] ${startingMode=="Cab" ? 'text-black underline font-semibold': 'text-gray-600 font-semibold'}`} onClick={()=>{setStartingMode("Cab")}}>CABS</h1>                    

                    <h1 className={`text-[15px] ${startingMode=="Bus" ? 'text-black underline font-semibold' : 'text-gray-600 font-semibold'}`} onClick={()=>{setStartingMode("Bus")}}>BUS</h1>                    

                        </div>
            
        
        <div>
{trainDummy.map((data:any)=>{
                
                return(
                    
                    <TrainCard data={data} key={data.key} urlTo="/custom/secondJourney"/>
                )
            })}

        </div>
        
          
        </div>
            
            :
''

        }
         
            </div>
 

        </IonPage>
    )
}


export default Home;