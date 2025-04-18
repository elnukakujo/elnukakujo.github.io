import Profile from '../../../assets/img/noe_aout_2022.png';
import CV from '../../../assets/docs/CV March 2025.pdf'

import CtaButton from '../../../components/CtaButton/CtaButton';

import { handleDownload } from '../../../utils/Download';

import { useNavigate } from 'react-router-dom';

function HeroSection() {
    const navigate = useNavigate();

    const navigateProjects = () => {
        navigate('/projects');
    }

    return (
        <section className="hero-section h-2/4 mt-30 md:mt-0">
            <div className="content lg:invisible max-w-3xl p-10 flex-col items-center gap-4 bg-secondary/85 transition duration-0">
                <div className="header">
                    <img src={Profile} alt="Noé Jager" className="rounded-full size-38 -mt-30 md:mt-0" />
                    <div className='flex flex-col gap-2'>
                        <h1>Noé Jager,</h1>
                        <h2>AI Engineer & Full-Stack Developer | Turning Data into Intelligence</h2>
                    </div>
                </div>
                <p className='text-justify'>I build AI-powered applications that solve real-world problems. Passionate about deep learning, machine learning, and full-stack development.</p>
                <div className="cta-buttons justify-center flex flex-row gap-4">
                    <CtaButton onClick={() => handleDownload(CV, 'NoeJagerCV.pdf')}>Download CV</CtaButton>
                    <CtaButton onClick={() => navigateProjects()}>View my Work</CtaButton>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;