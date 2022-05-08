import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

export default function GridButton({ color, textColor, icon, link, name }) {
  return (
    <button
      className={
        "bg-" +
        color +
        " p-2 lg:m-2 border-2 rounded-lg border-transparent text-" +
        textColor +
        " tracking-widest transition duration-700 hover:shadow-2xl dark:bg-purple-500 dark:hover:bg-white transform hover:scale-125"
      }
      title={name}
    >
      <Link href={link} title={name}>
        <a target="_blank" title={name}>
          {icon}
        </a>
      </Link>
    </button>
  );
}

GridButton.propTypes = {
  color: PropTypes.string,
  textColor: PropTypes.string,
  icon: PropTypes.object,
  link: PropTypes.string,
  name: PropTypes.string,
};
