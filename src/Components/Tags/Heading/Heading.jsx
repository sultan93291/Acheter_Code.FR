import React from "react";

const Heading = ({ Variant="h3", text, className , onClick }) => {
  return <Variant className={className} onClick={onClick} > {text}</Variant>;
};

export default Heading;
