import React from "react";

const Banner = ({ image }) => {
  return (
    <div className="relative h-screen">
      {/* Image */}
      <img src={image} alt="Banner" className="w-full h-[80vh] object-cover" />

      {/* Card */}
      <div className="absolute bottom-10 left-0 right-0 p-5 lg:w-[80%] md:w-[80%] p-10 lg:text-2xl w-full">
        <div className="w-full block rounded-lg bg-[#0A1426] text-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 bg-[#0A1426]">
          <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 lg:text-2xl">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
              <div className="flex items-center">
                <h3
                  className="font-bold uppercase "
                  style={{
                    background: `repeating-linear-gradient(45deg, red, red 20px, black 20px, black 40px, green 40px, green 60px)`,
                  }}
                >
                  Community EXPO
                </h3>
              </div>
            </div>
          </div>
          <div className="p-6 text-white">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
              <h5 className="mb-2 text-xl font-medium leading-tight p-2 lg:text-3xl">
                An event that Fosters Community Engagement, Youth
                Entrepreneurship, and Education Support.
              </h5>
              <p className="mb-4 lg:text-2xl text-xl text-white p-2 lg:ml-10">
                We are dedicated to raising funds for our Community Homeschool
                Resource Center in Greater Central Florida, which provides a
                diverse range of services to local families, including classes,
                resources, a lending library, curriculum support, and study
                space
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
