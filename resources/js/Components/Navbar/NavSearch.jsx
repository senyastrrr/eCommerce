import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { transition, Style } from "./style";
import { FiSearch } from "react-icons/fi";
import SearchForm from "../SearchForm";

const NavSearch = () => {
  const [open, setOpen] = useState(false);
    
  const user = false;
  const handleClose = (e) => {
   setOpen(!open)
  };
  return (
    <>
      <Menu as="div" className="relative ">
        <Menu.Button className={Style.menuButton}>
          <FiSearch
            fontSize={20}
            className="hover:opacity-50 duration-500 cursor-pointer"
          />
        </Menu.Button>
        <Transition as={Fragment} {...transition}>
          <Menu.Items unmount={open} open={open} className={`${Style.menuItems} !w-52 `}>
            <Menu.Item>
              <SearchForm h={"h-14"} className='bg-blue' handleClose={handleClose} />
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default NavSearch;
