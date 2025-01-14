export const Input = ({
  type,
  className,
  placeholder,
  onChange,
  value,
  name,
  defaultValue,
  disabled
}) => {
  return (
    <input
      name={name}
      defaultValue={defaultValue}
      type={type}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      disabled={disabled}
    />
  );
};
