const Button = ({ text, className, onClick, disabled , ref , dataAos }) => {
  return (
    <button data-aos={dataAos} className={className} ref={ref} onClick={onClick} disabled={disabled} > {text} </button>
  )
}

export default Button