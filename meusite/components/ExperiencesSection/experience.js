import React from "react";
import PropTypes from "prop-types";

export default function Experience({ icon, name, description, date, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div
        className={
          "flex flex-col items-center justify-center w-60 h-44 lg:w-72 lg:h-56 lg:gap-y-2 text-xs lg:text-sm text-center p-2 lg:m-2 border-2 rounded-lg transform hover:scale-105 border-transparent tracking-widest transition duration-700 hover:shadow-2xl dark:hover:bg-purple-400"
        }
      >
        <img
          src={icon}
          alt={name}
          className="lg:w-14 lg:h-20 w-10 h-14 object-fill"
          loading="lazy"
        />
        <p className="font-bold">{name}</p>
        <p>{description}</p>
        <p className="italic text-xs">{date}</p>
      </div>
    </a>
  );
}

Experience.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  link: PropTypes.string,
};
