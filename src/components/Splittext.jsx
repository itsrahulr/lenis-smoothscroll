import React, { useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Splittext = () => {
  useEffect(() => {
    const myText = new SplitType("#my-text");

    gsap.to(".char", {
      y: 0,
      stagger: 0.03,
      delay: 0.1,
      duration: 0.1,
      scrollTrigger: {
        trigger: ".h-screen",
      },
    });
  }, []);

  return (
    <div className="h-screen w-full flex justify-center items-center trigger">
      <h1 className="text-6xl font-sans" id="my-text">
        Hello i'm Rahul and im a <br /> front end developer
      </h1>
    </div>
  );
};

export default Splittext;
