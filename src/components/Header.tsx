import React from "react";
import { type ProfileData } from "../data";

const Header: React.FC<{ data: ProfileData }> = ({ data }) => {
  const { contact, labels } = data;

  return (
    <div className="contact-panel">
      <div className="mono-label">
        <span>// {labels.contact}</span>
        <em>DIRECT</em>
      </div>
      <div className="contact-list">
        <a href={`mailto:${contact.email}`}>
          <span>EMAIL</span>
          <span>{contact.email}</span>
        </a>
        <a href={`tel:${contact.phone}`}>
          <span>PHONE</span>
          <span>{contact.phone}</span>
        </a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer">
          <span>LINKEDIN</span>
          <span>view2future ↗</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
