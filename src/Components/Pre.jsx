import React from "react";

export const Preloader = (props) => {
  return (
    <>
      <div id={props.load ? "preloader" : "preloader-none"}></div>
    </>
  );
};
