import React from "react";

import style from "./Banner.module.css";
import firstImage from ".././../../../public/assets/images/assets_ce0c7323a97a4d91bd0baa7490ec9139_4e7450bbc1114943b89ef51ea59fb791.png" 
import Image from "next/image";


function Banner() {
  return (
    <div className="relative flex justify-between">
      <div className={`absolute w-full  h-auto`}>
        
  <div className="relative flex ">
  <div className={`absolute md:w-[1200px] overflow-hidden`}>
        <Image src={firstImage} className={`${style.image1}`}/>
       </div>
       <div className={`absolute md:w-[1600px]`}>
        <Image src={firstImage}  className={`${style.image2}`}/>

       </div>
    
  </div>
        </div>

      {/* Center Text */}
      <div className="relative md:container md:mx-auto z-50 text-center flex flex-col justify-center items-center">
        <h2 className="text-white text-[30px] md:text-[72px] font-bold  pt-[124px] md:pb-10 pb-2 md:leading-[76px]">
          Powerful for developers. <br />
          Fast for everyone.
        </h2>
        <p className={` md:pb-[30px] md:text-[20px] text-[18px] md:leading-[30px] font-diatype px-[20px] md:w-2/5`}>
        Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between
        </p>
      </div>
    </div>
  );
}

export default Banner;
