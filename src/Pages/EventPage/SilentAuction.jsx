import React from "react";
import image from "../../assets/silent_auction.png";
import { Link } from "react-router-dom";

const SilentAuction = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 pt-20 p-3 lg:p-10 mt-10 ">
      {/* Cell 1 */}
      <div className="p-4">
        {/* Content for Cell 1 */}
        <div className="text-3xl font-bold mb-2">
          Donate To EXPO Silent Auction?
        </div>
      </div>

      {/* Cell 2 */}
      
      <div className="p-4 text-2xl  mb-2">
        {/* Content for Cell 2 */}
        If you'd like to donate items to our Silent Auction, Please Click on the
        Donate Items button below. Thank you for your donations. For tax
        purposes, a tax deductible receipt is attached for your records. Black
        Homeschoolers of Central Florida, Inc. is a 501(c)3 organization.
      </div>

      {/* Cell 3 */}
      <div className="p-4 p-4 text-2xl  mb-2">
        {/* Content for Cell 3 */}
        If you'd like to donate money to our Silent Auction, Click on the
        Monetary Contribution button Below. Thank you for your donations.
      </div>

      {/* Cell 4 */}
      <div className="p-4">
        {/* Content for Cell 4 */}

        <img src={image} alt="Banner" className="w-full  object-cover" />
      </div>

      {/* Cell 5 */}
      <div className="p-4">
        <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfuc16SIfaDkJuz97syP_A-qVQ4gspbt3yr1sD5JfxR0LYN7A/viewform">
      
        <button className="p-2 mb-2 bg-[#00B86E] hover:bg-black text-white transition-colors duration-300 ease-in-out transform hover:scale-10">Donate Items</button>
        </Link>
        {/* Content for Cell 5 */}
      </div>
      

      {/* Cell 6 */}
      <Link to="https://www.charityauctionstoday.com/bid/1443">
      <div className="p-4">
        {/* Content for Cell 6 */}

        <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Monetary Conribution
        </button>
      </div>
      </Link>
 
    </div>
  );
};

export default SilentAuction;
