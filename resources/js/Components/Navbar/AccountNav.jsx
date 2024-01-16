import {Fragment} from 'react'
import { Link } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";
import { Menu, Transition } from "@headlessui/react";
import { transition, Style } from "./style";

const AccountNav = () => {
      const user = true;
  return (
    <>
      <Menu as="div" className="relative ">
        <Menu.Button className={Style.menuButton}>
          <VscAccount
            fontSize={20}
            className="hover:opacity-50 duration-500 cursor-pointer"
          />
        </Menu.Button>
        <Transition as={Fragment} {...transition}>
          <Menu.Items className={Style.menuItems}>
            {!user ? (
              <>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`${active ? Style.itemA : Style.itemB} ${
                        Style.item
                      }`}
                      to="/sign-in"
                    >
                      Sign In
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`${active ? Style.itemA : Style.itemB} ${
                        Style.item
                      }`}
                      to="register"
                    >
                      Register
                    </Link>
                  )}
                </Menu.Item>
              </>
            ) : (
              <>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`${active ? Style.itemA : Style.itemB} ${
                        Style.item
                      }`}
                      to="/my-profile"
                    >
                      My Account
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${active ? Style.itemA : Style.itemB} ${
                        Style.item
                      }`}
                    >
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}

export default AccountNav