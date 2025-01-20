const Paragraph = ({ text, className ,dataAos ,delay }) => {
  return (
    <p data-aos={dataAos} data-aos-delay={delay} className={className}>
      {text}
    </p>
  );
};

export default Paragraph;
