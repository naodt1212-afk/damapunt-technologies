import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/shared/Nav";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Leadership } from "@/components/sections/Leadership";
import { TechStack } from "@/components/sections/TechStack";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { DamapuntAI } from "@/components/ai/DamapuntAI";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Damapunt Technologies — Premium Software Engineering from Ethiopia" },
      {
        name: "description",
        content:
          "Damapunt Technologies designs and develops websites, enterprise software, AI solutions, SaaS platforms, and mobile applications for ambitious businesses worldwide.",
      },
      { property: "og:title", content: "Damapunt Technologies — Premium Software Engineering" },
      {
        property: "og:description",
        content:
          "World-class digital products from Ethiopia. Websites, enterprise software, AI, SaaS, mobile.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen text-foreground">
      <Nav />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Leadership />
      <TechStack />
      <Process />
      <WhyUs />
      <Contact />
      <Footer />
      <DamapuntAI />
    </main>
  );
}
