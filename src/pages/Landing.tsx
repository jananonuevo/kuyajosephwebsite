import Inquire from '../components/landing/Inquire.tsx';
import Projects from '../components/landing/Projects.tsx';
import Hero from '../components/landing/Hero.tsx';
import Showroom from '../components/landing/Showroom.tsx';

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
