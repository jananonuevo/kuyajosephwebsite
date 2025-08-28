import FloorLayout from '../components/mergent/FloorLayout.tsx';
import Hero from '../components/mergent/Hero.tsx';
import Intro from '../components/mergent/Intro.tsx';
import Location from '../components/mergent/Location.tsx';
import UnitInfo from '../components/mergent/UnitInfo.tsx';
import GeneralInfo from '../components/mergent/GeneralInfo.tsx';

interface MergentProjectProps {
  openModal: () => void;
}
const MergentProject = ({ openModal }: MergentProjectProps) => {

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

export default MergentProject
