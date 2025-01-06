

const Heading = ({Variant, text, className , onClick}) => {
  return (
    <Variant className={className} onClick={onClick} > {text} </Variant>
  )
}

export default Heading