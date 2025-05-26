import React, { useState } from "react";
import QRCode from "react-qr-code";
import Home from "./Home";
import {QRCodeSVG} from 'qrcode.react';
import { QRCodeCanvas } from "qrcode.react";
import logo from '../../../images/One.png'
import ClipLoader from "react-spinners/ClipLoader";

const ConfirmBooking: React.FC=()=>{
    const [loading, setLoading]= useState(true)

    setTimeout(()=>{
        setLoading(false)
    },3000)
    const data={
        "date": "123",
        "time": " 2828"
    }
    return (
        <div className="h-full w-full justify-center items-center flex flex-col">
            {loading ? <div className="flex h-full w-full items-center justify-center">
                <ClipLoader/>
            </div>
            : 
            <>
            <img src={logo} className="h-36 w-36"/>
            <QRCodeCanvas value={JSON.stringify(data)}></QRCodeCanvas>
            <h1 className="text-primaryBlue font-semibold text-lg align-middle text-center self-center">Scan the QR to get complete journey ticket and details</h1>
            <button className="text-primaryBlue text-sm font-semibold" onClick={()=>{window.location.href="/book"}}>
                <h1 className="text-sm font-semibold underline">Book Another Journey</h1>
            </button>
            </>
            
            }
            
            
        </div>
    )
}

export default ConfirmBooking