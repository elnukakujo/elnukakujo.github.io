import githubLogo from '../../assets/logo/contact/githubLogo.png';
import linkedinLogo from '../../assets/logo/contact/linkedinLogo.png';
import gmailLogo from '../../assets/logo/contact/gmailLogo.png';

function SocialsBar({size}) {
  return (
    <div className={`w-full flex flex-row justify-evenly justify-center items-center`}>
        <a href="https://github.com/elnukakujo" target="_blank" rel="noreferrer">
            <img src={githubLogo} alt="Github Logo" className='interact rounded-full' style={{height: `${size}rem`}}/>
        </a>
        <a href="https://www.linkedin.com/in/no%C3%A9-jager-2b4866236/" target="_blank" rel="noreferrer">
            <img src={linkedinLogo} alt="Linkedin Logo" className='interact rounded-full' style={{height: `${size}rem`}}/>
        </a>
        <a href="mailto:noe.p.jager@gmail.com" target="_blank" rel="noreferrer">
            <img src={gmailLogo} alt="Gmail Logo" className='interact rounded-full' style={{height: `${size}rem`}}/>
        </a>
    </div>
    );
}

export default SocialsBar;