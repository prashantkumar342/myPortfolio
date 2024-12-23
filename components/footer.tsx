/* eslint-disable prettier/prettier */
"use client";
import { Send } from "@mui/icons-material";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Link } from "@nextui-org/link";

import { GithubIcon, Linkedin, WhatsappIcon } from "./icons";

import  useSocket  from "@/config/useSocket";
import { RootState } from "@/redux/store";
import { siteConfig } from "@/config/site";

const Footer: React.FC = () => {
  const socket = useSocket();
  const router = useRouter();
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.globalVar
  );
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("feedbackAck", (data: { message: string }) => {
        toast.success(data.message);
      });

      return () => {
        socket.off("feedbackAck");
      };
    }
  }, [socket]);

  const handleSend = (event: React.FormEvent) => {
    event.preventDefault();
    if (isAuthenticated) {
      if (socket && user) {
        socket.emit("sendFeedback", {
          feedbackMessage,
          sender: user.id,
        });
        setFeedbackMessage("");
      } else {
        console.error("Socket not connected or user not authenticated");
      }
    } else {
      toast.error("Login to send feedback");
      if (isClient) {
        router.push("/login");
      }
    }
  };

  return (
    <div
      className={`px-4 w-full flex flex-col justify-between items-center  dark:border-slate-700 bg-gray-100 dark:bg-gray-800`}
    >
      <div className=" w-full text-center">
        <div className="flex flex-col md:flex-row w-full mt-3 mb-4 md:mb-0">
          <form className="md:w-1/2 p-2" onSubmit={handleSend}>
            <div className="w-full flex flex-col space-y-3">
              <Input
                isRequired
                className="w-full text-gray-900 dark:text-gray-200"
                errorMessage="please say something"
                label="Your Feedback"
                labelPlacement="outside"
                radius="lg"
                value={feedbackMessage}
                variant="underlined"
                onChange={(e) => setFeedbackMessage(e.target.value)}
              />
              <Button
                fullWidth
                className="bg-primary text-white hover:bg-primary-dark"
                radius="sm"
                size="md"
                type="submit"
              >
                Send Feedback <Send />
              </Button>
            </div>
          </form>
          <div className="md:w-full p-2 flex flex-col items-center justify-center">
            <div>
              <div className="w-full text-center mt-6">
                <span className="text-lg font-semibold">Quick Links</span>
                <div className="flex justify-center gap-6 mt-2">
                  <Link href="/about" className="text-gray-600 hover:underline">
                    About
                  </Link>
                  <Link
                    href="/gallery"
                    className="text-gray-600 hover:underline"
                  >
                    gallery
                  </Link>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:underline"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <span className="mt-2 text-sm text-gray-500 dark:text-gray-300">
              Designed with ❤️ using NextUi-NextJs framework.
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center">
        <div className="p-2 w-full md:w-full text-center flex flex-col items-center">
          <span className="text-lg font-semibold text-gray-900 dark:text-gray-200">
            Let’s Connect
          </span>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Feel free to reach out or connect with me on social media!
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Ready to collaborate? Let’s build something amazing together!
          </p>
          <div className="flex gap-2 mt-1">
            <Button
              isExternal
              isIconOnly
              as={Link}
              className="bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600"
              href={siteConfig.links.github}
              radius="full"
              variant="solid"
            >
              <GithubIcon size={30} />
            </Button>
            <Button
              isExternal
              isIconOnly
              as={Link}
              className="bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600"
              href={siteConfig.links.linkedin}
              radius="full"
              variant="solid"
            >
              <Linkedin size={30} />
            </Button>
            <Button
              isExternal
              as={Link}
              className="bg-green-500 dark:bg-green-600 text-white border border-gray-500 dark:border-gray-400 hover:bg-green-400 dark:hover:bg-green-500 "
              href={siteConfig.links.whatsapp}
              radius="full"
              variant="solid"
            >
              <WhatsappIcon size={25} /> WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
