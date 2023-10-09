import React from "react";
import rasheeda from "../../assets/rasheeda.jpg";

const FounderCard = () => {
  return (
    <div className="lg:p-20 md:20 p-3 ">
      <div class="p-4 py-8 text-center bg-[#0A1426] border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-10">
          <div class="p-4">
            <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <img
                class="rounded-lg lg:h-[500px] h-[500px] w-full object-cover"
                src={rasheeda}
                alt=""
              />
            </div>
          </div>
          <div className="p-4 text-white text-left">
            <p className="mb-2 text-3xl">About the Founder</p>
            <div class="text-white text-lg text-left pl-0 text-left">
              Mrs Rashida Dennings has been homeschooling her children for many years. She
              finds it challenging to teach four children at different age
              groups who learn differently, but she also finds it gratifying and
              rewarding. She believes that learning new concepts and increasing
              knowledge is a benefit for both her and her children. Rashida is
              also the founder of Black Homeschoolers of Central Florida, an
              organization that has helped to introduce homeschooling to the
              community and has made it easier for homeschoolers to find places
              for classes and field trips.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderCard;
