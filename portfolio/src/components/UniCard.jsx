function UniCard({ uni }) {
    return (
        <section className="flex flex-col gap-md w-card-sm items-center">
            <header className="w-full flex flex-row gap-sm justify-between items-center">
                <header>
                    <h2>{uni.title}</h2>
                    <p className="italic">{uni.date}</p>
                </header>
                <nav>
                    <a href={uni.websiteUrl} target='_blank' rel='noreferrer'>
                        <img src={uni.logo} alt={uni.title} className="interact shadow-none w-[4rem]"/>
                    </a>
                </nav>
            </header>
            <img className='shadow-md size-media-sm rounded-sm' src={uni.image} alt={uni.title} />
            <span className="w-full">
                <h2>Subjects covered :</h2>
                <ul>
                    {uni.courses.map((course, index) => (
                        <li key={index}>{course}</li>
                    ))}
                </ul>
            </span>
        </section>
    );
}
export default UniCard;