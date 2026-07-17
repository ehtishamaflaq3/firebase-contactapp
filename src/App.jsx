import React, { useEffect, useState } from "react";
import { db } from "./config/firebase";
import { getDocs, collection } from "firebase/firestore";
import Navbar from "./components/Navbar";
import Contactcard from "./components/Contactcard";
import Inputmodal from "./components/Inputmodal";
import AddandUpdateContacts from "./components/AddandUpdateContacts";
const App = () => {
  // ----------------states
  const [contacts, setContacts] = useState([]);
  const [isOpen, setisopen] = useState(false);
  const [editing, setediting] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  // ----------------functions
  const handleEdit = (contact) => {
    setSelectedContact(contact);
    setediting(true);
    openmodal();
  };
  // input handling functions
  const openmodal = () => {
    setisopen(true);
  };
  const closemodal = () => {
    setisopen(false);
    setediting(false);
    setSelectedContact(null);
  };
  // ---------------- ADD CONTACT
  const addContact = () => {
    setediting(false);
    setSelectedContact(null);
    openmodal();
  };
  // ---------------- EDIT CONTACT
  const editContact = (contact) => {
    setediting(true);
    setSelectedContact(contact);
    openmodal();
  };
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase()),
  );
  // ---------------fetching functions
  const getContacts = async () => {
    try {
      setLoading(true);
      const snapshot = await getDocs(collection(db, "contacts"));
      const contactsList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setContacts(contactsList);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <div className="bg-gray-700 ml-56 h-193 w-115 ">
      {/* navbar */}
      <div>
        <Navbar
          openmodal={addContact}
          closemodal={closemodal}
          search={search}
          setSearch={setSearch}
        />
      </div>
      {/* content display */}
      <div className="h-143 border-gray-500">
        {loading ? (
          <div className="flex justify-center items-center h-60">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <Contactcard
              key={contact.id}
              contact={contact}
              editContact={editContact}
              getContacts={getContacts}
              openmodal={openmodal}
              editing={editing}
              closemodal={closemodal}
              handleEdit={handleEdit}
            />
          ))
        ) : (
          <div className="flex justify-center items-center h-40">
            <h1 className="text-white text-3xl font-bold">No Contact Found</h1>
          </div>
        )}
      </div>
      {/* input modal */}
      <div>
        <Inputmodal closemodal={closemodal} isopen={isOpen}>
          <AddandUpdateContacts
            editing={editing}
            contact={selectedContact}
            closemodal={closemodal}
            getContacts={getContacts}
          />{" "}
        </Inputmodal>
      </div>
    </div>
  );
};
export default App;
