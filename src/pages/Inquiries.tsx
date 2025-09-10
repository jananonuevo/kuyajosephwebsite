import React from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { firestore } from "../firebaseConfig.ts";
import { Link } from "react-router-dom";

function Inquiries() {
  
  const [inquiries, setInquiries] = React.useState<any[]>([]);

  async function getCollections() {
    const tempCollections = [];
    const collections = await getDocs(collection(firestore, "inquiries"));
    
    for (let i = 0; i < collections.docs.length; i++) {
      tempCollections.push({
        id: collections.docs[i].id, 
        ...collections.docs[i].data(),
      });
    }
    setInquiries(tempCollections);
  }

  const deleteDocumentById = async (collectionName: any, documentId: any) => {
  try {
    const docRef = doc(firestore, collectionName, documentId);
    await deleteDoc(docRef);
    console.log("Document with ID:", documentId, "deleted successfully!");
  } catch (error) {
    console.error("Error removing document: ", error);
  }
};

  getCollections();

  const rows = [];
  for (let i = 0; i < inquiries.length; i++) {
    rows.push(
      <div className = "bg-amber-20 border-t-3 rounded-lg lg:w-9/10 my-5 shadow-lg">
        <div className="grid grid-cols-2">
          <h1 className = "text-md font-bold mx-4 mt-5">{inquiries[i].name}</h1>
          <h1 className = "cursor-pointer text-sm mx-4 mt-5 font-bold text-right text-red-400" onClick={() => deleteDocumentById("inquiries", inquiries[i].id)}>X</h1>
        </div>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 mt-10">
      
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
