import CtaBubble from '../components/CtaBubble/CtaBubble';
import CtaButton from '../components/CtaButton/CtaButton';
import SocialsBar from '../components/SocialsBar/SocialsBar';

import steveHead from '../assets/img/steveHead.png';
import book from '../assets/img/book.png';
import pickaxe from '../assets/img/pickaxe.png';
import expBottle from '../assets/img/expBottle.png';
import profile from '../assets/img/noe_aout_2022.png';

import udemImage from '../assets/img/udem.png';
import shimanamiKaido from '../assets/img/shimanami-kaido.png';
import neuralNetwork from '../assets/img/nn.png';

import useNavigateTo from '../utils/navigateTo';

function HeroLayout(){
    const navigateTo = useNavigateTo();    
      
    return (
        <section className="hero-layout w-main mx-auto lg:my-[3rem] flex flex-col lg:flex-row gap-lg items-center justify-center">
            <nav className='flex flex-col gap-lg order-1 lg:order-0'>
                <CtaBubble
                    frontCard={
                        <>
                            <img src={steveHead} alt="Icon" className="size-[5rem]" />
                            <CtaButton onClick={() => navigateTo('/aboutme', 'countries-visited')}>
                                About Me
                            </CtaButton>
                        </>
                    }
                    backCard={
                        <>
                            <div className='w-full text-left'>
                                <CtaButton onClick={() => navigateTo('/aboutme', 'countries-visited')}>
                                    About Me
                                </CtaButton>
                            </div>
                            <hr className='w-full border-1 border-text'/>
                            <img src={shimanamiKaido} alt="Picture of University of Montreal" className='rounded-xl'/>
                        </>
                    }
                />
                <CtaBubble
                    frontCard={
                        <>
                            <img src={book} alt="Icon" className="size-[5rem]" />
                            <CtaButton onClick={() => navigateTo('/aboutme', 'education')}>
                            Education
                            </CtaButton>
                        </>
                    }
                    backCard={
                        <>
                            <div className='w-full text-left'>
                                <CtaButton onClick={() => navigateTo('/aboutme', 'education')}>
                                    Education
                                </CtaButton>
                            </div>
                            <hr className='w-full border-1 border-text'/>
                            <img src={udemImage} alt="Picture of University of Montreal" className='rounded-xl'/>
                        </>
                    }
                />
            </nav>
            <article className='mt-45 order-0 lg:mt-0 lg:order-1'>
                <CtaBubble
                    size='main'
                    frontCard={
                        <>
                            <img src={profile} alt="Icon" className="size-[12rem] rounded-full -mt-45 shadow-lg" />
                            <h1>Noe Jager</h1>
                            <h2 className='text-wrap text-center'>AI Engineer | Full-Stack Developer</h2>
                            <SocialsBar size={3}/>
                        </>
                    }
                />
            </article>
            <nav className='flex flex-col gap-lg order-2'>
                <CtaBubble
                    frontCard={
                        <>
                            <img src={pickaxe} alt="Icon" className="size-[5rem]" />
                            <CtaButton onClick={() => navigateTo('/projects')}>
                                Projects
                            </CtaButton>
                        </>
                    }
                    backCard={
                        <>
                            <div className='w-full text-left'>
                                <CtaButton onClick={() => navigateTo('/projects')}>
                                    Projects
                                </CtaButton>
                            </div>
                            <hr className='w-full border-1 border-text'/>
                            <img src={neuralNetwork} alt="Picture of University of Montreal" className='rounded-xl'/>
                        </>
                    }
                />
                <CtaBubble
                    frontCard={
                        <>
                            <img src={expBottle} alt="Icon" className="size-[5rem]" />
                            <CtaButton onClick={() => navigateTo('/aboutme', 'experience')}>
                                Experience
                            </CtaButton>
                        </>
                    }
                />
            </nav>
        </section>
    );
}

export default HeroLayout;