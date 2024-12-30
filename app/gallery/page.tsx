/* eslint-disable prettier/prettier */
"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "@nextui-org/link";
import {
  Card,
  CardHeader,
  Avatar,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import { GithubIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import ScreenLoader from "@/components/screenLoader";

interface Profile {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
}

export default function GalleryPage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 4;

  useEffect(() => {
    const profileUrl = process.env.NEXT_PUBLIC_GITHUB_PROFILE as string;
    const reposUrl = process.env.NEXT_PUBLIC_GITHUB_REPOS as string;
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN as string;

    if (profileUrl && reposUrl && token) {
      // Fetch profile data
      axios
        .get(profileUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setProfile(response.data);
        })
        .catch((error) => {
          console.error("Error fetching profile:", error);
        });

      // Fetch repositories data
      axios
        .get(reposUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setRepos(response.data);
        })
        .catch((error) => {
          console.error("Error fetching repositories:", error);
        });
    } else {
      console.error(
        "One or more environment variables (NEXT_PUBLIC_GITHUB_PROFILE, NEXT_PUBLIC_GITHUB_REPOS, NEXT_PUBLIC_GITHUB_TOKEN) are not defined."
      );
    }
  }, []);

  if (!profile) {
    return <ScreenLoader />;
  }

  // Logic for displaying repos
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <section className="flex flex-col w-full items-center gap-4 py-3 md:py-10 max-w-3xl mx-auto">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <Card className="w-full md:max-w-3xl lg:max-w-4xl mx-auto">
            <CardHeader className="justify-between flex flex-wrap gap-4">
              <div className="flex gap-5">
                <Avatar
                  isBordered
                  radius="full"
                  size="lg"
                  src={profile.avatar_url}
                />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-lg font-semibold leading-none">
                    {profile.name}
                  </h4>
                  <a
                    className="text-sm tracking-tight text-blue-500"
                    href={profile.html_url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    @{profile.login}
                  </a>
                </div>
              </div>
              <Link
                isExternal
                className={buttonStyles({
                  variant: "bordered",
                  radius: "full",
                })}
                href={siteConfig.links.github}
              >
                <GithubIcon size={20} /> GitHub
              </Link>
            </CardHeader>
            <CardBody className="px-3 py-2 text-sm text-gray-600">
              <p>
                {profile.bio ||
                  "Delivering High Quality Web App Solutions || Full Stack JavaScript Developer"}
              </p>
            </CardBody>
          </Card>
        </div>
      </section>

      <section className="w-full px-4 sm:px-6 lg:px-8 mt-8">
        <h2 className="text-2xl font-semibold mb-4">Repositories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentRepos.map((repo) => (
            <Card key={repo.id} className="w-full text-left">
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  className="bg-white"
                  height={40}
                  radius="sm"
                  src="github-mark.png"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">{repo.name}</p>
                  <p className="text-small text-default-500">{profile.name}</p>
                </div>
              </CardHeader>
              <Divider />

              <CardBody className="px-3 py-2">
                <p>{repo.description || "No description available"}</p>
              </CardBody>
              <Divider />
              <CardFooter className="px-3 py-2 flex justify-between">
                <div className="text-sm text-gray-600">
                  <span>⭐ {repo.stargazers_count}</span> &nbsp;
                  <span>🍴 {repo.forks_count}</span>
                </div>
                <Link isExternal className="text-blue-500" href={repo.html_url}>
                  View Repo
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <nav>
            <ul className="flex list-none">
              {Array.from({
                length: Math.ceil(repos.length / reposPerPage),
              }).map((_, index) => (
                <li key={index}>
                  <button
                    className={`px-4 py-2 border mx-1 border-gray-300 rounded ${index + 1 === currentPage ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}
