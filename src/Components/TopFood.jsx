import React from "react";
import TopFoodData from "./TopFoodData/TopFoodData";

const TopFood = () => {
  return (
    <>
      <div className="container mx-auto w-full mt-6">
        <div className="w-11/12 bg-[#ecf0f1] rounded-lg mx-auto py-6 px-4 border-b-4">
          <h2 className="text-10px md:text-2xl font-bold text-gray-900 mb-6 ml-10 underline ">
            Restaurants with Online Food Delivery
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {TopFoodData.map((FoodData) => (
              <div
                key={FoodData.id}
                className="bg-white border border-gray-200 rounded-lg shadow-md w-[180px] h-[320px] flex flex-col justify-between transform transition-transform hover:scale-105"
              >
                <a href="#">
                  <img
                    className="rounded-t-lg w-full h-32 object-cover "
                    src={FoodData.Img}
                    alt="Foodimg"
                  />
                </a>

                <div className="p-4 flex flex-col flex-grow">
                  <a href="#">
                    <h5 className="text-lg font-bold tracking-tight text-gray-900 mb-2 text-center">
                      {FoodData.name}
                    </h5>
                  </a>
                  <p className="text-gray-700 text-center mb-4 flex-grow">
                    {FoodData.dilevray}
                  </p>
                  <button className="bg-black text-white w-full rounded-lg py-2 text-sm font-semibold hover:text-[#e1b12c] mt-auto">
                    {FoodData.price}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopFood;
