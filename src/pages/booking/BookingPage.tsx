import { IonPage } from "@ionic/react";
import BookingPageCard from "../../components/BookingPageCard";
import { SiElixir } from "react-icons/si";
import React, { useState } from "react";
// import {useT} from "react"
import ClipLoader from "react-spinners/ClipLoader";

const BookingPage = () => {
  const [loading, setLoading]= useState(true)
  setTimeout(()=>{
      setLoading(false)
  }, 3000)
  return (
    <IonPage className="overflow-scroll">
      {loading ?
      <div className="flex h-full w-full justify-center items-center">
      <ClipLoader/>

      </div>
      
      : 
    <div className="bg-white min-h-[101vh] min-w-[101vw] overflow-x-hidden text-black overflow-y-scroll">
      <div className="bg-[#1656B7] text-white text-center font-semibold h-[10vh] flex justify-center items-center text-xl">
        Journey Details
      </div>
      <div className="overflow-scroll">
        <BookingPageCard />
      </div>
      <div className="flex flex-col justify-center items-center mt-4 space-y-3">
        <SiElixir color="green" size={24}/>
        <h1 className="text-green-600 font-semibold text-[16px]">Green Points Earned: 250</h1>
        <button className="w-[80vw] h-[15vw] text-center bg-[#1656B7] hover:bg-[#1656b7e5]  text-white font-bold text-xl rounded-lg" onClick={()=>{
          window.location.href="/confirm"
        }}>
          Confirm Booking
        </button>
      </div>
      
    </div>
}
    </IonPage>
  );
}

export default BookingPage