import React from "react";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-200">
      <div className="container flex mx-auto">
        <div className="w-1/2">
          <h3 className="text-2xl font-semibold mb-5 md:text-4xl">Contact</h3>
          <div className="ourEmail mb-6">
            <b className="block">Email:</b>
            <a href="mailto:oraluirobert.com">contact@oraluirobert.com</a>
          </div>
          <div className="phone mb-7">
            <b className="">Phone:</b>
            <p>+40123456789</p>
          </div>
          <div className="social-media flex">
            <a className="mr-2 text-2xl" href="www.facebook.com/oraluirobert" target="_blank">
              <FaFacebookSquare />
            </a>
            <a className="mr-2 text-2xl" href="" target="_blank">
              <FaTwitterSquare />
            </a>
            <a className="text-2xl" href="www.instagram.com/oraluirobert" target="_blank">
              <FaInstagramSquare />
            </a>
          </div>
        </div>
        <div className="w-1/2">
          <h3 className="text-2xl font-semibold mb-5 md:text-4xl">Get more information</h3>
          <div className="flex flex-col items-start max-w-md">
            <input className="name border-b-2 pb-1 pl-1 w-full" placeholder="Name" />
            <input className="email border-b-2 pb-1 pl-1 my-5 w-full" placeholder="Email" />
            <textarea placeholder="Enter your message" className="border-2 w-full pl-1" rows="3"></textarea>
            <button className="bg-blue-100 py-2 px-10 mt-5 text-white ">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
