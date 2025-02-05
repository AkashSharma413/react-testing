import React, { useEffect, useState } from "react";
import { skillsProp } from "./skills.type";

const Skills = (props: skillsProp) => {
  const { skills } = props;
  const [isUserLoggedin, setIsUserLoggedin] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsUserLoggedin(true);
    }, 1001);
  }, []);

  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
      {isUserLoggedin ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsUserLoggedin(true)}>Login</button>
      )}
    </>
  );
};

export default Skills;
