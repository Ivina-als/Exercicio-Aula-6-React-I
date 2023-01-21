import propTypes from "prop-types";

const Title = ({ title, styleTitle }) => {
  return <h2 className={styleTitle}>{title}</h2>;
};

Title.propTypes = {
  title: propTypes.string.isRequired,
};

Title.defaultProps = {
  styleTitle: "style-title",
};

export default Title;
