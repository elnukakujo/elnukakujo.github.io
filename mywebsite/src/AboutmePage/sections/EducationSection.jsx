import '../assets/css/sections/educationsection.css';

import education from '../../assets/data/education.json';

const images = import.meta.glob('../assets/img/education/**', { eager: true });

export default function EducationSection() {
    const universities = education.uni;
    const ol = education.ol;
    return(
        <div className='education-section'>
            <h1 className='education-section__title'>Education</h1>
            <div className='education-section__universities'>
                {universities.map((uni, index) => {
                    return(
                        <div key={index} className='education-section__university'>
                            <div className='education-section__university-header'>
                                <div className='education-section__university-header-header'>
                                    <h2 className='education-section__university-name'>{uni.title}</h2>
                                    <p className='education-section__university-degree'>{uni.date}</p>
                                </div>
                                <div className='education-section__university-header-logo'>
                                    <a href={uni.websiteUrl} target='_blank' rel='noreferrer'>
                                        <img src={images[uni.logo]?.default || null} alt={uni.title} />
                                    </a>
                                </div>
                            </div>
                            <img className='education-section__university-image' src={images[uni.image]?.default || null} alt={uni.title} />
                            <div className='education-section__university-content'>
                                <h2>Subjects covered :</h2>
                                <ul>
                                    {uni.courses.map((course, index) => (
                                        <li key={index}>{course}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='education-section__online-courses'>
                <h2>I also took some additional Online Courses</h2>
                <div className='education-section__online-courses-list'>
                    {ol.map((course, index) => (
                        <div key={index} className='education-section__online-courses-list-course'>
                            <a href={course.url} target='_blank' rel='noreferrer'>{course.title}</a>
                            <a href={course.url} target='_blank' rel='noreferrer'>
                                <img src={images[course.logo]?.default || null} alt={course.title} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}