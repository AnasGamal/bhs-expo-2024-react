import React from "react";
import vendor4 from "../../assets/vendor4.jpg";
import { PayPalDonationForm } from "../../components";

const VendorPage = () => {
  const hostedButtonId = "CDC4HQNNC5Q5A";
  const paymentOptions = [
    { value: "Vendor Booth", label: "Vendor Booth $200.00 USD" },
    {
      value: "Non-Profits/Homeschool Co-Op/Club",
      label: "Non-Profits/Homeschool Co-Op/Club $100.00 USD",
    },
    {
      value: "Youth Entrepreneurs/BHCFL/BMinds",
      label: "Entrepreneurs/BHCFL/BMinds $50.00 USD",
    },

    { value: "Grab Bag Inserts", label: "Grab Bag Inserts $100.00 USD" },
    { value: "Food Truck Vendor", label: "Food Truck Vendor $100.00 USD" },

    // Add more payment options as needed
  ];

  const boxedLunchHostedButtonID = "CZCNA9EV7ETN2";
  const boxedLunchPaymentOptions = [
    { value: "Chicken Salad", label: "Chicken Salad $14.00 USD " },
    {
      value: "Tuna Salad",
      label: "Tuna Salad $14.00 USD",
    },
    {
      value: "Turkey & Cheese",
      label: "Turkey & Cheese $14.00 USD",
    },
    { value: "Ham &amp; Cheese", label: "Ham & Cheese $14.00 USD" },
    {
      value: "Roast Beef & Cheese",
      label: "Roast Beef & Cheese $14.00 USD",
    },

    { value: "Italian & Cheese", label: "Italian & Cheese $14.00 USD" },
    {
      value: "Grilled Chicken Breast & Cheese",
      label: "Grilled Chicken Breast & Cheese $14.00 USD",
    },
    { value: "Grilled Veggie Wraps", label: "Grilled Veggie Wraps $14.00 USD" },

    // Add more payment options as needed
  ];



  const journalAdButtonId = "A8UEGATQ9TJEU";
  const journalAdPaymentOptions = [
    { value: "Business Card", label: "Business Card $75.00 USD" },
    {
      value: "Quarter Page",
      label: "Quarter Page $125.00 USD",
    },
    {
      value: "Half Page",
      label: "Half Page $180.00 USD",
    },
    { value: "Full Page", label: " Full Page $300.00 USD" },
    {
      value: "Entire Back Cover",
      label: "Entire Back Cover $500.00 USD ",
    },

    { value: "Inside Back Cover", label: " Inside Back Cover $370.00 USD" },
    // Add more payment options as needed
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Banner Image */}
      <div className="flex-grow">
        {/* Content within the banner */}
        <div className="relative">
          {/* Your banner image */}
          <img
            src={vendor4}
            alt="Banner"
            className="w-full h-screen object-cover"
          />
          {/* Card */}
          <div className="bg-white p-10 rounded-lg relative bottom-0 left-0 right-0 mb-10 mx-4 md:mx-8 lg:mx-16 xl:mx-32 2xl:mx-64 shadow-lg">
            {/* Section 1: Title */}
            <div className="text-3xl font-bold mb-4">Are you a vendor?</div>

            {/* Section 2: Grid */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-8">
              {/* Subsection 2.1 */}
              <div className="flex flex-col">
                <div className="text-xl font-semibold mb-4">
                  Vendor Registration
                </div>
                <div className="text-lg mb-4">
                  Click on the button below to register as a vendor.
                </div>
                <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Registration Form
                </button>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-300 md:border-t-0 md:border-l md:mx-4 lg:mx-8 md:mt-4 lg:mt-0"></div>

              {/* Subsection 2.2 */}
              <div className="flex flex-col">
                <div className="text-2xl font-semibold mb-4">Grab Bags</div>
                <div className="text-lg mb-4">
                  Choose the "Grab Bag Option" to include promotional materials
                  like cards, flyers, coupons, or brochures. A minimum of 300
                  items should be mailed to: Black Homeschoolers of Central
                  Florida, Inc., ATTN: Community EXPO 2024, Deltona, FL
                  32725-2276.
                </div>
                <PayPalDonationForm
                  hostedButtonId={hostedButtonId}
                  paymentOptions={paymentOptions}
                  OnO_value={"Payments"}
                />
              </div>

              {/* Divider */}
              <div className="border-t border-gray-300 md:border-t-0 md:border-l md:mx-4 lg:mx-8 md:mt-4 lg:mt-0"></div>

              {/* Subsection 2.3 */}
              <div className="flex flex-col">
                <div className="text-2xl font-semibold mb-4">Journal Ads</div>
                <div className="text-lg mb-4">
                  Get your business recognized in our Community EXPO 2024
                  Journal! Ad sizes are as follows: Business Card- $75, Quarter
                  Page -$125, Half Page- $180, Full Page- $300, Entire Back
                  Cover- $500, Inside Back Cover- $370, Inside Front Cover-
                  $395. Please Submit High-Resolution Photos to:
                  communityexpo2@gmail.com RE:(Business Name) Journal Ad.
                  <div className="mt-4">
                    {" "}
                    <PayPalDonationForm
                      hostedButtonId={journalAdButtonId}
                      paymentOptions={journalAdPaymentOptions}
                      OnO_value={"Ad Sizes"}
                    />
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-300 md:border-t-0 md:border-l md:mx-4 lg:mx-8 md:mt-4 lg:mt-0"></div>

              {/* Subsection 2.4 */}
              <div className="flex flex-col">
                <div className="text-2xl font-semibold mb-4">Boxed Lunch</div>
                <div className="text-lg mb-4">
                  What Comes with my Boxed Lunch? Sandwiches will be on a
                  Freshly Baked Kaiser with a slice of Tomato and Lettuce.
                  Sandwich Choices: Chicken Salad, Tuna Salad, Turkey & Cheese,
                  Ham & Cheese, Roast Beef & Cheese, Italian & Cheese, Grilled
                  Chicken Breast & Cheese, Grilled Veggie Wraps. You Get:
                  Sandwich of your choice, Pasta Salad, Fresh Fruit Cup, Bag of
                  Chips, Gourmet Cookie, Soda or Bottled Water, Cutlery Set,
                  Mustard, & Mayonnaise. You will receive your boxed lunch at
                  Vendor Check-In. COST: $14, MUST BE PREPAID BY DECEMBER 15,
                  2023.
                  <div className="mt-4">
                    {" "}
                    <PayPalDonationForm
                      hostedButtonId={boxedLunchHostedButtonID}
                      paymentOptions={boxedLunchPaymentOptions}
                      OnO_value={"Boxed Lunch Menu Options"}
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-300 md:border-t-0 md:border-l md:mx-4 lg:mx-8 md:mt-4 lg:mt-0"></div>

              {/* Subsection 2.4 */}
              <div className="flex flex-col">
                <div className="text-2xl font-semibold mb-4">Youth Entrepreneur</div>
                <div className="text-lg mb-4">
                  Have a youth entrepreneur that’s looking for a place to
                  showcase their business? Sign them up for Community EXPO 2024!
                  It’s only $50 and they get a chance to make valuable
                  connections and inspire other youth. Secure your table today!
                </div>
              </div>
            </div>

            {/* Section 3: Additional Information */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorPage;
