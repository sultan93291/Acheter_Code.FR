import React from "react";

const Heading = ({ Variant="h3", text, className , onClick ,dataAos ,delay }) => {
  return (
    <Variant
      className={className}
      onClick={onClick}
      data-aos={dataAos}
      data-aos-delay={delay}
    >
      {" "}
      {text}
    </Variant>
  );
};

export default Heading;
