import React, { useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import SectionTitle from "../ui/molecules/SectionTitle";
import timeline from "../data/timeline";

const Projects = () => {
  const [values, setValues] = useState({ value: 0, previous: -1 });

  return (
    <section id="projects" className="py-20">
      <SectionTitle title="Past Projects" />
      <div
        className=" w-6/12 mx-auto"
        style={{
          height: "100px",
          fontSize: "15px",
        }}
      >
        <HorizontalTimeline
          styles={{
            background: "#ffffff",
            foreground: "#6EA6C3",
            outline: "#dfdfdf",
          }}
          labelWidth={100}
          linePadding={280}
          minEventPadding={60}
          maxEventPadding={60}
          index={values.value}
          indexClick={(index) => {
            setValues({ value: index, previous: values.value });
          }}
          values={timeline.map((x) => x.date)}
        />
      </div>
      <div className="container mx-auto w-5/12 text-left p-10 rounded-md shadow-2xl bg-gray-200">
        <h1 className="font-bold pb-5 text-xl">Location: {timeline[values.value].location}</h1>
        <p className="min-h-[50px]">{timeline[values.value].description}</p>
      </div>
    </section>
  );
};

export default Projects;
