import '../assets/css/sections/headersection.css';

export default function HeaderSection() {
    return(
        <div className='header-section'>
            <h1 className='header-section__title'>Welcome to my About Me page</h1>
            <div className="header-section__content">
                <h1 className="header-section__content__quotes left">"</h1>
                <p className="header-section__content__text">
                Driven by a passion for AI, data science, and full-stack development, always seeking to bring ideas to life through machine learning models and interactive web apps. Continuously exploring new technologies and collaborating on projects that push the boundaries of innovation.
                </p>
                <h1 className="header-section__content__quotes right">"</h1>
            </div>
        </div>
    );
}