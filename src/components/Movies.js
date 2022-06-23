import React from "react";
import { useGlobalContext } from "../context";

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();
  console.log(movies);
  return <div>Movies</div>;
};

export default Movies;
