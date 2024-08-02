"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowRight, BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/slider-buttons";

const projects = [
  {
    num: "01",
    category: "Full Stack Project",
    title: "ExcalTalk",
    description:
      "ExcalTalk is a real-time communication platform. It supports server creation with voice, chat, and video call channels, as well as screen and file sharing. Built with Socket.io, it ensures instant, bidirectional communication for seamless user interaction.",
    stack: [
      {
        name: "HTML 5",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "Javascript",
      },
      {
        name: "Next.js",
      },
      {
        name: "Clerk",
      },
      {
        name: "Socket.io",
      },
      {
        name: "Node.js",
      },
    ],
    image: "/assets/FastPay.png",
    live: "https://excaltalk.vercel.app/",
    github: "https://github.com/Kabirsharma2607/ExcalTalk",
  },
  {
    num: "02",
    category: "Full Stack Project",
    title: "NoteSome",
    description:
      "NoteSome is a user-friendly note-taking app designed for capturing and organizing information efficiently. It features text, image, and voice note support, with real-time syncing across devices. NoteSome provides a seamless experience for users to keep track of their thoughts and ideas on the go.",
    stack: [
      {
        name: "HTML 5",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "Javascript",
      },
      {
        name: "Node.js",
      },
      {
        name: "React.js",
      },
      {
        name: "Express.js",
      },
      {
        name: "Python",
      },
      {
        name: "Hugging Face",
      },
    ],
    image: "/assets/FastPay.png",
    live: "https://excaltalk.vercel.app/",
    github: "https://github.com/Kabirsharma2607/NoteSome",
  },
  {
    num: "03",
    category: "Full Stack Project",
    title: "FastPay",
    description:
      "FastPay is a swift and secure payment platform aimed at simplifying financial transactions. It supports instant transfers, bill payments, and mobile recharges. With advanced security measures and an intuitive interface, FastPay ensures a smooth and reliable payment experience for users.",
    stack: [
      {
        name: "HTML 5",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "Javascript",
      },
      {
        name: "Node.js",
      },
      {
        name: "React.js",
      },
      {
        name: "Express.js",
      },
    ],
    image: "/assets/FastPay.png",
    live: "https://paytm-basic-frontend-seven.vercel.app",
    github:
      "https://github.com/Kabirsharma2607/https://github.com/Kabirsharma2607/paytm-basic-frontend",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const curr = swiper.activeIndex;
    setProject(projects[curr]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.5,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-8"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-wrap gap-2 mt-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              //loop={true}
              onSlideChange={handleSlideChange}
              //navigation
              //pagination={{ clickable: true }}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
