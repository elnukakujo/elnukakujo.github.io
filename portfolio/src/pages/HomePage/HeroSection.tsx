import BubbleCard from '../../components/organisms/Card/BubbleCard';
import Image from '../../components/atoms/Image';
import Text from '../../components/atoms/Text';
import List from '../../components/molecules/List';
import Link from '../../components/atoms/Link';

// @ts-ignore
import steveHead from '../../assets/img/steveHead.png';
// @ts-ignore
import book from '../../assets/img/book.png';
// @ts-ignore
import pickaxe from '../../assets/img/pickaxe.png';
// @ts-ignore
import expBottle from '../../assets/img/expBottle.png';
// @ts-ignore
import profile from '../../assets/img/noe_aout_2022.png';
// @ts-ignore
import udemImage from '../../assets/img/udem.png';
// @ts-ignore
import shimanamiKaido from '../../assets/img/shimanami-kaido.png';
// @ts-ignore
import neuralNetwork from '../../assets/img/nn.png';

export default function HeroSection(){ 
    return (
        <section className="hero-layout w-main mx-auto lg:my-[3rem] flex flex-col lg:flex-row gap-lg items-center justify-center">
            <nav className='flex flex-col gap-lg order-1 lg:order-0'>
                <BubbleCard
                    size="small"
                    backCard={
                        <>
                            <Link text={"Outside Work"} path={['/aboutme', 'countries-visited']}/>
                            <hr className='w-full border-1 border-text'/>
                            <Image imageUrl={shimanamiKaido} size="small" className='rounded-xl' altText='Picture of Shimanami Kaido cycling road in Japan'/>
                        </>
                    }
                >
                    <Image imageUrl={steveHead} size="small"/>
                    <Link text={"Outside Work"} path={['/aboutme', 'countries-visited']}/>
                </BubbleCard>
                <BubbleCard
                    size="small"
                    backCard={
                        <>
                            <Link text="Education" path={['/aboutme', 'education']}/>
                            <hr className='w-full border-1 border-text'/>
                            <Image imageUrl={udemImage} size="small" className="rounded-xl" altText='Picture of University of Montreal' />
                        </>
                    }
                >
                    <Image imageUrl={book} size="small" />
                    <Link text="Education" path={['/aboutme', 'education']}/>
                </BubbleCard>
            </nav>
            <main className='mt-45 order-0 lg:mt-0 lg:order-1'>
                <BubbleCard
                    size="medium"
                >
                    <Image imageUrl={profile} altText='Picture of me' size='medium' className="size-[12rem] rounded-full -mt-45 shadow-lg"/>
                    <Text text="Noe Jager" type='header'/>
                    <Text text="Data Scientist | ML Engineer" type='subheader'/>
                    <List 
                        items={[
                            { logoType: 'github', url: 'https://github.com/elnukakujo' },
                            { logoType: 'linkedin', url: 'https://www.linkedin.com/in/noé-jager-2b4866236/' },
                            { logoType: 'email', url: 'mailto:noe.p.jager@gmail.com' }
                        ]}
                        direction='horizontal'
                    />
                </BubbleCard>
            </main>
            <nav className='flex flex-col gap-lg order-2'>
                <BubbleCard
                    size="small"
                    backCard={
                        <>
                            <Link text="Projects" path={['/projects']} />
                            <hr className='w-full border-1 border-text'/>
                            <Image size="small" imageUrl={neuralNetwork} altText="Visualization of Neural Network/Multi Layer Perceptron" className='rounded-xl'/>
                        </>
                    }
                >
                    <Image size="small" imageUrl={pickaxe} altText="Minecraft Pickaxe Icon"/>
                    <Link text="Projects" path={['/projects']} />
                </BubbleCard>
                <BubbleCard
                    size="small"
                >
                    <Image size="small" imageUrl={expBottle} altText="Minecraft Experience Bottle Icon" />
                    <Link text="Experience" path={['/aboutme', 'experience']} />
                </BubbleCard>
            </nav>
        </section>
    );
}