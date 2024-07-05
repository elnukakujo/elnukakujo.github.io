import React from 'react';
import {Link} from 'react-router-dom';
import { useEffect } from "react";

import '../assets/css/pages/education.css';


function SectionOpener({id, title, children}){
    return (
        <div className="section" id={id}>
            <div className="content">
                <h2>{title}</h2>
                {children}
            </div>
        </div>
    );
}

function Description({anchorId, title, date, GPA, relevantCourses, onlineCourses}){
    const output = [];

  if (date) {
    output.push(<li className="date" key="date">Date: {date}</li>);
  }

  if (GPA) {
    output.push(<li key="gpa">GPA: {GPA}</li>);
  }

  if (relevantCourses) {
    output.push(
      <li key="relevantCourses">
        Relevant courses: {relevantCourses.join(', ')}
      </li>
    );
  }

  if (onlineCourses) {
    output.push(
        ...onlineCourses.map((course, index) => (
            <li key={index}>{course}</li>
        ))
    );
  }

  return (
    <div>
      <div className="anchor" id={anchorId}></div>
      <div className="description">
        <h4>{title}</h4>
        <ul>
          {output}
        </ul>
      </div>
    </div>
  );
}

export default function Education(){
    useEffect(() => {
      document.title = 'Education | Noe Jager';
    }, []);
    return (
        <SectionOpener id="education" title="Education">
            <Description
            anchorId={"masterUdem"}
            title={"Master in Computer Science at Université de Montréal"}
            date={"September 2022 - Upcoming"}
            relevantCourses={["Data Science", "Machine Learning Fundamentals", "Data Visualization"]}/>
            <Description
            anchorId={"bacUniLu"}
            title={"Bachelor of Science in Computer Science at University of Luxembourg"}
            date={"September 2019 - July 2022"}
            GPA={3.0}
            relevantCourses={["Web development", "Software Engineering", "Networking and Communication", "Cybersecurity 1 and 2", 
            "Human Computer Interaction and User Centered Design"]}/>
            <Description
            anchorId={"oc"}
            title={"Online Courses"}
            onlineCourses={[
                "Design in Art and Concepts Specialization (Coursera - CalArts)",
                "Data Mining Specialization by the University of Illinois at Urbana-Champaign (Coursera)"
            ]}
            />
        </SectionOpener>
    )
}