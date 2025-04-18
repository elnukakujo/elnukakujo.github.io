import NoeParis from '../../../assets/img/noe_paris_2025.png';
import CtaButton from '../../../components/CtaButton/CtaButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

function AboutMeSection(){
    return(
        <section className="aboutme-section">
            <h1 className="text-center mb-10">Here is something about me ...</h1>
            <div className="content p-8 flex-row flex-wrap gap-10 align-center justify-center">
                <img className="max-w-78 rounded-2xl" src={NoeParis} alt="A picture of Noe Jager in the Orangerie museum in Paris." />
                <div className='flex flex-col justify-center items-center text-justify max-w-2xl gap-5'>
                    <p>I'm currently doing a master's degree in Computer Science at Université de Montréal. Right now, I'm interning at AppOX, an AI startup. I've built several AI and full-stack applications and won hackathons at Université de Montréal, McGill University, and online.</p>
                    <p>Besides studying, I love travelling and learning new languages. In summer 2023, I spent two months at a language school in Japan and have also been learning Chinese. This winter, I started bouldering and boxing, which have been really fun. I also weekly join role-playing campaigns, which are a great way to have fun and be creative.</p>
                    <div className="cta-buttons w-full flex flex-col sm:flex-row flex-wrap justify-evenly items-center gap-x-2 gap-y-5">
                        <CtaButton>
                            <FontAwesomeIcon icon={faBookOpen} className="mr-1" />
                            Education
                        </CtaButton>
                        <CtaButton>
                            <FontAwesomeIcon icon={faBriefcase} className="mr-1" />
                            Experience
                        </CtaButton>
                        <CtaButton>
                            <FontAwesomeIcon icon={faCircleInfo} className="mr-1" />
                            Not Enough?
                        </CtaButton>
                        <CtaButton>
                            <FontAwesomeIcon icon={faMessage} className="mr-1" />
                            Contact Me
                        </CtaButton>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMeSection;