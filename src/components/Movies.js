import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();
  const urlNopic =
    "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section>
      {movies.map((movie) => {
        const { imdbID: id, Title: title, Year: year, Poster: poster } = movie;

        return (
          <Link to={`/movies/${id}`} key={id}>
            <article>
              <img src={poster === "N/A" ? urlNopic : poster} alt={title} />
              <h4>{title}</h4>
              <p>{year}</p>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
