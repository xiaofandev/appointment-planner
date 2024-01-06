import React from "react";

const Tile = ({contact, index}) => {
  return (
    <div className="tile-container">
      <div className="tile tile-title">{contact.name}</div>
      <div>{contact.phoneNumber}</div>
      <div>{contact.email}</div>
    </div>
  );
};

export default Tile;
