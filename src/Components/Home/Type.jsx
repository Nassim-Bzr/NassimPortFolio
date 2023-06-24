import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [" Développeur Front-End ", " Développeur Back-End "," Développeur FullStack "],
        autoStart: true,
        loop: true,
        deleteSpeed: 7
      }}
    />
  );
};
