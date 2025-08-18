import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';
import Landing from './Landing.tsx';
import AstelaProject from './AstelaProject.tsx';
import MergentProject from './MergentProject.tsx';
import PEPProject from './PEPProject.tsx';
import ContactUs from './ContactUs.tsx';
import SignIn from './SignIn.tsx';
import InquireNowModal from './InquireNowModal.tsx'; // Ensure the .tsx extension is used

function App() {
  // State to manage the modal's visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Functions to open and close the modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar />
      
      {/* The InquireNowModal is rendered here. It's always in the DOM,
        but its visibility is controlled by the `isOpen` prop.
      */}
      <InquireNowModal isOpen={isModalOpen} closeModal={closeModal} />

      <Routes>
        {/* We pass the `openModal` function as a prop to the Landing component.
          The button inside the Landing component will use this function.
        */}
        <Route path="/" element={<Landing openModal={openModal} />} />
        <Route path="/astela" element={<AstelaProject openModal={openModal} />} />
        <Route path="/mergent" element={<MergentProject openModal={openModal} />} />
        <Route path="/pep" element={<PEPProject openModal={openModal} />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;