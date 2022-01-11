import React from "react";
import Link from "next/link";
import Head from "next/head";

const Projects = () => {
  const projects = [
    {
      name: "Online Examination System (OES)",
      description:
        "This is an app where exams and all exam related stuff can be conducted online.",
    },
    {
      name: "Commercial-Math-Calculator",
      description: "Just a side project to help me in my exams",
      link: "https://commercialmathcalculator.netlify.app/",
    },
    {
      name: "Encrypter",
      description: "An encryption service",
      link: "https://encrypterfromgithub.netlify.app/",
    },
  ];

  return (
    <div className="projects-page">
      <Head>
        <title>My Portfolio - Projects</title>
      </Head>
      <div className="title">My Projects</div>

      <div className="projects">
        {projects.map(project => (
          <div className="project">
            <div className="name">{project.name}</div>
            <div className="description">{project.description}</div>
            {project.link && <Link href={project.link}>Link</Link>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
