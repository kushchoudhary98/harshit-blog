import { NavBar } from "~/components/NavBar";
import type { Route } from "./+types/home";
import HeroSection from "~/components/HeroSection";
import TopicSection from "~/components/TopicSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
    <NavBar />
    <HeroSection />
    <TopicSection />
    </>
  );
}
