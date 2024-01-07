import React from "react";
import Tile from "../tile/Tile";

export const TileList = ({tiles, titlePropName}) => {
  return (
    <div className="tile">
      {
        tiles.map((tile, index) => {
          return (
            <Tile tile={tile} key={index} titleProName={titlePropName}/>
          );
        })
      }
    </div>
  );
};
