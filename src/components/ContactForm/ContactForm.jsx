import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current)
    emailjs
      .sendForm(
        "service_lyt4v2p",
        "template_tfw006f",
        form.current,
        "CbOV0HM-pNvestVTi"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong, please try again later.");
        }
      );
  };

  return (
    <div className="py-2 px-4 mx-auto max-w-screen-md">
      <h2
        className="mb-4 text-4xl font-extrabold 
						text-center text-gray-900"
      >
        Contact Us
      </h2>
      <p
        className="mb-4 font-light text-left 
						text-gray-500 sm:text-xl"
      >
        Got a issue? Want to send feedback? Need details about the Event or our
        community? Let us know.
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-row">
          <div className="w-1/2 pr-2 ">
            <label
              for="firstName"
              className="block my-2 text-left 
										text-sm font-medium text-gray-900"
            >
              First Name
            </label>
            <input
              type="text"
              name="user_name"
              className="shadow-sm bg-gray-50 border 
										border-gray-300 text-gray-900 
										text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter First Name"
              required
            />
          </div>
          <div className="w-1/2 pl-2">
            <label
              for="firstName"
              className="block my-2 text-left text-sm 
										font-medium text-gray-900"
            >
              Last Name
            </label>
            <input
              type="text"
              name="user_last_name"
              className="shadow-sm bg-gray-50 border 
										border-gray-300 text-gray-900 
										text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter Last Name"
            />
          </div>
        </div>
        <div>
          <label
            for="email"
            className="block my-2 text-left text-sm 
									font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            name="user_email"
            className="shadow-sm bg-gray-50 border 
									border-gray-300 text-gray-900 
									text-sm rounded-lg block w-full p-2.5"
            placeholder="abc@geeksforgeeks.org"
            required
          />
        </div>
        <div>
          <label
            for="subject"
            className="block my-2 text-left 
									text-sm font-medium text-gray-900"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            className="block p-3 w-full text-sm 
									text-gray-900 bg-gray-50 rounded-lg 
									border border-gray-300 shadow-sm "
            placeholder="What issue/suggestion do you have?"
            required
          />
        </div>
        <div>
          <label
            for="message"
            className="block my-2 text-left 
									text-sm font-medium text-gray-900 "
          >
            Your message
          </label>
          <textarea
            name="message"
            rows="6"
            className="block p-2.5 w-full text-sm 
										text-gray-900 bg-gray-50 rounded-lg 
										shadow-sm border border-gray-300 "
            placeholder="Query/Suggestion..."
          />
        </div>
        <button
          type="submit"
          className="mt-2 p-2  text-white 
								rounded-lg border-green-600 
								bg-green-600 hover:scale-105 hover:text-black"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
