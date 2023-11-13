'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Grouptripper',
    description:
      'Grouptripper is an App to plan Trips with your friends and family. Setup a basic trip Itinerary with a short description, your country of destination along with your trip dates and add some stops.Easily invite your Friends and Family to collaborate on your planning. After accepting your invite, your co-travellers can add stops or reorder them and add comments to the your trip.',
    image: '/images/Grouptripper.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/hucki/grouptripper',
    previewUrl: 'https://grouptripper.herokuapp.com/',
  },
  {
    id: 2,
    title: 'PARTY FORECAST APP',
    description:
      'Find & Host Parties around you or any city in any country on an interactive google maps interface. Filter by genre, date, change themes and search for locations all over the world. Find out where the biggest party is happening in a genre of your choice, on a day you prefer.',
    image: '/images/PARTYFORECAST.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/MohammedAK1991/THE-PARTY-FORECAST-APP',
    previewUrl: 'https://party-forecast-app.herokuapp.com/',
  },
  {
    id: 3,
    title: 'Feedbackr',
    description:
      'An open source project to help teachers create, share and grade assignments in a time where online education has become ubiquitous. This project was started to create a platform where teachers can share assignments they built with each other so that they can spend more time with their students, and less time building assignments.',
    image: '/images/Create_a_Quiz.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/MohammedAK1991/feedbackr',
  },
  {
    id: 4,
    title: 'Nextjs14.0 Dashboard',
    description:
      'Dashboard connected to a vercel postgres DB with server components and other latest nextjs features',
    image: '/images/nextjs_dashboard.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/MohammedAK1991/nextjs-dashboard',
  },
  {
    id: 5,
    title: 'Ninja API',
    description:
      'his repository contains a basic backend server built with NestJS, a progressive Node.js framework for building efficient and scalable server-side applications. The backend server is fully functioning and connected to a real MongoDB Atlas cluster',
    image: '/images/projects/5.png',
    tag: ['All'],
    gitUrl: 'https://github.com/MohammedAK1991/ninja-api',
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="mt-4 mb-8 text-4xl font-bold text-center text-white md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row items-center justify-center gap-2 py-6 text-white">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === 'Web'}
        />
      </div>
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
