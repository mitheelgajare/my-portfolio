import React, { useState, useEffect } from "react";
import Head from "next/head";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript (including NodeJS) ",
    "Typescript",
    "Python",
    "Golang",
    "ReactJS",
    "Flask (Python)",
    "Git and Github",
    "Sass",
    "NextJS",
    "Firebase",
    "ExpressJS",
    "SQL (PostgreSQL, Postgres with Prisma v2)",
    "Solidity (Ethereum & Blockhain Stuff)",
  ];
  return (
    <div className="skills-page">
      <Head>
        <title>My Portfolio - Skills</title>
      </Head>
      <div className="title">My Skills</div>
      <div className="skills">
        {skills.map(skill => (
          <div className="skill">{skill}</div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
