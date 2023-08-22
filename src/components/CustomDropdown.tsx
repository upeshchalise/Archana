"use client";

import React, { useState } from "react";

interface optionProps {
  value: string;
  label: string;
  backgroundImage: string;
}

const CustomDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<optionProps | "">("");

  const options = [
    {
      value: "nepal",
      label: "+977",
      backgroundImage: "/public/images/Nepal.png",
    },
    // Add more options as needed
  ];

  const handleOptionSelect = (option: optionProps) => {
    setSelectedOption(option);
    setOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="bg-white cursor-pointer w-[5.625rem] rounded-lg border-2 p-2"
        onClick={() => setOpen(!open)}
      >
        {selectedOption ? selectedOption.label : "+977"}
      </div>
      {open && (
        <ul className="absolute top-full left-0 right-0 bg-white border border-t-0 rounded">
          {options.map((option) => (
            <li
              key={option.value}
              className=" cursor-pointer hover:bg-gray-100 text-sm"
              onClick={() => handleOptionSelect(option as optionProps)}
            >
              <div
                className="bg-cover bg-center h-8 w-8 rounded-full inline-block mr-2"
                style={{ backgroundColor: `${option.backgroundImage}` }}
              ></div>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
