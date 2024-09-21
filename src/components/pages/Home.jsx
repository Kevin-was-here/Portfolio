import HeroSection from '../sections/HeroSection'
import Portfolio from '../sections/Portfolio';
import Skills from '../sections/Skills';
import WorkExp from '../sections/WorkExp';

export default function Home() {
    return (
        <>
            <HeroSection/>
            <Skills/>
            <Portfolio/>
            <WorkExp/>
        </>
    );
}