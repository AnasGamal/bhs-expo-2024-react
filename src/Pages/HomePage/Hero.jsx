import colorstack from "../../assets/unnamed.jpg";
import Slider from "./Slider";
import Neo from "../../assets/Neo.svg";
import codesignal from "../../assets/codesignal.svg";
import riot from "../../assets/riot.svg";
import Y from "../../assets/Y.svg";
import { Link } from "react-router-dom";
import { urlFor } from "../../services/sanity";

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

const Hero = ({ data }) => {
    return (
        <div style={{ backgroundColor: "#0A2426" }}
         className="max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          {/* Left side (Banner Image) */}
          <div className="relative h-screen lg:h-[100vh] md:h-[300px] sm:h-[400px] ss:h-[200px] xxs:h-[400px]">
            {/* Replace 'banner-image.jpg' with your actual image URL */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${urlFor(data.image).url()})`,
              }}
            ></div>
          </div>

          {/* Right side (Text) */}
          <div>
            <div className="lg:w-[80%]  lg:py-[19.6%] p-8">
              <h1 className="text-white text-5xl font-bold">
                {/* Community EXPO */}
                {data.heading}
              </h1>
              <h2 className="text-white text-3xl font-bold">
                {data.date}
              </h2>
              <p className="text-white text-xl font-medium pt-5">
                {data.description}
              </p>
              <div className="py-8">
              {data.callToActionButtons.map((button) => {
                  return (
                    <Link
                    key={button._key}
                    to={button.url}>
                      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-600 to-orange-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          {button.title}
                        </span>
                      </button>
                    </Link>
                  );
                })}
            
              </div>
            </div>
            <p className="text-white text-xl font-medium pt-5 lg:w-[50%]  p-8">
              SPONSORED BY
            </p>

            <Slider items={data.sponsorLogos} />
          </div>
        </div>
      </div>
    )
}

export default Hero