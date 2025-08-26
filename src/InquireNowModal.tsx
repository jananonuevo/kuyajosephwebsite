import React, { useState, type FormEvent } from "react";
import { firestore } from "./firebaseConfig";
import { addDoc, collection } from "@firebase/firestore";

interface InquireNowModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const InquireNowModal: React.FC<InquireNowModalProps> = ({ isOpen, closeModal }) => {
  // Use a single state object for all form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
  });

  // Reference to the Firestore collection
  const ref = collection(firestore, "inquiries");

  // Reusable change handler for all input fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Save the entire formData object to Firebase
      await addDoc(ref, formData);
      alert("Inquiry sent successfully!");
      closeModal(); // Close the modal on success
      
      // Reset the form state
      setFormData({ name: "", email: "", contactNo: "" });

    } catch (error) {
      console.error("Error adding document: ", error);
      alert("There was an error sending your inquiry.");
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="relative w-full max-w-md p-6 mx-auto transition-all duration-100 ease-in-out transform scale-100 bg-white rounded-lg shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-600">
          <h3 className="text-xl font-bold">
            Inquire Now!
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
        <div className="py-4">
          <form onSubmit={handleSave}>
            <div className="relative z-0 w-full mb-5 group">
              <input 
                type="text" 
                name="name" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
              />
              <label htmlFor="name" className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-autopeer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input 
                type="email" 
                name="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
              />
              <label htmlFor="email" className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-autopeer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input 
                type="text" 
                name="contactNo" 
                id="contactNo" 
                value={formData.contactNo}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
              />
              <label htmlFor="contactNo" className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-autopeer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact Number</label>
            </div>
            <center>
              <button className="cursor-pointer bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-15 border border-gray-400 rounded shadow mt-5" type="submit">
                Send
              </button>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InquireNowModal;