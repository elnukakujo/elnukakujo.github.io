import { hobbies } from "./AboutMe.constants";

function HobbiesSection() {
    return (
        <section id='hobbies' className="w-main mx-auto flex flex-col gap-md items-center">
            <h1 className="w-full text-left">Hobbies</h1>
            {hobbies.map((hobby, index) => (
                <article key={index} className="card">
                    <h2 className="w-full text-left">{hobby.title}</h2>
                    <p>{hobby.description}</p>
                </article>
            ))}
        </section>
    );
}

export default HobbiesSection;