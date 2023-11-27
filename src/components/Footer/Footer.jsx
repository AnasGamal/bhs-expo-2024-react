import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const footerElements = [
  {
    title: "Event Details",
    list: [
      {
        name: "Contact Us",
        link: "/contact-us",
      },
      {
        name: "Registration",
        link: "/eventRegistration",
      },
      {
        name: "Sponsors",
        link: "/sponsors",
      },
    ],
  },

  {
    title: "Support",
    list: [
      {
        name: "Donate",
        link: "/donate",
      },
      // {
      //   name: "Volunteer",
      //   link: "/volunteer",
      // },
    ],
  },
  {
    title: "Company",
    list: [
      {
        name: "About Us",
        link: "/about",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="w-full bg-[#0A1426] text-gray-300 py-8 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        {footerElements.map((element) => (
          <div key={element.title}>
            <h6 className="font-bold uppercase py-2">{element.title}</h6>
            <ol>
              {element.list.map((item) => (
                <Link to={item.link}>
                  <li className="py-1" key={item}>
                    {item.name}
                  </li>
                </Link>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500 items-center">
        <p>2023 BHCFL, LLC. All rights reserved.</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl gap-2">
          <Link to="https://www.facebook.com/BHCFLStrong">
            <FaFacebook />
          </Link>
      
        </div>
      </div>
    </div>
  );
};

export default Footer;
