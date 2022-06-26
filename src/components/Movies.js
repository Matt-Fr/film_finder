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
    <section className="sectionMovies">
      {movies.map((movie) => {
        const { imdbID: id, Title: title, Year: year, Poster: poster } = movie;

        return (
          <Link to={`/movies/${id}`} key={id} className="linkMoviecard">
            <article className="movieCard">
              <img
                src={poster === "N/A" ? urlNopic : poster}
                alt={title}
                className="movieCard-img"
              />
              <div className="movieCard-info">
                <h4 className="movieCard-title">{title}</h4>
                <p className="movieCard-year">{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
