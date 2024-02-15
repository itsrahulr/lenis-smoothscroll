import React from "react";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Second = () => {
  const imgRef = useRef(null);
  useEffect(() => {
    const e = imgRef.current;
    gsap.fromTo(
      e,
      { y: 100 },
      {
        y: 0,
        duration: 1,
        delay: 0,
        scrollTrigger: {
          trigger: e,
        },
      }
    );
  }, []);
  const imgRef2 = useRef(null);
  useEffect(() => {
    const el = imgRef2.current;
    gsap.fromTo(
      el,
      { y: 100 },
      {
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);

  return (
    <div className="div2">
      <div className="inner" ref={imgRef}>
        <h1 className="header">Hello this is a text</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          esse qui deserunt architecto aliquid ipsum!
        </p>
      </div>
      <div className="inner" ref={imgRef2}>
        <h1 className="header">Hello this is a text</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          esse qui deserunt architecto aliquid ipsum!
        </p>
      </div>
    </div>
  );
};

export default Second;
