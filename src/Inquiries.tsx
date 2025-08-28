import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./firebaseConfig.ts";

function Inquiries() {

  async function getCollections() {
    const collections = await getDocs(collection(firestore, "inquiries"));

    for (let i = 0; i < collections.docs.length; i++) {
      console.log("HIIIIII");
      console.log(collections.docs[i].data());
    }
  }
  
  return (
    <>
    fdsafd
    </>
  )
}

export default Inquiries
