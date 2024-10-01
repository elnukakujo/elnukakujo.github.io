import React from 'react';
import courseraLogo from '../assets/img/logo/coursera_logo.jpg';
import { useEffect, useState } from "react";

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

function Images({images}){
  return (
    <div className="images">
      {images.map((image, index) => (
        <figure key={index} className='image-container'>
          <a href={image[1]} target="_blank" rel="noreferrer">
            <img src={image[0]} alt={image[1]}/>
          </a>
          <figcaption>{image[2]}</figcaption>
        </figure>
      ))}
    </div>
  )
}

function OnlineCourses({courses}){
  return (
    <div>
        <div className="anchor" id="oc"></div>
        <div className="description" id="oc-content">
          <h4>Online Courses</h4>
          <ul>
            {courses.map((course, index) => (
              <li key={index}>
                <a href={course[1]} target="_blank" rel="noreferrer">
                  {course[0]}
                </a>
                <a className="coursera_container" href={course[1]} target="_blank" rel="noreferrer">
                  <img src={courseraLogo} alt="Coursera"/>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
  );
}

function University({anchorId, title, date, GPA, courses, websiteLink, images}){
  const output = [];

  if (date) {
    output.push(<p className="date" key="date">Date: {date}</p>);
  }

  if (GPA) {
    output.push(<p key="gpa">GPA: {GPA}</p>);
  }

  if (courses) {
    output.push(
      <p key="courses">
        Courses: {courses.join(', ')}
      </p>
    );
  }

  return (
    <div>
      <div className="anchor" id={anchorId}></div>
      <div className="description">
        <div className="top-row">
          <h4>{title}</h4>
          {
            websiteLink &&
            <a className="school-container" href={websiteLink[0]} target="_blank" rel="noreferrer">
              <img src={websiteLink[1]} alt="University of Luxembourg"/>
            </a>
          }
        </div>
        <div className='link-row'>
          {
            websiteLink &&
            <a href={websiteLink[0]} target="_blank" rel="noreferrer">
              See the University's website
            </a>
          }
        </div>
        <ul>
          {output}
        </ul>
        {
          images &&
          <Images images={images}/>
        }
      </div>
    </div>
  );
}

export default function Education(){

    const [universities, setUniversities] = useState([]);
    const [onlineCourses, setOnlineCourses] = useState([]);

    const fetchEducation = async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/elnukakujo/elnukakujo.github.io/refs/heads/main/mywebsite/src/assets/data/education.json');
            if (!response.ok) {
                console.log(response);
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setUniversities(data.uni); 
            setOnlineCourses(data.ol);
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    };
    useEffect(() => {
      document.title = 'Education | Noe Jager';
      fetchEducation();
    }, []);
    
    console.log(onlineCourses);

    return (
        <SectionOpener id="education" title="Education">
            {universities.map((university, index) => (
              <University
                key={index}
                anchorId={university.anchorId}
                title={university.title}
                date={university.date}
                GPA={university.GPA}
                courses={university.courses}
                websiteLink={university.websiteLink}
                images={university.images}
              />
            ))}
            {
              <OnlineCourses
                courses={onlineCourses}
              />
            }
        </SectionOpener>
    )
}