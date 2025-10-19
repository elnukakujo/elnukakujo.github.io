import type HeaderType from '../../interface/Header';
import StatusLabel from './StatusLabel';
import Text from '../atoms/Text';
import Link from '../atoms/Link';


export default function Header({ header } : { header: HeaderType }) {
    let externalLinks = header.externalLinks ? [...header.externalLinks] : [];
    if (header.company) {
        header.company.forEach(c => {
            const logo = (c as any).logo;
            const url = (c as any).url;
            if (logo && url) {
                externalLinks.push({
                    text: c.name,
                    imageUrl: logo,
                    url,
                });
            } else {
                console.warn(`Company ${c.name} is missing logo or url for external link in header.`);
            }
        });
    }
    return (
        <header className={`w-full flex flex-col justify-between gap-sm ${header.className ? header.className : ''}`}>
            {header.status && <StatusLabel status={header.status} />}
            <main className="flex justify-between">
                <div className="flex flex-col gap-sm w-2/3">
                    <Text text={header.title} type="header" />
                    {header.company && <Text text={header.company.map(c => c.name).join(", ")} type="subsubheader" />}
                    {header.date && <Text text={header.date} type="text" className="italic" />}
                </div>
                {externalLinks &&  (
                    <nav className="flex flex-row gap-sm items-center">
                        {externalLinks.map((link, index) => (
                            <Link 
                                key={index}
                                text={link.text}
                                imageUrl={link.imageUrl}
                                logoType={link.logoType}
                                url={link.url}
                                className={link.className}
                            />
                        ))}
                    </nav>
                )}
            </main>
        </header>
    );
}