import FloorLayout from './PEPComponents/FloorLayout.tsx';
import Hero from './PEPComponents/Hero.tsx';
import Intro from './PEPComponents/Intro.tsx';
import Location from './PEPComponents/Location.tsx';
import UnitInfo from './PEPComponents/UnitInfo.tsx';
import GeneralInfo from './PEPComponents/GeneralInfo.tsx';

interface PEPProjectProps {
  openModal: () => void;
}
const PEPProject = ({ openModal }: PEPProjectProps) => {

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

export default PEPProject
