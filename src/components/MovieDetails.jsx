import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

const MovieDetails = () => {
  const params = useParams();
  //   const [movieDetail, setMovieDetail] = useState(null);
  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=8d3cdf1b&s=" + otherFilm)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero della tua saga");
        }
      })
      .then((data) => {
        console.log("data", data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className=" row d-flex flex-nowrap overflow-auto">
      {this.state.isLoading && (
        <Spinner animation="border" variant="info"></Spinner>
      )}
      {this.state.isError && (
        <Alert variant="danger">Non ci sono film da vedere</Alert>
      )}
      {arrayOfFilms.map((film) => (
        <div key={film.imdbID} className="col-6 col-md-2 mb-2 text-center px-1">
          <img src={film.Poster} alt={film.Title} style={{ width: "120px" }} />
        </div>
      ))}
    </div>
  );
};
export default MovieDetails;
