export default function SideMenu({ sections }) {
    const handleScroll = (e) => {
        const element = document.querySelector(`.${e}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <nav className='side-menu'>
            <ul className='side-menu__list'>
                {sections.map((section, index) => {
                    return (
                        <li className='side-menu__list__item' key={index}>
                            <a className='side-menu__list__item__link' onClick={() => handleScroll(section.anchorId)}>{section.title}</a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );

}