import React from "react";
import { FaSearch} from "react-icons/fa";

const SearchForm = ({ h, handleClose }) => {
  return (
    <form
      className={`  ${
        h ? h : "h-16"
      } bg-gray-300/50  flex items-center w-full  relative`}
    >
      <input
        type="text"
        placeholder="Search here..."
        className="bg-transparent font-medium pl-5 !w-52   py-1 focus:outline-none text-gray-400 "
      />
      <div className="absolute top-0 right-0 bg-blue text-white w-10 text-center h-full fc  ">
        <FaSearch onClick={handleClose} className="   cursor-pointer " size={20} />
      </div>
    </form>
  );
};

export default SearchForm;
