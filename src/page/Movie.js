import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_ENDPOINT } from "../context";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const fetchmovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (data.Response === "false") {
      setError({ show: true, msg: data.Error });
      setLoading(false);
    } else {
      setMovie(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchmovie(`${API_ENDPOINT}&i=${id}`);
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error.show) {
    return (
      <div>
        <h1>{error.msg}</h1>
        <link to="/">Back to movies</link>
      </div>
    );
  }

  return <div>Movie</div>;
};

export default Movie;
