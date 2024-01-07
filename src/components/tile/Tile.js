import React from "react";

const Tile = ({tile, index, titleProName}) => {

  return (
    <div className="tile-container" key={index}>
      
      {
        Object.keys(tile).map(propName => {
          if (propName === titleProName) {
            return <div className="tile tile-title">{tile[propName]}</div>;
          } else {
            return <div>{tile[propName]}</div>;
          }
        })
      }
    </div>
  );
};

export default Tile;
