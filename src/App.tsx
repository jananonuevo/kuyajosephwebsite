import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';
import Landing from './Landing.tsx';
import AstelaProject from './AstelaProject.tsx';
import MergentProject from './MergentProject.tsx';
import PEPProject from './PEPProject.tsx';
import ContactUs from './ContactUs.tsx';
import Inquiries from './Inquiries.tsx';
import InquireNowModal from './InquireNowModal.tsx'; 
import React, { useEffect, useState } from 'react';


function App() {
  // State to manage the modal's visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Functions to open and close the modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const location = useLocation();
  const hideLayout = location.pathname === "/signin";

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user data exists in localStorage
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      try {
        // Restore the user state from localStorage
        setUser(JSON.parse(storedUser));
        console.log("im logged in!");
      } catch (e) {
        console.log("nope, no one's logged in!");
        console.error("Failed to parse stored user data:", e);
        // Clear corrupted data
        localStorage.removeItem('user');
      }
    }
  }, []); // The empty array ensures this runs only once
  return (
    <>

      {!hideLayout && <Navbar />}
      
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
        <Route path="/inquiries" element={<Inquiries />} />
      </Routes>
      
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;