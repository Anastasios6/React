import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { Albums } from "./components/Albums";
import { Gallery } from "./components/Gallery";
import { albumsContext } from "./utils/AlbumsContext";
import axios from "axios";
import "./css/App.css";

export function App() {
  const [photos, setPhotos] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  function getGallery() {
    axios
      .get("https://picsum.photos/v2/list")
      .then((res) => setPhotos(res.data))
      .catch((err) => console.log(err.message));
  }

  const [albums, setAlbums] = useState([]);
  const [img, setImg] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState("");
  function getAlbums() {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => setAlbums(res.data))
      .catch((err) => console.log(err.message));
  }
  useEffect(() => {
    getAlbums();
    getGallery();
  }, []);

  return (
    <div>
      <h1>APP-7</h1>
      <Nav />
      <albumsContext.Provider
        value={{
          selectedAlbum,
          setSelectedAlbum,
          selectedImage,
          setSelectedImage,
          photos,
          setPhotos,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums" element={<Albums listOfAlbums={albums} />} />
          <Route path="/gallery" element={<Gallery listOfPhotos={photos} />} />
        </Routes>
      </albumsContext.Provider>
    </div>
  );
}
