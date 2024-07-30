"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGit,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiCplusplus,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

const about = {
  title: "About Me",
  description:
    "I am a highly motivated and detail-oriented software engineer with a passion for creating engaging and user-centric experiences. I have a keen eye for detail and a strong analytical mindset. I am always eager to learn and adapt to new technologies.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Kabir Sharma",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91-7889165948",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years of Experience",
    },
    {
      fieldName: "Twitter",
      fieldValue: "dev_karan1",
    },
    {
      fieldName: "Email",
      fieldValue: "kabirsharma2607@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
  ],
};

const education = {
  icon: "/public/assets/graduation-cap-svgrepo-com.svg",
  title: "My Education",
  items: [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology, Computer Science and Engineering",
      duration: "2021 - 2025",
      location: "Phagwara, Punjab",
      CGPA: "7.79",
    },
  ],
};

const skills = {
  title: "My Skills",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiCplusplus />,
      name: "C++",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaGit />,
      name: "Git",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-8 "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about" index={0}>
              About
            </TabsTrigger>
            <TabsTrigger value="education" index={1}>
              Education
            </TabsTrigger>
            <TabsTrigger value="skills" index={2}>
              Skills
            </TabsTrigger>
          </TabsList>
          <div className="min-4-[70vh] w-full">
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {about.description}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[300px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl  text-center lg:text-left ">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                          <span>CGPA: {item.CGPA}</span>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
