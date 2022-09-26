import React from "react";

import phoneNumber from "../static/phone-number.png";

import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-200 flex ">
      <div className="w-11/12 flex mx-auto flex-wrap sm:flex-nowrap text-center sm:text-left">
        <div className="w-1/2 basis-full ">
          <h3 className="text-2xl font-semibold mb-5 md:text-4xl">Contact</h3>
          <div className="ourEmail mb-6">
            <b className="block">Email:</b>
            <a href="mailto:oraluirobert.com">contact@oraluirobert.com</a>
          </div>
          <div className="phone mb-7">
            <b className="">Phone:</b>
            <img className="mx-auto sm:mx-0" src={phoneNumber} />
          </div>
          <div className="social-media flex justify-center sm:justify-start">
            <a className="mr-2 text-2xl" href="https://www.facebook.com/OraLuiRobert/" target="_blank">
              <FaFacebookSquare />
            </a>
            <a className="mr-2 text-2xl" href="https://www.twitter.com/OraLuiRobert/" target="_blank">
              <FaTwitterSquare />
            </a>
            <a className="text-2xl mb-10" href="https://www.instagram.com/oraluirobert/" target="_blank">
              <FaInstagramSquare />
            </a>
          </div>
        </div>
        <div className="w-1/2 basis-full ">
          <h3 className="text-2xl font-semibold mb-5 md:text-4xl">Get more information</h3>
          <div className="flex flex-col items-start  max-w-md mx-auto sm:mx-0">
            <input className="name border-b-2 p-2 pl-2 w-full" placeholder="Name" />
            <input className="email border-b-2 p-2 pl-2 my-5 w-full" placeholder="Email" />
            <textarea placeholder="Enter your message" className="border-2 w-full pl-2" rows="3"></textarea>
            <button className="bg-blue-100 py-2 px-10 mt-5 text-white ">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
