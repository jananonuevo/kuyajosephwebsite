import Inquire from './LandingComponents/Inquire.tsx';
import Projects from './LandingComponents/Projects.tsx';
import Hero from './LandingComponents/Hero.tsx';
import Showroom from './LandingComponents/Showroom.tsx';

interface LandingProps {
  openModal: () => void;
}
const Landing = ({ openModal }: LandingProps) => {

  return (
    <>
    <Hero openModal={openModal}/>
    <Projects />
    <Inquire />
    <Showroom />
    </>
  )
}

export default Landing
