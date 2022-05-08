import React from "react";
import PropTypes from "prop-types";
import Skill from "../SkillsSection/skill";
import Button from "../Buttons/button";

export default function Project({
  name,
  description,
  image,
  skills,
  linkLive,
  linkRepo,
  position,
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-x-8 bg-white dark:bg-purple-500 rounded-2xl border-slate-800 dark:border-purple-300 border p-8 transition duration-700 hover:shadow-2xl transform hover:scale-105">
      <img
        src={image}
        alt={name}
        className="w-72 h-56 rounded-2xl object-cover"
        loading="lazy"
      />
      <div className="flex flex-col">
        <p className="text-xl lg:text-3xl">{name}</p>
        <p className="text-sm">{position}</p>
        <div className="flex flex-row flex-wrap">
          {skills.map((e, idx) => (
            <Skill
              key={idx}
              icon={e.src.src}
              title={e.title}
              divClass="w-8 h-8 border"
              iconClass="w-6 h-6"
            />
          ))}
        </div>
        <p className="text-base lg:text-lg my-4">{description}</p>
        <div className="flex flex-row">
          {linkLive ? (
            <Button
              color="purple-300"
              textColor="white"
              margin="mr-2"
              width="32"
            >
              <a href={linkLive} target="_blank" rel="noreferrer">
                Live
              </a>
            </Button>
          ) : (
            <></>
          )}
          {linkRepo ? (
            <Button color="purple-300" textColor="white" width="32">
              <a href={linkRepo} target="_blank" rel="noreferrer">
                Repo
              </a>
            </Button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  skills: PropTypes.array,
  linkLive: PropTypes.string,
  linkRepo: PropTypes.string,
  position: PropTypes.string,
};
