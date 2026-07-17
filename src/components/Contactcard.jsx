import React from "react";
import { db } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { IoIosContact } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Contactcard = ({ contact, editContact, getContacts }) => {
  const deletecontact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      alert(`${contact.name} is deleted successfully`);
      // Refresh contacts
      getContacts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div key={contact.id}>
      {/* contact viewer */}
      <div className="bg-amber-300 h-20 w-105 ml-4 mt-4 rounded-2xl flex items-center">
        {/* left icon */}
        <div className="h-18 w-20">
          <IoIosContact className="size-20 text-gray-400" />
        </div>
        {/* contact details */}
        <div className="pl-2 h-18 w-58">
          <h1 className="text-3xl">{contact.name}</h1>
          <p className="text-xl">{contact.email}</p>
        </div>
        {/* right icons */}
        <div className="flex items-center justify-center w-27 gap-5 h-18">
          <MdEdit
            onClick={() => editContact(contact)}
            className="text-green-400 size-15 cursor-pointer"
          />
          <MdDelete
            onClick={() => deletecontact(contact.id)}
            className="size-15 cursor-pointer text-red-500"
          />
        </div>
      </div>
    </div>
  );
};
export default Contactcard;
