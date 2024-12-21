// import React, { useState, useEffect } from "react";
// import { v4 as uuid } from "uuid";
// import "./App.css";
// import Header from "./Header";
// import AddContact from "./AddContact";
// import ContactList from "./ContactList";

// function App() {
//   const LOCAL_STORAGE_KEY = "contacts";
//   const [contacts, setContacts] = useState(
//     JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
//   );

//   const addContactHandler = (contact) => {
//     console.log(contact);
//     setContacts([...contacts, { id: uuid(), ...contact }]);
//   };

//   const removeContactHandler = (id) => {
//     const newContactList = contacts.filter((contact) => {
//       return contact.id !== id;
//     });

//     setContacts(newContactList);
//   };

//   // useEffect(() => {
//   //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//   //   if (retriveContacts) setContacts(retriveContacts);
//   // }, []);

//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
//   }, [contacts]);

//   return (
//     <div className="ui container">
//       <Header />
//       <AddContact addContactHandler={addContactHandler} />
//       <ContactList contacts={contacts} getContactId={removeContactHandler} />
//     </div>
//   );
// }

// export default App;




import React, { useState, useEffect } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import axios from "axios";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const [contacts, setContacts] = useState([]);

  // Fetch Contacts
  const fetchContacts = async () => {
    const response = await axios.get("http://localhost:5000/api/contacts");
    setContacts(response.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Add Contact
  const addContactHandler = async (contact) => {
    const response = await axios.post(
      "http://localhost:5000/contacts",
      contact
    );
    setContacts([...contacts, response.data]);
  };

  // Delete Contact
  const removeContactHandler = async (id) => {
    await axios.delete(`http://localhost:5000/contacts/${id}`);
    fetchContacts();
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      } min-h-screen`}
    >
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div className="max-w-4xl mx-auto p-4">
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler} />
      </div>
    </div>
  );
}

export default App;
