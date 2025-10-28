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
        <section className="mx-auto lg:my-[3rem] flex flex-col lg:flex-row gap-lg items-center justify-center">
            <nav className='flex flex-col gap-lg order-1 lg:order-0'>
                <BubbleCard
                    size="fit"
                    backCard={
                        <>
                            <Link text={{text:"Outside Work", type:"subheader", className:"text-nowrap!"}} path='/aboutme' id='countries-visited' className='w-full'/>
                            <hr className='w-full border-1 border-text'/>
                            <Image url={shimanamiKaido} size="medium" className='rounded-xl' altText='Picture of Shimanami Kaido cycling road in Japan'/>
                        </>
                    }
                    className='!w-50'
                >
                    <Image url={steveHead} size="small"/>
                    <Link text={{text:"Outside Work", type:"subheader", className:"text-nowrap!"}} path='/aboutme' id='countries-visited'/>
                </BubbleCard>
                <BubbleCard
                    size="fit"
                    backCard={
                        <>
                            <Link text={{text:"Education", type:"subheader", className:"text-nowrap!"}} path='/aboutme' id='education' className='w-full'/>
                            <hr className='w-full border-1 border-text'/>
                            <Image url={udemImage} size="medium" className="rounded-xl" altText='Picture of University of Montreal' />
                        </>
                    }
                    className='!w-50'
                >
                    <Image url={book} size="small" />
                    <Link text={{text:"Education", type:"subheader", className:"text-nowrap!"}} path='/aboutme' id='education'/>
                </BubbleCard>
            </nav>
            <main className='mt-45 order-0 lg:mt-0 lg:order-1'>
                <BubbleCard
                    size="large"
                >
                    <Image url={profile} altText='Picture of me' size='medium' className="rounded-full -mt-45 shadow-lg"/>
                    <Text text="Noe Jager" type='header'/>
                    <Text text="Data Scientist | ML Engineer" type='subheader'/>
                    <List 
                        items={[
                            { type: "externalLink", logoType: 'github', url: 'https://github.com/elnukakujo' },
                            { type: "externalLink", logoType: 'linkedin', url: 'https://www.linkedin.com/in/noé-jager-2b4866236/' },
                            { type: "externalLink", logoType: 'email', url: 'mailto:noe.p.jager@gmail.com' }
                        ]}
                        direction='horizontal'
                    />
                </BubbleCard>
            </main>
            <nav className='flex flex-col gap-lg order-2'>
                <BubbleCard
                    size="fit"
                    backCard={
                        <>
                            <Link text={{text:"Projects", type:"subheader", className:"text-nowrap!"}} path='/projects' className='w-full'/>
                            <hr className='w-full border-1 border-text'/>
                            <Image size="medium" url={neuralNetwork} altText="Visualization of Neural Network/Multi Layer Perceptron" className='rounded-xl'/>
                        </>
                    }
                    className='!w-50'
                >
                    <Image size="small" url={pickaxe} altText="Minecraft Pickaxe Icon"/>
                    <Link text={{text:"Projects", type:"subheader", className:"text-nowrap!"}} path='/projects' />
                </BubbleCard>
                <BubbleCard
                    size="fit"
                    className='!w-50'
                >
                    <Image size="small" url={expBottle} altText="Minecraft Experience Bottle Icon" />
                    <Link text={{text:"Experience", type:"subheader"}} path='/aboutme' id='experience' />
                </BubbleCard>
            </nav>
        </section>
    );
}