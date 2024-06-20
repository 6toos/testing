import React, {useState} from "react";
import Header from "./Header"
import ContactList from "./ContactList";
// import ContactCard from "./ContactCard";
import AddContact from "./AddContact";
import './App.css';

function App(prop) {
  const [contact, setContacts] = useState([])
  const contacts = [
    {
      id: "1",
      name: "Sixtus",
      email: "chukofsi@gmail.com"
    },
    {
      id: "2",
      name: "Bartholomew",
      email: "sixtusbartholomew@yahoo.com"
    }
  ]
  return (
    <div className="ui container">
      <h1>{prop.title}</h1>
      <Header />
      <AddContact />
      <ContactList contact={contacts} />
      {/* <ContactCard/> */}
    </div>
  );
}

export default App;
