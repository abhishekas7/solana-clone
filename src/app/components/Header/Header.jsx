import React from "react";
import style from "./Header.module.css";
import solanoLogo from "../../../../public/assets/Solana.jpg";
import Image from "next/image";
import { RiArrowDownSLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

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
          subdes:
            "The Solana Ecosystem is a collection of projects and tools that are built on Solana.",
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
      <div className={` z-50 ${style.headermain} font-diatype font-light hidden md:block`}>
        It's time to enter the arena 📡 - Sign up for the Solana Radar hackathon
        now!
      </div>
      <div className="relative py-[20px] text-text-1 text-center  z-10 h-auto bg-primary-1 flex items-center hidden md:block">
        <div className="container mx-auto w-[1440px] flex justify-around">
          <div className="logo w-[150px]">
            <Image src={solanoLogo} alt="logo" width="150px" />
          </div>
          <nav>
            <div className="flex gap-5">
              {Menu.map((item, index) => (
                <a className={`cursor-pointer font-diatype text-[17.6px]`}>
                  <div className="inline-flex gap-[2px]">
                    <div className={``}>{item.name}</div>
                    <div>
                      <RiArrowDownSLine size={24} />
                    </div>
                  </div>
                </a>
              ))}
              <div className="siteSearchMenu">
                <div className="flex border min-w-[28px] p-1 border-r-10 rounded-[6.4px] border-text-1">
                  <span>
                    <CiSearch size={24} />
                  </span>
                  <input
                    type="text"
                    className="bg-transparent border-none outline-none pl-2 text-text-1 text-[14px] w-[90px]"
                    placeholder="Search..."
                  />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
