import propTypes from "prop-types";

const InputLogin = ({ label, type, value, handleChange }) => {
  return (
    <form className="container-input">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        name={label}
        className="input-user"
        value={value}
        onChange={(e) => (handleChange ? handleChange(e) : "")}
      />
    </form>
  );
};

InputLogin.propTypes = {
  label: propTypes.string,
  type: propTypes.string,
};

InputLogin.defaultProps = {
  type: "text",
};

export default InputLogin;
