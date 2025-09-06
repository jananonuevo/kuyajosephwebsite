import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Landing from './pages/Landing.tsx';
import AstelaProject from './pages/AstelaProject.tsx';
import MergentProject from './pages/MergentProject.tsx';
import PEPProject from './pages/PEPProject.tsx';
import ContactUs from './pages/ContactUs.tsx';
import Inquiries from './pages/Inquiries.tsx';
import InquireNowModal from './components/modals/InquireNow.tsx'; 
import MessageModal from './components/modals/Message.tsx'; 
import LogoutModal from './components/modals/LogoutMsg.tsx'; 
import { useEffect, useState } from 'react';

function App() {

//state variables to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const openMessageModal = () => setIsMessageModalOpen(true);
  const closeMessageModal = () => setIsMessageModalOpen(false);

  const [isLogoutMsgModalOpen, setisLogoutMsgModalOpen] = useState(false);
  const openLogoutMessageModal = () => setisLogoutMsgModalOpen(true);
  const closeLogoutMessageModal = () => setisLogoutMsgModalOpen(false);
//---------------------------------------------------


// Check local storage for user data on component mount  
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
        console.log(user, "im logged in!");
      } catch (e) {
        console.log("nope, no one's logged in!");
        console.error("Failed to parse stored user data:", e);
        localStorage.removeItem('user');
      }
    }
  }, []); 
//---------------------------------------------------

// exclude navbar and footer to certain pages
const location = useLocation();
const excludedPaths = ['/inquiries'];


  return (
    <>
      {!excludedPaths.includes(location.pathname) &&<NavBar openModal={openMessageModal} openLogoutModal={openLogoutMessageModal}/>}
        <InquireNowModal isOpen={isModalOpen} closeModal={closeModal} />
        <MessageModal isOpen={isMessageModalOpen} closeModal={closeMessageModal} />
        <LogoutModal isOpen={isLogoutMsgModalOpen} closeModal={closeLogoutMessageModal} />
        
        <Routes>
          <Route path="/" element={<Landing openModal={openModal} />} />
          <Route path="/astela" element={<AstelaProject openModal={openModal} />} />
          <Route path="/mergent" element={<MergentProject openModal={openModal} />} />
          <Route path="/pep" element={<PEPProject openModal={openModal} />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/inquiries" element={<Inquiries />} />
        </Routes>
        
      {!excludedPaths.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;