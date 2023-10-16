import React, { useEffect, useState } from "react";
import bhcfl from "../../assets/bhcfl.png";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [clickedToggled, setClickedToggled] = useState(false); // Corrected the function name

  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleLinkClick = () => {
    setClickedToggled(true); // Set clickedToggled to true when a link is clicked
  };

  useEffect(() => {
    if (clickedToggled) {
      setToggleMenu(false);
      setClickedToggled(false); // Reset clickedToggled back to false
    }
  }, [clickedToggled]);
  return (
    <div className="w-full h-[70px] z-10 fixed top-0 bg-orange-500 text-white relative">
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto">
        <div className="flex items-center">
          <img
            src={bhcfl}
            alt="logo"
            className="ml-5 ss:ml-10 md:ml-5 object-contain opacity-[105%] max-h-[25px] max-w-full"
          />
        </div>
        <div className="flex items-center">
          <ul className="hidden md:flex">
            <Link to="/" className="hover:text-[#0A1426]">
              <li>Home</li>
            </Link>
            <Link to="/about" className="hover:text-[#0A1426]">
              <li>About</li>
            </Link>
            <Link to="/blogs" className="hover:text-[#0A1426]">
              <li>News</li>
            </Link>
            <Link to="/event" className="hover:text-[#0A1426]">
              <li>Event</li>
            </Link>
          </ul>
        </div>
        {/* {to="https://www.eventbrite.com/e/community-expo-2024-february-24-2024-tickets-222691495257"} */}
        <Link to="/eventRegistration">
          <div className="hidden md:flex sm:mr-10 md:mr-10">
            <button className="px-4 py-2">Event Registration</button>
          </div>
        </Link>

        <div
          className="md:hidden text-white rounded-full p-0 mr-2"
          onClick={handleClick}
          style={{
            background: `repeating-linear-gradient(45deg, red, red 20px, black 20px, black 40px, green 40px, green 60px)`,
          }}
        >
          <Hamburger toggled={toggleMenu} toggle={setToggleMenu} />
        </div>
      </div>
      <ul
        className={
          toggleMenu ? "absolute bg-black w-full px-3 md:hidden" : "hidden"
        }
      >
        <Link to="/" className="hover:text-[orange]" onClick={handleLinkClick}>
          <li>Home</li>
        </Link>
        <Link
          to="/about"
          className="hover:text-[orange]"
          onClick={handleLinkClick}
        >
          <li>About</li>
        </Link>
        <Link
          to="/blogs"
          className="hover:text-[orange]"
          onClick={handleLinkClick}
        >
          <li>Blogs</li>
        </Link>
        <Link
          to="/event"
          className="hover:text-[orange]"
          onClick={handleLinkClick}
        >
          <li>Event</li>
        </Link>
        <Link to="/eventRegistration">
          <div className="flex flex-col my-4">
            <button className="px-8 py-3">Event Registration</button>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
