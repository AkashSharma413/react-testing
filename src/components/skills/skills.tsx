import React from "react";
import { skillsProp } from "./skills.type";

const Skills = (props: skillsProp) => {
    const { skills } = props;
    return(
        <>
            <ul>
                {skills.map((skill) => {
                    return <li key={skill}>{skill}</li>
                })}
            </ul>
        </>
    )
}

export default Skills;