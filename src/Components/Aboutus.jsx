import React, { useState } from "react";
import Accordion from "./Elements/Accordion";

const Aboutus = () => {
  return (
    <section className="w-full overflow-hidden py-20 flex justify-center items-center flex-col gap-y-8 relative">
      <div className="flex justify-center flex-col items-center gap-3">
        <h4 className="font-title font-bold ">Ask Questions</h4>
        <h1 className="font-bold text-gray-900 text-2xl sm:text-4xl text-center leading-normal">
          All your Al video editing <br /> questions answered
        </h1>
      </div>
      <Accordion
        title="There are many variations of passages of Lorem Ipsum available"
        description="There are many variations of passages of Lorem Ipsum available"
        mode={true}
        isOn={false}
      />
      <Accordion
        title="There are many variations of passages of Lorem Ipsum available"
        description="There are many variations of passages of Lorem Ipsum available"
        mode={false}
      />
      <Accordion
        title="There are many variations of passages of Lorem Ipsum available"
        description="There are many variations of passages of Lorem Ipsum available"
        mode={false}
        isOn={false}
      />
      <Accordion
        title="There are many variations of passages of Lorem Ipsum available"
        description="There are many variations of passages of Lorem Ipsum available"
        mode={false}
        isOn={false}
      />
    </section>
  );
};

export default Aboutus;
