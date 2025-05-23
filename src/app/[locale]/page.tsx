import AboutMe from "@/components/aboutMe";
import Career from "@/components/career";
import Navbar from "@/components/navbar";
import Skills from "@/components/skills";
import Contacts from "@/components/contacts";
import Footer from "@/components/footer";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <div className=" mx-6 my-10 flex flex-col gap-20 sm:my-28 lg:mx-36 lg:gap-28">
        <AboutMe />
        <Projects />
        <Career />
        <Skills />
        <Contacts />
      </div>
      <Footer />
    </div>
  );
}
