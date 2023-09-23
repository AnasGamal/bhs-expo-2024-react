import React from "react";
import { Link } from "react-router-dom";
import HomePageAdvertize from "./HomePageAdvertize";

const HomepageAbout = () => {
  return (
    <div className="relative w-full h-full bg-[#e0e0e0] py-[5%]">
      <div className="relative lg:top-1/2 lg:left-1/4 text-center lg:w-1/2 p-5">
        <h1 className="text-2xl md:text-2xl lg:text-2xl sm:text-4xl  ss:text-2xl font-serif py-10">
          What is EXPO
        </h1>
        <p className="text-lg  md:text-xl lg:text-6xl sm:text-2xl  ss:text-3xl font-serif">
          Expo is a community event in Greater Central Florida that connects
          services and businesses with homeschooling families, supports youth
          entrepreneurs and artists, and raises funds for a dedicated Homeschool
          Resource Center, offering various resources and services to the
          community.
        </p>
        <div className="py-10">
          <Link to="https://www.charityauctionstoday.com/bid/1443">
            <button className="relative  inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-yellow-600 to-orange-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Donate To Event
              </span>
            </button>
          </Link>
        </div>
      </div>
      <HomePageAdvertize/>
    </div>
  );
};

export default HomepageAbout;
