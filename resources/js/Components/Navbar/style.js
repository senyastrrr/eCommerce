export const transition = {
    enter: "transition ease-out duration-100",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95",
  };
  export const Style = {
    menuButton: ` justify-center mt-2`,
    menuItems: `z-10 absolute right-0 lg:mt-7 mt-5 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`,
    item: `group flex w-full items-center rounded-md px-2 py-2 text-sm`,
    itemA: `bg-violet-500 text-white`,
    itemB: `text-gray-900`,
  };