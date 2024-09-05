import React from "react";

import style from "./Banner.module.css";
import firstImage from ".././../../../public/assets/images/assets_ce0c7323a97a4d91bd0baa7490ec9139_4e7450bbc1114943b89ef51ea59fb791.png";
import Image from "next/image";
import Button from "../Button/Button";
import { imagesArray } from "@/app/util/utils";

function Banner() {
  const imageLocation = "/public/assets/images/listedCompanies.png";
  return (
    <>
      <section>
        <div className="relative flex justify-between">
          <div className={`absolute w-full h-auto`}>
            <div className="relative flex ">
              <div className={`absolute md:w-[1200px] overflow-hidden z-10`}>
                <Image src={firstImage} className={`${style.image1}`} />
              </div>
              <div className={`absolute md:w-[1600px]`}>
                <Image src={firstImage} className={`${style.image2}`} />
              </div>
            </div>
          </div>

          {/* Center Text */}
          <div className="relative md:container md:mx-auto z-50 text-center flex flex-col justify-center items-center">
            <h2 className="text-white text-[30px] md:text-[72px] font-bold  pt-[124px] md:pb-10 pb-2 md:leading-[76px]">
              Powerful for developers. <br />
              Fast for everyone.
            </h2>
            <p
              className={` md:mb-[48px] md:text-[20px] text-[14px] md:leading-[30px] font-diatype px-[20px] md:w-2/5`}
            >
              Bring blockchain to the people. Solana supports experiences for
              power users, new consumers, and everyone in between
            </p>
          </div>
        </div>
      </section>
      <section>
        <div
          className={`text-center flex gap-3 items-center justify-center font-light mt-10 md:mt-0 mb-10`}
        >
          <Button type="solid">Start Building</Button>
          <Button type="transparent">Resources</Button>
        </div>
      </section>
      <section className={`md:mt-[106px] text-center`}>
        <div>
          <p className={`${style.listedCompanies} text-[12px] md:text-[14px]`}>
            Powering tools and integrations from companies all around the world
          </p>
          <div
            className={`container mx-auto flex display z-[2000] gap-[32px] justify-center items-center mt-[32px]`}
          >
            {imagesArray.map((image) => (
              <div
                key={image.id}
                className="w-[83px] h-[40px] flex justify-center items-center"
              >
                <Image
                  src={image.src}
                  className={`${style.imagesizes}`}
                  alt={image.name}
                  width={"auto"} // Adjust width as needed
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
