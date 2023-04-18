export default ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    defaultValue={value}
    value={value}
    onChange={(e) => handleChange(e, name)}
  />
);
