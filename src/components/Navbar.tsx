import { useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
//import { useGoogleLogin } from '@react-oauth/google';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebaseConfig';

interface NavBarProps {
  openModal: () => void;
  openLogoutModal: () => void;
}

const NavBar = ({ openModal, openLogoutModal }: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShown, setShowBoolean] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [user, setUser] = useState(null);
  
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsProjectsDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsProjectsDropdownOpen(false);
    }, 200);
  };

  useEffect(() => { //check if user is logged in (find another way to verify log in session as this method is not secure)
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
          console.log(user, "im logged in!");
          setShowBoolean(true);
        } catch (e) {
          console.log("nope, no one's logged in!");
          console.error("Failed to parse stored user data:", e);
          localStorage.removeItem('user');
        }
      }
    }, []);

const validEmail = "jananonuevo7@gmail.com"; 
const login =()=>{
  signInWithPopup(auth,provider).then((data)=>{
    if (data.user.email === validEmail) {
      localStorage.setItem('user', data.user.email);
      setShowBoolean(true);
      console.log("login success?");
    } else {
      openModal();
      console.log("not allowed");
    }
  })
};

/*const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
    console.log('Login Success!: ', tokenResponse);
    
    const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
    });
    const userData = await userInfoResponse.json();

    if (userData.email !== validEmail) {
      openModal(); 
      return;
    } else {
      localStorage.setItem('user', JSON.stringify(userData));
      setShowBoolean(true);
    }
  },
  onError: (error) => console.log('Login Failed:', error)
});*/

  const logout = () => {
    setShowBoolean(false);
    localStorage.removeItem('user'); 
    openLogoutModal();
    console.log('User logged out');
  };

  return (
    <header className="w-full text-sm bg-[#27374D]">
      <nav className="max-w-[85rem] w-full mx-auto sm:flex sm:items-center sm:justify-between py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a className="font-semibold text-xl sm:text-lg text-white focus:outline-none focus:opacity-80 py-2" href="#" aria-label="Brand">
            <img src="/alveologo.png" alt="Company Logo" className="h-5" />
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 text-white bg-gray-800 rounded-md hover:text-gray-400 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          id="mobile-menu"
          className={`${
            isOpen ? 'block' : 'hidden'
          } sm:block sm:flex sm:flex-row sm:items-center sm:justify-end sm:gap-5 absolute sm:static bg-[#27374D] w-full left-0 z-20 transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col gap-5 p-4 sm:flex-row sm:p-0">
            <Link className="font-medium text-white hover:text-gray-400 focus:outline-none focus:text-gray-400" to="/">
              Home
            </Link>
            
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="w-full text-left font-medium text-white hover:text-gray-400 focus:outline-none focus:text-gray-400 sm:w-auto"
                onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
              >
                Projects
                <svg className="h-4 w-4 inline-block ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div
                className={`${isProjectsDropdownOpen ? 'block' : 'hidden'} sm:absolute sm:mt-2 sm:w-48 sm:bg-white sm:rounded-md sm:shadow-lg sm:z-10`}
              >
                <div className="py-1 flex flex-col sm:block">
                  <Link
                    to="./astela"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-100 sm:text-base sm:text-gray-700 sm:hover:bg-gray-100"
                    onClick={() => setIsProjectsDropdownOpen(false)}
                  >
                    Astela
                  </Link>
                  <Link
                    to="./mergent"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-100 sm:text-base sm:text-gray-700 sm:hover:bg-gray-100"
                    onClick={() => setIsProjectsDropdownOpen(false)}
                  >
                    Mergent
                  </Link>
                </div>
              </div>
            </div>

            <Link className="font-medium text-white hover:text-gray-400 focus:outline-none focus:text-gray-400" to="/contactus">
              Contact Us
            </Link>
            
              {isShown ? (
              <> 
                <a className="font-medium text-white hover:text-gray-400 focus:outline-none focus:text-gray-400 cursor-pointer" onClick={() => logout()}> 
                  Logout 
                </a>
                <Link to="/inquiries" className="font-medium text-white hover:text-gray-400 focus:outline-none focus:text-gray-400">
                  Inquiries
                </Link>
              </>
              ) : ( 
                <a className="font-medium text-white hover:text-gray-400 focus:outline-none focus:text-gray-400 cursor-pointer" onClick={() => login()}> 
                  Sign-In 
                </a>
              )}
              
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

