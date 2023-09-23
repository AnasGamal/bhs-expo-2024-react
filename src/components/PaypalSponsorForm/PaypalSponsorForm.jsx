import React, { useState } from "react";

function PayPalDonationForm() {
  const [formVisible, setFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  return (
    <div className="p-4">
      <button
        onClick={toggleFormVisibility}
        className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Show Donation Form
      </button>
      {formVisible && (
        <form
          target="paypal"
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          className="mt-4 max-w-xs mx-auto bg-white rounded-lg shadow-lg p-4"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="AG3YE2MP4H73W" />
          <div className="mb-4">
            <label className="block text-white text-sm font-medium text-white-700">
              Payments
            </label>
            <select
              name="os0"
              className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400"
            >
              <option value="Platinum Sponsor">
                Platinum Sponsor $1,000.00 USD
              </option>
              <option value="Gold Sponsor">Gold Sponsor $750.00 USD</option>
              <option value="Silver Sponsor">Silver Sponsor $500.00 USD</option>
              <option value="Bronze Sponsor">Bronze $400.00 USD</option>
              <option value="Journal Sponsor">
                Decoration & Hospitality $350.00 USD
              </option>
              <option value="Decoration & Hospitality Sponsor">
                {" "}
                $300.00 USD
              </option>
            </select>
          </div>
          <input type="hidden" name="currency_code" value="USD" />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
          >
            <img
              src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
              border="0"
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
            />
          </button>
          <img
            alt=""
            border="0"
            src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      )}
    </div>
  );
}

export default PayPalDonationForm;
