import React from "react";
import { ContactCard } from "./ContactCard";

const ContactList = (props) => {
    const renderingList = props.contacts.map((contacts) => {
        return (
            <ContactCard contact={ contacts} />
        );
    })
    return <div className="ui celled list">{renderingList}</div>;
}

export default ContactList;