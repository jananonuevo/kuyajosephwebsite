import React, { useState, type FormEvent } from "react";
import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../../../firebaseConfig";

interface ContentProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Content: React.FC<ContentProps> = ({ isOpen, closeModal }) => {
  if (!isOpen) {
    return null;
  }


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    inquiry: ""
  });

  const ref = collection(firestore, "inquiries");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // send data to firebase database collection "inquiries"
  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(ref, formData);
      alert("Inquiry sent successfully!");
      closeModal(); 
      setFormData({ name: "", email: "", contactNo: "", inquiry: "" });

    } catch (error) {
      console.error("Error adding document: ", error);
      alert("There was an error sending your inquiry.");
    }
  };
  
  return (
    <>
        {/* Modal Content */}
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
            <div className="relative z-0 w-full mb-5 group">
              <input 
                type="text" 
                name="inquiry" 
                id="inquiry" 
                value={formData.inquiry}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
              />
              <label htmlFor="email" className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-autopeer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Inquiry</label>
            </div>
            <center>
              <button className="cursor-pointer bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-15 border border-gray-400 rounded shadow mt-5" type="submit">
                Send
              </button>
            </center>
          </form>
        </div>
        {/* END Modal Content */}
        </>
  );
  
};

export default Content;