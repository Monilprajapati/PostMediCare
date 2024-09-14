import React from "react";
import { HiOutlineSelector } from "react-icons/hi";

const Dropdown = ({ id, disable, name, value, options, handleChange }) => {
  return (
    <div className="relative w-full mb-4">
      <div className="input-icon">
        <HiOutlineSelector className="text-gray-400" />
      </div>
      <select
        disabled={disable}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        className="w-[100%] rounded-md p-4 bg-grey pl-12 border border-grey focus:bg-transparent placeholder:text-black cursor-pointer"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="input-box cursor-pointer"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
