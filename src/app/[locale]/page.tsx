import AboutMe from "@/components/aboutMe";
import Career from "@/components/career";
import Contacts from "@/components/contacts";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className=" mx-6 my-10 flex max-w-screen flex-col gap-20 overflow-x-hidden sm:my-28 lg:mx-36 lg:gap-28">
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
