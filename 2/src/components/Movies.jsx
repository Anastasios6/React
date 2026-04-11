import React from "react";

export const Movies = (props) => {
  return (
    <div className="moviesContainer">
      {props.Movies.map((movie, i) => (
        <div key={i} className="movie">
          <h1>{movie.name}</h1>
          <img src={movie.imgUrl} alt="" />
          <h4>Date:{movie.date}</h4>
          <h4>Genre:{movie.genre}</h4>
          <h4>Plot:{movie.plot}</h4>
          <h4>
            Link:<a href={movie.imdbLink}>Link to movie</a>
          </h4>
        </div>
      ))}
    </div>
  );
};
