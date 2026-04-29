import React, { useContext } from "react";
import { albumsContext } from "../utils/AlbumsContext";
import { Popup } from "./Popup";
export const Albums = ({ listOfAlbums }) => {
  console.log("listofalbums", listOfAlbums);
  const { selectedAlbum, setSelectedAlbum } = useContext(albumsContext);
  return (
    <div>
      <h1>Albums</h1>
      {listOfAlbums.map((album) => {
        return (
          <ul key={album.id}>
            <li>
              {album.id}- {album.title}
              <button
                key={album.id}
                onClick={() => {
                  setSelectedAlbum(album);
                }}
              >
                open album
              </button>
            </li>
          </ul>
        );
      })}
      {selectedAlbum !== "" && <Popup />}
    </div>
  );
};
