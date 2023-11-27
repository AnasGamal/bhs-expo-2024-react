import React from "react";
import { Link } from "react-router-dom";

const EventRegisterCard = () => {
  return (
    <div>
      <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <h5 class="border-b-2 border-neutral-100 px-6 py-3 text-xl font-medium leading-tight dark:border-neutral-600 dark:text-neutral-50">
          EXPO 2024
        </h5>
        <div class="p-6">
          <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Thank you for your interest in our career EXPO!
          </h5>
          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Feb 24, 2024, 8:00 AM - 5:00 PM
          </p>

          <div className="flex justify-between gap-4">
            <Link
              to={
                "https://www.eventbrite.com/e/community-expo-2024-february-24-2024-tickets-222691495257"
              }
            >
              <button
                type="button"
                href="#"
                className="inline-block rounded bg-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:bg-orange-500"
              >
                Register for Event
              </button>
            </Link>
            {/* <button
              type="button"
              href="#"
              className="inline-block rounded bg-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:bg-orange-500"
            >
              Add to Calendar
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventRegisterCard;
