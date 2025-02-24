"use client";
import { easeInOut, motion } from "motion/react";
import projects from "@/data/projects";

const Projects = ({ isText }) => {
  return (
    <section className="mt-60 lg:mt-[300px] px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project) => (
          <Card
            key={project.id}
            name={project.name}
            type={project.type}
            id={project.id}
            color={project.color}
            image={project.image}
            isText={isText}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

const Card = ({ name, type, id, image, color, link, isText }) => {
  return (
    <div className="border-t borderStyle py-4 tracking-tight">
      <div className="flex justify-between items-end">
        <div>
          <h3>{name}</h3>
          <p className="text-zinc-500">{type}</p>
        </div>
        <div className="text-zinc-500">{id}</div>
      </div>
      <motion.div
        layout
        whileHover={{
          backgroundColor: "#e4e4e7ee",
          transition: {
            duration: 0.5,
            ease: easeInOut,
          },
        }}
        className="px-10 pt-10 rounded-lg bg-zinc-300/30 mt-4 cursor-pointer dark:bg-zinc-700/30"
      >
        <div
          style={{
            backgroundColor: color,
          }}
        >
          <img
            src={`/images/projects/${image}`}
            style={{ opacity: isText ? 0 : 1 }}
          />
        </div>
      </motion.div>
    </div>
  );
};
