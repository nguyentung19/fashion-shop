import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const backgroundColor = props.backgroundColor
    ? `bg-${props.backgroundColor}`
    : "";
  const icon = props.icon ? props.icon : "";
  const size = props.size ? `btn-${props.size}` : "";
  const animation = props.animation ? `btn-animation` : "";

  return (
    <button
      className={`btn ${backgroundColor} ${size} ${animation}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      <span className="btn__txt">{props.children}</span>
      {props.icon ? (
        <span className="btn__icon">
          <i className={icon}></i>
        </span>
      ) : null}
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
