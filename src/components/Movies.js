import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section>
      {movies.map((movie) => {
        const { imdbID: id, Title: title, Year: year, Poster: poster } = movie;

        return (
          <Link to={`/movies/${id}`} key={id}>
            movie
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
