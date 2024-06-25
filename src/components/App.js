import React, { useEffect, useState } from "react";
import ContactList from "./ContactList";
import Header from "./Header";
// import ContactCard from "./ContactCard";
import AddContact from "./AddContact";
import "./App.css";

function App(prop) {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    //updating the state...
    setContacts([...contacts, contact]);
  };
  
  useEffect(() => {
    const retrieveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContact) {
      setContacts(retrieveContact);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Sixtus",
  //     email: "chukofsi@gmail.com"
  //   },
  //   {
  //     id: "2",
  //     name: "Bartholomew",
  //     email: "sixtusbartholomew@yahoo.com"
  //   }
  // ]
  return (
    <div className="ui container">
      <h1>{prop.title}</h1>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
      {/* <ContactCard/> */}
    </div>
  );
}

export default App;
