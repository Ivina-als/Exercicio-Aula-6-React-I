import propTypes from "prop-types";

const InputLogin = ({ style, label, type, value, dataLogin }) => {
  return (
    <form className="container-input">
      <label htmlFor={label} style={{ color: style }}>
        {label}
      </label>
      <input
        type={type}
        name={label}
        className="input-user"
        value={value}
        onChange={(e) => (dataLogin ? dataLogin(e) : "")}
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
