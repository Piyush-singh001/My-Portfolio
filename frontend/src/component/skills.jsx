import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express", icon: <SiExpress className="text-gray-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-black" /> },
];

const SkillSection = () => {
  const containerRef = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    const scrollWidth = scrollRef.current.scrollWidth;
    const containerWidth = containerRef.current.clientWidth;
    const offset = window.innerWidth < 770 ? 40 : 0;
    const scrollLength = scrollWidth - containerWidth;

    let ctx = gsap.context(() => {
      gsap.to(scrollRef.current, {
        x: -scrollLength,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 30%",
          end: () => `+=${scrollLength - offset}`, // 👈 adjust this value
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative bg-white overflow-hidden"
    >
      <h2 className="text-3xl font-bold text-center py-8 text-gray-800">
        My Skills
      </h2>

      <div
        ref={scrollRef}
        className="flex gap-6 px-4 pr-16 pb-10  w-max min-w-[100vw]"
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            className="w-[160px] sm:w-[180px] md:w-[220px] h-[180px] sm:h-[200px] md:h-[220px] 
                       flex-shrink-0 bg-gray-100 rounded-xl shadow-md 
                       flex flex-col items-center justify-center scroll-snap-type 
                       hover:scale-105 transition "
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-sm text-gray-700 text-center break-words">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
