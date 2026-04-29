import React, { useContext } from "react";
import { albumsContext } from "../utils/AlbumsContext";
import { PopupGallery } from "./PopupGallery";

export const Gallery = ({ listOfPhotos }) => {
  console.log(listOfPhotos);

  const { selectedImage, setSelectedImage } = useContext(albumsContext);

  return (
    <div id="gallery">
      <h1>Gallery</h1>
      {listOfPhotos.map((photo) => {
        return (
          <div
            className="image-holder"
            key={photo.id}
            onClick={() => {
              setSelectedImage(photo);
            }}
          >
            <img
              src={photo.download_url}
              alt={photo.author}
              height={150}
              width={150}
            />
          </div>
        );
      })}
      {selectedImage !== "" && <PopupGallery />}
    </div>
  );
};
