import React from "react";
import mrsRasheeda from "../../assets/mrsRasheeda.jpg";

const FounderCard = () => {
  return (
    <div className="lg:p-20 md:20 p-3 ">
      <div class="w-full p-4 py-8 text-center bg-[#0A1426] border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 py-10">
          <div class="p-4">
            <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <img
                class="rounded-lg lg:h-[500px] h-[200px] w-full object-cover"
                src= {mrsRasheeda}
                alt=""
              />
            </div>
          </div>
          <div className="p-4 text-white text-left">
            <p className="mb-2 text-3xl">About the Founder</p>
            <div class="text-white text-lg text-left pl-0 text-left">
               I studied Computer Science at Cornell and
              quickly realized how bad the underrepresentation of Black and
              Latinx CS students was on campus and in industry. It bothered me
              so much that I spent my own time mentoring my peers, then built a
              club to scale those efforts. That club ended up helping triple
              Black and Latinx CS enrollment. For me, accomplishing something
              similar at a national scale (ColorStack) was the logical next
              step. There is nothing more fulfilling to me than helping Black
              and Latinx students across the country choose Computer Science,
              complete their degree, and start exciting technical careers after
              they graduate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderCard;
