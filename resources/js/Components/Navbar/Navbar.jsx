import { useState } from "react";
import { BsMinecartLoaded } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import AccountNav from "./AccountNav.jsx";
import NavSearch from "./NavSearch";
import './style.css'
import { Badge } from "@mui/material";
import { useSelector } from 'react-redux';




const Navbar = () => {
  const {cartItems} = useSelector(state=>state.cartItems)
  // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    setOpen(true);
   document.getElementById('root::before').style.display = 'block'
  
    // document.body.style.backgroundColor = "rgba(0,0,0,1)";   
    
    
  };
  const handleColse = (e) => {
    setOpen(false);
    document.body.style.backgroundColor = "white";

  };
  const menu = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <nav className="flex justify-between items-center lg:h-20 h-16 bg-white md:px-20 px-10   shadow-">
        <div className="text-3xl font-popins text-blue font-medium">
          <Link to="/">Ecommerce</Link>
        </div>
        <ul className="md:flex hidden   font-medium uppercase items-center text-gray-700">
          {menu.map((mn) => (
            <li key={mn.link} className="">
              <Link to={mn.link} className="hover:text-gray-400 md:px-4 px-2">
                {mn.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="fc space-x-5 ">
          <NavSearch w={20} />
          <Link to="/cart">
            <Badge color="primary" badgeContent={cartItems.length || 0}>
              <BsMinecartLoaded
                fontSize={20}
                className="hover:opacity-50 duration-500 cursor-pointer"
              />
            </Badge>
          </Link>
          <AccountNav />
          <AiOutlineMenu
            onClick={handleClick}
            fontSize={20}
            className="hover:opacity-50 duration-500 cursor-pointer sm:hidden"
          />
        </div>
        <MobileNav
          menu={menu}
          open={open}
          handleClick={handleClick}
          handleColse={handleColse}
        />
      </nav>
    </>
  );
};

export default Navbar;
