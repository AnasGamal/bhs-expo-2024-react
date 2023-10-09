import React, { useState } from "react";

function PayPalDonationForm({ hostedButtonId, paymentOptions, OnO_value }) {
  const [formVisible, setFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  return (
    <div >
      <button
        onClick={toggleFormVisibility}
        className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Purchase Item
      </button>
      {formVisible && (
        <form
          target="paypal"
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          className="mt-4 max-w-xs mx-auto bg-white rounded-lg shadow-lg p-4"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value={hostedButtonId} />
          <input type="hidden" name="on0" value= {OnO_value}/> 
          <div className="mb-4">
            <label className="block text-white text-sm font-medium text-white-700">
              Payments
            </label>
            <select
              name="os0"
              className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400"
            >
              {paymentOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
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
