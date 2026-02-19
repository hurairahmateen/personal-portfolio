import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import SkillsChart from "@/components/SkillsChart";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Projects />
      <SkillsChart />
      <Contact />
    </Layout>
  );
}
