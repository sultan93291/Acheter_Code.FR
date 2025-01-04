

const Button = ({ text, className, onClick, disabled }) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled} > {text} </button>
  )
}

export default Button