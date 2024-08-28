"use client"

import { timerfunc } from "@/lib/timerfunc";
import { useEffect } from "react";

const Timer = () => {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          console.log('Syncing the server and client for timer');
        }, 1000);
        return () => {
          clearTimeout(timeoutId);
        };
      }, []); 
    const {days , hours , minutes , seconds } = timerfunc()


  return (
<div className="w-full mt-[3%]  overflow-hidden  flex flex-col justify-center items-center">
        <div className="mx-auto text-center flex flex-col justify-center items-center gap-3">
        <h2 className="typewriter dark:animated-text py-3 md:text-5xl text-lg font-bold text-slate-100">We are still working on the project ! </h2>
        <p className="md:text-large text-slate-100 ">Thanks for being with us, Please stay in touch</p>
        </div>
    
<div className="w-full  p-6 text-lg md:text-6xl font-bold text-cyan-950 dark:text-slate-100 text-center">
    <h2>
        <span> {days}</span> : 
        <span> {hours}</span> : 
        <span> {minutes}</span> : 
        <span> {seconds}</span>
    </h2>
</div>
</div>
)
};
export default Timer;