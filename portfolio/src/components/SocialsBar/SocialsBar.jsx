import githubLogo from '../../assets/logo/contact/githubLogo.png';
import linkedinLogo from '../../assets/logo/contact/linkedinLogo.png';
import gmailLogo from '../../assets/logo/contact/gmailLogo.png';

function SocialsBar({className, size}) {
  return (
    <div className={`${className} flex flex-row gap-10 justify-center items-center`}>
        <a href="https://github.com/elnukakujo" target="_blank" rel="noreferrer">
            <img src={githubLogo} alt="Github Logo" className={`${size ? `size-${size}` : ''} interact logo`}/>
        </a>
        <a href="https://www.linkedin.com/in/no%C3%A9-jager-2b4866236/" target="_blank" rel="noreferrer">
            <img src={linkedinLogo} alt="Linkedin Logo" className='interact logo'/>
        </a>
        <a href="mailto:noe.p.jager@gmail.com" target="_blank" rel="noreferrer">
            <img src={gmailLogo} alt="Gmail Logo" className='interact logo'/>
        </a>
    </div>
    );
}

export default SocialsBar;