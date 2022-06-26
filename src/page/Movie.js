import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { API_ENDPOINT } from "../context";
import { FaArrowLeft } from "react-icons/fa";

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

  const {
    Poster: poster,
    Title: title,
    Plot: plot,
    Year: year,
    Director: director,
  } = movie;

  return (
    <section className="sectionSinglemovie">
      <div className="container">
        <div className="container-poster">
          <img
            className="poster"
            src={poster === "N/A" ? urlNopic : poster}
            alt={title}
          />
        </div>
        <div className="container-info">
          <h2 className="container-info-title">{title}</h2>
          <h4 className="container-info-year">{year}</h4>
          <p className="container-info-director">{`Director: ${director}`}</p>
          <p className="container-info-plot">{plot}</p>
        </div>
      </div>

      <Link className="btnBack" to="/">
        <FaArrowLeft />
        <span>Back to movies</span>
      </Link>
    </section>
  );
};

export default Movie;
