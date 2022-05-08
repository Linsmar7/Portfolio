import React from "react";
import PropTypes from "prop-types";

export default function HamburgerIcon({ onClick }) {
  return (
    <div
      className="space-y-3 fixed top-0 right-0 mt-10 mr-10 lg:hidden z-50"
      onClick={onClick}
    >
      <div className="w-10 h-1 bg-purple-300"></div>
      <div className="w-10 h-1 bg-purple-300"></div>
      <div className="w-10 h-1 bg-purple-300"></div>
    </div>
  );
}

HamburgerIcon.propTypes = {
  onClick: PropTypes.func,
};
