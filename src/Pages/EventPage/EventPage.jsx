import { React, useEffect } from "react";
import { Banner, PaypalSponsorForm } from "../../components";
import vendor from "../../assets/vendor2.jpg";
import platinum_ from "../../assets/firstPlat.svg";
import gold_ from "../../assets/gold.svg";
import silver_ from "../../assets/silver.svg";
import bronze_ from "../../assets/bronze2.svg";
import { Link, useLocation } from "react-router-dom";
import SilentAuction from "./SilentAuction";
import VendorPage from "./VendorPage";

const EventPage = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if the navigation source is from the "Donate" link
    const isDonateLink = location.state && location.state.fromDonate;

    if (isDonateLink) {
      const sectionElement = document.getElementById('donation-id');
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="relative">
      <div className="relative ">
        <Banner imageUrl={vendor} width={"full"} height={"screen"} />

        <div className="absolute top-[40%] left-0 p-10">
          <div class=" md:w-[60%] md:h-[60%] lg:w-[60%] md:h-[100%] lg:h-[100%] xxl:w-[50%] block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  md:py-20 lg:py-20 sm:py-20 xxs:py-20">
            <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              The Community EXPO SPONSORSHIP FORM
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              If you want to be a sponsor at this amazing event, please fill out
              the form below.
            </p>
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdxiXtsH7D73e_X6RsrKsBkG0tBzy3u0gNZv3waSf2TmfMbrg/viewform">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-600 to-orange-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-orange dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  BE A SPONSOR
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div id="donation-id" class="bg-gray-900 m-10 min-h-screen flex flex-col lg:m-10 m-6 md:mt-20 lg:mt-20 rounded-lg relative overflow-hidden xxxs:mt-10 xxxs:m-2">
        <div class="relative mt-20 lg:m-10 m-0 lg:p-10 p-2">
          <div className="flex justify-between">
            <div className="text-white lg:text-4xl text-2xl md:text-3xl font-serif pb-2">
              Partner Perks
            </div>

            <PaypalSponsorForm />
          </div>

          <div>
            <ul class="text-white  font-serif">
              <li class="border-b border-gray pb-2">
                <div className="relative">
                  <div className="flex items-center mb-10">
                    <img src={platinum_} className="mr-2" alt="Platinum" />
                    <div className="text-green-500">PLATINUM</div>
                  </div>
                  <div className="grid gap-2 lg:grid-cols-4 mb-6">
                    <div className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        1000$
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        <ul>
                          <li>
                            A dedicated sponsor space at the event, including a
                            table and chairs in a prime location.
                          </li>
                          <li>
                            A full-page advertisement in the organization's 2024
                            journal. The opportunity to submit a 1-minute
                            promotional video to showcase the sponsor's
                            business.
                          </li>
                        </ul>
                      </p>
                    </div>
                    <div className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        ...
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        <ul>
                          <li>
                            Inclusion of up to three promotional items in grab
                            bags and a branded promotional item.
                          </li>
                          <li>
                            Mention and recognition during the event, including
                            video presentations.
                          </li>
                        </ul>
                      </p>
                    </div>
                    <div className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        ...
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        <ul>
                          <li>
                            A 3-minute spotlight presentation during the main
                            event, followed by a 30-minute breakout session in a
                            dedicated workshop area.
                          </li>
                          <li>
                            The choice of promotional signage options at the
                            event venue, such as yard signs, feather flags, or
                            retractable banners.
                          </li>
                        </ul>
                      </p>
                    </div>
                    <div className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        ...
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        <ul>
                          <li>
                            Promotion of the sponsor's business on the
                            organization's website.
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="border-b border-gray pb-2">
                <div className="relative">
                  <div className="flex items-center mb-10">
                    <img src={gold_} className="mr-2" />
                    <div className="text-green-500">GOLD</div>
                  </div>
                  <div className="grid gap-2 lg:grid-cols-4 mb-6">
                    <div className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        750$
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        <ul>
                          <li>
                            The sponsorship package provides an 8' x 8' area
                            with 6ft table and 2 chairs in the Gold Reserved
                            Area, along with access to a 10' x 10' workshop
                            space in the event hall.
                          </li>
                          <li>
                            The opportunity to submit a 45-second promotional
                            video to showcase the sponsor's business.
                          </li>
                        </ul>
                      </p>
                    </div>
                    <div className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        ...
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        <ul>
                          <li>
                            A Half Page advertisement for the sponsor or their
                            business in the organization's 2024 Journal.
                          </li>
                          <li>
                            Inclusion of up to three promotional paper items in
                            grab bags, which may include business/rack cards,
                            flyers, coupons, brochures, etc.
                          </li>
                        </ul>
                      </p>
                    </div>
                    <div className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        ...
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        <ul>
                          <li>
                            Recognition and mention of the sponsor during the
                            event, including inclusion in video presentations.
                          </li>
                          <li>
                            Inclusion of the sponsor's logo and promotion of
                            their business on the organization's website as a
                            sponsor.
                          </li>
                        </ul>
                      </p>
                    </div>
                    <div className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        ...
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        <ul>
                          <li>
                            Quarterly promotion and advertising of the sponsor
                            or their business on the organization's social media
                            platforms.
                          </li>
                          <li>
                            A 2-minute spotlight presentation during the main
                            event, followed by a 20-minute breakout session in a
                            dedicated workshop area.
                          </li>
                          <li>
                            Option to select promotional signage, including yard
                            signs, feather flags, or retractable banners at the
                            event venue.
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="border-b border-gray pb-2">
                <div className="relative">
                  <div className="flex items-center mb-10">
                    <img src={silver_} className="mr-2" />
                    <div className="text-green-500">SILVER</div>
                  </div>
                  <div className="grid gap-2 lg:grid-cols-4 mb-6">
                    <div className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        500$
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        <ul>
                          <li>
                            An 8'x 8' space with a 6ft table and 2 chairs in the
                            Silver Reserved Area, plus access to a 10' x 10'
                            workshop presentation area in the event hall.
                          </li>
                          <li>
                            Submit a 30 second promo video to highlight your
                            business.
                          </li>
                        </ul>
                      </p>
                    </div>
                    <div className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        ...
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        <ul>
                          <li>
                            A Quarter Page advertisement in the organization's
                            2024 Journal for their business.
                          </li>
                          <li>
                            Sponsor's business will be promoted and featured as
                            a sponsor on the organization's website.nd promo
                            video to highlight your business.
                          </li>
                        </ul>
                      </p>
                    </div>
                    <div className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        ...
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        <ul>
                          <li>
                            Sponsors can include a business or rack card and a
                            brochure or flyer in the event's grab bags.
                          </li>
                          <li>
                            Sponsors will be acknowledged during the event and
                            featured in video presentations.
                          </li>
                        </ul>
                      </p>
                    </div>
                    <div className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        ...
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        <ul>
                          <li>
                            Sponsors can present a 1-Minute Spotlight during the
                            main event, followed by a 10-minute breakout session
                            in a dedicated workshop area.
                          </li>
                          <li>
                            Sponsors can select from promotional signage options
                            such as Yard Sign, Promotional Feather Flag, or
                            Retractable Banner for display at the event venue.
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="border-b border-gray pb-2">
                <div className="relative">
                  <div className="flex items-center mb-10">
                    <img src={bronze_} className="mr-2" />
                    <div className="text-green-500">BRONZE</div>
                  </div>
                  <div className="grid gap-2 lg:grid-cols-4 mb-6">
                    <div className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        400$
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        <ul>
                          <li>
                            Receive an 8'x 8' space in the Bronze Reserved Area,
                            equipped with a 6ft table and 2 chairs.
                          </li>
                          <li>
                            Submit a 15-second promotional video to showcase
                            your business during the event.
                          </li>
                        </ul>
                      </p>
                    </div>
                    <div className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        ...
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        <ul>
                          <li>
                            You get a business card-sized advertisement for
                            yourself or your business in the 2024 Journal.
                          </li>
                          <li>
                            Your business card will be included in the Grab Bags
                            distributed at the event.
                          </li>
                        </ul>
                      </p>
                    </div>
                    <div className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        ...
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        <ul>
                          <li>
                            Your sponsorship will be acknowledged during the
                            event and included in the event's video presentatio
                          </li>
                          <li>
                            Your business will be promoted as a sponsor on the
                            event's website.
                          </li>
                        </ul>
                      </p>
                    </div>
                    <div className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        ...
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        <ul>
                          <li>
                            You can choose to have a Promotional Yard Sign,
                            Promotional Feather Flag in front of the event
                            venue, or a retractable banner in the lobby to
                            further promote your business.
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="border-b border-gray pb-2">
                <div className="relative">
                  <div className="flex items-center mb-10">
                    <div className="text-green-500">JOURNAL SPONSOR</div>
                  </div>
                  <div className="grid gap-2 lg:grid-cols-4 mb-6">
                    <div className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        350$
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        <ul>
                          <li>
                            Receive an 8'x 8' space in the Bronze Reserved Area,
                            equipped with a 6ft table and 2 chairs.
                          </li>
                          <li>
                            Submit a 15-second promotional video to showcase
                            your business during the event.
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="border-b border-gray pb-2">
                <div className="relative">
                  <div className="flex items-center mb-10">
                    <div className="text-green-500">DECORATION & HOSPITALITY SPONSOR</div>
                  </div>
                  <div className="grid gap-2 lg:grid-cols-4 mb-6">
                    <div className="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        350$
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        <ul>
                          <li>
                            Receive an 8'x 8' space in the Bronze Reserved Area,
                            equipped with a 6ft table and 2 chairs.
                          </li>
                          <li>
                            Submit a 15-second promotional video to showcase
                            your business during the event.
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <SilentAuction />
      <VendorPage />
    </div>
  );
};

export default EventPage;
