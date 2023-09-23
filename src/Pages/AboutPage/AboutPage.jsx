import React from "react";
import Banner from "../../components/Banner/Banner";
import bhcfl_girls from "../../assets/bhcfl_girls.jpg";
import colorstack from "../../assets/unnamed.jpg";
import {FounderCard} from "../../components/index.js";

const AboutPage = () => {
  return (
    <div className="relative">
      <Banner image={bhcfl_girls} />
      <div className="relative">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div className="relative lg:h-[100vh] md:h-[300px] sm:h-[400px] ss:h-[200px] xxs:h-[400px] col-span-1">
            <div
              className="absolute inset-0 bg-cover bg-center  lg:ml-[10%] md:ml-[10%] ml-[2%] mr-[2%]"
              style={{
                backgroundImage: `url(${colorstack})`,
              }}
            ></div>
          </div>
          <div className="lg:px-20 md:px-20 py-20 p-4">
            <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
              <div class="flex flex-col pb-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  GOAL 1
                </dt>
                <dd class="text-lg font-semibold">
                  Connect community services & businesses with all community
                  members, as well as to provide resources and connections for
                  new or returning homeschooling families.
                </dd>
              </div>
              <div class="flex flex-col py-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  GOAL 2
                </dt>
                <dd class="text-lg font-semibold">
                  To showcase and support our budding youth entrepreneurs and
                  artists.
                </dd>
              </div>
              <div class="flex flex-col pt-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  GOAL 3
                </dt>
                <dd class="text-lg font-semibold">
                  To continue fundraising for our Community Homeschool Resource
                  Center where families in the Greater Central Florida Area can
                  come for classes, resources, lending library, curriculum,
                  study space, and so much more.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <FounderCard/>
    </div>
  );
};

export default AboutPage;
