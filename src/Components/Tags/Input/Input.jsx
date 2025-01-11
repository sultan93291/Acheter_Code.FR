

export const Input = ({ type, className, placeholder, onChange, value , name }) => {
  return (
    <input name={name} type={type} className={className} placeholder={placeholder} onChange={onChange} value={value}   />
  )
}
