interface HeaderProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ isOpen, closeModal }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <>
        {/* Modal Header with Close Button */} 
        <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-600">
          <h3 className="text-xl font-bold">
            "Error signing in. Please use the authorized account."
          </h3>
          <button
            type="button"
            onClick={closeModal}
            className="text-gray-400 transition-colors duration-200 ease-in-out rounded-lg hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        {/* END Modal Header */}
  </>    
  );
};

export default Header;