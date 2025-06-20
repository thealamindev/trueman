import React from 'react'
import { Typewriter } from "react-simple-typewriter";

const TypewriterComponent = () => {
  return (
    <h3 className="text-textColor font-poppin font-bold text-[18px] text-center">
      I'M{" "}
      <span className="text-textColor font-poppin font-bold text-[18px]">
        <Typewriter
          words={["Developer", "Designer", "Freelancer"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h3>
  );
};

export default TypewriterComponent;