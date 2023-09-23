import React from "react";
import colorstack from "../../assets/unnamed.jpg";
import Slider from "../../components/Slider/Slider";
import Neo from "../../assets/Neo.svg";
import codesignal from "../../assets/codesignal.svg";
import riot from "../../assets/riot.svg";
import Y from "../../assets/Y.svg";
import HomepageAbout from "./HomepageAbout";
import { Link } from "react-router-dom";
const Homepage = () => {
  const items = [
    [
      Y,
      codesignal,
      riot,
      Neo,
      codesignal,
      riot,
      Neo,
      // Add more image URLs for index 1
    ],

    [
      Neo,

      riot,
      Neo,
      codesignal,
      codesignal,
      // Add more image URLs for index 0
    ],

    // Add more arrays for other indexes as needed
  ];
  return (
    <div className="relative w-full h-full fixed bg-[#0A2426] py-[50px] full-width">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          {/* Left side (Banner Image) */}
          <div className="relative h-screen lg:h-[100vh] md:h-[300px] sm:h-[400px] ss:h-[200px] xxs:h-[400px]">
            {/* Replace 'banner-image.jpg' with your actual image URL */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${colorstack})`,
              }}
            ></div>
          </div>

          {/* Right side (Text) */}
          <div>
            <div className="lg:w-[50%]  lg:py-[30%] p-8">
              <h1 className="text-white text-4xl font-bold">
                Community EXPO February 24, 2024
              </h1>
              <p className="text-white text-xl font-medium pt-5">
                Black HomeSchoolers of Central Florida
              </p>
              <div className="py-8">
                <Link to="https://www.eventbrite.com/e/community-expo-2024-february-24-2024-tickets-222691495257">
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-600 to-orange-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Register Event
                    </span>
                  </button>
                </Link>
                <Link to="https://www.charityauctionstoday.com/bid/1443">
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-600 to-orange-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Donate To Event
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <p className="text-white text-xl font-medium pt-5 lg:w-[50%]  p-8">
              SPONSORED BY
            </p>

            <Slider items={items} />
          </div>
        </div>
      </div>
      <div className="max-w-100%">
        <HomepageAbout />
      </div>
    </div>
  );
};

export default Homepage;
