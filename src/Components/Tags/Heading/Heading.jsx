import React from "react";

const Heading = ({ Variant, text, className }) => {
  return <Variant className={className}> {text}</Variant>;
};

export default Heading;
