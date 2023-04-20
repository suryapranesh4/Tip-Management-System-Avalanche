export default ({
  placeholder,
  name,
  type,
  value,
  defaultValue,
  handleChange,
  step = "0.0001",
}) => (
  <input
    placeholder={placeholder}
    type={type}
    step={step}
    defaultValue={value}
    value={value}
    onChange={(e) => handleChange(e, name)}
  />
);
