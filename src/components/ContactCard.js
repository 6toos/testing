import React from "react";
import pics from "../images/6-CRAFT2.jpg"

export function ContactCard(props) {
  const { id, name, email } = props.contact;
  return (
      <div className="item">
          <img className="ui avatar image" src={pics} alt="pics"/>
      <div className="content">
        <div className="header">{name}</div>
        <div>{id}</div>
        <div>{email}</div>
      </div>
      <i className="trash alternate outline icon"></i>
    </div>
  );
}
