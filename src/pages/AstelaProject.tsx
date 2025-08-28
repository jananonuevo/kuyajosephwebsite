import FloorLayout from '../components/astela/FloorLayout.tsx';
import Hero from '../components/astela/Hero.tsx';
import Intro from '../components/astela/Intro.tsx';
import Location from '../components/astela/Location.tsx';
import UnitInfo from '../components/astela/UnitInfo.tsx';
import GeneralInfo from '../components/astela/GeneralInfo.tsx';

interface AstelaProjectProps {
  openModal: () => void;
}
const AstelaProject = ({ openModal }: AstelaProjectProps) => {

  return (
    <>
    <Hero openModal={openModal}/>
    <Intro />
    <FloorLayout />
    <GeneralInfo />
    <UnitInfo />
    <Location />
    </>
  )
}

export default AstelaProject
