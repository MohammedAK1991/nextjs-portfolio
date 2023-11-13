'use client';

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 text-center place-self-center sm:text-left justify-self-start"
        >
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-8xl lg:leading-normal">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I'm
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                'Mohammed',
                2000,
                'Web Developer',
                1000,
                'Front-end Dev',
                1000,
                'Full-Stack Dev',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-8 lg:text-xl">
            I'm a Full-Stack Software Engineer with a foundation in Aeronautical
            Engineering, adept in JavaScript frameworks, Python, and serverless
            architectures. Agile and adept, I am driven by a passion for
            comprehensive development, from responsive frontends to robust
            backends, fostering web accessibility, and cohesive design systems
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 mt-4 place-self-center lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ml-40">
            <Image
              src="/images/hero-image.jpeg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
