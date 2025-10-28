import { hobbies } from "./AboutMe.constants";

import Text from "../../components/atoms/Text";
import SimpleCard from "../../components/organisms/Card/SimpleCard";

export default function HobbiesSection() {
    return (
        <section id='hobbies' className="mx-auto flex flex-col gap-md items-center">
            <Text text="Hobbies" type="header" className="w-full"/>
            {hobbies.map((hobby, index) => (
                <SimpleCard
                    key={index}
                    size="medium"
                    layer={1}
                    header={{title: hobby.title}}
                >
                    <Text text={hobby.description} type="text"/>
                </SimpleCard>
            ))}
        </section>
    );
}