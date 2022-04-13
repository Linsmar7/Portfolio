import React from "react";
import PropTypes from "prop-types";

export default function Button({ children, color, textColor, margin, width }) {
  return (
    <button
      className={
        "bg-" +
        color +
        " p-2 px-6 rounded-2xl text-" +
        textColor +
        " tracking-widest transition duration-700 hover:shadow-3xl " +
        margin +
        " w-" +
        width
      }
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.element.isRequired,
  color: PropTypes.string,
  textColor: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
};
