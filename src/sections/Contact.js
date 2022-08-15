import React from "react";

const Contact = () => {
  return (
    <section className="container w-11/12 max-w-screen-lg mx-auto py-20 md:pt-40 lg:pt-60">
      <div className="max-w-sm">
        <h3 className="text-2xl font-semibold mb-5 md:text-4xl">Get in touch</h3>
        <p className="text-lg text-gray-400 mb-10 leading-8 md:leading-10 md:text-2xl">We’re located in Timisoara, Romania and help startups around the world.</p>
        <a href="mailto:contact@qed.team" target="_self" className="text-blue-50 text-lg leading-10 border-b-2 border-blue-50 font-semibold inline-block md:text-2xl">
          contact@qed.team
        </a>
      </div>
    </section>
  );
};

export default Contact;
