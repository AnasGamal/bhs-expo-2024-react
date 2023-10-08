import React from "react";
import { EventInformationCard, EventRegisterCard } from "../../components";

const EventRegistration = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      {/* Left Section (Hidden on small screens) */}
      <div className="hidden md:col-span-2 md:block p-4">
        {/* Content for the left section */}
      </div>

      {/* Middle Section (12 columns wide on all screens) */}
      <div className="col-span-8  p-4">
        <div className="mb-4">
          <EventRegisterCard />
        </div>
        <div>
          <EventInformationCard />
        </div>
      </div>

      {/* Right Section (Hidden on small screens) */}
      <div className="hidden md:col-span-2 md:block  p-4">
        {/* Content for the right section */}
    
      </div>
    </div>
  );
};

export default EventRegistration;
