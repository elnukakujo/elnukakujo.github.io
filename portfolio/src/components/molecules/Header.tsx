import type HeaderType from '../../interface/Header';
import type CityType from '../../interface/City';
import StatusLabel from './StatusLabel';
import Text from '../atoms/Text';
import Link from '../atoms/Link';

export default function Header({ header } : { header: HeaderType }) {
    let externalLinks = header.externalLinks ? [...header.externalLinks] : [];
    if (header.organization) {
        header.organization.forEach(c => {
            const logo = (c as any).logoUrl;
            const url = (c as any).websiteUrl;
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
        <header className={`w-full flex flex-col gap-sm ${header.className ? header.className : ''}`}>
            {header.status && <StatusLabel status={header.status} />}
            <main className="flex justify-between">
                <div className="flex flex-col gap-sm">
                    {header.title && <Text text={header.title} type="header" />}
                    {header.organization && <Text text={header.organization.map(c => c.name).join(", ")} type="subsubheader" />}
                    {header.location && (
                        <>
                            <Text type="subheader" text={header.location.map(city => city.name + (city.alias ? ` (${city.alias})` : '')).join(", ")} className="w-full" />
                            <Text type="subsubheader" text={Array.from(new Set(header.location.map(city => city.country).filter(Boolean))).join(", ")} className="w-full" />
                        </>
                    )}
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