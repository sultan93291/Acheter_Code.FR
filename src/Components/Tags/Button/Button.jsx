

const Button = ({ text, className, onClick, disabled , ref }) => {
  return (
    <button className={className} ref={ref} onClick={onClick} disabled={disabled} > {text} </button>
  )
}

export default Button