import { Component } from "react";
import { Spinner } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

class Content extends Component {
  state = {
    arrayOfFilms: [],
    isLoading: true,
    isError: false,
  };

  componentDidMount() {
    const { otherFilm } = this.props;
    this.fetchFilms(otherFilm);
  }

  fetchFilms = (otherFilm) => {
    fetch("http://www.omdbapi.com/?apikey=8d3cdf1b&s=" + otherFilm)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero della tua saga");
        }
      })
      .then((data) => {
        this.setState({
          arrayOfFilms: data.Search,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          isLoading: false,
          isError: true,
        });
      });
  };
  render() {
    const { arrayOfFilms } = this.state;

    return (
      <div className=" row d-flex flex-nowrap overflow-auto">
        {this.state.isLoading && (
          <Spinner animation="border" variant="info"></Spinner>
        )}
        {this.state.isError && (
          <Alert variant="danger">Non ci sono film da vedere</Alert>
        )}
        {arrayOfFilms.map((film) => (
          <div
            key={film.imdbID}
            className="col-6 col-md-2 mb-2 text-center px-1"
          >
            <img
              src={film.Poster}
              alt={film.Title}
              style={{ width: "120px" }}
            />
          </div>
        ))}
      </div>
    );
  }
}
export default Content;
