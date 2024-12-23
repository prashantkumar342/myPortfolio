"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import ScreenLoader from "@/components/screenLoader";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, Linkedin } from "@/components/icons";
import { setAuthStatus, setUser } from "@/redux/slices/globalVar";
import { validateUser } from "@/config/auth";

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
      <div className=" backdrop-blur-md w-full h-full flex items-center justify-center">
        <ScreenLoader />
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-3xl text-center justify-center">
        <span className={title()}>Hello! I’m</span>
        <span className={title({ color: "violet" })}> Prashant Kumar,</span>
        <span className={title()}> a passionate Full-Stack Developer</span>
        <p className={subtitle({ size: "sm" })}>
          I specialize in building dynamic, optimized, and engaging web
          applications. From crafting seamless user interfaces to designing
          robust back-end systems, I thrive on transforming ideas into reality.
          With expertise in the MERN stack and a focus on real-time solutions, I
          have developed a range of projects, including progressive web apps and
          chat systems, that are fast, efficient, and user-friendly. Let’s
          connect to build something amazing together!
        </p>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            variant: "bordered",
            radius: "full",
          })}
          href={siteConfig.links.linkedin}
        >
          <Linkedin size={20} />
          Linkedin
        </Link>
        <Link
          isExternal
          className={buttonStyles({
            variant: "bordered",
            radius: "full",
          })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
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
  );
}
