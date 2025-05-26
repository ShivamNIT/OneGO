import { IonPage } from "@ionic/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const LiveStatus :React.FC=()=>{
    const[ languages, setLanguages] = useState<any>([])
    const [selected, setSelected]= useState<string>()
    const [train, setTrain]=useState<string>()
    // const getLanguages=async()=>{
    //     const data =await axios.get("http://localhost:3007/api/v1/languages")

    //     // console.log(data)
    //     setLanguages(data.data.data)
    // }

    useEffect(() => {
    // getLanguages()
    // getTrainLive()
    }, [])
console.log(train)
    const getTrainLive=async()=>{
        const data= await axios.get("http://localhost:3007/api/v1/liveStatus",{
          data:{
            trainNumber:train
          }
        })
        
        console.log(data)
    }
    // console.log(languages)
    // console.log(selected)
    return(
        <IonPage>
            <div className="flex flex-col p-2">
                <div className="flex justify-center items-center bg-primaryBlue">
                    <h1 className="text-white text-sm font-semibold">Live Status</h1>
                </div>

               <select name="Language" className="w-full p-2 mt-4" onChange={(e)=>{setSelected(e.target.value)}}>
             {languages && languages.map((data:any)=>{
                return(
                    <option value={data.code} onClick={(e)=>{setSelected(data.value)}}>{data.language}</option>
                )
             })}
               
               </select>

               <input className="w-full p-2" placeholder="Enter Train No" type="number" mt-4 onChange={(e)=>setTrain(e.target.value)}></input>
               <button className="bg-primaryBlue rounded-lg p-2 text-white text-sm font-semibold mt-4 " onClick={()=>{
                getTrainLive()
               }}>Get Live Status</button>
            </div>
        </IonPage>
    )
}

export default LiveStatus