import { experience } from "./AboutMe.constants";
import ExperienceCard from "../../components/ExperienceCard";

function ExperienceSection() {
  return (
    <section id="experience" className="w-main mx-auto flex flex-col gap-md items-center">
        <h1 className="w-full text-left">Experience</h1>
        {experience.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} />
        ))}
    </section>
  );
}

export default ExperienceSection;