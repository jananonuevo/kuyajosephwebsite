import FloorLayout from '../components/pep/FloorLayout.tsx';
import Hero from '../components/pep/Hero.tsx';
import Intro from '../components/pep/Intro.tsx';
import Location from '../components/pep/Location.tsx';
import UnitInfo from '../components/pep/UnitInfo.tsx';
import GeneralInfo from '../components/pep/GeneralInfo.tsx';

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
