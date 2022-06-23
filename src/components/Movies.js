import React from "react";
import { useGlobalContext } from "../context";

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section>
      {movies.map((movie) => {
        const { Title, Year, Poster } = movie;
        return (
          <article className="artMovie">
            <h4>{Title}</h4>
            <img src={Poster} alt="" />
            <span>{Year}</span>
          </article>
        );
      })}
    </section>
  );
};

export default Movies;
