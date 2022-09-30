import React, { useContext } from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { InputContext } from "../searchpage";

const SearchPageHeader = () => {
  const [value, setValue] = useState("");
  const { inputValue, setInputValue } = useContext(InputContext);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    setInputValue(value);
    setValue("");
  };

  const HandleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      setInputValue(value);
      setValue("");
    }
  };

  return (
    <div className='bg-gray-900'>
      <div className='container mx-auto py-8'>
        <h1 className='text-3xl font-bold text-center text-white'>
          Brainy <span className='text-gray-400'>Dictionary</span>
        </h1>
        <p className='text-center mt-1 mb-10 text-slate-300 text-lg'>
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <div className='flex items-center justify-center mt-5'>
          <div className='flex border-2 bg-white border-gray-200 rounded-lg'>
            <input
              type='text'
              className='px-4 py-2 md:w-80 outline-none '
              value={value}
              onChange={handleChange}
              onKeyDown={HandleInputKeyDown}
              placeholder='look for me here'
            />
            <BsSearch
              className='bg-white font-bold text-3xl mt-1 cursor-pointer'
              onClick={handleSubmit}
            />
          </div>
        </div>
        {inputValue && (
          <h3 className='text-gray-50 text-center mt-4'>
            Result for:{" "}
            <span className='text-white font-bold'>{inputValue}</span>
          </h3>
        )}
      </div>
    </div>
  );
};

export default SearchPageHeader;
