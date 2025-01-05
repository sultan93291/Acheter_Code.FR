

export const Input = ({ type, className, placeholder, onChange, value }) => {
  return (
    <input type={type} className={className} placeholder={placeholder} onChange={onChange} value={value}   />
  )
}
