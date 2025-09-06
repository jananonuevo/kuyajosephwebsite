import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebaseConfig.ts";
import { Link } from "react-router-dom";

function Inquiries() {

  const [inquiries, setInquiries] = React.useState<any[]>([]);
  
  async function getCollections() {
    const tempCollections = [];
    const collections = await getDocs(collection(firestore, "inquiries"));
    
    for (let i = 0; i < collections.docs.length; i++) {
      tempCollections.push(collections.docs[i].data());
    }
    setInquiries(tempCollections);
  }

  getCollections();

  const rows = [];
  for (let i = 0; i < inquiries.length; i++) {
    rows.push(
      <div className = "bg-amber-20 border-t-3 rounded-lg w-100 my-5 shadow-lg">
        <h1 className = "text-md font-bold mx-4 mt-5">{inquiries[i].name}</h1>
        <p className = "text-sm mx-4 mt-1">{inquiries[i].contactNo} || {inquiries[i].email}</p>
        <hr className = "mt-2"></hr>
        <p className = "text-sm text-center mx-4 my-5">{inquiries[i].inquiry}</p>
      </div>
    );
  }
  
  return (
    <>

    <div className = "border  bg-[#27374D]">
      <h1 className = "mx-30 text-2xl mt-7 mb-7 text-white font-bold">Inquiries</h1>
    </div>

    <div className = "flex justify-center align-items-center ">

      <div className="grid grid-cols-4 gap-5 mt-10">

      <div className = "bg-amber-20 border-t-3 rounded-lg w-100 my-5 shadow-lg">
        <h1 className = "text-md font-bold mx-4 mt-5">Jan Anonuevo</h1>
        <p className = "text-sm mx-4 mt-1">0969 231 7498 || jananonuevo7@gmail.com</p>
        <hr className = "mt-2"></hr>
        <p className = "text-sm text-center mx-4 my-5">Hello, I would like to inquire about your services. Please let me know how I can get in touch with you. Thank you!</p>
      </div>
      
      {rows}

      </div>
    </div>

    <div className = "mt-15">
      <Link className = "mx-30 text-xl mt-7 mb-7" to="/">&lt; Back</Link>
    </div>

    </>
  )
}

export default Inquiries
