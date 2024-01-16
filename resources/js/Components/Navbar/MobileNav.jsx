import React from "react";
import { FaSearch, FaFacebookF } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";
import { BsPinterest } from "react-icons/bs";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineClose,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import SearchForm from "../SearchForm";

const MobileNav = ({ menu, open, handleClick, handleColse }) => {
  const sMedia = [
    { icon: <AiOutlineTwitter />, link: "/" },
    { icon: <AiFillInstagram />, link: "/" },
    { icon: <FaFacebookF />, link: "/" },
    { icon: <BsPinterest />, link: "/" },
  ];
  return (
    <div
      className={`fixed md:hidden ${
        open ? "translate-x-0" : "translate-x-[125%] "
      } top-0 right-0 h-screen bg-white w-1/2 z-[10000] duration-500`}
    >
      <div
        onClick={handleColse}
        className="absolute w-16 
        h-16 bg-black -translate-x-full
        text-white fc group cursor-pointer
        
        "
      >
        <AiOutlineClose
          className="group-hover:-rotate-180 transform duration-500 "
          size={25}
        />
      </div>
      <div className="w-full">
       <SearchForm />
        <div className="">
          <ul className=" mt-5 flex flex-col">
            {menu.map((menu,i) => (
              <li className="font-medium fc " key={i}>
                <Link
                  className="uppercase hover:bg-gray-200 pl-6 py-2 w-full hover:text-primary"
                  to={menu.link}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-5 mt-5 flex space-y-3 flex-col">
          <p className="font-medium">Choose Language</p>
          <select name="" id="" className="border py-2 px-2">
            <option value="">English</option>
            <option value="">French</option>
            <option value="">Germany</option>
          </select>
          <p className="mt-5 font-medium">Choose Currency</p>
          <select name="" id="" className="border py-2 px-2">
            <option value="">USD</option>
            <option value="">EUR</option>
            <option value="">GBP</option>
          </select>
        </div>
        <div className="mt-10 px-5">
          <p className="flex items-center">
            <HiPhone className="mr-3" /> (1245) 2456 012
          </p>
          <p className="flex items-center">
            <HiMail className="mr-3" /> info@yourdomain.com
          </p>
        </div>
        <ul className="flex mt-10 px-10 justify-around">
          {sMedia.map((media, i) => (
            <li key={i}>
              <Link to={media.link}>{media.icon}</Link>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
