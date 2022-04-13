import React from "react";
import PropTypes from "prop-types";

export default function Skill({ name, icon, divClass, iconClass }) {
  return (
    <div
      className={
        "flex flex-col items-center justify-center text-xs lg:text-sm text-center rounded-lg border-transparent tracking-widest transition duration-700 hover:shadow-3xl " +
        divClass
      }
    >
      <img src={icon} alt={name} className={iconClass} />
      <p>{name}</p>
    </div>
  );
}

Skill.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.object,
  divClass: PropTypes.string,
  iconClass: PropTypes.string,
};
