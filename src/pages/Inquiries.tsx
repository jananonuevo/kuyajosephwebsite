import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebaseConfig.ts";

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
      <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {inquiries[i].name}
        </th>
        <td className="px-6 py-4">
          {inquiries[i].contactNo}
        </td>
        <td className="px-6 py-4">
          {inquiries[i].email}
        </td>
        <td className="px-6 py-4">
          {inquiries[i].inquiry}
        </td>
      </tr>
    );
  }
  
  return (
    <>
      <div className="mt-10 mx-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Contact No.
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Inquiry
                </th>
            </tr>
          </thead>
          <tbody>
            {rows} 
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Inquiries
