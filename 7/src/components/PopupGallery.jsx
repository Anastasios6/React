import React, { useContext } from "react";
import { albumsContext } from "../utils/AlbumsContext";

export const PopupGallery = () => {
  const { selectedImage, setSelectedImage, photos, setPhotos } =
    useContext(albumsContext);

  function handleDelete() {
    const updatedPhotos = photos.filter((img) => img.id !== selectedImage.id);

    setPhotos(updatedPhotos);
    setSelectedImage("");
  }
  return (
    <div id="popup">
      <button
        onClick={() => {
          setSelectedImage("");
        }}
        className="close-popup"
      >
        &times;
      </button>
      <button className="delete-popup" onClick={handleDelete}>
        <i className="fa-solid fa-trash-can"></i>
      </button>
      <div className="popup-container">
        <img src={selectedImage.download_url} alt={"image"} />
      </div>
    </div>
  );
};
