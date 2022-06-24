import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { API_ENDPOINT } from "../context";

const Movie = () => {
  const urlNopic =
    "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
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

  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;

  return (
    <section>
      <img src={poster === "N/A" ? urlNopic : poster} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
      </div>
      <Link to="/">Back to movies</Link>
    </section>
  );
};

export default Movie;
