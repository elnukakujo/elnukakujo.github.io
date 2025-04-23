import React, {useState,useEffect,useMemo} from 'react';
import useVisibleSection from '../hooks/useVisibleSection';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function SideNav({ sections }) {
    const [isOpen, setIsOpen] = useState(false);

    const [activeSection, setActiveSection] = useState(null);
    const sectionIds = useMemo(() => sections.map(section => section.id), [sections]);
    const visibleSections = useVisibleSection(sectionIds);

    useEffect(() => {
        const firstVisible = Array.from(visibleSections).find(id => visibleSections.has(id));
        setActiveSection(firstVisible || null);
    }, [visibleSections]);

    const handleScroll = (id) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };
    return (
        <aside className="sidenav z-2">
            <nav className="fixed top-[50lvh] left-4 -translate-y-1/2 collapse sm:visible bg-secondary rounded-full p-2 flex flex-col gap-sm items-center justify-center shadow-lg opacity-90">
                {sections.map((section, index) => (
                    <div
                        className='relative group/navitem'
                        key={index}
                        onClick={() => handleScroll(section.id)}
                    >
                        <div className={`cursor-pointer size-2.5 bg-text rounded-full opacity-50 group-hover/navitem:opacity-100 ${activeSection===section.id ? 'opacity-100' : '' }`}/>
                        <summary className="list-none absolute invisible bg-secondary p-3 rounded-md group-hover/navitem:visible top-[50%] left-[1.5rem] w-[18rem] translate-y-[-50%] flex flex-col gap-sm items-center shadow-md">
                            <h3>{section.title}</h3>
                            <p className='text-justify'>{section.summary}</p>
                        </summary>
                    </div>
                ))}
            </nav>
            <div className='sidenav-small visible sm:collapse'>
                <button className='button-controller size-6 fixed top-4 left-3 flex items-center justify-center hover:opacity-80 cursor-pointer transition-opacity duration-500 ease-in-out'>
                    {isOpen ?
                        <FontAwesomeIcon icon={faXmark} className='text-text text-[1.5rem]' onClick={() => setIsOpen(false)}/>
                        :
                        <FontAwesomeIcon icon={faBars} className='text-text text-[1.5rem]' onClick={() => setIsOpen(true)}/>
                    }
                </button>
                <nav className={`${isOpen?'w-full':'w-0'} fixed top-14 left-0 opacity-90 bg-secondary h-[calc(100lvh-3.5rem)] overflow-x-hidden overflow-y-scroll flex flex-col gap-md transition-all duration-500 ease-in-out`}>
                    {sections.map((section, _) => (
                        <h3 className='cursor-pointer interact shadow-none w-[100vw]' onClick={() => handleScroll(section.id)}>{section.title}</h3>
                    ))}
                </nav>
            </div>
        </aside>
    );
}

export default SideNav;