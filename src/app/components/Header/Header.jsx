import React from "react";
import style from "./Header.module.css";
import solanoLogo from "../../../../public/assets/Solana.jpg";
import Image from "next/image";
import { RiArrowDownSLine } from "react-icons/ri";

function Header() {

    const Menu = [
        {
          id: 1,
          name: "Learn",
          subMenu: [
            {
              id: 1,
              name: "Blockchain and Solana 101",
              subdes: "The basics on all things Solana and web3.",
            },
            {
              id: 2,
              name: "Solana Ecosystem",
              subdes: "The Solana Ecosystem is a collection of projects and tools that are built on Solana.",
            },
          ],
        },
        { id: 2, name: "Developers" },
        { id: 3, name: "Solutions" },
        { id: 4, name: "Networking" },
        { id: 5, name: "Community" },
      ];
      

  return (
    <>
      <div className={style.headermain}>
        It's time to enter the arena 📡 - Sign up for the Solana Radar hackathon
        now!
      </div>
      <div className="relative py-[20px] text-text-1 text-center  z-10 h-auto bg-primary-1 flex items-center ">
        <div className="container mx-auto w-[1440px] flex justify-around">
          <div className="logo w-[150px]">
            <Image src={solanoLogo} alt="logo" width="150px"/>
          </div>
          <nav>
            <div className="flex gap-5">
              {Menu.map((item,index)=>
                <a className={`cursor-pointer`}>
                <div className="inline-flex gap-[32px]">
                    <div>
                        {item.name}
                    </div>
                    <div>
                    <RiArrowDownSLine size={24}/>
                    </div>
                </div>
            </a>
            )}
            
            </div>

            <div className="siteSearchMenu">

            </div>
          </nav>
          <div className="search">d</div>
        </div>
      </div>
    </>
  );
}

export default Header;
