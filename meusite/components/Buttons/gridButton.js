import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

export default function GridButton({ color, textColor, icon, link }) {
  return (
    <button
      className={
        "bg-" +
        color +
        " p-2 lg:m-2 border-2 rounded-lg border-transparent text-" +
        textColor +
        " tracking-widest transition duration-700 hover:shadow-3xl"
      }
    >
      <Link href={link}>
        <a target="_blank">{icon}</a>
      </Link>
    </button>
  );
}

GridButton.propTypes = {
  color: PropTypes.string,
  textColor: PropTypes.string,
  icon: PropTypes.object,
  link: PropTypes.string,
};
