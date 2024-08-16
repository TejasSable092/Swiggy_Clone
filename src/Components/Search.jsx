import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import AllDataFood from "./Data/AllDataFood";

const Search = ({Addtocart}) => {
  const [searchFood, setSearchFood] = useState("");

  return (
    <>
      <div className="h-full mt-20 relative">
        {/* Search bar */}
        <div className="flex justify-center relative px-4">
          <input
            type="text"
            placeholder="Search for restaurants and food"
            value={searchFood}
            onChange={(e) => setSearchFood(e.target.value)}
            className="border-[#bdc3c7] border-2 outline-none w-full md:w-[600px] rounded-xl px-2 py-1 placeholder:text-[#bdc3c7] text-[15px]"
          />
          <span className="absolute top-2 right-5 md:top-2 md:right-[calc(50%_-_250px_-_20px)]">
            <FaSearch size={16} className="text-gray-500" />
          </span>
        </div>
        {/* AllFoods */}
        <div className="flex flex-wrap gap-6 justify-center items-center mt-7">
          {AllDataFood.filter((item) =>
            item.name.toLowerCase().includes(searchFood.toLowerCase()))
            .map((carts, id) => (
            <div
              key={id}
              className="bg-white border border-gray-200 rounded-lg shadow-md w-[180px] h-[280px] flex flex-col justify-between transform transition-transform hover:scale-105"
            >
              <div className="w-full h-28">
                <img
                  src={carts.Img}
                  alt="FoodImg"
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity rounded-t-lg"
                />
              </div>
              <div className="p-3 flex flex-col items-start h-full justify-between">
                <div>
                  <p className="font-semibold text-lg mb-1">{carts.name}</p>
                  <p className="text-gray-500">{carts.dilevray}</p>
                </div>
                <button className="bg-black text-white w-full rounded-lg py-2 text-sm font-semibold hover:text-[#e1b12c] mt-auto" onClick={()=> Addtocart(carts)}>
                  {carts.price}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
