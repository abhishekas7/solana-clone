"use client";

import React from "react";
import Slider from "react-slick";
import style from "./Slider.module.css";
import Button from "../Button/Button";
import Image from "next/image";
import slider1 from "/public/assets/images/SliderImage (1).jpg"
import slider2 from "/public/assets/images/SliderImage (2).jpg"
import slider3 from "/public/assets/images/SliderImage (3).jpg"
import slider4 from "/public/assets/images/SliderImage (4).jpg"


function SliderComponent() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const data = [
    {
      Imagename: slider1,
      title: "The Block: Robinhood Launches Solana Staking in Europe",
      subtitle: "The news brings a new staking option to the EU.",
      buttonContent:"NEWS",
      link:"",
    },
    {
      Imagename: slider2,
      title: "BREAKPOINT 2024",
      subtitle: "subtitle1",
      buttonContent:"BREAKPOINT 2024",
      link:"",
    },
    {
      imagename: slider3,
      title: "Title 1",
      subtitle: "subtitle1",
      buttonContent:"",
      link:"",
    }
  ]
  return (
    <>
      <div className={style.SlideContainer}>
        <Slider {...settings}>
        {data.map((item,index)=>{
          return(
            <div className={style.SlideContent}>
            <div className={`${style.ImageSection} md:block hidden w-[500px] h-[250px] flex `}>
              <Image src={item.imagename}/>
            </div>
            <div
              className={` d-flex flex gap-[8px] flex-col items-center justify-center w-[60%] align-center `}
            >
              <Button ButtonStyle={{backgroundColor: "red",padding: ""}}>{item.buttonContent}</Button>
              <p className={`md:text-[28px] md:w-[1500px] text-center`}>
                {item.title}
              </p>
              <p className={`md:text-[17.6px] text-center`}>
                {item.subtitle}
              </p>
            </div>
          </div>
          )
        })}
          
        </Slider>
      </div>
    </>
  );
}

export default SliderComponent;
