import React from "react";

export const ContactPicker = ({contacts, contact, setContact}) => {

  return (
    <div className="form-group">
      <label htmlFor="contact">Contact</label>
      <select
        className="form-control"
        id="contact"
        value={contact}
        onChange={e => setContact(e.target.value)}
      >
        <option value="0">Select Contact</option>
        {
          contacts && contacts.map(contact => {
            return (
              <option
                key={contact.name}
                value={contact.name}
              >
                {contact.name}
              </option>
            );
          })
        }
      </select>
    </div>
  );
};
