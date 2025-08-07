import FloorLayout from './AstelaComponents/FloorLayout.tsx';
import Hero from './AstelaComponents/Hero.tsx';
import Intro from './AstelaComponents/Intro.tsx';
import Location from './AstelaComponents/Location.tsx';
import UnitInfo from './AstelaComponents/UnitInfo.tsx';
import GeneralInfo from './AstelaComponents/GeneralInfo.tsx';

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
