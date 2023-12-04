import React from "react";
import LocationIcon from "./LocationIcon";
import LocationMap from "./MapsContainer";
import Carousel from "./Carousel";
import ContactUs from "./ContactUs";

const EventInformationCard = () => {
  const location = {
    lat: 51.5074, // Replace with your latitude
    lng: -0.1278, // Replace with your longitude
  };
  return (
    <div className="relative">
      <div class="block rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div class=" relative p-6">
          <h5 class="mb-1 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            <div className="flex items-center space-x-2">
              <LocationIcon />
              {/* Replace 'LocationIcon' with your actual icon component */}
              <span>Location</span>
            </div>
            <div className="flex items-center space-x-2">
              {""}
              {/* Replace 'LocationIcon' with your actual icon component */}
              <h6 class="ml-9 text-base font-medium leading-tight">
              
               The Sanborn Center 815 S. Alabama Ave Deland, FL 32724
              </h6>
            </div>
            <div className="px-0">
              {/* <LocationMap /> */}
              <Carousel/>
            </div>

            <p class="mb-4 text-base  text-xl mt-8 flex justify-center">
             Images of the place for the event
            </p>
          </h5>
          <ContactUs />
    
        </div>
      </div>
    
    </div>
  );
};

export default EventInformationCard;
