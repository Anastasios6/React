import React, { useContext } from "react";
import { albumsContext } from "../utils/AlbumsContext";

export const Popup = () => {
  const { selectedAlbum, setSelectedAlbum } = useContext(albumsContext);
  return (
    <div id="popup">
      <button
        onClick={() => {
          setSelectedAlbum("");
        }}
        className="close-popup"
      >
        &times;
      </button>

      <div className="popup-container">
        <h1>ID:{selectedAlbum.id}</h1>
        <span>Title:{selectedAlbum.title}</span>
      </div>
    </div>
  );
};
