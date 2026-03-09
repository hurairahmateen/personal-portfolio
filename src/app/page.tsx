import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import SkillsChart from "@/components/SkillsChart";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Projects />
      <Testimonials />
      <SkillsChart />
      <Contact />
    </Layout>
  );
}
