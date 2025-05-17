import { experience } from "./AboutMe.constants";
import ExperienceCard from "../../components/ExperienceCard";

function ExperienceSection() {
  return (
    <section id="experience" className="w-fit mx-auto card bg-transparent shadow-none">
        <h1 className="w-full text-left">Experience</h1>
        <div className="p-md">
          {experience.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} />
          ))}
        </div>
    </section>
  );
}

export default ExperienceSection;