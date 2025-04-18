import './CtaButton.css';

const CtaButton = ({children , onClick}) => {
    return (
        <button onClick={onClick} className={`cta-button w-[fit-content] font-regular text-enhanced hover:text-secondary dark:hover:text-primary-dark before:bg-enhanced dark:before:bg-secondary-dark border-enhanced dark:border-secondary-dark dark:text-secondary-dark border-2 rounded-full shadow-lg hover:shadow-md hover:shadow-enhanced/80 dark:hover:shadow-enhanced/80`}>
            {children}
        </button>
    );
}

export default CtaButton;