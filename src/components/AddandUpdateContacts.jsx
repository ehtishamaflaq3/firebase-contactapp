import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";

const AddandUpdateContacts = ({
  editing,
  contact,
  closemodal,
  getContacts,
}) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  // Edit mode mein inputs fill karo
  useEffect(() => {
    if (editing && contact) {
      setname(contact.name);
      setemail(contact.email);
    } else {
      setname("");
      setemail("");
    }
  }, [editing, contact]);
  // ---------------- ADD ----------------
  const savedata = async () => {
    if (!name || !email) {
      alert("Please fill all fields");
      return;
    }
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
      });
      alert(`${name} added successfully`);
      setname("");
      setemail("");
      closemodal();
      getContacts();
    } catch (error) {
      console.log(error);
    }
  };
  // ---------------- UPDATE ----------------
  const updatedata = async () => {
    if (!name || !email) {
      alert("Please fill all fields");
      return;
    }
    try {
      await updateDoc(doc(db, "contacts", contact.id), {
        name,
        email,
      });
      alert(`${name} updated successfully`);

      closemodal();
      getContacts();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-65">
      <div className="flex items-center justify-between flex-col h-50">
        <label className="pl-3 h-10 font-bold text-2xl" htmlFor="name">
          Name
        </label>

        <input
          type="text"
          placeholder="Enter name"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          className="pl-3 text-2xl font-bold border-2 rounded-2xl w-92 h-15"
        />
        <label className="pl-3 h-10 font-bold text-2xl" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          className="pl-3 border-2 w-92 rounded-2xl text-2xl font-bold h-15"
        />
      </div>
      <div className="flex items-center justify-center h-15">
        <button
          className="bg-black text-white h-13 w-30 rounded-2xl cursor-pointer active:bg-green-400 active:text-black"
          onClick={editing ? updatedata : savedata}
        >
          {editing ? "Update Me" : "Save Me"}
        </button>
      </div>
    </div>
  );
};
export default AddandUpdateContacts;
