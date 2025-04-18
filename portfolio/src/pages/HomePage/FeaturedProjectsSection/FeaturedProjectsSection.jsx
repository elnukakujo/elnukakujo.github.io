import { projects } from "../../ProjectsPage/Projects.constants";
import SmallProjectCard from "../../../components/SmallProjectCard/SmallProjectCard";

function FeaturedProjectsSection() {
    const featured_projects = projects.filter((project) => project.featured);
    return (
        <section className="featuredprojects-section">
            <div className="content flex-col bg-transparent gap-10">
                <h1>Featured Projects</h1>
                <div className="projects-list mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl justify-items-center">
                    {featured_projects.map((project, index) => (
                        <SmallProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturedProjectsSection;