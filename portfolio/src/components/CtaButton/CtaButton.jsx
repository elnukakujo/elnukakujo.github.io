import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CtaButton = ({children , onClick}) => {
    return (
        <button onClick={onClick} className='cursor-pointer shadow-none translate-0 interact flex flex-row items-center gap-[10px] hover:gap-[15px] transition-all duration-300 ease-in-out group/button'> 
            {children}
            <FontAwesomeIcon icon={faChevronRight} className='group-hover/button:text-enhanced'/>
        </button>
    );
}

export default CtaButton;