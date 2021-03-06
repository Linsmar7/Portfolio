import React from "react";
import PropTypes from "prop-types";

export default function Button({
  children,
  color,
  textColor,
  margin,
  width,
  type,
  newClass,
}) {
  return (
    <button
      className={
        newClass
          ? newClass
          : "bg-" +
            color +
            " p-2 px-6 rounded-2xl text-" +
            textColor +
            " tracking-widest transition duration-700 " +
            margin +
            " w-" +
            width +
            " hover:shadow-2xl hover:bg-purple-200"
      }
      type={type}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  textColor: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
  type: PropTypes.string,
  newClass: PropTypes.string,
};
