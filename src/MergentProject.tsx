import FloorLayout from './MergentComponents/FloorLayout.tsx';
import Hero from './MergentComponents/Hero.tsx';
import Intro from './MergentComponents/Intro.tsx';
import Location from './MergentComponents/Location.tsx';
import UnitInfo from './MergentComponents/UnitInfo.tsx';
import GeneralInfo from './MergentComponents/GeneralInfo.tsx';

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
