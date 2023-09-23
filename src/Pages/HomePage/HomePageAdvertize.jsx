import React, { useState, useEffect } from "react";
import EventIcon from "@mui/icons-material/Event";
import PeopleIcon from "@mui/icons-material/People";
import HandshakeIcon from "@mui/icons-material/Handshake";
import AbcIcon from "@mui/icons-material/Abc";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import catFace from "../../assets/catFace.png";

const HomePageAdvertize = () => {
  const categories = ["COMMUNITY", "EVENTS", "PARTNERSHIP"];
  const categoryLists = {
    COMMUNITY: [
      {
        icon: <HandshakeIcon />,
        text: "Submit your resume to our partner companies",
      },
      {
        icon: <EventIcon />,
        text: "Secure the bag at our annual career fairs",
      },
      {
        icon: <PeopleIcon />,
        text: "Make friends with ColorStack members through social activities",
      },
    ],
    EVENTS: [
      {
        icon: <FamilyRestroomIcon />,
        text: "Apply to programs/events in collaboration with our partners",
      },
      {
        icon: <AbcIcon />,
        text: "Make friends with ColorStack members through social activities",
      },
      {
        icon: <Diversity3Icon />,
        text: "Take advantage of 100's of opportunities shared every month",
      },
    ],
    PARTNERSHIP: [
      {
        icon: <Diversity3Icon />,
        text: "Take advantage of 100's of opportunities shared every month",
      },
      {
        icon: <EventIcon />,
        text: "Secure the bag at our annual career fairs",
      },
      {
        icon: <AbcIcon />,
        text: "Make friends with ColorStack members through social activities",
      },
    ],
  };

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  useEffect(() => {
    const intervalDuration = 5000; // 5 seconds

    const intervalId = setInterval(() => {
      const nextIndex =
        (selectedCategoryIndex + 1) % categories.length;
      setSelectedCategoryIndex(nextIndex);
    }, intervalDuration);

    return () => {
      clearInterval(intervalId);
    };
  }, [selectedCategoryIndex]);

  const handleCategoryClick = (categoryIndex) => {
    setSelectedCategoryIndex(categoryIndex);
  };

  const selectedCategory = categories[selectedCategoryIndex];

  return (
    <div className="relative w-full h-full bg-[#0A2426] py-[50px] full-width">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            <div className="lg:col-span-1 md:col-span-1 sm:col-span-1 text-white">
              <div className="text-white flex flex-row sm:flex sm:flex-col justify-between p-4">
                {categories.map((category, index) => (
                  <div
                    key={category}
                    className={`my-1 ${
                      selectedCategory === category ? "text-blue-500" : ""
                    }`}
                    onClick={() => handleCategoryClick(index)}
                    style={{ cursor: "pointer" }} 
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-1 md:col-span-1 sm:col-span-1 text-white">
              <ul>
                {categoryLists[selectedCategory].map((item, index) => (
                  <li key={index} className="flex flex-row">
                    <div className="mr-2">{item.icon}</div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
              className="relative inset-0 bg-cover bg-center  h-screen lg:h-[50vh] md:h-[200px] sm:h-[200px] ss:h-[200px] xxs:h-[200px]"
              style={{
                backgroundImage: `url(${catFace})`,
              }}
            ></div>
        </div>
      </div>
    </div>
  );
};

export default HomePageAdvertize;
