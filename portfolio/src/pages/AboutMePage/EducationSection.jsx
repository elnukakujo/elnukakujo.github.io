import { education, ol } from "./AboutMe.constants";
import UniCard from "../../components/UniCard";

import React from "react";

function EducationSection() {
    return (
        <section id="education" className="w-main mx-auto flex flex-col gap-lg">
            <h1 className="w-full text-left">Education</h1>
            <section className="card w-card mx-auto flex flex-col gap-md">
                <article className="w-full flex flex-col lg:flex-row gap-md items-center justify-evenly">
                    {education.map((uni, index) => {
                        return(
                            <React.Fragment key={index}>
                                <UniCard uni={uni}/>
                                {index < education.length - 1 && (
                                    <div className="w-[20rem] h-[1.5px] lg:w-[1.5px] lg:h-[20rem] bg-text"></div>   
                                )}
                            </React.Fragment>
                        );
                    })}
                </article>
                <article className="w-full flex flex-col gap-md">
                    <h2>I also took some additional Online Courses</h2>
                    <nav className="flex flex-col gap-sm">
                        {ol.map((course, index) => (
                            <a key={index} href={course.url} target='_blank' rel='noreferrer' className="flex flex-row gap-sm justify-between items-center interact shadow-none">
                                <p>{course.title}</p>
                                <img src={course.logo} alt={course.title} className="rounded-full size-[3rem]"/>
                            </a>
                        ))}
                    </nav>
                </article>
            </section>
        </section>
    );
}
export default EducationSection;