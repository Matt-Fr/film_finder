import React from "react";
import Movies from "../components/Movies";
import SearchForm from "../components/SearchForm";

import Movie from "./Movie";

const Home = () => {
  return (
    <main>
      <SearchForm></SearchForm>
      <Movies></Movies>
    </main>
  );
};

export default Home;
