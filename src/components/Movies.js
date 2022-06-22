import React from "react";
import { useGlobalContext } from "../context";

const Movies = () => {
  const data = useGlobalContext();
  console.log(data);
  return <div>Movies</div>;
};

export default Movies;
