import React from "react";
import Header from "./Header"
// import ContactList from "./ContactList";
// import ContactCard from "./ContactCard";
import AddContact from "./AddContact";
import './App.css';

function App(prop) {
  return (
    <>
      <h1>{prop.title}</h1>
      <Header />
      <AddContact />
      {/* <ContactList /> */}
      {/* <ContactCard/> */}
    </>
  );
}

export default App;
