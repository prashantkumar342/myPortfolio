"use client";
/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import {
  Code as CodeIcon,
  Storage,
  Web,
  Build,
  Computer,
} from "@mui/icons-material";

import ScreenLoader from "@/components/screenLoader";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, Linkedin } from "@/components/icons";
import { setAuthStatus, setUser } from "@/redux/slices/globalVar";
import { validateUser } from "@/config/auth";

const skills = [
  {
    category: "Programming",
    skills: "JavaScript, Node.js, React.js, Next.js",
    icon: CodeIcon,
  },
  { category: "Databases", skills: "MongoDB, Mongoose", icon: Storage },
  {
    category: "Web Development",
    skills:
      "HTML, CSS, Tailwind, Bootstrap, SCSS/SASS, Material UI, Next Ui, Shadcn Ui, Redux-Toolkit, Redux-Persist, Service Worker",
    icon: Web,
  },
  { category: "Tools", skills: "Git, GitHub, Postman, VS Code", icon: Build },
  {
    category: "Others",
    skills:
      "Linux, Windows, CORS (Cross-Origin Resource Sharing), Computer Networks",
    icon: Computer,
  },
];

export default function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const response = await validateUser();

      if (
        response &&
        response.status === 200 &&
        response.data.message === "Authorized"
      ) {
        dispatch(setAuthStatus(true));
        dispatch(setUser(response?.data.user));
      } else {
        dispatch(setAuthStatus(false));
      }
      setLoading(false);
    };

    checkAuth();
  }, [dispatch]);
  if (loading) {
    return (
      <div className="backdrop-blur-md w-full h-full flex items-center justify-center">
        <ScreenLoader />
      </div>
    );
  }

  return (
    <>
      <section className=" flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className=" inline-block max-w-4xl text-center justify-center">
          <span className={title()}>Hello! I’m</span>
          <span className={title({ color: "violet" })}> Prashant Kumar,</span>
          <span className={title()}> a passionate Full-Stack Developer</span>
          <p className={`${subtitle({ size: "sm" })} mt-10`}>
            I specialize in building dynamic, optimized, and engaging web
            applications. From crafting seamless user interfaces to designing
            robust back-end systems, I thrive on transforming ideas into
            reality. With expertise in the MERN stack and a focus on real-time
            solutions, I have developed a range of projects, including
            progressive web apps and chat systems, that are fast, efficient, and
            user-friendly. Let’s connect to build something amazing together!
          </p>
        </div>
        <div className=" mt-2 flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              variant: "bordered",
              radius: "full",
            })}
            href={siteConfig.links.linkedin}
          >
            <Linkedin size={20} /> Linkedin
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} /> GitHub
          </Link>
        </div>
        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Visit Gallery
              <Code color="primary">
                <Link showAnchorIcon color="secondary" href="/gallery">
                  Gallery
                </Link>
              </Code>
            </span>
          </Snippet>
        </div>
      </section>

      <section className=" text-center">
        <h4 className="text-3xl font-bold mb-10">Key Skills</h4>
        <div className="grid gap-6 md:grid-cols-2  lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="p-6 border rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <skill.icon style={{ fontSize: "40px", marginRight: "16px" }} />
                <h5 className="text-xl font-semibold">{skill.category}</h5>
              </div>
              <p className="text-gray-500">{skill.skills}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
