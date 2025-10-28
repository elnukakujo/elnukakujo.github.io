import SimpleCard from "../../components/organisms/Card/SimpleCard";
import DegreeCard from "../../components/organisms/Card/DegreeCard";
import Text from "../../components/atoms/Text";
import { education, ol } from "./AboutMe.constants";

import React from "react";

function EducationSection() {
    return (
        <section id="education" className="flex flex-col gap-lg">
            <Text text="Education" type="header" className="w-full"/>
            <SimpleCard
                size="large"
                layer={1}
            >
                <SimpleCard
                    size="medium"
                    layer={2}
                    className="flex flex-col lg:flex-row gap-lg items-center justify-evenly"
                >
                    {education.map((degree, index) => {
                        return(
                            <DegreeCard
                                key={index}
                                size="medium"
                                degree={degree}
                                layer={3}
                            />
                        );
                    })}
                </SimpleCard>
                <Text text="Additional Online Formations" type="subheader" className="w-full"/>
                <SimpleCard
                    size="medium"
                    layer={2}
                >
                    <nav className="flex flex-col gap-sm">
                        {ol.map((course, index) => (
                            <a key={index} href={course.url} target='_blank' rel='noreferrer' className="flex flex-row gap-sm justify-between items-center interact shadow-none">
                                <p>{course.title}</p>
                                <img src={course.logo} alt={course.title} className="rounded-full size-[3rem]"/>
                            </a>
                        ))}
                    </nav>
                </SimpleCard>
            </SimpleCard>
        </section>
    );
}
export default EducationSection;