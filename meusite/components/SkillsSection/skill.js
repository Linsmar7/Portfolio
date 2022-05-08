import React from "react";
import PropTypes from "prop-types";

export default function Skill({ name, icon, divClass, iconClass, title }) {
  return (
    <div
      className={
        "hover:shadow-2xl transform hover:scale-125 dark:hover:bg-purple-400 flex flex-col items-center justify-center text-xs lg:text-sm text-center rounded-lg border-transparent tracking-widest transition duration-700 " +
        divClass
      }
      title={title}
    >
      <img src={icon} alt={name || title} className={iconClass} />
      <p className="mx-4">{name}</p>
    </div>
  );
}

Skill.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  divClass: PropTypes.string,
  iconClass: PropTypes.string,
  title: PropTypes.string,
};
